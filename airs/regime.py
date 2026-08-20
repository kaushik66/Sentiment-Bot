import os
import sys
import pandas as pd
import numpy as np
import sqlite3
from dotenv import load_dotenv

# Section 1 — Imports and Path Setup
# Insert project root into sys.path to find database.py
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from utils.database import get_connection, get_db_path

load_dotenv()

def get_current_regime(user_constraints=None):
    # Section 2 — get_current_regime()
    conn = get_connection()
    try:
        query = "SELECT date, P_R, regime, spread_10y_3m, yield_10y, yield_3m, vix, breakeven_5y5y FROM macro_daily ORDER BY date DESC LIMIT 1"
        row = conn.execute(query).fetchone()
        
        if row is None:
            # Fallback for empty table
            return {
                "date": "unknown",
                "P_R": 0.15,
                "regime": "neutral",
                "spread_10y_3m": 0.5,
                "yield_10y": 4.5,
                "yield_3m": 4.0,
                "vix": 18.0,
                "breakeven_5y5y": 2.3,
                "tbill_cap": 0.0,
                "lambda1_scalar": 1.0,
                "momentum_scalar": 1.0
            }
        
        # Extract base values
        res = dict(row)
        pr = res['P_R']
        reg = res['regime']
        
        # 1. Compute tbill_cap
        base_tbill_cap = 0.0
        if reg == "defensive":
            base_tbill_cap = 0.25
        elif reg == "cautious":
            base_tbill_cap = 0.10
            
        # Scale based on risk tolerance if available
        if user_constraints:
            risk = user_constraints.risk_tolerance.lower()
            if risk == "conservative":
                base_tbill_cap *= 1.5
            elif risk == "aggressive":
                base_tbill_cap *= 0.5
                
        # Ensure it doesn't drop below liquidity needs, but cap at 1.0
        min_liquidity = user_constraints.liquidity_need_pct if user_constraints else 0.0
        res['tbill_cap'] = min(1.0, max(base_tbill_cap, min_liquidity))
            
        # 2. Compute lambda1_scalar
        if reg == "defensive":
            res['lambda1_scalar'] = 1.5
        elif reg == "cautious":
            res['lambda1_scalar'] = 1.25
        else:
            res['lambda1_scalar'] = 1.0
            
        # 3. Compute momentum_scalar: max(0.0, 1.0 - 2.5 * P_R)
        res['momentum_scalar'] = max(0.0, 1.0 - 2.5 * pr)
        
        return res
        
    finally:
        conn.close()

def get_regime_history(days=90):
    # Section 3 — get_regime_history()
    conn = get_connection()
    try:
        query = f"SELECT date, P_R, regime, spread_10y_3m, vix FROM macro_daily ORDER BY date DESC LIMIT {days}"
        rows = conn.execute(query).fetchall()
        return [dict(r) for r in rows]
    finally:
        conn.close()

def describe_regime(regime_dict):
    # Section 4 — describe_regime()
    reg = regime_dict['regime']
    pct = regime_dict['P_R'] * 100
    mom_pct = round(regime_dict['momentum_scalar'] * 100)
    tbill_pct = round(regime_dict['tbill_cap'] * 100)
    
    if reg == "neutral":
        return f"Neutral regime (P_R: {pct:.1f}%). The yield curve and macro indicators suggest a low probability of near-term recession. Full factor exposure is active."
    elif reg == "cautious":
        return f"Cautious regime (P_R: {pct:.1f}%). Mild yield curve compression signals elevated but not critical recession risk. Momentum exposure has been reduced to {mom_pct}% of its base weight and a T-Bill buffer of up to {tbill_pct}% is available."
    elif reg == "defensive":
        return f"Defensive regime (P_R: {pct:.1f}%). The yield curve and macro signals indicate significant recession risk. Momentum is fully suspended. A T-Bill defensive buffer of up to 25% is active and risk aversion has been increased by 50%."
    
    return f"Unknown regime: {reg}"

# Section 5 — Main execution
if __name__ == "__main__":
    regime = get_current_regime()
    print("--- Current Market Regime Object ---")
    for k, v in regime.items():
        print(f"{k}: {v}")
    
    print("\n--- Human-Readable Description ---")
    print(describe_regime(regime))
