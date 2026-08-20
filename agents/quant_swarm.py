import os
import sys
import json
import logging
import asyncio
import time
from dotenv import load_dotenv

# Section 1 — Path Setup
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from airs.optimizer import build_portfolio
from airs.regime import get_current_regime, describe_regime

load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s [%(levelname)s] %(message)s')
logger = logging.getLogger(__name__)

def run_quant_swarm(strategy, current_weights_dict=None, budget=None, portfolio_value=0.0, max_turnover=None, user_constraints=None, thought_callback=None):
    # Section 2 — run_quant_swarm()
    def think(message):
        logger.info(message)
        if thought_callback:
            thought_callback(message)

    think("Initialising AIRS quantitative engine...")
    
    # 1. Fetch Macro Regime
    regime = get_current_regime()
    think(f"Macro regime: {regime['regime'].upper()} | P_R: {regime['P_R']:.1%} | Momentum scalar: {regime['momentum_scalar']:.2f}")
    
    # 2. Log Strategy Decisions
    sector_exclusions = strategy.get('sector_exclusions', [])
    if sector_exclusions:
        think(f"Applying sector exclusions: {sector_exclusions}")
        
    think("Running fundamental sieve across universe...")
    
    # 3. Execute Pipeline
    # Note: build_portfolio runs Sieve, Alpha, and Optimizer internally.
    result = build_portfolio(
        current_weights_dict=current_weights_dict,
        budget=budget,
        portfolio_value=portfolio_value,
        max_turnover=max_turnover,
        strategy=strategy,
        user_constraints=user_constraints
    )
    
    if result is None:
        think("ERROR: Optimisation failed — insufficient data or solver error.")
        return None
        
    think(f"Sieve complete: {result['n_stocks']} stocks passed all screens.")
    think(f"Ledoit-Wolf covariance estimated. Solving tri-penalty utility function via CLARABEL...")
    think(f"Optimisation complete. {result['n_stocks']} active positions.")
    
    # Calculate weighted expected return
    exp_return = result['expected_portfolio_return']
    think(f"Expected portfolio return: {exp_return:.2%} annualised.")
    
    think(f"Regime narrative: {describe_regime(regime)}")
    
    return result

if __name__ == "__main__":
    # Section 3 — Main testing
    test_strategy = {
        "risk_profile": "moderate",
        "target_vol": 0.12,
        "sector_exclusions": [],
        "investment_horizon": "medium",
        "special_instructions": None,
        "confidence": 0.9
    }
    
    print("\n--- Running Quant Swarm Test ---")
    res = run_quant_swarm(test_strategy, thought_callback=print)
    
    if res:
        print(f"\nOptimization Result: {len(res['weights'])} positions.")
    else:
        print("\nOptimization Failed.")
