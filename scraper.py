import requests
import time
import random
import json

# --- CONFIGURATION ---
HEADERS = {
    # We pretend to be a real browser to avoid getting blocked
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
}

def get_comments_for_post(permalink):
    """
    Fetches the discussion for a specific post using its permalink.
    """
    # Reddit lets you add .json to ANY post URL to get its data
    url = f"https://www.reddit.com{permalink}.json"
    
    try:
        response = requests.get(url, headers=HEADERS)
        if response.status_code == 200:
            data = response.json()
            
            # Structure: List of 2 items. [0] is the Post, [1] is the Comments.
            comment_tree = data[1]['data']['children']
            
            comments = []
            for comment in comment_tree:
                # We only want actual comments, not "more" links
                if comment['kind'] == 't1':
                    body = comment['data'].get('body')
                    score = comment['data'].get('score')
                    if body:
                        comments.append(body)
                        
            return comments[:10] # Limit to top 10 comments to keep data clean
        return []
    except Exception as e:
        print(f"Failed to get comments: {e}")
        return []

def scrape_reddit_data(subreddit="wallstreetbets", limit=5):
    print(f"--- 1. Fetching Top {limit} Posts from r/{subreddit} ---")
    url = f"https://www.reddit.com/r/{subreddit}/hot.json?limit={limit}"
    
    results = []
    
    try:
        response = requests.get(url, headers=HEADERS)
        if response.status_code != 200:
            print("Error fetching subreddit.")
            return []
            
        posts = response.json()['data']['children']
        
        for index, item in enumerate(posts):
            post = item['data']
            
            # --- FILTERING LOGIC ---
            # Search for ticker in Title + Body
            # We import extract_ticker from utils
            from utils import extract_ticker
            
            text_to_search = post['title'] + " " + post.get('selftext', "")
            ticker = extract_ticker(text_to_search)
            
            if not ticker:
                print(f"Skipping Post {index+1}/{len(posts)}: No ticker found in '{post['title'][:30]}...'")
                continue
                
            print(f"Processing Post {index+1}/{len(posts)}: {post['title'][:30]}... (Found {ticker})")
            
            # --- THE "TWO-STEP" LOGIC ---
            # 1. Extract the unique link for this post
            permalink = post['permalink']
            
            # 2. Go fetch the comments for this specific link
            comments = get_comments_for_post(permalink)
            
            # 3. Store everything together
            results.append({
                "title": post['title'],
                "url": post['url'],
                "post_text": post['selftext'],
                "created_utc": post['created_utc'], # Capture timestamp for accurate dating
                "comments": comments  # <--- Now contains a list of strings
            })
            
            # CRITICAL: Sleep for 2 seconds between posts to be polite
            time.sleep(2) 
            
        return results

    except Exception as e:
        print(f"Critical Error: {e}")
        return []

# --- EXECUTION ---
data = scrape_reddit_data(limit=30) # Increased limit for testing

# Show the first result to prove we have comments
if data:
    print("\n--- SAMPLE DATA ---")
    print(f"Post: {data[0]['title']}")
    print(f"Comments Found: {len(data[0]['comments'])}")
    print(f"Top Comment: {data[0]['comments'][0]}")

with open('reddit_samples.json', 'w') as f:
    json.dump(data, f, indent=4)

print("Data saved to reddit_samples.json")