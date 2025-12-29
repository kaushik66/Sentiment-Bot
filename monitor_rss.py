import feedparser
import pandas as pd
import datetime
import os
import json
import argparse
import re
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# RSS Feeds
FEEDS = [
    "https://finance.yahoo.com/news/rssindex",
    "https://www.cnbc.com/id/10000664/device/rss/rss.html",
    "http://feeds.marketwatch.com/marketwatch/topstories/",
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

def analyze_impact_with_gemini(headline, ticker, model):
    """
    Uses Gemini to analyze headline sentiment and impact.
    Returns: (sentiment_score, impact_score, category)
    """
    prompt = f"""Analyze this financial news headline for {ticker}:
"{headline}"

Return JSON with:
- "sentiment_score": float from -1.0 (very negative) to +1.0 (very positive)
- "impact_score": Gove increased wightage for actual events and minimum weightage for analyst opinions.
- "category": brief description of event type

Examples:
- "Company announces record earnings" -> {{"sentiment_score": 0.9, "impact_score": 1.0, "category": "Financial Earnings"}}
- "Analyst upgrades stock to buy" -> {{"sentiment_score": 0.7, "impact_score": 0.2, "category": "Analyst Opinion"}}
"""
    
    try:
        response = model.generate_content(
            prompt,
            generation_config={"response_mime_type": "application/json"}
        )
        result = json.loads(response.text)
        return (
            result.get('sentiment_score', 0.0),
            result.get('impact_score', 0.5),
            result.get('category', 'Unknown')
        )
    except Exception as e:
        print(f"Gemini API error: {e}")
        # Fallback to neutral values
        return (0.0, 0.5, "API Error")

def analyze_news(tickers, output_file, alias_path="sp500.json", api_key=None):
    print("--- Mission 2: News Radar (Gemini-Powered) ---")
    print(f"Monitoring feeds for {len(tickers)} tickers: {tickers}")
    
    alias_map = load_aliases(alias_path)
    
    # Configure Gemini
    if api_key:
        genai.configure(api_key=api_key)
    else:
        print("Warning: No API key provided. Set GEMINI_API_KEY environment variable.")
        genai.configure(api_key=os.environ.get('GEMINI_API_KEY', ''))
    
    model = genai.GenerativeModel('models/gemini-2.5-flash')
    print("Gemini configured.")
    
    news_signals = []
    
    for url in FEEDS:
        print(f"Polling {url}...")
        try:
            feed = feedparser.parse(url)
            for entry in feed.entries:
                title = entry.title
                matched_tickers = []
                
                # Check all tickers in the headline
                for t in tickers:
                    is_match = False
                    match_source = ""
                    
                    pattern_ticker = r"(?<![''])\b" + re.escape(t) + r"\b(?![''])"
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
                        matched_tickers.append((t, match_source))
                
                # Process each matched ticker
                for ticker, match_source in matched_tickers:
                    print(f"MATCH: {ticker} [{match_source}] in '{title}'")
                    
                    # Analyze with Gemini
                    sentiment, impact, category = analyze_impact_with_gemini(title, ticker, model)
                    print(f" -> Sentiment: {sentiment:.2f} | Impact: {impact} | Category: {category}")
                    
                    news_signals.append({
                        "Date": datetime.datetime.now().strftime('%Y-%m-%d'),
                        "Ticker": ticker,
                        "Headline": title,
                        "News_Score": round(sentiment, 4),
                        "Impact_Score": impact,
                        "Category": category,
                        "Source": url
                    })
                    
        except Exception as e:
            print(f"Error parsing feed {url}: {e}")

    results_df = pd.DataFrame(news_signals)
    if results_df.empty:
        print("No matches finding in current news cycle for watched tickers.")
        results_df = pd.DataFrame(columns=["Date", "Ticker", "Headline", "News_Score", "Impact_Score", "Category", "Source"])
    else:
        print(f"Found {len(results_df)} news signals.")
        print(results_df[['Ticker', 'News_Score', 'Impact_Score', 'Category']].head())
        
    results_df.to_csv(output_file, index=False)
    print(f"Saved to {output_file}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--tickers", default="stock_personalities.csv", help="Source of tickers to watch")
    parser.add_argument("--output", default="news_signals.csv", help="Output file")
    parser.add_argument("--aliases", default="sp500.json", help="Alias mapping file")
    parser.add_argument("--api-key", help="Gemini API key (or set GEMINI_API_KEY env var)")
    args = parser.parse_args()
    
    targets = load_target_tickers(args.tickers)
    if not targets:
        targets = ["AAPL", "AMZN", "TSLA", "NVDA", "MSFT"]
        
    analyze_news(targets, args.output, args.aliases, args.api_key)
