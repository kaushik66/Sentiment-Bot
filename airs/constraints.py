import os
import sys
import numpy as np
import cvxpy as cp
import logging
from dotenv import load_dotenv

# Section 1 — Path Setup
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s [%(levelname)s] %(message)s')
logger = logging.getLogger(__name__)

def build_hard_constraints(w, w_prev, tickers, sector_map, tbill_idx, tbill_cap, max_position=0.10, max_sector=0.25, max_turnover=0.20, forced_sell_indices=None, user_constraints=None):
    # Section 2 — build_hard_constraints()
    constraints = []
    
    # 1. Full Investment / Cash flexibility
    constraints.append(cp.sum(w) <= 1.0)
    
    # 2. Long Only
    constraints.append(w >= 0)
    
    # 3a. Sell-Side Turnover Limit
    constraints.append(cp.sum(cp.pos(w_prev - w)) <= max_turnover)
    
    # 3b. Buy-Side Asymmetric Turnover Limit
    # Caps total new deployment ratio to prevent the optimizer from buying dozens of new positions.
    # Set to 2.0x the sell-side cap to allow cash deployment.
    constraints.append(cp.sum(cp.pos(w - w_prev)) <= (max_turnover * 2.0))
    
    # Extract defaults/overrides
    if user_constraints:
        eff_limits = user_constraints.get_effective_limits()
        eff_max_position = eff_limits.get("max_single_stock_pct", max_position)
        eff_max_sector = eff_limits.get("max_sector_pct", max_sector)
        min_liquidity = user_constraints.liquidity_need_pct
    else:
        eff_max_position = max_position
        eff_max_sector = max_sector
        min_liquidity = 0.0
    
    # 4. Individual Position Caps & Sector Caps (Only if rotation is allowed)
    if max_turnover > 0.001:
        for i in range(len(tickers)):
            if tbill_idx is not None and i == tbill_idx:
                constraints.append(w[i] <= max(tbill_cap, min_liquidity))
                constraints.append(w[i] >= min_liquidity)
            else:
                constraints.append(w[i] <= eff_max_position)
                
        # 5. Sector Caps
        unique_sectors = set(sector_map.values())
        for sector in unique_sectors:
            sector_indices = [i for i, t in enumerate(tickers) if sector_map.get(t) == sector]
            if len(sector_indices) >= 2:
                constraints.append(cp.sum(w[sector_indices]) <= eff_max_sector)
                logger.debug(f"Added sector cap for {sector}: {len(sector_indices)} tickers.")
                
    # 6. Forced Sells (Assets excluded by sieve or strategy)
    if forced_sell_indices:
        for idx in forced_sell_indices:
            constraints.append(w[idx] == 0)
        logger.info(f"Added {len(forced_sell_indices)} hard constraints to strictly sell excluded tickers.")
            
    logger.info(f"Hard constraints built: {len(constraints)} added.")
    return constraints

def build_soft_factor_bounds(w, factor_betas, lambda4=5.0):
    # Section 3 — build_soft_factor_bounds()
    if not factor_betas:
        return 0.0
        
    penalty = 0.0
    
    # Target Definitions (Target, Tolerance)
    targets = {
        'market': (1.0, 0.15),
        'value': (0.75, 0.5),
        'quality': (0.75, 0.5),
        'momentum': (0.50, 0.5)
    }
    
    for factor, betas in factor_betas.items():
        if factor in targets:
            target, tolerance = targets[factor]
            portfolio_exposure = betas @ w
            deviation = cp.abs(portfolio_exposure - target)
            excess = cp.maximum(0, deviation - tolerance)
            penalty += lambda4 * cp.square(excess)
            
    return penalty

def validate_weights(w_star, tickers):
    # Section 4 — validate_weights()
    warnings = []
    sum_w = float(np.sum(w_star))
    max_w = float(np.max(w_star))
    min_w = float(np.min(w_star))
    n_pos = int(np.count_nonzero(w_star > 1e-4))
    
    if not (0.999 <= sum_w <= 1.001):
        warnings.append(f"Weights do not sum to 1.0 (Sum: {sum_w:.4f})")
    
    if max_w > 0.101:
        warnings.append(f"At least one position exceeds 10% cap (Max: {max_w:.4f})")
        
    if min_w < -0.001:
        warnings.append(f"Negative weight detected (Min: {min_w:.4f})")
        
    for w_warn in warnings:
        logger.warning(w_warn)
        
    return {
        "valid": len(warnings) == 0,
        "warnings": warnings,
        "sum_of_weights": sum_w,
        "max_position": max_w,
        "n_positions": n_pos
    }

# Section 5 — if __name__ == "__main__"
if __name__ == "__main__":
    print("airs/constraints.py: Module loaded successfully.")
    
    # Test Data
    test_tickers = ["AAPL", "MSFT", "GOOGL", "XOM", "CVX"]
    test_sectors = {"AAPL": "Tech", "MSFT": "Tech", "GOOGL": "Tech", "XOM": "Energy", "CVX": "Energy"}
    w = cp.Variable(5)
    w_prev = np.array([0.2, 0.2, 0.2, 0.2, 0.2])
    
    # Test Building Constraints
    constraints_list = build_hard_constraints(
        w=w, 
        w_prev=w_prev, 
        tickers=test_tickers, 
        sector_map=test_sectors,
        tbill_idx=None,
        tbill_cap=0.0
    )
    print(f"Test: Hard constraints count = {len(constraints_list)}")
    
    # Test Validation
    val_res = validate_weights(w_prev, test_tickers)
    print("Test: validate_weights result:")
    print(val_res)
