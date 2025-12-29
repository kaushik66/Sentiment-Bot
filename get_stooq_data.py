import pandas_datareader.data as web
import pandas as pd
import json
import os
import datetime

def load_tickers():
    """
    Loads tickers from sentiment_results.csv to fetch data only for relevant stocks.
    Fallbacks to sp500.json or defaults if no results found.
    """
    csv_file = 'sentiment_results.csv'
    if os.path.exists(csv_file):
        print(f"Loading tickers from {csv_file}...")
        try:
            df = pd.read_csv(csv_file)
            if 'Ticker' in df.columns:
                tickers = df['Ticker'].unique().tolist()
                print(f"Found {len(tickers)} unique tickers: {tickers}")
                return tickers
        except Exception as e:
            print(f"Error reading {csv_file}: {e}")

    # Fallback
    if os.path.exists('sp500.json'):
        with open('sp500.json', 'r') as f:
            data = json.load(f)
            return [item['ticker'] for item in data]
    else:
        return ["AAPL", "MSFT", "GOOGL", "AMZN", "NVDA", "TSLA", "META"]

def fetch_stooq_data(tickers):
    """
    Fetches daily close prices from Stooq.
    """
    start = datetime.datetime(2023, 1, 1)
    end = datetime.datetime.now()
    
    print(f"Fetching data for {len(tickers)} tickers from Stooq...")
    
    # Stooq often works better with chunks or one-by-one if list is huge
    # But pandas_datareader can handle a list.
    # Note: Stooq might not find all tickers if they lack suffixes, but major US ones usually work.
    
    try:
        # pandas_datareader returns a MultiIndex DataFrame (Attributes, Tickers)
        # or just Close prices if we ask? Stooq usually gives OHLCV.
        df = web.DataReader(tickers, 'stooq', start, end)
        
        # Stooq returns data with date as index.
        # Columns might be MultiIndex (Attribute, Ticker) like ('Close', 'AAPL')
        # Or if single ticker, just columns.
        
        if df.empty:
            print("No data returned.")
            return pd.DataFrame()

        print(f"Raw shape: {df.shape}")
        
        # We only care about Close price for this analysis?
        # User said "Daily Close prices".
        # Stooq via pandas_datareader returns: High, Low, Open, Close, Volume for each ticker.
        # It comes as a MultiIndex columns: level 0 = Attributes, level 1 = Tickers
        
        if isinstance(df.columns, pd.MultiIndex):
            # level 0 attributes (Close, High...), level 1 Tickers
            # We want 'Close' for all tickers
            try:
                close_df = df['Close']
            except KeyError:
                print("No 'Close' column found in Stooq response.")
                return pd.DataFrame()
            # Stack the Ticker level (usually level 1) to rows
            # This gives index (Date, Symbols) and columns (Close, High, Low, Open, Volume)
            stacked = df.stack()
            stacked = stacked.reset_index()
            
            # Rename columns if needed
            # Expected: Date, Symbols, Close, Volume...
            # 'Symbols' might be named 'Symbols' or 'Ticker' depending on version
            # Let's inspect column names dynamically or force rename
            cols = stacked.columns.tolist()
            
            # Identify Date and Ticker columns
            # Usually Date is valid, Ticker might be 'Symbols'
            rename_map = {}
            for c in cols:
                if c == 'Symbols': rename_map[c] = 'Ticker'
                
            stacked = stacked.rename(columns=rename_map)
            
            # Select required columns
            final_df = stacked[['Date', 'Ticker', 'Close', 'Volume']].copy()
            
        else:
            # Single ticker case or flat dataframe
            # If single ticker, columns are just Attributes (Close, Volume...)
            # We need to add Ticker column
            if len(tickers) == 1:
                final_df = df.reset_index()
                final_df['Ticker'] = tickers[0]
                final_df = final_df[['Date', 'Ticker', 'Close', 'Volume']]
            else:
                # Fallback for flat structure with suffix (e.g. Close_AMZN) - rare for Stooq reader
                print("Unknown dataframe structure. Attempting to parse...")
                # If it's flat and not a single ticker, it's likely an error or unexpected format.
                # We'll try to get Close and Volume if they exist, but it's less robust.
                if 'Close' in df.columns and 'Volume' in df.columns:
                    final_df = df.reset_index()
                    # If there's no Ticker column, we can't assign it meaningfully for multiple stocks.
                    # This path should ideally not be hit if multiple tickers are passed to DataReader.
                    print("Warning: Flat structure with multiple tickers, Ticker column might be missing.")
                    final_df = final_df[['Date', 'Close', 'Volume']]
                else:
                    print("Error: Could not parse Close and Volume from flat structure.")
                    return pd.DataFrame()

        # Sort and Clean
        final_df['Date'] = pd.to_datetime(final_df['Date'])
        final_df = final_df.sort_values(['Ticker', 'Date'])
        
        print(f"Success! \n{final_df.head()}")
        
        final_df.to_csv('stooq_history.csv', index=False)
        print("Saved to stooq_history.csv")
        return final_df

    except Exception as e:
        print(f"Error fetching from Stooq: {e}")
        return pd.DataFrame()

if __name__ == "__main__":
    tickers = load_tickers()
    # Use all tickers for full run
    test_tickers = tickers
    print(f"Fetch list: {test_tickers}")
    
    df = fetch_stooq_data(test_tickers)
    
    if not df.empty:
        print("Success!")
        print(df.head())
        # If success, run for all? Maybe too slow for this interaction.
        # I'll update the file to run for all tickers if initial test passes.
        # For now, let's verify Stooq works.
        df.to_csv("stooq_history.csv", index=False)
        print("Saved to stooq_history.csv")
