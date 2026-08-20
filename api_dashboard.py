
import pandas as pd
import numpy as np
import datetime
import os
import json
import time
from dotenv import load_dotenv

# Import our modules
try:
    from engines import monitor_news_v2 as news_engine
except ImportError as e:
    print(f"❌ Module Import Error: {e}")
    print("Ensure monitor_news_v2.py is accessible via the engines directory.")
    exit(1)

# Config
TARGET_FILE = 'valid_signals.csv'
SENTIMENT_FILE = 'live_sentiment.csv'
OUTPUT_FILE = 'dashboard_final.json'
FRONTEND_JS_FILE = 'frontend-react/public/dashboard_data.js'
CACHE_DIR = 'market_cache'
ALIAS_FILE = 'sp500.json'

def track_sentiment_momentum(ticker, avg_conviction, n_articles):
    import sqlite3
    import datetime
    today = datetime.datetime.now().strftime('%Y-%m-%d')
    conn = sqlite3.connect("data/stock_vault.db")
    c = conn.cursor()
    
    # Ensure structure exists
    c.execute('''
        CREATE TABLE IF NOT EXISTS sentiment_history (
            ticker TEXT,
            date TEXT,
            daily_score REAL,
            n_articles INTEGER,
            PRIMARY KEY (ticker, date)
        )
    ''')
    
    # Insert today's payload
    c.execute('''
        INSERT OR REPLACE INTO sentiment_history (ticker, date, daily_score, n_articles)
        VALUES (?, ?, ?, ?)
    ''', (ticker, today, avg_conviction, n_articles))
    conn.commit()
    
    # Calculate 7-day moving average
    c.execute('''
        SELECT daily_score FROM sentiment_history 
        WHERE ticker = ? AND date <= ?
        ORDER BY date DESC LIMIT 7
    ''', (ticker, today))
    
    rows = c.fetchall()
    conn.close()
    
    if len(rows) > 0:
        avg = sum([r[0] for r in rows]) / len(rows)
        delta = round(avg_conviction - avg, 2)
        return round(avg, 2), delta
    else:
        return avg_conviction, 0.0

