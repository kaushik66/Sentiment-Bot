# Implement Price Correlation Script

import pandas as pd
import yfinance as yf
from datetime import datetime, timedelta

def get_price_change(ticker, date_str):
    """
    Fetches the open and close price for the given date and calculates % change.
    If date is today/future, might need to handle gracefully or use latest available.
    """
    try:
        
        # yfinance expects YYYY-MM-DD
        # We need to fetch a range to ensure we get the specific day's data
        start_date = datetime.strptime(date_str, "%Y-%m-%d")
        end_date = start_date + timedelta(days=1)
        
        # Fetch data
        stock = yf.Ticker(ticker)
        # period="1d" might give today if start/end not specified, so use start/end
        df = stock.history(start=start_date.strftime("%Y-%m-%d"), end=end_date.strftime("%Y-%m-%d"))
        
        if df.empty:
            # Maybe it's a weekend or holiday? Or future?
            # Attempt to fetch with period="5d" and grab the specific date row
            df = stock.history(period="5d")
        
        if df.empty:
             return "N/A (No Data Found)"

        # Check if index is DatetimeIndex
        if not isinstance(df.index, pd.DatetimeIndex):
            # Try to convert if possible, or just fail
            try:
                df.index = pd.to_datetime(df.index)
            except:
                return "N/A (Invalid Index)"
            
        # Convert index to string for easy lookup
        str_index = df.index.strftime("%Y-%m-%d")
        
        if date_str in str_index:
            row = df.loc[date_str]
            # If multiple rows (shouldn't happen with unique index), take first
            if isinstance(row, pd.DataFrame):
                row = row.iloc[0]
                
            open_price = row['Open']
            close_price = row['Close']
            
            if open_price == 0: return "N/A"
            
            pct_change = ((close_price - open_price) / open_price) * 100
            return round(pct_change, 2)
        else:
             return "N/A (No Data for Date)"
             
    except Exception as e:
        return f"Error: {e}"

def main():
    print("Loading sentiment_results.csv...")
    try:
        df = pd.read_csv("sentiment_results.csv")
    except FileNotFoundError:
        print("Error: sentiment_results.csv not found. Run analyze_sentiment.py first.")
        return

    print(f"Found {len(df)} records. Fetching market data...\n")
    
    results = []
    
    for index, row in df.iterrows():
        ticker = row['Ticker']
        date = row['Date']
        sentiment = row['Sentiment_Score']
        title = row['Title']
        
        print(f"Processing {ticker} on {date}...")
        real_change = get_price_change(ticker, date)
        
        results.append({
            "Date": date,
            "Ticker": ticker,
            "Sentiment Score": sentiment,
            "Real Stock Change %": real_change,
            # "Title": title # Optional, maybe too long for table
        })
        
    print("\n--- SENTIMENT VS REALITY ---")
    final_df = pd.DataFrame(results)
    print(final_df.to_string(index=False))

if __name__ == "__main__":
    main()
