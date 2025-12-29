import json
import re
import torch
import pandas as pd
from transformers import pipeline
from utils import extract_ticker, extract_date
import datetime

# --- CONFIGURATION ---
# A simple list of popular tickers to look for. 
# In a pro version, you'd load a full CSV of all S&P500 tickers.
WATCHLIST = {
    "NVDA": ["NVIDIA", "NVDA"],
    "TSLA": ["TESLA", "TSLA", "ELON"],
    "AAPL": ["APPLE", "AAPL", "IPHONE"],
    "AMD":  ["AMD", "ADVANCED MICRO"],
    "INTC": ["INTEL", "INTC"],
    "AMZN": ["AMAZON", "AMZN"],
    "GME":  ["GAMESTOP", "GME"],
    "PLTR": ["PALANTIR", "PLTR"]
}

# 1. SETUP FINBERT
# We use a pipeline for easy sentiment analysis
print("Loading FinBERT... (this takes 10-20 seconds)")
try:
    classifier = pipeline('text-classification', model='ProsusAI/finbert', return_all_scores=True)
except Exception as e:
    print(f"Warning: GPU/MPS might not be available or compatible. Falling back to CPU if needed. Error: {e}")
    # Fallback or just let it crash if model download fails (unlikely in this environment if internet is up)
    classifier = pipeline('text-classification', model='ProsusAI/finbert', return_all_scores=True)


def get_sentiment_score(text):
    """
    Returns a scalar score from -1 (Negative) to +1 (Positive)
    """
    # FinBERT has a limit of 512 tokens. We truncate to be safe.
    text = text[:512]
    
    try:
        results = classifier(text)[0]
        # Convert list of dicts to a flat dictionary: {'positive': 0.9, 'negative': 0.01, ...}
        scores = {res['label']: res['score'] for res in results}
        
        # Logic: Positive Prob - Negative Prob
        # (Neutral lowers the absolute value, pushing it towards 0, which is correct)
        compound_score = scores.get('positive', 0) - scores.get('negative', 0)
        return compound_score
    except Exception as e:
        print(f"Error: {e}")
        return 0

# 2. LOAD DATA
with open('reddit_samples.json', 'r') as f:
    posts = json.load(f)

print(f"\nLoaded {len(posts)} posts. Starting Analysis...\n")

# 3. ANALYZE
results = []

for post in posts:
    # A. Score the Title (High Importance)
    title_score = get_sentiment_score(post['title'])
    
    # B. Score the Comments (Context)
    comment_scores = []
    if post['comments']:
        for comment in post['comments']:
            s = get_sentiment_score(comment)
            comment_scores.append(s)
        
        # Average comment sentiment
        avg_comment_score = sum(comment_scores) / len(comment_scores)
    else:
        avg_comment_score = 0
    
    # C. Weighted Final Score
    # We trust the title more (60%) than the comments (40%)
    final_score = (title_score * 0.6) + (avg_comment_score * 0.4)
    
    # D. Extract Metadata
    # Search title and comments for ticker
    ticker = extract_ticker(post['title'])
    if not ticker and post['comments']:
        # check first few comments
        for c in post['comments'][:3]:
            ticker = extract_ticker(c)
            if ticker: break
            
    # Default to SPY if none found? Or leave empty? Let's leave empty.
    
    # Extract Date (Prefer Timestamp)
    if 'created_utc' in post and post['created_utc']:
        date_str = datetime.datetime.fromtimestamp(post['created_utc']).strftime('%Y-%m-%d')
    else:
        date_str = extract_date(post['title'])
        if not date_str:
             date_str = datetime.datetime.now().strftime('%Y-%m-%d')

    if ticker: # Only save if we found a relevant ticker
        results.append({
            "Date": date_str,
            "Ticker": ticker,
            "Title": post['title'][:50] + "...",
            "Sentiment_Score": round(final_score, 4)
        })

# 4. SAVE & DISPLAY
if results:
    df = pd.DataFrame(results)
    print(df)
    df.to_csv('sentiment_results.csv', index=False)
    print("\nSaved results to sentiment_results.csv")
else:
    print("No tickers found in the sample data.")