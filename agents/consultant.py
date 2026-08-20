import os
import sys
import json
import logging
from google import genai
from dotenv import load_dotenv

# Section 1 — Path Setup and Configuration
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s [%(levelname)s] %(message)s')
logger = logging.getLogger(__name__)

# Configure Gemini
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    logger.error("GEMINI_API_KEY not found in environment.")
else:
    client = genai.Client(api_key=GEMINI_API_KEY)

# Section 2 — System Prompt
CONSULTANT_SYSTEM_PROMPT = """You are a rigorous but empathetic financial advisor named Cortex. 
Your job is to parse the user's investment intent into a precise JSON strategy contract.

CRITICAL RULE: The user's current portfolio holdings AND their predefined static constraints (risk tolerance, sector limits, etc.) are AUTOMATICALLY loaded by the system.
DO NOT EVER ask the user to provide their current holdings, weights, tickers, account balance, risk tolerance, or exclusions. These are managed via a static settings form.
If the user says "Analyze my existing portfolio" or asks to make no trades, set confidence to 1.0 and max_turnover to 0.0.

Return ONLY a valid JSON object with NO markdown, NO backticks, NO explanation — just the raw JSON.

The JSON must have exactly these fields:
- "risk_profile": one of "conservative", "moderate", "aggressive"
- "target_vol": a float between 0.06 and 0.20 representing target annual volatility
- "sector_exclusions": a list of GICS sector strings to avoid (can be empty list)
- "investment_horizon": one of "short", "medium", "long"
- "special_instructions": a string describing any other preferences, or null
- "confidence": a float from 0.0 to 1.0 representing how clearly the user expressed their intent
- "budget": float representing dollar amount to deploy (null if not mentioned)
- "max_turnover": float between 0.0 and 1.0 representing permitted turnover percentage (null if not mentioned)

Mapping guide:
- "play it safe" / "conservative" / "worried" -> conservative, target_vol 0.08
- "balanced" / "moderate" / "normal" -> moderate, target_vol 0.12  
- "aggressive" / "growth" / "risk on" -> aggressive, target_vol 0.16
- "I have $5,000 to invest" -> budget: 5000
- "minimal changes" / "light touch" -> max_turnover: 0.10
- "full rebalance" / "start over" -> max_turnover: 1.0
- If user mentions avoiding a sector, add the EXACT valid GICS sector string to sector_exclusions.
- GICS Sectors are: "Information Technology", "Communication Services", "Consumer Discretionary", "Financials", "Health Care", "Industrials", "Consumer Staples", "Energy", "Utilities", "Real Estate", "Materials".
- IMPORTANT: If user says "avoid tech" or "no tech", you MUST exclude BOTH "Information Technology" AND "Communication Services" (because Meta/Google/Netflix are Comm Services).
- If intent is unclear, set confidence below 0.5 and use moderate defaults
"""

def parse_user_intent(user_message, portfolio_context=None, user_constraints=None):
    # Section 3 — parse_user_intent()
    prompt = f"{CONSULTANT_SYSTEM_PROMPT}\n\nUser Message: {user_message}"
    if portfolio_context:
        prompt += f"\n\nCurrent Portfolio Context: {json.dumps(portfolio_context)}"
    if user_constraints:
        prompt += f"\n\nUser Constraints (Already enforced by engine): {json.dumps(user_constraints)}"
        
    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt
        )
        text = response.text.strip()
        
        # Strip potential markdown code blocks if the model ignored the "NO backticks" instruction
        if text.startswith("```"):
            text = text.split("```")[1]
            if text.startswith("json"):
                text = text[4:]
            text = text.strip()
            
        strategy = json.loads(text)
    except Exception as e:
        logger.error(f"Failed to parse user intent with Gemini: {e}")
        # Default fallback
        strategy = {
            "risk_profile": "moderate",
            "target_vol": 0.12,
            "sector_exclusions": [],
            "investment_horizon": "medium",
            "special_instructions": None,
            "confidence": 0.3
        }

    # Validation and Clamping
    strategy["target_vol"] = max(0.06, min(0.20, strategy.get("target_vol", 0.12)))
    strategy["confidence"] = max(0.0, min(1.0, strategy.get("confidence", 0.5)))
    
    if strategy.get("max_turnover") is not None:
        strategy["max_turnover"] = max(0.0, min(1.0, strategy["max_turnover"]))
        
    if strategy.get("budget") is not None:
        strategy["budget"] = float(strategy["budget"])
    
    # Ensure all keys exist
    defaults = {
        "risk_profile": "moderate",
        "sector_exclusions": [],
        "investment_horizon": "medium",
        "special_instructions": None,
        "budget": None,
        "max_turnover": None
    }
    for k, v in defaults.items():
        if k not in strategy:
            strategy[k] = v
            
    logger.info(f"Parsed Strategy: {strategy}")
    return strategy

def generate_clarification(strategy):
    # Section 4 — generate_clarification()
    if strategy.get("confidence", 1.0) >= 0.2:
        return None
        
    prompt = f"The user provided an unclear investment request. My parsed interpretation is: {json.dumps(strategy)}. Generate ONE short, polite clarifying question to ask the user to refine their intent (e.g. target volatility, sectors to avoid). CRITICAL: Do NOT ask for their current portfolio, holdings, or tickers. The system already has that data."
    
    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt
        )
        return response.text.strip()
    except Exception as e:
        logger.error(f"Failed to generate clarification: {e}")
        return "Could you provide more details about your risk tolerance or specific sectors you'd like to focus on?"

if __name__ == "__main__":
    # Section 5 — Main testing
    tests = [
        "I'm worried about the election, let's play it safe",
        "Give me aggressive growth, I don't care about volatility",
        "Balanced portfolio please, avoid financial stocks"
    ]
    
    for msg in tests:
        print(f"\nTesting: {msg}")
        strat = parse_user_intent(msg)
        print(json.dumps(strat, indent=2))
        clarification = generate_clarification(strat)
        if clarification:
            print(f"CLARIFICATION NEEDED: {clarification}")
