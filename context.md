# Project Context: Reddit Sentiment Stock Predictor

## Goal

Build a Python-based tool that scrapes financial subreddits (e.g., r/wallstreetbets), analyzes the sentiment of posts and comments using FinBERT, and correlates this sentiment with stock price movements.

## Current Status & Constraints

1. **Reddit API Blocked:** We are waiting for official PRAW API keys.
2. **Workaround Active:** We are currently using a "JSON Proxy" method (`requests.get` with `.json` appended to URLs) to scrape data without authentication.
3. **Model:** We are using `ProsusAI/finbert` via Hugging Face `transformers` for sentiment scoring.

## Codebase Summary

### 1. Data Collection (`scraper.py`)

- Fetches top X posts from a subreddit using the JSON workaround.
- Implements a "Two-Step" logic: First gets the post list, then visits each permalink to fetch top comments.
- Saves output to `reddit_samples.json`.
- **Constraint:** Must have `time.sleep(2)` between requests to avoid IP bans.

### 2. Analysis Engine (`analyze_sentiment.py`)

- Loads `reddit_samples.json`.
- Uses FinBERT pipeline to score Title and Comments separately.
- **Scoring Logic:** `(Title_Score * 0.6) + (Avg_Comment_Score * 0.4)`.
- **Ticker Extraction:** Simple Regex + Dictionary Watchlist (e.g., matching "$TSLA" or "NVIDIA").
- **Current Output:** A Pandas DataFrame with Ticker, Title, and Final Sentiment Score.

## Immediate Next Steps (The "Mission")

We need to connect this sentiment data to actual market data to see if it works.

1. **Filter:** Filter the results to only show rows where a valid Ticker was found.
2. **Market Data:** Use `yfinance` to fetch the stock price for that specific date (Open/Close) for the identified tickers.
3. **Correlation:** Compare the "Sentiment Score" with the "Day's Percent Change" in price.

## Phase 2 Update: Market Data & Prediction Logic

### 1. Market Data Strategy (Option 2)

We need a new script (`get_market_data.py`) to fetch historical price data.

- **Source:** `yfinance`
- **Scope:** All S&P 500 tickers (scraped from Wikipedia).
- **Format:** Daily resolution ('1d'), auto-adjusted (`auto_adjust=True`), unstacked to "Long Format" (Date, Ticker, Close).
- **Output:** Save to `sp500_history.csv`.

### 2. Prediction Model (The "Slope" Logic)

We need a new analysis script (`predict_moves.py`) that merges Sentiment Data with Market Data.

- **Inputs:** `reddit_samples.json` (Sentiment) and `sp500_history.csv` (Price).
- **The Core Feature:** Calculate "Slope Divergence" over a sliding window (e.g., 5 days).
  - **Slope A (Sentiment):** Linear regression slope of the 'Final Sentiment' score.
  - **Slope B (Price):** Linear regression slope of the 'Close' price.
- **The Signal:**
  - If Sentiment Slope is POSITIVE (> 0.1) ...
  - AND Price Slope is FLAT/NEGATIVE (< 0.05) ...
  - THEN Prediction = "Potential Breakout" (The crowd is hyping it, but price hasn't moved yet).

## Phase 3 Specs: Black Swan & News Logic

### 1. The "News Sensitivity" Ratio (NSR)

We need to calculate a "Personality" for each stock based on historical volume.

- **News Day Definition:** Volume > 2.5x the 30-day moving average.
- **NSR Formula:** (Avg Absolute Return on News Days) / (Avg Absolute Return on Normal Days).
- **Fallback:** If a stock has no "News Days" in history, default NSR = 1.5.

### 2. The "News Radar" Strategy (Mission 2)

We need a `monitor_rss.py` script to detect breaking news without API limits.

- **Source:** Use `feedparser` library to poll open RSS feeds (Yahoo Finance, CNBC, MarketWatch).
- **Matching Logic:** "Reverse Search" — scan headlines for Ticker Symbols (or company names) from our `sp500_history.csv`.
- **Output:** A list of active "News Signals" `{Ticker, Headline, FinBERT_Score}` for the current hour.

### 3. The Prediction Formula

The final price prediction must use this weighted logic:
$$P_{next} = P_{trend} \times (1 + J)$$
Where **Shock Factor ($J$)** is:
$$J = \text{WeightedSentiment} \times \sigma_{daily} \times \text{Multiplier}$$

- **WeightedSentiment:** (0.7 _ NewsScore) + (0.3 _ RedditScore).
- **Multiplier:** - If `has_breaking_news` is True: Use the stock's specific **NSR**.
  - If False: Use **1.0**.

## Phase 3.5 Update: News Impact Logic

### 1. The Problem

We need to distinguish between **"Hard Events"** (Signal) and **"Analyst Chatter"** (Noise).

- "NVIDIA launches new GPU" -> High Impact (1.0)
- "Analyst predicts NVIDIA rise" -> Low Impact (0.2)

### 2. The Solution: Zero-Shot Classification

We will use the `facebook/bart-large-mnli` model to categorize headlines into two buckets.

**Bucket A: CRITICAL LABELS (Impact = 1.0)**

- "New Product or Technology"
- "Financial Earnings or Guidance"
- "Merger, Acquisition, or Partnership"
- "Executive Management Change"
- "Legal or Regulatory Action"
- "Scandal, Fraud, or Controversy"
- "Operational or Security Incident"
- "Bankruptcy or Restructuring"

**Bucket B: NOISE LABELS (Impact = 0.2)**

- "Stock Price Prediction"
- "Analyst Opinion or Upgrade/Downgrade"
- "Technical Analysis"
- "General Market News"

### 3. The "Safety Net" Rule

If the FinBERT Sentiment Score is **Extreme** (greater than 0.85 or less than -0.85), we **ignore the category** and force **Impact = 1.0**.
_Reasoning:_ Boring opinion pieces rarely have extreme emotional language. Extreme emotion usually implies a misclassified breaking event.

### 4. The Formula Update

Update the prediction formula in `predict_moves.py` to include this new variable:
$$ShockFactor = \text{WeightedSentiment} \times \sigma_{daily} \times \text{Multiplier} \times \mathbf{ImpactScore}$$
