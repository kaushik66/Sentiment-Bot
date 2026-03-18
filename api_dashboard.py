
import pandas as pd
import numpy as np
import datetime
import os
import json
import time
from dotenv import load_dotenv

# Import our modules
try:
    import monitor_news_v2 as news_engine
    from download_sp500_direct import download_ticker_data
except ImportError as e:
    print(f"❌ Module Import Error: {e}")
    print("Ensure monitor_news_v2.py and download_sp500_direct.py are in the same directory.")
    exit(1)

# Config
TARGET_FILE = 'valid_signals.csv'
SENTIMENT_FILE = 'live_sentiment.csv'
OUTPUT_FILE = 'dashboard_final.json'
FRONTEND_JS_FILE = 'frontend-react/public/dashboard_data.js'
CACHE_DIR = 'market_cache'
ALIAS_FILE = 'sp500.json'

def load_tickers():
    try:
        import sqlite3
        conn = sqlite3.connect("data/stock_vault.db")
        df = pd.read_sql_query("SELECT DISTINCT ticker FROM prices", conn)
        conn.close()
        
        tickers = df['ticker'].tolist()
        print(f"✅ Loaded {len(tickers)} distinct tickers from stock_vault.db")
        return tickers
    except Exception as e:
        print(f"❌ Error loading tickers from stock_vault.db: {e}")
        return []

def run_news_agent(tickers):
    """Step 1: Wake Up the News Agent"""
    print("\n📰 STEP 1: Waking up News Agent V2 (Cluster Scan)...")
    
    try:
        # Run the V2 monitor
        # It handles its own reading of sp500.json if needed, but we pass tickers explicitly
        news_engine.run_monitor(tickers, 'sp500.json')
        
        # Load and clean the CSV to get LATEST signals only
        if os.path.exists(SENTIMENT_FILE):
            df = pd.read_csv(SENTIMENT_FILE)
            
            if 'Date' in df.columns and not df.empty:
                 # Convert to datetime for correct sorting
                 df['Date'] = pd.to_datetime(df['Date'], errors='coerce')
                 
                 # Sort by Date DESC (newest first)
                 df = df.sort_values('Date', ascending=False)
                 
                 # Drop duplicates? NO, we want All News now.
                 # Only drop exact duplicates (same ticker same time same headline)
                 # df = df.drop_duplicates(subset=['Ticker'], keep='first') 
                 pass
                 
            print(f"✅ News Agent processed history. Using {len(df)} latest signals.")
            return df
        else:
            print("⚠️ No sentiment file created yet.")
            return pd.DataFrame()
            
    except Exception as e:
        print(f"❌ News Agent failed: {e}")
        return pd.DataFrame()

def fetch_market_data(tickers):
    """Step 2a: Fetch Price History (Direct)"""
    print("\n📉 STEP 2: Waking up Technical Brain (Data Fetching)...")
    
    api_key = os.environ.get('TIINGO_API_KEY')
    if not api_key:
        print("❌ TIINGO_API_KEY missing. Cannot fetch live prices.")
        return {}
        
    start_date = datetime.datetime.now() - datetime.timedelta(days=120)
    end_date = datetime.datetime.now()
    
    stock_map = {}
    print(f"   Fetching history for {len(tickers)} stocks...")
    
    # Ensure cache directory exists
    if not os.path.exists(CACHE_DIR):
        os.makedirs(CACHE_DIR)
    
    for ticker in tickers:
        try:
            # 1. Check Cache
            cache_path = os.path.join(CACHE_DIR, f"{ticker}.csv")
            is_cached = False
            
            if os.path.exists(cache_path):
                # Check age (e.g. 12 hours)
                mtime = os.path.getmtime(cache_path)
                if (time.time() - mtime) < (12 * 3600):
                    df = pd.read_csv(cache_path, index_col='Date', parse_dates=True)
                    stock_map[ticker] = df
                    is_cached = True
                    # print(f"   Using cache for {ticker}")
            
            # 2. Fetch if not cached
            if not is_cached:
                time.sleep(1.5) # Politeness delay
                df = download_ticker_data(ticker, api_key, start_date, end_date)
                
                if not df.empty:
                    # Normalize cols
                    df.columns = [c.capitalize() for c in df.columns]
                    # Fix specific Tiingo quirks
                    if 'Adjclose' in df.columns: df.rename(columns={'Adjclose': 'Adj Close'}, inplace=True)
                    if 'Symbol' not in df.columns: df['Symbol'] = ticker
                    if 'Date' in df.columns: 
                        df['Date'] = pd.to_datetime(df['Date'])
                        df = df.set_index('Date').sort_index()
                    
                    # Save to Cache
                    df.to_csv(cache_path)
                    stock_map[ticker] = df
                    
        except Exception as e:
            # Silent fail for individual stocks to keep dashboard running
            print(f"   ⚠️ Failed {ticker}: {e}")
            pass
            
    print(f"✅ Live data acquired for {len(stock_map)} stocks.")
    return stock_map