def sanitize_for_json(data):
    if isinstance(data, dict):
        return {k: sanitize_for_json(v) for k, v in data.items()}
    elif isinstance(data, list):
        return [sanitize_for_json(v) for v in data]
    elif isinstance(data, (np.int64, np.int32, np.int16)):
        return int(data)
    elif isinstance(data, (np.float64, np.float32, np.float16, float)):
        if np.isnan(data) or np.isinf(data):
            return 0.0
        return float(data)
    elif isinstance(data, np.ndarray):
        return sanitize_for_json(data.tolist())
    return data

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
    """Step 2a: Fetch Price History (Local SQLite Vault)"""
    print("\n📉 STEP 2: Waking up Technical Brain (Local DB Fetch)...")
    
    import sqlite3
    db_path = "data/stock_vault.db"
    if not os.path.exists(db_path):
        print(f"❌ Database not found: {db_path}")
        return {}
        
    stock_map = {}
    print(f"   Fetching history for {len(tickers)} stocks from local vault...")
    
    try:
        conn = sqlite3.connect(db_path)
        for ticker in tickers:
            # Query last 120 days of data for this ticker
            query = """
                SELECT date as Date, open as Open, high as High, low as Low, close as Close, volume as Volume 
                FROM prices 
                WHERE ticker = ? 
                ORDER BY date DESC LIMIT 120
            """
            df = pd.read_sql_query(query, conn, params=(ticker,))
            
            if not df.empty:
                # Ensure Date is index and sorted chronologically (DESC -> ASC)
                df['Date'] = pd.to_datetime(df['Date'])
                df = df.set_index('Date').sort_index()
                stock_map[ticker] = df
        conn.close()
    except Exception as e:
        print(f"   ❌ DB Fetch Error: {e}")
            
    print(f"✅ Local data acquired for {len(stock_map)} stocks.")
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
        sentiment = 0.0
        impact = 0.0
        headline = "No significant news"
        url = "#"
        
        # New Structured Aggregations (Reset per ticker)
        total_articles = 0
        bullish_pct = 0
        bearish_pct = 0
        neutral_pct = 0
        avg_conviction = 0.0
        vernacular_label = "Mixed / Battleground"
        seven_day_avg = 0.0
        sentiment_delta_points = 0.0
        all_news = []
        
        if not news_df.empty:
            t_news = news_df[news_df['Ticker'] == ticker]
            if not t_news.empty:
                # Take row with max Impact (or just first row for UI reference)
                best_row = t_news.loc[t_news['News_Score'].idxmax() if 'News_Score' in t_news.columns and not t_news['News_Score'].empty else t_news.index[0]]
                sentiment = float(best_row.get('News_Score', 0.0))
                impact = float(best_row.get('Impact_Score', 1.0))
                headline = best_row.get('Headline', '')
                
                # Get URL safely
                raw_url = best_row.get('URL', '')
                source_url = best_row.get('Source', '')
                final_url = '#'
                if pd.notna(raw_url) and str(raw_url).strip() != '':
                     final_url = str(raw_url)
                elif pd.notna(source_url) and str(source_url).startswith('http') and 'rssindex' not in str(source_url):
                     final_url = str(source_url)
                url = final_url
            
                # --- Structured Sentiment Aggregator ---
                total_articles = len(t_news)
                
                # Mathematical routing (New schema vs Fallback)
                target_col = 'Alignment' if 'Alignment' in t_news.columns else 'Category'
                
                bulls = (t_news[target_col].str.contains('Bullish', case=False, na=False)).sum()
                bears = (t_news[target_col].str.contains('Bearish', case=False, na=False)).sum()
                neutrals = total_articles - bulls - bears
                
                if total_articles > 0:
                    bullish_pct = round((bulls / total_articles) * 100, 1)
                    bearish_pct = round((bears / total_articles) * 100, 1)
                    neutral_pct = round((neutrals / total_articles) * 100, 1)
                    avg_conviction = round(t_news['News_Score'].astype(float).mean(), 2)
                    seven_day_avg, sentiment_delta_points = track_sentiment_momentum(ticker, avg_conviction, total_articles)
                    
                # Vernacular Logic Evaluator
                if bullish_pct > 65:
                    vernacular_label = "Overwhelmingly Bullish"
                elif bullish_pct > 40 and bearish_pct < 30:
                    vernacular_label = "Cautiously Optimistic"
                elif bearish_pct > 65:
                    vernacular_label = "Heavy Distribution / Panic"
                elif bearish_pct > 40 and bullish_pct < 30:
                    vernacular_label = "Bearish Pressure"
                else:
                    vernacular_label = "Mixed / Battleground"
                
                # Collect All News Dropdown Array
                for _, row in t_news.iterrows():
                    if pd.isna(row['Headline']): continue
                    r_url = row.get('URL', '')
                    if pd.isna(r_url) or not str(r_url).startswith('http'): r_url = row.get('Source', '#')
                    
                    # Extract pure descriptive category, fallback to 'General'
                    cat_val = row.get('Category', 'General')
                    
                    all_news.append({
                        "Headline": row['Headline'],
                        "URL": r_url if str(r_url).startswith('http') else '#',
                        "Category": cat_val,
                        "Sentiment": float(row.get('News_Score', 0.0)),
                        "Date": str(row['Date'])
                    })
                
        # Existing tag logic fallback for cards
        eff_sentiment = sentiment * impact
        tag = "WAIT"
        if eff_sentiment > 0.4: tag = "BULLISH_BREAKOUT"
        elif eff_sentiment < -0.4: tag = "BEARISH_DUMP"
        elif impact > 0.8: tag = "VOLATILITY_WATCH"
             
        # Add to Payload list
        item = {
            "Ticker": ticker,
            "Price": price,
            "News_Sentiment": round(sentiment, 2),
            "Headline": headline,
            "URL": url,
            "All_News": all_news,
            "Signal": tag,
            "Sentiment_Distribution": {
                "total_articles": total_articles,
                "bullish_pct": bullish_pct,
                "bearish_pct": bearish_pct,
                "neutral_pct": neutral_pct,
                "avg_conviction": avg_conviction,
                "label": vernacular_label,
                "seven_day_avg": seven_day_avg,
                "sentiment_delta_points": sentiment_delta_points
            },
            "AI_Confidence": round(abs(sentiment), 2) if total_articles > 0 else 0.0
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
    sanitized_payload = sanitize_for_json(payload)
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(sanitized_payload, f, indent=2)

    # Save JS for frontend (Create dir if missing)
    frontend_dir = os.path.dirname(FRONTEND_JS_FILE)
    if not os.path.exists(frontend_dir):
        os.makedirs(frontend_dir, exist_ok=True)

    with open(FRONTEND_JS_FILE, 'w') as f:
        json_str = json.dumps(sanitized_payload, indent=2)
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
