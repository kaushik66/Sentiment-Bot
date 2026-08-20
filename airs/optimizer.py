import os
import sys
import numpy as np
import pandas as pd
import sqlite3
import logging
from dotenv import load_dotenv
from sklearn.covariance import LedoitWolf
import cvxpy as cp

# Section 1 — Path Setup
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from utils.database import get_connection, get_db_path
from airs.regime import get_current_regime
from airs.constraints import build_hard_constraints, validate_weights, build_soft_factor_bounds

load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s'
)
logger = logging.getLogger(__name__)

# Section 2 — Module-level constants
TARGET_VOL = 0.12 # Target annualised volatility
LAMBDA2_BASE = 0.005 # Base turnover/slippage cost penalty
LAMBDA3_BASE = 1.0   # Base signal uncertainty penalty
MAX_POSITION = 0.10  # 10% ceiling per ticker
MAX_SECTOR = 0.25    # 25% ceiling per GICS sector
MAX_TURNOVER = 0.20  # 20% max change vs previous weights
MIN_HISTORY_DAYS = 120 # Drop tickers with insufficient history

def build_returns_matrix(tickers):
    # Section 3 — build_returns_matrix()
    db_path = get_db_path()
    conn = sqlite3.connect(db_path)
    
    try:
        # Fetch long-term price history for covariance estimation
        query = f"SELECT date, ticker, adjClose FROM prices WHERE ticker IN ({','.join(['?' for _ in tickers])})"
        prices_df = pd.read_sql_query(query, conn, params=tickers)
        
        if prices_df.empty:
            return pd.DataFrame()
        
        # Pivot: Rows=Date, Cols=Ticker
        pivot_df = prices_df.pivot(index='date', columns='ticker', values='adjClose').sort_index()
        
        # 1. Filter by minimum history
        ticker_counts = pivot_df.notnull().sum()
        valid_tickers = ticker_counts[ticker_counts >= MIN_HISTORY_DAYS].index.tolist()
        pivot_df = pivot_df[valid_tickers]
        
        # 2. Sequential fill for minor data gaps
        pivot_df = pivot_df.ffill().bfill()
        
        # 3. Compute daily returns
        returns_df = pivot_df.pct_change().dropna(how='all')
        
        # 4. Final row cleaning (remove entries with too many NaNs if any survived)
        # Drop rows where more than 20% of tickers are NaN
        returns_df = returns_df.dropna(thresh=int(len(returns_df.columns) * 0.8))
        
        logger.info(f"Built returns matrix: {returns_df.shape[1]} tickers across {returns_df.shape[0]} days.")
        return returns_df
        
    finally:
        conn.close()

def build_covariance_matrix(returns_df, regime):
    # Section 4 — build_covariance_matrix()
    if returns_df.empty:
        return None, []
    
    # Base LW shrinkage covariance
    lw = LedoitWolf(assume_centered=False)
    lw.fit(returns_df.values)
    
    # Annualise: Daily Cov * 252
    Sigma_base = lw.covariance_ * 252
    tickers = returns_df.columns.tolist()
    
    # Stress Overlay based on VIX
    vix = regime.get('vix', 20)
    final_Sigma = Sigma_base
    
    if vix > 30:
        logger.info(f"VIX ({vix}) > 30. Applying Downside Stress Overlay.")
        # Compute worst 20% of return days (systemic stress)
        # We index rows where the minimum return across the portfolio is below the 20th percentile
        min_returns = returns_df.min(axis=1)
        stress_threshold = min_returns.quantile(0.20)
        stress_days = returns_df[min_returns <= stress_threshold]
        
        if len(stress_days) > 5:
            lw_stress = LedoitWolf(assume_centered=False)
            lw_stress.fit(stress_days.values)
            Sigma_stress = lw_stress.covariance_ * 252
            
            # Blend: linearly transition from base to stress between VIX 30 and 100
            delta = min(1.0, (vix - 30) / 70)
            final_Sigma = (1 - delta) * Sigma_base + delta * Sigma_stress
            logger.info(f"Applied Stress Overlay with delta={delta:.2f}")
    
    logger.info(f"LW Shrinkage Intensity: {lw.shrinkage_:.4f}")
    return final_Sigma, tickers

