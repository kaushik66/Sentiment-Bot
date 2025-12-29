import feedparser
import pandas as pd
import datetime
import os
import json
from transformers import pipeline
import argparse
import re

# RSS Feeds
FEEDS = [
    "https://finance.yahoo.com/news/rssindex",
    "https://www.cnbc.com/id/10000664/device/rss/rss.html",
    "http://feeds.marketwatch.com/marketwatch/topstories/",
]

# Zero-Shot Labels
CRITICAL_LABELS = [
    "New Product or Technology",
    "Financial Earnings or Guidance",
    "Merger, Acquisition, or Partnership",
    "Executive Management Change",
    "Legal or Regulatory Action",
    "Scandal, Fraud, or Controversy",
    "Operational or Security Incident",
    "Bankruptcy or Restructuring"
]

NOISE_LABELS = [
    "Stock Price Prediction",
    "Analyst Opinion or Upgrade/Downgrade",
    "Technical Analysis",
    "General Market News"
]

def load_target_tickers(path="stock_personalities.csv"):
    if os.path.exists(path):
        df = pd.read_csv(path)
        return set(df['Ticker'].unique().tolist())
    return set()

def load_aliases(path="sp500.json"):
    """
    Loads company names and simplifies them for matching.
    Returns: dict { Ticker: [Alias1, Alias2] }
    """
    if not os.path.exists(path):
        return {}
    
    with open(path, 'r') as f:
        data = json.load(f)
        
    aliases = {}
    suffixes = [
        r",? Inc\.?", r",? Corporation", r",? Corp\.?", r",? Company", 
        r",? Co\.?", r",? PLC", r",? Ltd\.?", r",? Group", r"The ", r"\.com"
    ]
    
    for item in data:
        ticker = item['ticker']
        full_name = item['name']
        simple_name = full_name
        for suff in suffixes:
            simple_name = re.sub(suff, "", simple_name, flags=re.IGNORECASE)
        simple_name = simple_name.strip()
        
        if ticker not in aliases:
            aliases[ticker] = []
        if len(simple_name) > 2:
            aliases[ticker].append(simple_name)
    return aliases

def get_impact_score(headline, finbert_score, z_classifier):
    """
    Determines if news is Critical (1.0) or Noise (0.2).
    """
    # 1. Safety Net
    if abs(finbert_score) > 0.85:
        return 1.0, "Extreme Sentiment (Override)"
        
    # 2. Zero-Shot Classification
    all_labels = CRITICAL_LABELS + NOISE_LABELS
    try:
        result = z_classifier(headline, candidate_labels=all_labels)
        top_label = result['labels'][0]
        
        if top_label in CRITICAL_LABELS:
            return 1.0, top_label
        else:
            return 0.2, top_label
    except Exception as e:
        print(f"Zero-shot error: {e}")
        return 0.2, "Error (Default Noise)"

def analyze_news(tickers, output_file, alias_path="sp500.json"):
    print("--- Mission 2: News Radar (Enhanced + Impact) ---")
    print(f"Monitoring feeds for {len(tickers)} tickers: {tickers}")
    
    alias_map = load_aliases(alias_path)
    
    # Load Models
    print("Loading FinBERT...")
    sent_classifier = pipeline("text-classification", model="ProsusAI/finbert", device=-1)
    
    print("Loading Zero-Shot Classifier (BART)...")
    z_classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli", device=-1)
    
    news_signals = []
    
    for url in FEEDS:
        print(f"Polling {url}...")
        try:
            feed = feedparser.parse(url)
            for entry in feed.entries:
                title = entry.title
                matched_ticker = None
                
                # Check tickers
                for t in tickers:
                    is_match = False
                    match_source = ""
                    
                    pattern_ticker = r"(?<!['’])\b" + re.escape(t) + r"\b(?!['’])"
                    if len(t) == 1:
                        if re.search(pattern_ticker, title):
                            is_match = True; match_source = "Symbol"
                    else:
                        if re.search(pattern_ticker, title, re.IGNORECASE):
                            is_match = True; match_source = "Symbol"
                            
                    if not is_match and t in alias_map:
                        for alias in alias_map[t]:
                            pattern_alias = r"(?<!\w)" + re.escape(alias) + r"(?!\w)"
                            if re.search(pattern_alias, title, re.IGNORECASE):
                                is_match = True; match_source = f"Name ({alias})"
                                break
                    
                    if is_match:
                        matched_ticker = t
                        print(f"MATCH: {matched_ticker} [{match_source}] in '{title}'")
                        break
                
                if matched_ticker:
                    # Sentiment
                    res = sent_classifier(title)
                    label = res[0]['label']
                    score = res[0]['score']
                    final_score = score if label == 'positive' else -score if label == 'negative' else 0.0
                    
                    # Impact
                    impact, category = get_impact_score(title, final_score, z_classifier)
                    print(f" -> Category: {category} | Impact: {impact}")
                    
                    news_signals.append({
                        "Date": datetime.datetime.now().strftime('%Y-%m-%d'),
                        "Ticker": matched_ticker,
                        "Headline": title,
                        "News_Score": round(final_score, 4),
                        "Impact_Score": impact,
                        "Category": category,
                        "Source": url
                    })
                    
        except Exception as e:
            print(f"Error parsing feed {url}: {e}")

    results_df = pd.DataFrame(news_signals)
    if results_df.empty:
        print("No matches finding in current news cycle for watched tickers.")
        # Ensure correct columns exist even if empty
        results_df = pd.DataFrame(columns=["Date", "Ticker", "Headline", "News_Score", "Impact_Score", "Category", "Source"])
    else:
        print(f"Found {len(results_df)} news signals.")
        print(results_df.head())
        
    results_df.to_csv(output_file, index=False)
    print(f"Saved to {output_file}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--tickers", default="stock_personalities.csv", help="Source of tickers to watch")
    parser.add_argument("--output", default="news_signals.csv", help="Output file")
    parser.add_argument("--aliases", default="sp500.json", help="Alias mapping file")
    args = parser.parse_args()
    
    targets = load_target_tickers(args.tickers)
    if not targets:
        targets = ["AAPL", "AMZN", "TSLA", "NVDA", "MSFT"]
        
    analyze_news(targets, args.output, args.aliases)
