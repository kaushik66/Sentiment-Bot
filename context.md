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

## Component: The Correlation Engine (Truth Detector)

### Objective
Filter out "Noise Stocks" that do not react to Volume/Sentiment, ensuring the LSTM trades only predictable assets.

### Logic: The "Volume Proxy" Test
Since historical sentiment text is unavailable, we use **Trading Volume** as a proxy for attention.
1. **Input:** Historical OHLCV data.
2. **Feature Engineering:**
   - **Target (Y):** Future Price Volatility. `(High - Low) / Open`.
   - **Signal (X):** Volume Z-Score. `(Vol - Mean_30) / Std_30`.
3. **Statistical Test:** Granger Causality (`statsmodels`).
   - Test if `Signal(t)` predicts `Target(t+k)` for lags $k \in [1, 2, 3, 4, 5]$.
   - **Significance:** P-Value must be $< 0.05$.
4. **Output:** A list of "Reactive" tickers.s