def build_lambda_values(regime, vix=None, target_vol=TARGET_VOL, user_constraints=None):
    # Section 5 — build_lambda_values()
    vix = vix or regime.get('vix', 20)
    
    # lambda1 (Risk Aversion): Anchored to TARGET_VOL, scaled by regime
    l1_scalar = regime.get('lambda1_scalar', 1.0)
    lambda1 = (1 / (2 * (target_vol ** 2))) * l1_scalar
    
    # lambda2 (Turnover cost): Increase in high volatility
    lambda2 = LAMBDA2_BASE
    if vix > 30:
        lambda2 *= 1.5
        
    if user_constraints:
        eff_limits = user_constraints.get_effective_limits()
        lambda2 *= eff_limits.get("turnover_penalty_multiplier", 1.0)
        
    # lambda3 (Signal uncertainty): Increase in high volatility
    lambda3 = LAMBDA3_BASE
    if vix > 30:
        lambda3 *= 2.0
        
    lambdas = {'lambda1': lambda1, 'lambda2': lambda2, 'lambda3': lambda3}
    logger.info(f"Lambdas: l1={lambda1:.2f}, l2={lambda2:.4f}, l3={lambda3:.2f}")
    return lambdas

def run_optimization(mu_vec, Sigma, lambdas, tickers, sector_map, w_prev=None, tbill_idx=None, tbill_cap=0.0, factor_betas=None, max_turnover=MAX_TURNOVER, forced_sell_indices=None, max_position=MAX_POSITION, user_constraints=None):
    # Section 6 — run_optimization()
    N = len(tickers)
    
    # Initialise weights for turnover constraint
    if w_prev is None:
        w_prev = np.ones(N) / N
        
    # Variables
    w = cp.Variable(N)
    
    # 1. Omega Diagonal: Signal uncertainty penalty
    # Proxy: uncertainty is 30% of the absolute signal magnitude
    omega_diag = np.abs(mu_vec) * 0.3
    
    # 2. Slippage Term (Linear)
    slippage = cp.sum(cp.abs(w - w_prev) * 0.002)
    
    # 3. Utility Function
    # Maximize: mu @ w - l1 * risk - l2 * turnover - l3 * uncertainty - l4 * factor_penalty
    soft_penalty = build_soft_factor_bounds(w, factor_betas)
    
    utility = (mu_vec @ w 
               - lambdas['lambda1'] * cp.quad_form(w, Sigma)
               - lambdas['lambda2'] * slippage
               - lambdas['lambda3'] * cp.sum(cp.multiply(omega_diag, cp.square(w)))
               - soft_penalty)
    
    # 4. Constraints
    constraints = build_hard_constraints(
        w=w, 
        w_prev=w_prev, 
        tickers=tickers, 
        sector_map=sector_map, 
        tbill_idx=tbill_idx, 
        tbill_cap=tbill_cap,
        max_position=max_position,
        max_sector=MAX_SECTOR,
        max_turnover=max_turnover,
        forced_sell_indices=forced_sell_indices,
        user_constraints=user_constraints
    )
            
    # Solve
    prob = cp.Problem(cp.Maximize(utility), constraints)
    try:
        prob.solve(solver=cp.CLARABEL, verbose=False)
    except Exception as e:
        logger.error(f"Solver failed: {e}")
        return None
        
    if prob.status not in ["optimal", "optimal_inaccurate"]:
        logger.error(f"Optimization failed with status: {prob.status}")
        return None
    
    if prob.status == "optimal_inaccurate":
        logger.warning("Solver reached optimal_inaccurate output.")
        
    # Extract & Clean
    w_star = w.value
    validate_weights(w_star, tickers)
    w_star[w_star < 0.0075] = 0.0 # Strict 0.75% minimum weight constraint
    w_star = w_star / np.sum(w_star) # Re-normalise
    
    return w_star

run_optimizer = run_optimization

