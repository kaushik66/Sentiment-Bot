import os
import sys
import pandas as pd
import numpy as np
import sqlite3
import logging
from dotenv import load_dotenv

# Section 1 — Path Setup
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from utils.database import get_connection, get_db_path
from airs.regime import get_current_regime
from airs.sieve import run_sieve

load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s'
)
logger = logging.getLogger(__name__)

# Section 2 — Module-level constants
IC_VALUE = 0.06
IC_QUALITY = 0.07
IC_MOMENTUM = 0.05
RISK_FREE_RATE_FALLBACK = 0.04

def compute_value_factor(df):
    # Section 3 — compute_value_factor()
    def sector_z(s):
        if s.std() == 0 or s.isna().all():
            return 0.0
        return (s - s.mean()) / s.std()

    # Apply sector-relative normalization to ep_ratio, cfp_ratio, s_ev_ratio
    df['z_ep'] = df.groupby('sector')['ep_ratio'].transform(sector_z)
    df['z_cfp'] = df.groupby('sector')['cfp_ratio'].transform(sector_z)
    df['z_sev'] = df.groupby('sector')['s_ev_ratio'].transform(sector_z)
    
    # Z_V is the composite mean of the three value Z-scores
    df['Z_V'] = df[['z_ep', 'z_cfp', 'z_sev']].mean(axis=1).fillna(0.0)
    return df

def compute_quality_factor(df):
    # Section 4 — compute_quality_factor()
    def sector_z(s):
        if s.std() == 0 or s.isna().all():
            return 0.0
        return (s - s.mean()) / s.std()
        
    tickers = df['ticker'].tolist()
    if not tickers:
        df['Z_Q'] = 0.0
        return df
        
    conn = get_connection()
    try:
        query = f"SELECT ticker, fiscal_quarter, operating_margin FROM quarterly_financials WHERE ticker IN ({','.join(['?' for _ in tickers])}) ORDER BY ticker, fiscal_quarter DESC"
        qf_df = pd.read_sql_query(query, conn, params=tickers)
    finally:
        conn.close()
        
    # Baseline ROIC signal for fallback
    roic_z = df.groupby('sector')['roic'].transform(sector_z).fillna(0.0)
    
    if qf_df.empty:
        df['Z_Q'] = roic_z
        logger.warning("No quarterly financials found — falling back to ROIC proxy for Z_Q")
        return df

    margin_scores = {}
    for ticker, group in qf_df.groupby('ticker'):
        margins = group['operating_margin'].dropna()
        if len(margins) < 4:
            margin_scores[ticker] = None
        else:
            y = margins.values[::-1] # Oldest to newest
            x = np.arange(len(y))
            slope = np.polyfit(x, y, 1)[0]
            mean_margin = np.mean(y)
            margin_scores[ticker] = {'level': mean_margin, 'trend': slope}
            
    df['margin_level'] = df['ticker'].map(lambda t: margin_scores.get(t, {}).get('level') if isinstance(margin_scores.get(t), dict) else np.nan)
    df['margin_trend'] = df['ticker'].map(lambda t: margin_scores.get(t, {}).get('trend') if isinstance(margin_scores.get(t), dict) else np.nan)
    
    fallback_mask = df['margin_level'].isna() | df['margin_trend'].isna()
    
    def cross_z_safe(s):
        if s.std() == 0 or s.isna().all():
            return pd.Series(0.0, index=s.index)
        return (s - s.mean()) / s.std()
        
    df['z_margin_level'] = df.groupby('sector')['margin_level'].transform(cross_z_safe).fillna(0.0)
    df['z_margin_trend'] = df.groupby('sector')['margin_trend'].transform(cross_z_safe).fillna(0.0)
    
    df['combined_margin_score'] = (0.6 * df['z_margin_level']) + (0.4 * df['z_margin_trend'])
    df['Z_Q_new'] = df.groupby('sector')['combined_margin_score'].transform(cross_z_safe).fillna(0.0)
    
    df['Z_Q'] = np.where(fallback_mask, roic_z, df['Z_Q_new'])
    
    for t in df.loc[fallback_mask, 'ticker']:
        logger.warning(f"Ticker {t} has < 4 quarters of margin history — falling back to ROIC proxy for Z_Q")
        
    return df

def compute_momentum_factor(df, regime):
    # Section 5 — compute_momentum_factor()
    tickers = df['ticker'].tolist()
    if not tickers:
        df['Z_M'] = 0.0
        return df

    conn = get_connection()
    try:
        # Fetch long-term prices for only the surviving sieve tickers
        query = f"SELECT date, ticker, adjClose FROM prices WHERE ticker IN ({','.join(['?' for _ in tickers])})"
        prices_df = pd.read_sql_query(query, conn, params=tickers)
        
        if prices_df.empty:
            df['Z_M'] = 0.0
            return df

        # Pivot prices: rows=date, cols=ticker
        pivot_df = prices_df.pivot(index='date', columns='ticker', values='adjClose').sort_index()
        
        momentum_dict = {}
        for ticker in tickers:
            if ticker in pivot_df.columns:
                series = pivot_df[ticker].dropna()
                if len(series) >= 252:
                    # 12-month return excluding most recent month (252 to 21 trading days)
                    p_minus_252 = series.iloc[-252]
                    p_minus_21 = series.iloc[-21]
                    momentum_dict[ticker] = (p_minus_21 / p_minus_252) - 1
                else:
                    momentum_dict[ticker] = np.nan
            else:
                momentum_dict[ticker] = np.nan
        
        df['momentum_raw'] = df['ticker'].map(momentum_dict).fillna(0.0)
        
        # Sector-relative Z-score normalisation
        def sector_z(s):
            if s.std() == 0 or s.isna().all():
                return 0.0
            return (s - s.mean()) / s.std()
            
        df['Z_M'] = df.groupby('sector')['momentum_raw'].transform(sector_z).fillna(0.0)
        
        # Apply regime momentum scalar (e.g., 0.58 from TASK 5)
        df['Z_M'] = df['Z_M'] * regime['momentum_scalar']
        
        return df
    finally:
        conn.close()

