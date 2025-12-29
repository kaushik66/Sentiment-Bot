import pandas as pd
import numpy as np
import argparse
import os

def load_data(sentiment_file, price_file, personality_file, news_file):
    """
    Loads all data sources for Phase 3.
    """
    print(f"Loading Sentiment: {sentiment_file}")
    try:
        sent_df = pd.read_csv(sentiment_file)
        sent_df['Date'] = pd.to_datetime(sent_df['Date'])
    except: return None, None, None, None

    print(f"Loading Prices: {price_file}")
    try:
        price_df = pd.read_csv(price_file)
        price_df['Date'] = pd.to_datetime(price_df['Date'])
    except: return None, None, None, None
    
    # Optional files
    pers_df = pd.DataFrame()
    if os.path.exists(personality_file):
        print(f"Loading Personalities: {personality_file}")
        pers_df = pd.read_csv(personality_file)
        
    news_df = pd.DataFrame()
    if os.path.exists(news_file):
        print(f"Loading News Signals: {news_file}")
        news_df = pd.read_csv(news_file)
        news_df['Date'] = pd.to_datetime(news_df['Date'])

    return sent_df, price_df, pers_df, news_df

def predict_prices(sent_df, price_df, pers_df, news_df, poly_degree=3):
    """
    Phase 3 Prediction Engine.
    Uses Trend + Volatility + News Sensitivity (NSR).
    """
    common_tickers = set(sent_df['Ticker'].unique()).intersection(set(price_df['Ticker'].unique()))
    print(f"Analyzing {len(common_tickers)} common tickers...")
    
    reports = []
    
    for ticker in common_tickers:
        # Data Slices
        s_data = sent_df[sent_df['Ticker'] == ticker].sort_values('Date')
        p_data = price_df[price_df['Ticker'] == ticker].sort_values('Date')
        
        # Get NSR
        nsr = 1.5 # Default
        if not pers_df.empty:
            match = pers_df[pers_df['Ticker'] == ticker]
            if not match.empty:
                nsr = match.iloc[0]['NSR']
        
        # Regression Logic
        if len(p_data) < 30: continue
        
        p_data['Days'] = (p_data['Date'] - p_data['Date'].min()).dt.days
        x = p_data['Days'].values
        y = p_data['Close'].values
        
        try:
            coeffs = np.polyfit(x, y, poly_degree)
            poly_func = np.poly1d(coeffs)
        except: continue
        
        # Volatility
        recent = p_data.tail(90)
        vol = recent['Close'].pct_change().std()
        if pd.isna(vol): vol = 0.02
        
        # Iterate Sentiment Rows
        for idx, row in s_data.iterrows():
            sent_date = row['Date']
            sent_score = row['Sentiment_Score']
            
            # Check for News on this Date
            news_score = 0.0
            has_news = False
            news_headline = ""
            impact_score = 1.0 # Default if no news or no impact col (legacy compatible)
            category = "None"
            
            if not news_df.empty:
                # Check for news on same day
                n_match = news_df[(news_df['Ticker'] == ticker) & (news_df['Date'] == sent_date)]
                if not n_match.empty:
                    has_news = True
                    # Take average news score
                    news_score = n_match['News_Score'].mean()
                    news_headline = n_match.iloc[0]['Headline']
                    
                    # Impact Score Logic (Phase 3.5)
                    if 'Impact_Score' in n_match.columns:
                        # Use Max Impact (if multiple stories, the biggest one matters)
                        impact_score = n_match['Impact_Score'].max()
                        # Get category of the max impact item
                        best_row = n_match.loc[n_match['Impact_Score'].idxmax()]
                        category = best_row['Category'] if 'Category' in best_row else "Unknown"
                    else:
                        impact_score = 1.0 # Legacy fallback

            # Weighted Sentiment Formula
            if has_news:
                # 70% News, 30% Reddit
                weighted_score = (0.7 * news_score) + (0.3 * sent_score)
                multiplier = nsr # Viral Multiplier
                
                # Phase 3.5: Apply Impact Score
                # Shock = Score * Vol * NSR * Impact
                shock = weighted_score * vol * multiplier * impact_score
                
                note = f"News: {category} (Imp {impact_score})"
            else:
                weighted_score = sent_score
                multiplier = 1.0
                impact_score = 0.0 # No news impact
                shock = weighted_score * vol # Standard Reddit shock
                note = "Reddit Only"
                category = "None"
            
            # Trend Price
            days_from_start = (sent_date - p_data['Date'].min()).days
            trend_price = poly_func(days_from_start)
            
            # Predicted Price
            predicted_price = trend_price * (1 + shock)
            
            # Risk Level
            risk = "Normal"
            if abs(shock) > 0.03: 
                risk = "High"
                
            reports.append({
                "Date": sent_date,
                "Ticker": ticker,
                "Sentiment_Score": sent_score,
                "News_Score": round(news_score, 4) if has_news else 0,
                "Weighted_Score": round(weighted_score, 4),
                "NSR": nsr,
                "Volatility": round(vol, 4),
                "Impact_Score": impact_score,
                "Category": category,
                "Trend_Price": round(trend_price, 2),
                "Predicted_Price": round(predicted_price, 2),
                "Risk_Level": risk,
                "Note": note[:50]
            })
            
    return pd.DataFrame(reports)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--sentiment", default="sentiment_results.csv")
    parser.add_argument("--price", default="stooq_history.csv")
    parser.add_argument("--pers", default="stock_personalities.csv")
    parser.add_argument("--news", default="news_signals.csv")
    args = parser.parse_args()
    
    sent_df, price_df, pers_df, news_df = load_data(args.sentiment, args.price, args.pers, args.news)
    
    if sent_df is not None and price_df is not None:
        # Clean old cols
        cols_to_drop = ['Predicted_Price', 'Trend_Price', 'Volatility', 'NSR', 'News_Score', 'Weighted_Score', 'Risk_Level', 'Note']
        sent_df = sent_df.drop(columns=[c for c in cols_to_drop if c in sent_df.columns], errors='ignore')
        
        result_df = predict_prices(sent_df, price_df, pers_df, news_df)
        
        if not result_df.empty:
            # Merge
            final_df = pd.merge(sent_df, result_df, on=['Date', 'Ticker', 'Sentiment_Score'], how='inner')
            final_df.to_csv(args.sentiment, index=False)
            
            print("\n--- PHASE 3 PREDICTION REPORT ---")
            print(final_df[['Date', 'Ticker', 'Trend_Price', 'Weighted_Score', 'Predicted_Price', 'Risk_Level']].head())
        else:
            print("No predictions generated.")
    else:
        print("Failed to load required data.")