def build_portfolio(current_weights_dict=None, budget=None, portfolio_value=0.0, max_turnover=None, strategy=None, user_constraints=None):
    # Section 7 — build_portfolio()
    # Local import to avoid circular dependency
    from airs.alpha import run_alpha_engine
    
    engine_res = run_alpha_engine(strategy=strategy, user_constraints=user_constraints)
    regime = engine_res.get('regime')
    if not regime:
        from airs.regime import get_current_regime
        regime = get_current_regime(user_constraints)
        
    sieve_warnings = engine_res.get('sieve_warnings', [])
    alpha_df = engine_res['alpha_df']
    
    if alpha_df.empty:
        logger.error("Alpha engine returned empty dataframe. Sieve likely blocked all tickers.")
        return None
        
    # Step 1: Filter tickers by history
    tickers_candidate = alpha_df['ticker'].tolist()
    
    # Ensure all currently held tickers are in the candidate list so we can sell them if needed
    if current_weights_dict:
        for t in current_weights_dict.keys():
            if t not in tickers_candidate:
                tickers_candidate.append(t)
                
    returns_df = build_returns_matrix(tickers_candidate)
    
    if returns_df.empty or len(returns_df.columns) < 5:
        logger.error(f"Insufficient history for portfolio construction. (Ticks: {len(returns_df.columns)})")
        return None
        
    # Step 2: Build Risk Model
    Sigma, final_tickers = build_covariance_matrix(returns_df, regime)
    
    # Step 3: Align Signals & Metadata
    alpha_df.set_index('ticker', inplace=True)
    aligned_alpha = alpha_df.reindex(final_tickers).fillna(0.0)
    mu_vec = aligned_alpha['mu'].values
    sector_map = aligned_alpha['sector'].to_dict()
    
    # Identify tickers that were forced back in (they should be hard-constrained to 0)
    # If they are not in the original alpha_df index, they were filtered out.
    forced_sell_indices = [i for i, t in enumerate(final_tickers) if t not in alpha_df.index]
    
    # Step 4: Solve
    opt_target_vol = strategy.get('target_vol', TARGET_VOL) if strategy else TARGET_VOL
    lambdas = build_lambda_values(regime, target_vol=opt_target_vol, user_constraints=user_constraints)
    
    # Prepare factor betas for soft bounds
    factor_betas = {
        'value': aligned_alpha['Z_V'].values,
        'quality': aligned_alpha['Z_Q'].values,
        'momentum': aligned_alpha['Z_M'].values
    }
    
    w_prev_array = None
    total_target_value = portfolio_value + (budget if budget else 0.0)
    
    if total_target_value <= 0:
        logger.error("Empty portfolio and no budget. Please deposit funds or set a budget.")
        return None
        
    if current_weights_dict is not None and total_target_value > 0:
        w_prev_array = np.zeros(len(final_tickers))
        for i, t in enumerate(final_tickers):
            old_w = current_weights_dict.get(t, 0.0)
            old_dollar_value = old_w * portfolio_value
            w_prev_array[i] = old_dollar_value / total_target_value
        
        # CRITICAL: Normalize w_prev to sum to 1.0.
        # If w_prev doesn't sum to 1.0 (due to negative cash or rounding),
        # the full-investment constraint (sum(w)==1) + turnover constraint
        # become simultaneously infeasible, causing the solver to fail.
        w_prev_sum = w_prev_array.sum()
        if w_prev_sum > 0.01:
            w_prev_array = w_prev_array / w_prev_sum
        else:
            # Portfolio is essentially empty, treat as fresh start
            w_prev_array = None
            logger.warning("w_prev sums near zero — treating as fresh portfolio.")
            
    budget_weight_limit = None
        
    opt_max_turnover = max_turnover if max_turnover is not None else MAX_TURNOVER
    
    # Calculate dynamic max position cap based on risk profile
    dynamic_max_position = MAX_POSITION
    if strategy:
        risk = strategy.get('risk_profile', 'moderate').lower()
        if risk == 'aggressive':
            dynamic_max_position = 0.25 # Allow up to 25% concentration
        elif risk == 'conservative':
            dynamic_max_position = 0.10 # Keep at 10%
    
    w_star = run_optimization(
        mu_vec=mu_vec, 
        Sigma=Sigma, 
        lambdas=lambdas, 
        tickers=final_tickers, 
        sector_map=sector_map,
        w_prev=w_prev_array,
        tbill_cap=regime.get('tbill_cap', 0.0),
        factor_betas=factor_betas,
        max_turnover=opt_max_turnover,
        forced_sell_indices=forced_sell_indices,
        max_position=dynamic_max_position,
        user_constraints=user_constraints
    )
    
    if w_star is None:
        # Try once more with fully relaxed turnover (max_turnover=1.0)
        logger.warning("First optimization attempt failed. Retrying with relaxed turnover (1.0)...")
        w_star = run_optimization(
            mu_vec=mu_vec,
            Sigma=Sigma,
            lambdas=lambdas,
            tickers=final_tickers,
            sector_map=sector_map,
            w_prev=w_prev_array,
            tbill_cap=regime.get('tbill_cap', 0.0),
            factor_betas=factor_betas,
            max_turnover=1.0,  # Fully relaxed
            forced_sell_indices=forced_sell_indices,
            max_position=dynamic_max_position,
            user_constraints=user_constraints
        )
    
    if w_star is None:
        return None
        
    # Step 5: Format Results
    weights_dict = {
        ticker: float(w_star[i]) 
        for i, ticker in enumerate(final_tickers) if w_star[i] > 0.001
    }
    
    # Sanity check: Ensure max_position constraint was respected by CVXPY
    if user_constraints:
        max_pct = user_constraints.get_effective_limits().get("max_single_stock_pct", 1.0)
        for t, w in weights_dict.items():
            if w > max_pct + 0.01: # 1% tolerance for floating point solver slack
                logger.error(f"⚠️ CONSTRAINT VIOLATION: {t} weight {w:.3f} exceeds max {max_pct:.3f}")
    
    # Trade Instructions Logic
    trade_instructions = []
    budget_used = 0.0
    budget_remaining = budget if budget else 0.0
    
    if current_weights_dict is not None:
        db_path = get_db_path()
        conn = sqlite3.connect(db_path)
        try:
            prices_query = f"SELECT ticker, adjClose FROM prices WHERE date = (SELECT MAX(date) FROM prices) AND ticker IN ({','.join(['?' for _ in final_tickers])})"
            latest_prices_df = pd.read_sql_query(prices_query, conn, params=final_tickers)
            prices_dict = dict(zip(latest_prices_df['ticker'], latest_prices_df['adjClose']))
        except Exception as e:
            logger.error(f"Failed to fetch prices for trade calculation: {e}")
            prices_dict = {}
        finally:
            conn.close()

        for i, t in enumerate(final_tickers):
            w_opt = float(w_star[i])
            old_w = current_weights_dict.get(t, 0.0)
            
            target_dollar = w_opt * total_target_value
            current_dollar = old_w * portfolio_value
            
            delta_dollar = target_dollar - current_dollar
            price = prices_dict.get(t, 100.0)
            
            # Lower threshold to $25 to allow small budget injections to deploy
            trade_threshold = 25.0
            
            logger.info(f"[DEBUG TRADE] {t} | w_opt: {w_opt:.4f} | old_w: {old_w:.4f} | delta_$: {delta_dollar:.2f} | price: {price:.2f}")
            
            if abs(delta_dollar) < trade_threshold:
                if current_dollar > 0:
                    trade_instructions.append({"ticker": t, "action": "HOLD", "shares": 0, "reason": "Already at target weight", "old_weight": round(old_w, 4), "new_weight": round(w_opt, 4)})
            elif delta_dollar > 0:
                shares = round(delta_dollar / price, 4)
                if shares > 0.0001:
                    est_cost = shares * price
                    budget_used += est_cost
                    trade_instructions.append({"ticker": t, "action": "BUY", "shares": shares, "estimated_cost": round(est_cost, 2), "old_weight": round(old_w, 4), "new_weight": round(w_opt, 4)})
            elif delta_dollar < 0:
                shares = round(abs(delta_dollar) / price, 4)
                
                # If weight went to ~zero, sell all we held
                if w_opt < 0.001:
                    shares = round(current_dollar / price, 4)
                    
                if shares > 0.0001:
                    est_value = shares * price
                    trade_instructions.append({"ticker": t, "action": "SELL", "shares": shares, "estimated_value": round(est_value, 2), "old_weight": round(old_w, 4), "new_weight": round(w_opt, 4)})

        budget_remaining = max(0.0, budget_remaining - budget_used)

    expected_ret = float(np.dot(w_star, mu_vec))
    
    result = {
        "weights": weights_dict,
        "tickers": final_tickers,
        "mu_vec": mu_vec.tolist(),
        "regime": regime,
        "alpha_df": aligned_alpha.reset_index().to_dict('records'),
        "optimization_status": "success",
        "lambda_values": lambdas,
        "sigma_R": float(aligned_alpha['mu'].std()), # Proxy for report
        "n_stocks": len(weights_dict),
        "expected_portfolio_return": expected_ret,
        "trade_instructions": trade_instructions,
        "budget_used": round(budget_used, 2),
        "budget_remaining": round(budget_remaining, 2),
        "sieve_warnings": sieve_warnings
    }
    
    # Log Summary
    sorted_weights = sorted(weights_dict.items(), key=lambda x: x[1], reverse=True)
    top_5_str = ", ".join([f"{t}: {w*100:.1f}%" for t, w in sorted_weights[:5]])
    logger.info(f"Portfolio built with {len(weights_dict)} positions.")
    logger.info(f"Top Holdings: {top_5_str}")
    logger.info(f"Expected Port. Return: {expected_ret*100:.2f}%")
    
    return result

if __name__ == "__main__":
    # Section 8 — Main execution block
    portfolio = build_portfolio()
    
    if portfolio:
        weights = portfolio['weights']
        alpha_df = pd.DataFrame(portfolio['alpha_df']).set_index('ticker')
        
        # Build display table
        display_data = []
        for ticker, weight in sorted(weights.items(), key=lambda x: x[1], reverse=True):
            display_data.append({
                'Ticker': ticker,
                'Weight': f"{weight*100:.2f}%",
                'Exp Return (mu)': f"{alpha_df.loc[ticker, 'mu']*100:.2f}%",
                'Sector': alpha_df.loc[ticker, 'sector']
            })
            
        print("\n--- Optimized AIRS Portfolio ---")
        print(pd.DataFrame(display_data).to_string(index=False))
        
        print("\n--- Risk & Return Summary ---")
        print(f"Total Active Positions: {portfolio['n_stocks']}")
        print(f"Expected Portfolio Return: {portfolio['expected_portfolio_return']*100:.2f}%")
        print(f"Current Regime: {portfolio['regime']['regime'].upper()} (PR: {portfolio['regime']['P_R']*100:.1f}%)")
        print(f"Weights Sum Verification: {sum(weights.values()):.4f}")
