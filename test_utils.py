from utils import extract_ticker

test_cases = [
    ("I love Tesla cars!", "TSLA"),
    ("Elon is crazy", "TSLA"),
    ("My iPhone is broken", "AAPL"),
    ("Windows 11 update", "MSFT"),
    ("Holding GameStop via DRS", "GME"),
    ("Just bought a generic car", None),
    ("Going to the movies", "AMC"),
    ("NVDA is mooning", "NVDA"),
    ("Amazon prime day", "AMZN"),
    # New S&P 500 Tests
    ("Should I buy UnitedHealth?", "UNH"),
    ("Visa payments are down", "V"), 
    ("Big short on Exxon Mobil", "XOM"),
    ("Target is having a sale", None), # Common word collision -> Should match None
    ("Buying Target stock calls", "TGT"), # Context provided -> Should match TGT
    ("Is the pool open?", None),
    ("Shorting Pool Corporation", "POOL"),
    ("Key to success", None),
    ("Long on KeyCorp", "KEY")
]

print("--- Testing Ticker Extraction ---")
for text, expected in test_cases:
    result = extract_ticker(text)
    status = "PASS" if result == expected else f"FAIL (Expected {expected}, Got {result})"
    print(f"'{text}' -> {result} : {status}")