def generate_dashboard():
    # Load Environment
    load_dotenv()
    
    tickers = load_tickers()
    if not tickers: 
        print("❌ Valid signals file empty/missing.")
        return

    # 1. News
    news_df = run_news_agent(tickers)
    
    # 2. Tech
    stock_map = fetch_market_data(tickers)
    
    # 3. Fusion logic (Sentiment + Tech rules)
    print("\n⚗️  STEP 3: Processing Signals...")
    
    final_output = []
    
    for ticker in tickers:
        # Get Price (for display)
        price = 0.0
        if ticker in stock_map and not stock_map[ticker].empty:
            price = round(stock_map[ticker]['Close'].iloc[-1], 2)
        
        # Get Sentiment Details
        # Handle multiple headlines: take the most impactful/recent
        # If news_df exists
        sentiment = 0.0
        impact = 0.0
        headline = "No significant news"
        url = "#"
        
        if not news_df.empty:
            t_news = news_df[news_df['Ticker'] == ticker]
            if not t_news.empty:
                # Take row with max Impact
                best_row = t_news.loc[t_news['Impact_Score'].idxmax()]
                sentiment = float(best_row['News_Score'])
                impact = float(best_row['Impact_Score'])
                headline = best_row['Headline']
                
                # Get URL safely
                raw_url = best_row.get('URL', '')
                source_url = best_row.get('Source', '')
                
                # Logic: URL > Source (if http) > '#'
                final_url = '#'
                
                if pd.notna(raw_url) and str(raw_url).strip() != '':
                     final_url = str(raw_url)
                elif pd.notna(source_url) and str(source_url).startswith('http') and 'rssindex' not in str(source_url):
                     final_url = str(source_url)
                     
                url = final_url
            
            # --- NEW: Collect All News for Dropdown ---
            all_news = []
            for _, row in t_news.iterrows():
                # Only include valid headlines
                if pd.isna(row['Headline']): continue
                
                # Get URL
                r_url = row.get('URL', '')
                if pd.isna(r_url) or not str(r_url).startswith('http'):
                    r_url = row.get('Source', '#')
                    
                all_news.append({
                    "Headline": row['Headline'],
                    "URL": r_url if str(r_url).startswith('http') else '#',
                    "Category": row.get('Category', 'General'),
                    "Sentiment": float(row['News_Score']),
                    "Impact": float(row['Impact_Score']),
                    "Date": str(row['Date'])
                })
        else:
            all_news = []
                
        # Effective Sentiment
        eff_sentiment = sentiment * impact
        
        # 4. Tagging (Based on sentiment only now)
        tag = "WAIT"
        
        if eff_sentiment > 0.4:
            tag = "BULLISH_BREAKOUT"
        elif eff_sentiment < -0.4:
            tag = "BEARISH_DUMP"
        elif impact > 0.8:
             tag = "VOLATILITY_WATCH"
             
        # Add to list
        item = {
            "Ticker": ticker,
            "Price": price,
            "News_Sentiment": round(sentiment, 2),
            "News_Impact": round(impact, 2),
            "News_Impact": round(impact, 2),
            "Headline": headline,
            "URL": url, # Pass URL or empty
            "All_News": all_news,
            "Signal": tag
        }
        
        final_output.append(item)
        
        # Print significant ones
        if tag != "WAIT":
            print(f"   🚨 {ticker}: {tag} (Sent {sentiment:.2f}, Impact {impact:.2f})")
            
    # Final Structure with Timestamp
    payload = {
        "last_updated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "signals": final_output
    }
            
    # Save JSON
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(payload, f, indent=2)

    # Save JS for frontend (Create dir if missing)
    frontend_dir = os.path.dirname(FRONTEND_JS_FILE)
    if not os.path.exists(frontend_dir):
        os.makedirs(frontend_dir, exist_ok=True)

    with open(FRONTEND_JS_FILE, 'w') as f:
        json_str = json.dumps(payload, indent=2)
        f.write(f"const DASHBOARD_DATA = {json_str};")
        
    print(f"\n✅ Final Dashboard saved to {OUTPUT_FILE}")
    print(f"✅ Frontend Data updated at {FRONTEND_JS_FILE}")
    
if __name__ == "__main__":
    try:
        generate_dashboard()
    except Exception as e:
        import traceback
        traceback.print_exc()
        print(f"❌ FATAL ERROR: {e}")
        exit(1)
