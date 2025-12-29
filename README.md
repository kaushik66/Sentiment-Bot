# Sentiment Bot

A sophisticated sentiment analysis pipeline that processes Reddit posts, analyzes stock sentiment using FinBERT, correlates with price movements, and predicts potential breakouts using **Google Gemini AI** for news impact classification.

## Features

- **Reddit Scraping**: Extracts stock mentions from r/wallstreetbets
- **Sentiment Analysis**: Uses FinBERT to analyze sentiment scores
- **News Radar**: Monitors RSS feeds (Yahoo Finance, CNBC, MarketWatch) with Gemini-powered impact classification
- **Price Prediction**: Polynomial regression + volatility-adjusted sentiment model
- **News Impact Classifier**: Distinguishes "hard news" (mergers, earnings) from "noise" (analyst chatter)
- **Stock Personality Engine**: Calculates News Sensitivity Ratio (NSR) for each stock

## Installation

```bash
# Clone the repository
git clone https://github.com/kaushik66/Sentiment-Bot.git
cd Sentiment-Bot

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

## Configuration

### Gemini API Key (Required for News Analysis)

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Set it as an environment variable:

```bash
export GEMINI_API_KEY='your-api-key-here'
```

Or pass it directly:

```bash
python monitor_rss.py --api-key YOUR_KEY
```

## Usage

### Full Pipeline

```bash
# 1. Scrape Reddit posts
python scraper.py

# 2. Analyze sentiment
python analyze_sentiment.py

# 3. Fetch price data
python get_stooq_data.py

# 4. Calculate stock personalities
python calculate_sensitivity.py

# 5. Monitor breaking news
python monitor_rss.py

# 6. Generate predictions
python predict_moves.py
```

### Output

The pipeline generates several CSV files:

- `sentiment_results.csv`: Final predictions with price targets
- `news_signals.csv`: Breaking news with impact scores
- `stock_personalities.csv`: NSR values for each stock
- `stooq_history.csv`: Historical price data

## Project Structure

```
Sentiment Bot/
├── scraper.py              # Reddit data collection
├── analyze_sentiment.py    # FinBERT sentiment analysis
├── monitor_rss.py          # News radar (Gemini-powered)
├── predict_moves.py        # Price prediction engine
├── calculate_sensitivity.py # NSR calculation
├── get_stooq_data.py       # Historical data fetcher
├── utils.py                # Ticker extraction utilities
└── context.md              # Phase documentation
```

## Key Concepts

### News Sensitivity Ratio (NSR)

Measures how much a stock price moves on news days vs normal days. High NSR stocks (like META: 5.0) react violently to news.

### Impact Classification

Gemini AI classifies news into:

- **Critical (1.0)**: Earnings, mergers, product launches
- **Noise (0.2)**: Analyst opinions, price predictions

### Prediction Formula

```
Predicted Price = Trend Price × (1 + (Weighted Sentiment × Volatility × NSR × Impact))
```

Where:

- **Trend Price**: 3rd-degree polynomial regression on 2-year history
- **Weighted Sentiment**: 70% news + 30% Reddit (if news exists)
- **Volatility**: 90-day standard deviation
- **NSR**: Stock-specific news sensitivity
- **Impact**: Gemini's classification (0.2 or 1.0)

## License

MIT

## Credits

Built with:

- Google Gemini 1.5 Flash (news classification)
- FinBERT (sentiment analysis)
- Stooq (price data)
- Reddit API (community sentiment)
