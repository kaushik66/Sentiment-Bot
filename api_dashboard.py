
import pandas as pd
import numpy as np
import datetime
import os
import json
import time
import tensorflow as tf
from tensorflow.keras.models import load_model
from dotenv import load_dotenv

# Import our modules
try:
    import monitor_news_v2 as news_engine
    from download_sp500_direct import download_ticker_data
except ImportError as e:
    print(f"❌ Module Import Error: {e}")
    print("Ensure monitor_news_v2.py and download_sp500_direct.py are in the same directory.")
    exit(1)

# Suppress warnings
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

# Config
TARGET_FILE = 'valid_signals.csv'
MODEL_PATH = 'models/hype_predictor_v3.keras'
SENTIMENT_FILE = 'live_sentiment.csv'
OUTPUT_FILE = 'dashboard_final.json'
MODEL_PATH = 'models/hype_predictor_v3.keras'
SENTIMENT_FILE = 'live_sentiment.csv'
OUTPUT_FILE = 'dashboard_final.json'
FRONTEND_JS_FILE = 'frontend-react/public/dashboard_data.js'
CACHE_DIR = 'market_cache'
ALIAS_FILE = 'sp500.json'

def load_tickers():
    try:
        df = pd.read_csv(TARGET_FILE)
        return df['Ticker'].tolist()
    except Exception as e:
        print(f"❌ Error loading tickers: {e}")
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
                 
                 # Drop duplicates, keeping the FIRST (newest) for each ticker
                 df = df.drop_duplicates(subset=['Ticker'], keep='first')
                 
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
    
    print(f"   Fetching history for {len(tickers)} stocks...")
    
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

def recreate_context_and_features(stock_map):
    """Step 2b: Recreate Proxy & Features (V3 Logic)"""
    print("   Reconstructing Market Index & Engineering Features...")
    
    # 1. Build Internal Market Index
    returns_matrix = pd.DataFrame()
    for t, df in stock_map.items():
        if 'Close' in df.columns:
            returns_matrix[t] = df['Close'].pct_change()
            
    if returns_matrix.empty:
        return {}

    # Mkt_Vol (Dispersion) -> VIX Proxy
    # Logic from training: VIX_Close = Mkt_Vol * 100 * sqrt(252)
    mkt_vol = returns_matrix.std(axis=1)
    vix_proxy_series = mkt_vol * 100 * np.sqrt(252)
    
    # 2. Build X for each stock
    lstm_inputs = {}
    
    for ticker, df in stock_map.items():
        try:
            # Join with VIX Proxy
            df['VIX_Close'] = vix_proxy_series
            df['VIX_Close'] = df['VIX_Close'].fillna(method='ffill').fillna(20.0) # Default VIX 20
            
            # Technicals (V3)
            # RSI (14)
            delta = df['Close'].diff()
            gain = (delta.where(delta > 0, 0)).rolling(14).mean()
            loss = (-delta.where(delta < 0, 0)).rolling(14).mean()
            rs = gain / loss.replace(0, 1)
            df['RSI'] = 100 - (100 / (1 + rs))
            df['RSI'] = df['RSI'].fillna(50)
            
            # Vol_Z (30)
            vol_mean = df['Volume'].rolling(30).mean()
            vol_std = df['Volume'].rolling(30).std()
            df['Vol_Z'] = (df['Volume'] - vol_mean) / vol_std.replace(0, 1)
            df['Vol_Z'] = df['Vol_Z'].fillna(0)
            
            # Range
            df['Range'] = (df['High'] - df['Low']) / df['Open']
            
            # Pct Change
            df['Stock_Pct_Change'] = df['Close'].pct_change().fillna(0)
            
            # Features: ['Stock_Pct_Change', 'Vol_Z', 'Range', 'VIX_Close', 'RSI']
            features = ['Stock_Pct_Change', 'Vol_Z', 'Range', 'VIX_Close', 'RSI']
            df = df.fillna(0)
            
            last_60 = df.iloc[-60:].copy()
            if len(last_60) == 60:
                lstm_inputs[ticker] = last_60[features].values
                
        except Exception as e:
            pass
            
    return lstm_inputs

def run_predictions(lstm_inputs):
    """Step 2c: Run Model"""
    print("🧠 Running Predictions...")
    try:
        model = load_model(MODEL_PATH)
    except:
        print("❌ Model file not found.")
        return {}
        
    probs = {}
    for ticker, X in lstm_inputs.items():
        X_in = np.array([X])
        p = float(model.predict(X_in, verbose=0)[0][0])
        probs[ticker] = p
        
    return probs

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
    lstm_inputs = recreate_context_and_features(stock_map)
    predictions = run_predictions(lstm_inputs)
    
    # 3. Fusion logic
    print("\n⚗️  STEP 3: Fusing Signals (Compass + Engine)...")
    
    final_output = []
    
    for ticker in tickers:
        # Get Price (for display)
        price = 0.0
        if ticker in stock_map and not stock_map[ticker].empty:
            price = round(stock_map[ticker]['Close'].iloc[-1], 2)
            
        # Get LSTM Prob
        lstm_prob = predictions.get(ticker, 0.0)
        
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
                
        # Effective Sentiment
        eff_sentiment = sentiment * impact
        
        # 4. Tagging
        tag = "WAIT"
        
        # BULLISH_BREAKOUT
        if lstm_prob > 0.7 and eff_sentiment > 0.3:
            tag = "BULLISH_BREAKOUT"
            
        # BEARISH_DUMP
        elif lstm_prob > 0.7 and eff_sentiment < -0.3:
            tag = "BEARISH_DUMP"
            
        # DIVERGENCE (Tech says move, Sentiment sleeps)
        elif lstm_prob > 0.8 and impact < 0.2:
            tag = "DIVERGENCE_WATCH"
            
        # VOLATILITY_WATCH (High Tech, Confused Sentiment)
        elif lstm_prob > 0.7:
             tag = "VOLATILITY_WATCH"
             
        # Add to list
        item = {
            "Ticker": ticker,
            "Price": price,
            "LSTM_Confidence": round(lstm_prob, 2),
            "News_Sentiment": round(sentiment, 2),
            "News_Impact": round(impact, 2),
            "News_Impact": round(impact, 2),
            "Headline": headline,
            "URL": url, # Pass URL or empty
            "Signal": tag
        }
        
        final_output.append(item)
        
        # Print significant ones
        if tag != "WAIT":
            print(f"   🚨 {ticker}: {tag} (Prob {lstm_prob:.2f}, Sent {sentiment:.2f})")
            
    # Final Structure with Timestamp
    payload = {
        "last_updated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "signals": final_output
    }
            
    # Save JSON
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(payload, f, indent=2)

    # Save JS for frontend (Bypasses CORS for local viewing)
    with open(FRONTEND_JS_FILE, 'w') as f:
        json_str = json.dumps(payload, indent=2)
        f.write(f"const DASHBOARD_DATA = {json_str};")
        
    print(f"\n✅ Final Dashboard saved to {OUTPUT_FILE}")
    print(f"✅ Frontend Data updated at {FRONTEND_JS_FILE}")
    
if __name__ == "__main__":
    generate_dashboard()