def compute_expected_returns(df, regime, strategy=None):
    # Section 6 — compute_expected_returns()
    # Risk-free rate (yield_3m is in percentage units in DB)
    r_f = regime.get('yield_3m', RISK_FREE_RATE_FALLBACK * 100) / 100
    
    # Compute cross-sectional volatility (sigma_R)
    tickers = df['ticker'].tolist()
    sigma_R = 0.15 # Fallback
    
    if tickers:
        conn = get_connection()
        try:
            # Query recent 21 trading days to compute typical cross-sectional dispersion
            query = f"SELECT date, ticker, adjClose FROM prices WHERE ticker IN ({','.join(['?' for _ in tickers])}) ORDER BY date DESC"
            recent_prices = pd.read_sql_query(query, conn, params=tickers)
            
            if not recent_prices.empty:
                pivot_recent = recent_prices.pivot(index='date', columns='ticker', values='adjClose').sort_index()
                daily_returns = pivot_recent.pct_change().dropna(how='all')
                
                cs_std = daily_returns.std(axis=1).mean()
                if not np.isnan(cs_std) and cs_std != 0:
                    sigma_R = cs_std * np.sqrt(252)
                    
        except Exception as e:
            logger.warning(f"Error computing sigma_R, using fallback: {e}")
        finally:
            conn.close()
            
    logger.info(f"Computed sigma_R: {sigma_R:.4f}")
    
    # Dynamically adjust Information Coefficients based on risk profile
    ic_v = IC_VALUE
    ic_q = IC_QUALITY
    ic_m = IC_MOMENTUM
    
    if strategy:
        risk = strategy.get('risk_profile', 'moderate').lower()
        if risk == 'aggressive':
            # Aggressive: Chase momentum/growth, discount pure value safety
            ic_m = 0.08
            ic_v = 0.02
        elif risk == 'conservative' or risk == 'defensive':
            # Defensive: Prioritize deep value and high quality safety buffers
            ic_v = 0.08
            ic_q = 0.06
            ic_m = 0.01
            
    logger.info(f"Dynamic ICs applied -> Value: {ic_v}, Quality: {ic_q}, Momentum: {ic_m}")
    
    # Grinold Formula Implementation
    df['mu'] = r_f + \
               (df['Z_V'] * ic_v * sigma_R) + \
               (df['Z_Q'] * ic_q * sigma_R) + \
               (df['Z_M'] * ic_m * sigma_R)
               
    # Apply sentiment alpha penalty (e.g. 0.8 for soft negative)
    df['mu'] = df['mu'] * df['alpha_penalty']
    
    # Clip to absolute max range of ±50% to prevent optimization variance
    df['mu'] = df['mu'].clip(-0.50, 0.50)
    
    return df

def compute_alpha(df, regime):
    # Unified entry point for dataframes (used by what-if route)
    df = compute_value_factor(df)
    df = compute_quality_factor(df)
    df = compute_momentum_factor(df, regime)
    df = compute_expected_returns(df, regime, None)
    return df

def run_alpha_engine(strategy=None, user_constraints=None):
    # Section 7 — run_alpha_engine()
    regime = get_current_regime(user_constraints)
    df, warnings = run_sieve(regime, strategy=strategy, constraints=user_constraints)
    
    if df.empty:
        logger.warning("No tickers survived the sieve.")
        return {"tickers": [], "alpha_df": df, "regime": regime, "sieve_warnings": warnings}
        
    # Apply three-factor model
    df = compute_value_factor(df)
    df = compute_quality_factor(df)
    df = compute_momentum_factor(df, regime)
    
    # Compute expected return vector mu
    df = compute_expected_returns(df, regime, strategy)
    
    # Summary of winners/losers
    sorted_df = df.sort_values('mu', ascending=False)
    logger.info(f"Top 5 expected returns: {sorted_df['ticker'].head(5).tolist()}")
    logger.info(f"Bottom 5 expected returns: {sorted_df['ticker'].tail(5).tolist()}")
    
    return {
        "tickers": df['ticker'].tolist(),
        "alpha_df": df,
        "regime": regime,
        "sieve_warnings": warnings
    }

if __name__ == "__main__":
    # Section 8 — Main execution block
    engine_result = run_alpha_engine()
    df = engine_result['alpha_df']
    
    # Sort by descending mu
    df_sorted = df.sort_values('mu', ascending=False)
    
    print("\n--- Alpha Engine Results (Top 10 Tickers) ---")
    cols = ['ticker', 'Z_V', 'Z_Q', 'Z_M', 'mu', 'alpha_penalty']
    
    # Formatting for terminal output
    df_print = df_sorted[cols].head(10).copy()
    df_print['mu'] = (df_print['mu'] * 100).map('{:,.2f}%'.format)
    
    print(df_print.to_string(index=False))
