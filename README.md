# Sentiment Bot 🤖📈

A sophisticated AI-powered stock analysis platform that combines technical analysis with advanced sentiment analysis using **Google Gemini Pro** and **FinBERT**. The system features a real-time React dashboard, automated daily data refresh via GitHub Actions, and an integrated trading portfolio simulator.

![Dashboard Preview](frontend-react/public/vite.svg)

## 🚀 Key Features

- **AI News Radar**: Monitors RSS feeds (Yahoo Finance, CNBC, etc.) and uses **Gemini 1.5 Flash** to classify news impact (Critical vs. Noise) and sentiment.
- **Technical Analysis**: Automated pattern recognition, RSI divergence, and volatility analysis.
- **Predictive Engine**: Integrates technicals and sentiment to flag "Bullish Breakout", "Bearish Dump", or "Divergence" opportunities.
- **Interactive Dashboard**: Modern React-based UI with real-time price updates (via Tiingo IEX), interactive charts, and sector heatmaps.
- **Portfolio Simulator**: Paper trading engine with portfolio tracking, unrealized P&L, and transaction history.
- **Automated Cloud Operations**: GitHub Actions workflow refreshes analysis data daily at market open (09:00 UTC).

## 🛠️ Architecture

- **Backend**: Flask (Python)
- **Frontend**: React + Vite + TailwindCSS
- **Database**: Firebase Firestore (User Data), SQLite (News Cache)
- **AI Models**: Google Gemini (News), TensorFlow/Keras (Price Prediction)
- **Data Sources**: Tiingo (Market Data), RSS Feeds (News)

## 📦 Installation & Setup

### Prerequisites

- Python 3.9+
- Node.js & npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/kaushik66/Sentiment-Bot.git
cd Sentiment-Bot
```

### 2. Backend Setup

```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Frontend Setup

```bash
cd frontend-react
npm install
npm install -g vite # Optional, if not installed
```

---

## 🔑 Configuration

### Environment Variables

You need to configure API keys for the system to work.

**Backend (`.env` in root):**
Create a `.env` file in the project root:

```env
TIINGO_API_KEY=your_tiingo_key
GEMINI_API_KEY=your_gemini_key
```

**Frontend (`frontend-react/.env`):**
Create a `.env` file in `frontend-react/`:

```env
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

> **Note:** The `FIREBASE_API_KEY` is also needed environment variable for GitHub Actions if you fork this repo.

---

## 🏃‍♂️ Usage

### Running Locally

1.  **Start the Backend API:**

    ```bash
    # In project root
    source venv/bin/activate
    python backend_api.py
    # Runs on http://localhost:5001
    ```

2.  **Start the Frontend:**

    ```bash
    # In frontend-react/
    npm run dev
    # Runs on http://localhost:5173
    ```

### Manual Data Refresh

To update the dashboard data (prices, news, predictions) manually:

```bash
python api_dashboard.py
```

This generates `dashboard_final.json` and updates `frontend-react/public/dashboard_data.js`.

---

## ☁️ Cloud Deployment (GitHub Actions)

This project includes a **Zero-Config** GitHub Actions workflow (`.github/workflows/daily_refresh.yml`) that runs daily to refresh stock data.

### Setup for Fork/Clone:

1.  **Enable Actions**: Go to Settings -> Actions -> General -> "Allow all actions and reusable workflows".
2.  **Permissions**: Go to Settings -> Actions -> General -> Workflow permissions -> Select **"Read and write permissions"**.
3.  **Secrets**: Add the following Repository Secrets:
    - `TIINGO_API_KEY`
    - `GEMINI_API_KEY`
    - `FIREBASE_API_KEY`

The workflow runs automatically at **09:00 UTC**. You can also trigger it manually from the "Actions" tab.

---

## 📂 Project Structure

```
Sentiment-Bot/
├── api_dashboard.py        # Main Data Refresh Script (Orchestrator)
├── backend_api.py          # Flask API Server
├── monitor_news_v2.py      # AI News Agent (Gemini)
├── trade_engine.py         # Portfolio/Trading Logic
├── download_sp500_direct.py # Stock Data Downloader
├── frontend-react/         # React Application source
├── .github/workflows/      # Cloud Automation
├── market_cache/           # Cached CSV price data
├── news_cache.db           # SQLite database for news deduplication
└── requirements.txt        # Python dependencies
```

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.
