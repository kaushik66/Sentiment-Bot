import re
import json
import os
from datetime import datetime

# Load S&P 500 Database
SP500_DB = []
try:
    with open('sp500.json', 'r') as f:
        SP500_DB = json.load(f)
except FileNotFoundError:
    print("Warning: sp500.json not found. S&P 500 detection disabled.")

# Common words that might coincide with company names
# We only match these if strict conditions are met (e.g. "Target stock")
COMMON_WORD_FILTERS = {
    "TARGET", "KEY", "POOL", "LOW", "BEST", "GAP", "EAT", "SEE", "NOW", "ALL", "ARE", "CAN", "MET", "PAY"
}

def extract_ticker(text):
    text_upper = text.upper()
    
    # 1. Manual Aliases (Highest Priority)
    for ticker, aliases in TICKER_ALIASES.items():
        for alias in aliases:
            if re.search(r'\b' + re.escape(alias) + r'\b', text_upper):
                return ticker

    # 2. Database Search (Ticker & Name)
    for entry in SP500_DB:
        ticker = entry['ticker']
        name = entry['name'].upper()
        
        # A. Check Ticker Symbol
        # Check for Common Word Collision on Ticker
        if ticker in COMMON_WORD_FILTERS:
             if re.search(r'\b' + re.escape(ticker) + r'\b\s+(STOCK|SHARE|PRICE|CALL|PUT|TRADE|MARKET)', text_upper):
                return ticker
        else:
            if re.search(r'\b' + re.escape(ticker) + r'\b', text_upper):
                return ticker
            
        # B. Check Company Name
        # 0. Check Full Name (Strong Signal)
        # e.g. "Pool Corporation" -> Match!
        # Strip "The " but keep "Corporation" etc.
        full_name_clean = name.replace("THE ", "").strip()
        if re.search(r'\b' + re.escape(full_name_clean) + r'\b', text_upper):
            return ticker

        # 1. Cleanup for broader matching (Remove suffixes)
        clean_name = full_name_clean
        for _ in range(2): 
            clean_name = re.sub(r' (INC\.?|CORP\.?|CORPORATION|INCORPORATED|COMPANY|GROUP|PLC|LTD)\.?$', '', clean_name)
        
        # 2. Specific fixups
        clean_name = clean_name.replace(".COM", "").strip()
        
        if len(clean_name) < 3: continue 
        
        # Check for Common Word Collision
        if clean_name in COMMON_WORD_FILTERS:
            # Only match if followed/preceded by "STOCK", "SHARES", etc.
            if re.search(r'\b' + re.escape(clean_name) + r'\b\s+(STOCK|SHARE|PRICE|CALL|PUT|TRADE|MARKET)', text_upper):
                return ticker
        else:
            # Normal match
            if re.search(r'\b' + re.escape(clean_name) + r'\b', text_upper):
                return ticker

    # 3. Fallback: Generic 2-5 Letter Uppercase (if no DB match found)
    # Using the old logic but lower priority
    ignored = {"WSB", "YOLO", "FOMO", "ATH", "THE", "AND", "FOR", "AI", "DD", "CEO", "OP", "JP", "IT", "IS", "MY", "IN", "OF", "ON", "AT", "TO", "NO", "GO", "UP", "GDP", "CPI", "USA", "YTD", "USD", "DIY", "FAQ", "CFO", "CTO"}
    matches = re.findall(r'\b[A-Z]{2,5}\b', text)
    for m in matches:
        if m not in ignored:
            return m
            
    return None

# Mapping of Ticker -> Common Aliases (Upper Case)
TICKER_ALIASES = {
    "TSLA": ["TESLA", "ELON", "MUSK"],
    "NVDA": ["NVIDIA", "JENSEN"],
    "AAPL": ["IPHONE", "MACBOOK"], # Removed APPLE since it's in the DB name now
    "AMD":  ["LISA SU"],
    "AMZN": ["AWS", "BEZOS"],
    "MSFT": ["WINDOWS", "GATES", "XBOX"],
    "GOOG": ["GOOGLE", "YOUTUBE"], # GOOGL is in DB
    "META": ["FACEBOOK", "ZUCK", "INSTAGRAM"],
    "NFLX": ["NETFLIX"],
    "GME":  ["GAMESTOP", "COHEN", "DRS"],
    "AMC":  ["THEATER", "MOVIES"], 
    "PLTR": ["PALANTIR", "KARP"],
    "HOOD": ["ROBINHOOD"],
    "BTC":  ["BITCOIN", "CRYPTO"]
}

def extract_date(text):
    # Try to find a date in the text, otherwise default to "2025-12-26" (current simulation time)
    # Regex for "Month DD, YYYY"
    match = re.search(r'(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}', text)
    if match:
        try:
            date_obj = datetime.strptime(match.group(0), "%B %d, %Y")
            return date_obj.strftime("%Y-%m-%d")
        except:
            pass
    return "2025-12-26" # Default
