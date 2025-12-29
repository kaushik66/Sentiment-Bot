import pandas as pd
import numpy as np
import os
import argparse

def calculate_nsr(price_file, output_file):
    """
    Mission 1: The Personality Engine
    Calculates News Sensitivity Ratio (NSR) for each ticker.
    NSR = Avg Abs Return (News Days) / Avg Abs Return (Normal Days)
    News Day = Volume > 2.5 * 30-day Moving Average Volume
    """
    print(f"Loading price history from {price_file}...")
    if not os.path.exists(price_file):
        print("Price file not found.")
        return

    df = pd.read_csv(price_file)
    df['Date'] = pd.to_datetime(df['Date'])
    
    # Ensure sorted by Ticker and Date
    df = df.sort_values(['Ticker', 'Date'])
    
    tickers = df['Ticker'].unique()
    print(f"Analyzing personalities for {len(tickers)} tickers...")
    
    results = []
    
    for ticker in tickers:
        t_data = df[df['Ticker'] == ticker].copy()
        
        if len(t_data) < 60:
            print(f"Skipping {ticker}: Insufficient history ({len(t_data)} days).")
            # Default fallback
            nsr = 1.5
            results.append({"Ticker": ticker, "NSR": nsr, "Type": "Default (Low Data)"})
            continue
            
        # Calculate Returns (Absolute)
        t_data['Return'] = t_data['Close'].pct_change()
        t_data['Abs_Return'] = t_data['Return'].abs()
        
        # Calculate Volume MA (30 days)
        t_data['Vol_MA30'] = t_data['Volume'].rolling(window=30).mean()
        
        # Identify News Days (Volume Spike > 2.5x MA)
        # We start checking after 30 days
        valid_data = t_data.dropna(subset=['Vol_MA30', 'Abs_Return'])
        
        news_days = valid_data[valid_data['Volume'] > 2.5 * valid_data['Vol_MA30']]
        normal_days = valid_data[valid_data['Volume'] <= 2.5 * valid_data['Vol_MA30']]
        
        if len(news_days) < 3:
            # Not enough news events to judge personality
            nsr = 1.5 
            ptype = "Default (Quiet)"
        else:
            avg_news_ret = news_days['Abs_Return'].mean()
            avg_norm_ret = normal_days['Abs_Return'].mean()
            
            if avg_norm_ret == 0:
                nsr = 1.0 # Should not happen often
            else:
                nsr = avg_news_ret / avg_norm_ret
                
            ptype = "Calculated"
            
        # Cap NSR reasonably (e.g., 5.0 max) to avoid infinite explosions
        nsr = min(nsr, 5.0)
        nsr = max(nsr, 1.0) # Sensitivity shouldn't be less than 1 (unless it's a stablecoin?)
        
        print(f"Ticker: {ticker} | News Days: {len(news_days)} | NSR: {nsr:.2f} ({ptype})")
        
        results.append({
            "Ticker": ticker,
            "NSR": round(nsr, 2),
            "News_Days_Count": len(news_days),
            "Type": ptype
        })
        
    # Save Results
    results_df = pd.DataFrame(results)
    results_df.to_csv(output_file, index=False)
    print(f"\nSaved stock personalities to {output_file}")
    print(results_df.head())

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--price", default="stooq_history.csv", help="Path to price history")
    parser.add_argument("--output", default="stock_personalities.csv", help="Output path")
    args = parser.parse_args()
    
    calculate_nsr(args.price, args.output)
