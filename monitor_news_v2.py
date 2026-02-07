import feedparser
import pandas as pd
import datetime
import os
import json
import sqlite3
import re
import time
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment logic
load_dotenv()

# --- CONFIGURATION ---
DB_PATH = 'news_cache.db'
OUTPUT_FILE = 'live_sentiment.csv'
ALIAS_PATH = 'sp500.json'
# "Cluster" size for RSS feeds (how many tickers per Google News URL)
RSS_CLUSTER_SIZE = 5 
# How many headlines to send to Gemini in one prompt
GEMINI_BATCH_SIZE = 10

# "Poison" tickers that return too much noise if searched alone.
# We will FORCE these to use their company name in the search query.
POISON_TICKERS = {
    'A', 'T', 'V', 'K', 'F', 'C', 'M', 'SO', 'IS', 'ALL', 'IT', 'ON', 'GO', 'OR', 'AN', 'DO', 'BE'
}

class NewsDatabase:
    """Handles deduping of news links to prevent re-analysis."""
    def __init__(self, db_path=DB_PATH):
        self.conn = sqlite3.connect(db_path)
        self.cursor = self.conn.cursor()
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS processed_news (
                link TEXT PRIMARY KEY,
                processed_at TIMESTAMP
            )
        ''')
        self.conn.commit()
    
    def is_processed(self, link):
        self.cursor.execute("SELECT 1 FROM processed_news WHERE link = ?", (link,))
        return self.cursor.fetchone() is not None
    
    def mark_processed(self, link):
        try:
            self.cursor.execute("INSERT INTO processed_news (link, processed_at) VALUES (?, ?)", 
                               (link, datetime.datetime.now().isoformat()))
            self.conn.commit()
        except sqlite3.IntegrityError:
            pass # Already exists

    def prune_old_records(self, days=4):
        """Removes records older than N days from the DB."""
        cutoff_date = (datetime.datetime.now() - datetime.timedelta(days=days)).isoformat()
        try:
            self.cursor.execute("DELETE FROM processed_news WHERE processed_at < ?", (cutoff_date,))
            deleted_count = self.cursor.rowcount
            self.conn.commit()
            print(f"🧹 Pruned {deleted_count} old records from DB cache.")
        except Exception as e:
            print(f"⚠️ DB Prune Error: {e}")
            
    def close(self):
        self.conn.close()

def load_aliases(path=ALIAS_PATH):
    """Loads ticker -> Company Name map."""
    if not os.path.exists(path):
        # Fallback if file missing
        return {}
    
    with open(path, 'r') as f:
        data = json.load(f)
        
    aliases = {}
    # Suffixes to strip for cleaner regex matching later
    suffixes = [r",? Inc\.?", r",? Corporation", r",? Corp\.?", r",? Company", r",? Co\.?", r",? PLC", r",? Ltd\.?"]
    
    for item in data:
        t = item.get('ticker')
        name = item.get('name', '')
        # Clean name for aliases map
        clean_name = name
        for s in suffixes:
            clean_name = re.sub(s, "", clean_name, flags=re.IGNORECASE)
        aliases[t] = clean_name.strip()
        
    return aliases

def get_search_term(ticker, alias_map):
    """
    Determines the term to use in the Google News RSS query.
    If 'Poison', use Company Name. Otherwise use Ticker.
    """
    if ticker in POISON_TICKERS or len(ticker) < 3:
        # Use full company name if available
        if ticker in alias_map:
            return f'"{alias_map[ticker]}"' # Quote for exact phrase
        else:
            return ticker # Fallback
    return ticker

def generate_clustered_feeds(tickers, alias_map, batch_size=RSS_CLUSTER_SIZE):
    """
    Groups tickers and builds dynamic Google News RSS URLs.
    Query format: q=NVDA+OR+AMD+OR+"Agilent"...+when:1d
    """
    urls = []
    
    # Remove duplicates
    unique_tickers = list(set(tickers))
    
    for i in range(0, len(unique_tickers), batch_size):
        chunk = unique_tickers[i : i+batch_size]
        
        # Build query terms
        terms = [get_search_term(t, alias_map) for t in chunk]
        query = "+OR+".join(terms)
        
        # Build URL (when:1d for last 24h)
        # quote_plus handles spaces in company names -> %20 or +
        from urllib.parse import quote
        # We manually construct to control the +OR+ structure
        # Google News allows "foo+OR+bar"
        # Spaces in names need to be URL encoded.
        
        # Safer construction:
        safe_terms = []
        for term in terms:
            # If it's a quoted name like "Agilent Technologies", we need appropriate encoding
            # usually Google accepts + for space.
            safe_terms.append(term.replace(" ", "+"))
            
        full_query = "+OR+".join(safe_terms) + "+when:1d"
        url = f"https://news.google.com/rss/search?q={full_query}&hl=en-US&gl=US&ceid=US:en"
        urls.append(url)
        
    return urls

def build_ticker_regex(tickers):
    """Compiles a single optimized regex for all tickers."""
    if not tickers: return None
    
    # Sort by length desc to match longer tickers first (GOOGL vs GOOG)
    sorted_tickers = sorted(tickers, key=len, reverse=True)
    
    # Fast boundary matching: (?<!['"])\b(T1|T2|...)\b(?!['"])
    # We avoid matching inside quotes if possible, or just standard word boundaries
    pattern = r'(?<![\w])(' + '|'.join(map(re.escape, sorted_tickers)) + r')\b(?![\w])'
    return re.compile(pattern, re.IGNORECASE)

def extract_tickers(text, regex, aliases):
    """
    Finds tickers in text. Applies Strict Match logic for poison tickers.
    """
    found = set()
    matches = regex.findall(text)
    
    for m in matches:
        ticker = m.upper()
        
        # Strict Match Logic
        if ticker in POISON_TICKERS or len(ticker) < 3:
            # Must find Company Name or strict keyword context
            is_valid = False
            
            # 1. Check for Company Name
            if ticker in aliases:
                company_name = aliases[ticker]
                if re.search(r'\b' + re.escape(company_name) + r'\b', text, re.IGNORECASE):
                    is_valid = True
            
            # 2. Check for financial context keywords if name check fail (optional, but safer to rely on name)
            # EXCEPTION: Ticker 'A' (Agilent) is too common. Require name ONLY.
            if not is_valid and ticker != 'A':
                 if re.search(r'\b(stock|shares|dividend|earnings|quarter|market)\b', text, re.IGNORECASE):
                     is_valid = True
            
            if is_valid:
                found.add(ticker)
        else:
            # Normal ticker (e.g. NVDA, MSFT) - accept it
            found.add(ticker)
            
    return list(found)

def analyze_batch_gemini(items, model):
    """
    Sends batch to Gemini.
    items: [{'id': 0, 'headline': '...', 'ticker': '...'}, ...]
    """
    if not items: return []
    
    prompt = "Analyze these financial headlines. Identify the Sentiment (-1.0 to 1.0) and Impact (0.0 to 1.0) for the specific ticker.\n"
    prompt += "Return a JSON ARRAY of objects: [{'id': int, 'sentiment_score': float, 'impact_score': float, 'category': str}].\n\n"
    
    for item in items:
        prompt += f"ID {item['id']} ({item['ticker']}): \"{item['headline']}\"\n"
        
    prompt += "\nJSON ONLY. No markdown formatting."
    
    try:
        response = model.generate_content(prompt)
        text = response.text
        # Clean potential markdown
        if "```" in text:
            text = text.replace("```json", "").replace("```", "")
        text = text.strip()
        
        return json.loads(text)
    except Exception as e:
        print(f"⚠️ Gemini processing error: {e}")
        return []

def run_monitor(tickers_list, alias_file=ALIAS_PATH):
    print(f"🚀 News Agent V2.1: Starting scan for {len(tickers_list)} tickers...")
    
    # Init
    db = NewsDatabase()
    db.prune_old_records(days=4) # Clean old DB entries on startup
    alias_map = load_aliases(alias_file)
    regex = build_ticker_regex(tickers_list)
    
    api_key = os.environ.get('GEMINI_API_KEY')
    if not api_key:
        print("❌ GEMINI_API_KEY missing.")
        return
        
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-2.5-flash') # Or gemini-1.5-flash if preferred
    
    # 1. Generate Feeds
    feed_urls = generate_clustered_feeds(tickers_list, alias_map)
    print(f"📡 Generated {len(feed_urls)} dynamic feed URLs (Cluster Size: {RSS_CLUSTER_SIZE})")
    
    candidates = [] # To be sent to Gemini
    
    # 2. Scan Feeds
    for i, url in enumerate(feed_urls):
        try:
            feed = feedparser.parse(url)
            # print(f"   Scanning Feed {i+1}/{len(feed_urls)} ({len(feed.entries)} items)...")
            
            for entry in feed.entries:
                if db.is_processed(entry.link):
                    continue
                
                # Extract relevant tickers
                found_tickers = extract_tickers(entry.title, regex, alias_map)
                
                if found_tickers:
                    # Create a candidate for EACH found ticker
                    for t in found_tickers:
                        candidates.append({
                            'title': entry.title,
                            'link': entry.link,
                            'ticker': t,
                            'published': datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                        })
                        
            time.sleep(0.5) # Be polite to Google
            
        except Exception as e:
            print(f"   Feed Error: {e}")
            
    if not candidates:
        print("✅ No new relevant news found.")
        db.close()
        return

    # 3. Analyze in Batches
    print(f"🧠 Analyzing {len(candidates)} signals with Gemini...")
    
    batch_queue = []
    metadata_map = {} # id -> candidate
    
    results_to_save = []
    
    for i, cand in enumerate(candidates):
        batch_queue.append({
            'id': i,
            'headline': cand['title'],
            'ticker': cand['ticker']
        })
        metadata_map[i] = cand
        
    # Process
    for i in range(0, len(batch_queue), GEMINI_BATCH_SIZE):
        chunk = batch_queue[i : i+GEMINI_BATCH_SIZE]
        print(f"   Batch {i//GEMINI_BATCH_SIZE + 1} ({len(chunk)} items)...")
        
        analysis = analyze_batch_gemini(chunk, model)
        
        if analysis:
            for item in analysis:
                try:
                    res_id = item.get('id')
                    cand = metadata_map.get(res_id)
                    
                    if cand:
                        results_to_save.append({
                            'Date': cand['published'],
                            'Ticker': cand['ticker'],
                            'Headline': cand['title'],
                            'News_Score': item.get('sentiment_score', 0),
                            'Impact_Score': item.get('impact_score', 0),
                            'Category': item.get('category', 'General'),
                            'Source': 'RSS',
                            'URL': cand['link'] # Added URL
                        })
                        
                        # Mark link as processed
                        db.mark_processed(cand['link'])
                        
                except Exception as e:
                    print(f"   Error parsing result item: {e}")
                    
        time.sleep(1) # Gemini rate limit safety
    
    db.close()
    
    # 4. Save to CSV (Robust Overwrite to handle schema changes)
    if results_to_save:
        new_df = pd.DataFrame(results_to_save)
        
        if os.path.exists(OUTPUT_FILE):
             try:
                 # Read existing to ensure columns align or evolve
                 existing_df = pd.read_csv(OUTPUT_FILE)
                 combined_df = pd.concat([existing_df, new_df], ignore_index=True)
             except Exception as e:
                 print(f"⚠️ Error reading existing CSV (overwriting/restarting): {e}")
                 combined_df = new_df
        else:
             combined_df = new_df
             
        # --- PRUNING OLD DATA (CSV) ---
        try:
            if 'Date' in combined_df.columns:
                # Convert to datetime
                combined_df['Date'] = pd.to_datetime(combined_df['Date'], errors='coerce')
                
                # Keep only last 4 days
                cutoff = datetime.datetime.now() - datetime.timedelta(days=4)
                original_len = len(combined_df)
                combined_df = combined_df[combined_df['Date'] > cutoff]
                
                pruned_count = original_len - len(combined_df)
                if pruned_count > 0:
                    print(f"🧹 Pruned {pruned_count} old signals (>4 days) from CSV.")
                    
                # Sort by Date DESC
                combined_df = combined_df.sort_values('Date', ascending=False)
        except Exception as e:
            print(f"⚠️ CSV Pruning Error: {e}")
        # ------------------------------

        combined_df.to_csv(OUTPUT_FILE, index=False)
        print(f"✅ Saved {len(results_to_save)} new signals to {OUTPUT_FILE}")
    else:
        print("⚠️  No valid signals generated after analysis.")

if __name__ == "__main__":
    # Test Run
    test_tickers = ['T', 'GE', 'NVDA'] # T (poison), GE (<3 chars), NVDA (normal)
    run_monitor(test_tickers)
