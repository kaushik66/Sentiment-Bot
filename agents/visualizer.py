import os
import sys
import json
import logging
import pandas as pd
from google import genai
from datetime import datetime
from dotenv import load_dotenv

# Section 1 — Path Setup
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from airs.regime import describe_regime
from airs.sieve import describe_sieve_results

load_dotenv()

# Configure Gemini
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if GEMINI_API_KEY:
    client = genai.Client(api_key=GEMINI_API_KEY)

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s [%(levelname)s] %(message)s')
logger = logging.getLogger(__name__)

def generate_narrative(result):
    # Section 2 — generate_narrative()

    
    regime_desc = describe_regime(result['regime'])
    alpha_df = pd.DataFrame(result['alpha_df']).sort_values('mu', ascending=False)
    
    weights = result['weights']
    top_8_weights = sorted(weights.items(), key=lambda x: x[1], reverse=True)[:8]
    
    # Build context for Gemini
    holdings_context = []
    for ticker, weight in top_8_weights:
        row = alpha_df[alpha_df['ticker'] == ticker].iloc[0]
        holdings_context.append({
            "ticker": ticker,
            "weight": f"{weight*100:.1f}%",
            "mu": f"{row['mu']*100:.2f}%",
            "Z_V": f"{row['Z_V']:.2f}",
            "Z_Q": f"{row['Z_Q']:.2f}",
            "Z_M": f"{row['Z_M']:.2f}"
        })
    
    # Build Trade Summary if available
    trade_summary_str = "No prior portfolio context (built from scratch)."
    if 'trade_instructions' in result:
        instructions = result['trade_instructions']
        buys = [t for t in instructions if t['action'] == 'BUY']
        sells = [t for t in instructions if t['action'] == 'SELL']
        holds = len([t for t in instructions if t['action'] == 'HOLD'])
        budget_used = result.get('budget_used', 0.0)
        budget_rem = result.get('budget_remaining', 0.0)
        
        buy_details = ", ".join([f"{t['ticker']} (${t.get('estimated_cost', 0):.2f}, {t.get('old_weight', 0)*100:.1f}%->{t.get('new_weight', 0)*100:.1f}%)" for t in buys]) if buys else "None"
        sell_details = ", ".join([f"{t['ticker']} (${t.get('estimated_value', 0):.2f}, {t.get('old_weight', 0)*100:.1f}%->{t.get('new_weight', 0)*100:.1f}%)" for t in sells]) if sells else "None"
        
        trade_summary_str = f"Rebalancing Trade Plan: {len(buys)} Buys ({buy_details}), {len(sells)} Sells ({sell_details}), {holds} Holds. Budget Deployed: ${budget_used:.2f}. Budget Remaining: ${budget_rem:.2f}."
        
    sieve_warnings = result.get('sieve_warnings', [])
    warnings_str = "None"
    if sieve_warnings:
        warnings_str = ", ".join(sieve_warnings)
        
    prompt = f"""You are a top Bloomberg Terminal analyst. Write exactly three paragraphs for a high-net-worth client explaining the latest AIRS quantitative rebalance.

Context:
- Macro Regime: {regime_desc}
- Portfolio Positions: {result['n_stocks']}
- Expected Portfolio Return: {result['expected_portfolio_return']:.2%}
- Top 8 Holdings & Scores: {json.dumps(holdings_context)}
- Rebalancing Context: {trade_summary_str}
- Skipped Constraints/Warnings: {warnings_str}

Instructions:
Paragraph 1: Explain the current macro regime and how the system adjusted risk accordingly. Mention the rebalancing context (if applicable, e.g., deploying new cash vs pure reallocation).
Paragraph 2: Highlight the most impactful buys or sells. Why these specific stocks? Reference their factor scores (Value, Quality, Momentum) and the rebalancing logic.
Paragraph 3: Summarize the overall factor bets and conviction. Reference numbers. No hedging.
"""
    
    # Inject Concentration Risk Warning if any weight exceeds 15%
    if any(w > 0.15 for _, w in top_8_weights):
        prompt += "\n\nCRITICAL INSTRUCTION: At least one position exceeds 15% of the total portfolio. You MUST explicitly call out this hedge-fund-style concentration in the third paragraph, warning the client of the idiosyncratic risk they have assumed in pursuit of aggressive alpha."
        
    if sieve_warnings:
        prompt += f"\n\nCRITICAL INSTRUCTION: The following user constraints were SKIPPED due to missing data: {warnings_str}. You MUST explicitly state this at the end of the narrative in plain English (e.g., 'Note: your ESG requirement couldn't be applied this cycle — we don't have ESG data populated yet.')."
    
    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt
        )
        text = response.text.strip()
        return text
    except Exception as e:
        logger.error(f"Narrative generation failed: {e}")
        return f"The AIRS system has completed its rebalance into a {result['n_stocks']}-position portfolio. The current {result['regime']['regime']} regime favors a balanced approach between quality and value factors, yielding an expected return of {result['expected_portfolio_return']:.2%}. Portfolio risk remains aligned with the target volatility constraints."

