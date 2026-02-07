#!/usr/bin/env python3
"""
S&P 500 Direct Tiingo Downloader (REST API)
Bypasses pandas-datareader to avoid concat bugs.
"""

import os
import time
import json
import pandas as pd
import requests
from bs4 import BeautifulSoup
from datetime import datetime, timedelta

def get_sp500_tickers(limit=50):
    """Fetch S&P 500 tickers from Wikipedia"""
    print(f"📡 Fetching S&P 500 tickers from Wikipedia...")
    
    url = "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies"
    
    try:
        response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        table = soup.find('table', {'class': 'wikitable'})
        
        tickers = []
        for row in table.find_all('tr')[1:]:
            cells = row.find_all('td')
            if cells:
                ticker = cells[0].text.strip().replace('.', '-')
                tickers.append(ticker)
        
        limited_tickers = tickers[:limit]
        print(f"✅ Selected top {len(limited_tickers)} tickers")
        return limited_tickers
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return []

def download_ticker_data(ticker, api_key, start_date, end_date):
    """Download data for a single ticker using Tiingo REST API"""
    
    # Tiingo API endpoint
    url = f"https://api.tiingo.com/tiingo/daily/{ticker}/prices"
    
    params = {
        'startDate': start_date.strftime('%Y-%m-%d'),
        'endDate': end_date.strftime('%Y-%m-%d'),
        'token': api_key
    }
    
    headers = {
        'Content-Type': 'application/json'
    }
    
    response = requests.get(url, params=params, headers=headers)
    response.raise_for_status()
    
    data = response.json()
    
    if data:
        df = pd.DataFrame(data)
        df['symbol'] = ticker
        return df
    else:
        return pd.DataFrame()

def download_all_data(tickers, api_key, output_dir='data/sp500_history'):
    """Download data for all tickers"""
    print(f"\n📥 Downloading via Tiingo REST API...")
    
    os.makedirs(output_dir, exist_ok=True)
    
    end_date = datetime.now()
    start_date = end_date - timedelta(days=5*365)
    
    successful = []
    failed = []
    
    for i, ticker in enumerate(tickers, 1):
        filepath = os.path.join(output_dir, f'{ticker}.csv')
        
        # Check if already exists
        if os.path.exists(filepath):
            print(f"  [{i}/{len(tickers)}] Skipping {ticker} (already exists)")
            successful.append(ticker)
            continue
            
        print(f"  [{i}/{len(tickers)}] Downloading {ticker}...", end=' ')
        
        try:
            df = download_ticker_data(ticker, api_key, start_date, end_date)
            
            if not df.empty:
                # Standardize columns
                df = df.rename(columns={
                    'date': 'Date',
                    'symbol': 'Symbol',
                    'open': 'Open',
                    'high': 'High',
                    'low': 'Low',
                    'close': 'Close',
                    'adjClose': 'Adj Close',
                    'volume': 'Volume'
                })
                
                # Select columns
                cols = ['Date', 'Symbol', 'Open', 'High', 'Low', 'Close', 'Adj Close', 'Volume']
                df = df[[c for c in cols if c in df.columns]]
                
                # Save
                filepath = os.path.join(output_dir, f'{ticker}.csv')
                df.to_csv(filepath, index=False)
                
                successful.append(ticker)
                print(f"✅ ({len(df)} rows)")
            else:
                failed.append(ticker)
                print("⚠️ Empty")
                
        except Exception as e:
            failed.append(ticker)
            print(f"❌ {str(e)[:50]}")
        
        # Polite delay
        if i < len(tickers):
            time.sleep(1)
    
    print(f"\n📊 Summary: ✅ {len(successful)}/{len(tickers)} successful")
    return successful

def combine_data(tickers, input_dir='data/sp500_history', output_file='data/sp500_stocks.csv'):
    """Combine CSVs into master file"""
    print(f"\n🔗 Combining {len(tickers)} files...")
    
    all_data = []
    for ticker in tickers:
        filepath = os.path.join(input_dir, f'{ticker}.csv')
        if os.path.exists(filepath):
            df = pd.read_csv(filepath)
            all_data.append(df)
    
    if all_data:
        combined = pd.concat(all_data, ignore_index=True)
        combined = combined.sort_values(['Symbol', 'Date']).reset_index(drop=True)
        
        combined.to_csv(output_file, index=False)
        
        file_size = os.path.getsize(output_file) / (1024 * 1024)
        print(f"✅ Saved: {output_file}")
        print(f"   Rows: {len(combined)} | Size: {file_size:.2f} MB")
        print(f"   Symbols: {combined['Symbol'].nunique()}")
        print(f"\n📊 Sample:")
        print(combined.head(10))
        return True
    return False

def main():
    print("=" * 60)
    print("S&P 500 DIRECT DOWNLOADER (Tiingo REST API)")
    print("=" * 60)
    
    api_key = os.environ.get('TIINGO_API_KEY')
    if not api_key:
        try:
            from dotenv import load_dotenv
            load_dotenv()
            api_key = os.environ.get('TIINGO_API_KEY')
        except:
            pass
    
    if not api_key:
        print("❌ No API key found")
        return
    
    tickers = get_sp500_tickers(limit=50)
    if not tickers:
        return
    
    successful = download_all_data(tickers, api_key)
    if successful:
        combine_data(successful)
        print("\n✨ Complete! Ready for: ./venv/bin/python analyze_correlation.py")

if __name__ == "__main__":
    main()
