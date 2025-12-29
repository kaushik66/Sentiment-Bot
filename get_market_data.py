import yfinance as yf
import pandas as pd
import json
import os

def load_tickers():
    """Loads tickers from sp500.json or defaults to a sample list."""
    if os.path.exists('sp500.json'):
        with open('sp500.json', 'r') as f:
            data = json.load(f)
            return [item['ticker'] for item in data]
    else:
        # Fallback if file missing
        return ["AAPL", "MSFT", "GOOGL", "AMZN", "NVDA", "TSLA", "META", "JPM", "V", "PG"]

def fetch_market_data(tickers, period="2y"):
    """
    Fetches historical data for multiple tickers at once.
    Returns a Long-Format DataFrame.
    """
    print(f"Fetching data for {len(tickers)} tickers over {period}...")
    
    # Bulk download 
    # auto_adjust=True fixes splits/dividends
    # group_by='ticker' makes it easier to stack later, or default 'column'
    raw_data = yf.download(tickers, period=period, interval="1d", auto_adjust=True, group_by='ticker', threads=True)
    
    # Check if data is empty
    if raw_data.empty:
        print("No data fetched.")
        return pd.DataFrame()

    # Reshape from Wide to Long
    # yfinance multi-ticker output is MultiIndex columns: (Ticker, PriceType)
    # We want: Date, Ticker, Close, Open, etc.
    
    # Stack the column levels to move Ticker into rows
    long_df = raw_data.stack(level=0) 
    
    # Now index is (Date, Ticker). We want them as columns.
    long_df.reset_index(inplace=True)
    
    # Rename columns explicitly for clarity
    # yfinance output names might vary slightly, but usually: Date, Ticker, Close...
    long_df.rename(columns={'level_1': 'Ticker'}, inplace=True)
    
    # Ensure Date is standard format
    long_df['Date'] = pd.to_datetime(long_df['Date']).dt.date
    
    print(f"Data fetched! Shape: {long_df.shape}")
    return long_df

if __name__ == "__main__":
    tickers = load_tickers()
    # Limit to first 50 for speed testing, or full list?
    # User asked for S&P 500 bulk downloader. Let's do all if possible, but maybe limit for this env if it's too slow.
    # Let's try 50 for safety in this environment. 500 might timeout.
    # Actually, yfinance handles threading well. Let's try full list but catch errors.
    
    try:
        df = fetch_market_data(tickers)
        if not df.empty:
            df.to_csv("sp500_history.csv", index=False)
            print("Saved to sp500_history.csv")
            print(df.head())
    except Exception as e:
        print(f"Error fetching data: {e}")
