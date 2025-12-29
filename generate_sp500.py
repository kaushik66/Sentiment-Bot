import pandas as pd
import json

def fetch_sp500():
    print("Fetching S&P 500 table from Wikipedia...")
    try:
        # Wikipedia maintains a reliable list
        url = "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies"
        tables = pd.read_html(url)
        df = tables[0] # The first table is usually the constituents list
        
        # Keep only symbol and security name
        data = []
        for index, row in df.iterrows():
            ticker = row['Symbol']
            name = row['Security']
            data.append({"ticker": ticker, "name": name})
            
        print(f"Successfully fetched {len(data)} companies.")
        
        with open('sp500.json', 'w') as f:
            json.dump(data, f, indent=4)
        print("Saved to sp500.json")
        
    except Exception as e:
        print(f"Error fetching data: {e}")
        # Fallback to a small sample if network fails (for demonstration)
        fallback = [
             {"ticker": "AAPL", "name": "Apple Inc."},
             {"ticker": "MSFT", "name": "Microsoft Corporation"},
             {"ticker": "AMZN", "name": "Amazon.com Inc."},
             {"ticker": "NVDA", "name": "NVIDIA Corporation"},
             {"ticker": "GOOGL", "name": "Alphabet Inc. (Class A)"},
             {"ticker": "TSLA", "name": "Tesla, Inc."},
             {"ticker": "META", "name": "Meta Platforms, Inc."},
             {"ticker": "BRK.B", "name": "Berkshire Hathaway Inc."},
             {"ticker": "V", "name": "Visa Inc."},
             {"ticker": "JNJ", "name": "Johnson & Johnson"},
             {"ticker": "WMT", "name": "Walmart Inc."},
             {"ticker": "PG", "name": "Procter & Gamble"},
             {"ticker": "JPM", "name": "JPMorgan Chase & Co."},
             {"ticker": "MA", "name": "Mastercard Incorporated"},
             {"ticker": "UNH", "name": "UnitedHealth Group Incorporated"},
             {"ticker": "HD", "name": "The Home Depot, Inc."},
             {"ticker": "BAC", "name": "Bank of America Corporation"},
             {"ticker": "XOM", "name": "Exxon Mobil Corporation"},
             {"ticker": "PFE", "name": "Pfizer Inc."},
             {"ticker": "DIS", "name": "The Walt Disney Company"},
             {"ticker": "KO", "name": "The Coca-Cola Company"},
             {"ticker": "CSCO", "name": "Cisco Systems, Inc."},
             {"ticker": "AZN", "name": "AstraZeneca PLC"},
             {"ticker": "ORCL", "name": "Oracle Corporation"},
             {"ticker": "NKE", "name": "Nike, Inc."},
             {"ticker": "INTC", "name": "Intel Corporation"},
             {"ticker": "AMD", "name": "Advanced Micro Devices, Inc."},
             {"ticker": "VZ", "name": "Verizon Communications Inc."},
             {"ticker": "T", "name": "AT&T Inc."},
             {"ticker": "C", "name": "Citigroup Inc."},
             {"ticker": "WFC", "name": "Wells Fargo & Company"},
             {"ticker": "BA", "name": "The Boeing Company"},
             {"ticker": "MMM", "name": "3M Company"},
             {"ticker": "HON", "name": "Honeywell International Inc."},
             {"ticker": "IBM", "name": "International Business Machines Corporation"},
             {"ticker": "GE", "name": "General Electric Company"},
             {"ticker": "CAT", "name": "Caterpillar Inc."},
             {"ticker": "GS", "name": "The Goldman Sachs Group, Inc."},
             {"ticker": "MS", "name": "Morgan Stanley"},
             {"ticker": "AXP", "name": "American Express Company"},
             {"ticker": "BLK", "name": "BlackRock, Inc."},
             {"ticker": "SPG", "name": "Simon Property Group, Inc."},
             {"ticker": "PLD", "name": "Prologis, Inc."},
             {"ticker": "AMT", "name": "American Tower Corporation"},            
             # And generic common word collision risks for testing
             {"ticker": "TGT", "name": "Target Corporation"},
             {"ticker": "KEY", "name": "KeyCorp"},
             {"ticker": "POOL", "name": "Pool Corporation"},
             {"ticker": "LOW", "name": "Lowe's Companies, Inc."},
        ]
        with open('sp500.json', 'w') as f:
            json.dump(fallback, f, indent=4)
        print("Saved fallback sample to sp500.json")

if __name__ == "__main__":
    fetch_sp500()