def generate_rejection_explanation(ticker, alpha_df):
    # Section 3 — generate_rejection_explanation()
    if isinstance(alpha_df, list):
        df = pd.DataFrame(alpha_df).set_index('ticker')
    else:
        df = alpha_df.copy()
        if 'ticker' in df.columns:
            df.set_index('ticker', inplace=True)
            
    if ticker not in df.index:
        return f"{ticker} was filtered out during the fundamental screening stage (failed ICR solvency or ROIC profitability thresholds)."
        
    row = df.loc[ticker]
    reasons = []
    if row['Z_V'] < -0.5: reasons.append("a weak value profile")
    if row['Z_Q'] < -0.5: reasons.append("low profitability relative to sector peers")
    if row['Z_M'] < -0.5: reasons.append("poor momentum trends")
    
    if not reasons:
        return f"{ticker} passed all screens but was assigned zero weight as the optimizer prioritized other names with superior risk-adjusted return characteristics."
    
    return f"{ticker} was excluded primarily due to {', '.join(reasons)}."

def build_dashboard_payload(result, narrative):
    # Section 4 — build_dashboard_payload()
    weights = result['weights']
    alpha_df = pd.DataFrame(result['alpha_df'])
    
    positions = []
    val_exposure = 0.0
    qual_exposure = 0.0
    mom_exposure = 0.0
    
    for ticker, weight in weights.items():
        rows = alpha_df[alpha_df['ticker'] == ticker]
        if not rows.empty:
            row = rows.iloc[0]
            positions.append({
                "ticker": ticker,
                "weight": float(weight),
                "sector": row['sector'],
                "mu": float(row['mu'])
            })
            val_exposure += float(weight) * float(row['Z_V'])
            qual_exposure += float(weight) * float(row['Z_Q'])
            mom_exposure += float(weight) * float(row['Z_M'])

    expected_return = float(result.get('expected_portfolio_return', 0.0))
    # Fallback to 0.15 if optimizer doesn't pass risk explicitly yet
    portfolio_risk = float(result.get('portfolio_volatility', result.get('portfolio_risk', 0.15))) 
    sharpe_estimate = expected_return / portfolio_risk if portfolio_risk > 0 else 0.0

    payload = {
        "positions": positions,
        "expected_return": expected_return,
        "portfolio_risk": portfolio_risk,
        "n_positions": int(result['n_stocks']),
        "sharpe_estimate": sharpe_estimate,
        "factor_exposures": {
            "value": val_exposure,
            "quality": qual_exposure,
            "momentum": mom_exposure
        },
        "narrative": narrative,
        "as_of": datetime.now().isoformat()
    }
    
    if 'trade_instructions' in result:
        payload['trade_instructions'] = result['trade_instructions']
        payload['budget_used'] = result.get('budget_used', 0.0)
        payload['budget_remaining'] = result.get('budget_remaining', 0.0)
        
    return payload

if __name__ == "__main__":
    # Section 5 — Main testing
    from airs.optimizer import build_portfolio
    print("\n--- Running Visualizer Test ---")
    res = build_portfolio()
    
    if res:
        narrative = generate_narrative(res)
        print("\n--- Generated Narrative ---")
        print(narrative)
        
        payload = build_dashboard_payload(res, narrative)
        print("\n--- Dashboard Payload Keys ---")
        print(list(payload.keys()))
    else:
        print("Optimizer failed, cannot test visualizer.")
