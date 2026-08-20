import json
import sqlite3
import datetime
from dataclasses import dataclass, field
from typing import List, Optional, Dict, Any
from utils.database import get_connection

@dataclass
class UserConstraints:
    user_id: str
    risk_tolerance: str = "moderate" # conservative, moderate, aggressive
    max_single_stock_pct: Optional[float] = None
    max_sector_pct: Optional[float] = None
    excluded_sectors: List[str] = field(default_factory=list)
    excluded_tickers: List[str] = field(default_factory=list)
    min_dividend_yield: Optional[float] = None
    esg_required: bool = False
    investment_horizon: str = "medium" # short, medium, long
    liquidity_need_pct: float = 0.0
    tax_sensitivity: bool = False
    allow_margin: bool = False

    def get_effective_limits(self) -> Dict[str, float]:
        """Returns the actual limits to use for optimization, filling in defaults based on risk_tolerance."""
        defaults = defaults_for_risk_tolerance(self.risk_tolerance)
        return {
            "max_single_stock_pct": self.max_single_stock_pct if self.max_single_stock_pct is not None else defaults["max_single_stock_pct"],
            "max_sector_pct": self.max_sector_pct if self.max_sector_pct is not None else defaults["max_sector_pct"],
            "turnover_penalty_multiplier": defaults["turnover_penalty_multiplier"] * (2.0 if self.tax_sensitivity else 1.0)
        }

def defaults_for_risk_tolerance(risk_tier: str) -> Dict[str, float]:
    """Maps risk tier to sensible defaults for limits."""
    tier = risk_tier.lower() if risk_tier else "moderate"
    if tier == "conservative":
        return {
            "max_single_stock_pct": 0.05,
            "max_sector_pct": 0.15,
            "turnover_penalty_multiplier": 2.0
        }
    elif tier == "aggressive":
        return {
            "max_single_stock_pct": 0.15,
            "max_sector_pct": 0.35,
            "turnover_penalty_multiplier": 0.5
        }
    else: # moderate
        return {
            "max_single_stock_pct": 0.10,
            "max_sector_pct": 0.25,
            "turnover_penalty_multiplier": 1.0
        }

def init_preferences_db():
    conn = get_connection()
    try:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS user_constraints (
                user_id TEXT PRIMARY KEY,
                risk_tolerance TEXT,
                max_single_stock_pct REAL,
                max_sector_pct REAL,
                excluded_sectors TEXT,
                excluded_tickers TEXT,
                min_dividend_yield REAL,
                esg_required INTEGER,
                investment_horizon TEXT,
                liquidity_need_pct REAL,
                tax_sensitivity INTEGER,
                allow_margin INTEGER,
                created_at TEXT,
                updated_at TEXT
            )
        """)
        
        # Add column to existing table if it doesn't exist
        try:
            conn.execute("ALTER TABLE user_constraints ADD COLUMN allow_margin INTEGER DEFAULT 0")
        except sqlite3.OperationalError:
            # Column already exists
            pass
            
        conn.commit()
    finally:
        conn.close()

def get_user_constraints(user_id: str) -> Optional[UserConstraints]:
    if not user_id:
        return None
    
    conn = get_connection()
    try:
        row = conn.execute("SELECT * FROM user_constraints WHERE user_id = ?", (user_id,)).fetchone()
        if not row:
            return None
        
        return UserConstraints(
            user_id=row['user_id'],
            risk_tolerance=row['risk_tolerance'],
            max_single_stock_pct=row['max_single_stock_pct'],
            max_sector_pct=row['max_sector_pct'],
            excluded_sectors=json.loads(row['excluded_sectors']) if row['excluded_sectors'] else [],
            excluded_tickers=json.loads(row['excluded_tickers']) if row['excluded_tickers'] else [],
            min_dividend_yield=row['min_dividend_yield'],
            esg_required=bool(row['esg_required']),
            investment_horizon=row['investment_horizon'],
            liquidity_need_pct=row['liquidity_need_pct'] or 0.0,
            tax_sensitivity=bool(row['tax_sensitivity']),
            allow_margin=bool(row['allow_margin']) if 'allow_margin' in row.keys() else False
        )
    finally:
        conn.close()

def save_user_constraints(user_id: str, data: Dict[str, Any]) -> UserConstraints:
    conn = get_connection()
    try:
        now = datetime.datetime.utcnow().isoformat()
        
        # Check if exists
        exists = conn.execute("SELECT 1 FROM user_constraints WHERE user_id = ?", (user_id,)).fetchone()
        
        excluded_sectors = json.dumps(data.get('excluded_sectors', []))
        excluded_tickers = json.dumps(data.get('excluded_tickers', []))
        
        if exists:
            conn.execute("""
                UPDATE user_constraints SET
                    risk_tolerance = ?,
                    max_single_stock_pct = ?,
                    max_sector_pct = ?,
                    excluded_sectors = ?,
                    excluded_tickers = ?,
                    min_dividend_yield = ?,
                    esg_required = ?,
                    investment_horizon = ?,
                    liquidity_need_pct = ?,
                    tax_sensitivity = ?,
                    allow_margin = ?,
                    updated_at = ?
                WHERE user_id = ?
            """, (
                data.get('risk_tolerance', 'moderate'),
                data.get('max_single_stock_pct'),
                data.get('max_sector_pct'),
                excluded_sectors,
                excluded_tickers,
                data.get('min_dividend_yield'),
                1 if data.get('esg_required') else 0,
                data.get('investment_horizon', 'medium'),
                data.get('liquidity_need_pct', 0.0),
                1 if data.get('tax_sensitivity') else 0,
                1 if data.get('allow_margin') else 0,
                now,
                user_id
            ))
        else:
            conn.execute("""
                INSERT INTO user_constraints (
                    user_id, risk_tolerance, max_single_stock_pct, max_sector_pct,
                    excluded_sectors, excluded_tickers, min_dividend_yield, esg_required,
                    investment_horizon, liquidity_need_pct, tax_sensitivity, allow_margin, created_at, updated_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                user_id,
                data.get('risk_tolerance', 'moderate'),
                data.get('max_single_stock_pct'),
                data.get('max_sector_pct'),
                excluded_sectors,
                excluded_tickers,
                data.get('min_dividend_yield'),
                1 if data.get('esg_required') else 0,
                data.get('investment_horizon', 'medium'),
                data.get('liquidity_need_pct', 0.0),
                1 if data.get('tax_sensitivity') else 0,
                1 if data.get('allow_margin') else 0,
                now,
                now
            ))
        conn.commit()
    finally:
        conn.close()
        
    return get_user_constraints(user_id)
