import re

class TickerValidator:
    """
    Solves the 'Context Ambiguity' problem in news scraping.
    Distinguishes 'AFL' (Stock) from 'AFL' (Sport).
    """

    def __init__(self):
        # Common English words that are also tickers
        self.common_words = {
            'ALL', 'ARE', 'CAN', 'IT', 'NOW', 'SO', 'OR', 'FOR', 'ON', 'GO', 'DO', 
            'AN', 'BE', 'IS', 'AT', 'IN', 'UP', 'PM', 'AM', 'BY', 'MY', 'NO', 'AS', 'IF', 'OF',
            'A', 'T', 'V', 'K', 'F', 'C', 'M'  # Single letter tickers
        }

        # Keywords indicating financial context
        self.financial_signals = {
            'stock', 'market', 'dividend', 'earnings', 'revenue', 'profit', 
            'quarter', 'analyst', 'shares', 'invest', 'growth', 'debt', 
            'sec', 'filing', 'yield', 'rally', 'plunge', 'nasdaq', 'nyse', 
            'dow', 'sp500', 'bull', 'bear', 'forecast', 'outlook', 'report',
            'upgrade', 'downgrade', 'buy', 'sell', 'hold', 'target', 'price'
        }

    def validate(self, ticker, company_name, text):
        """
        Validates if a found ticker is likely referring to the company.
        
        Args:
            ticker (str): The stock symbol (e.g., 'AFL')
            company_name (str): Full company name (e.g., 'Aflac Inc.')
            text (str): The headline or text snippet to analyze
            
        Returns:
            bool: True if context suggests it's the stock.
        """
        if not ticker or not text:
            return False

        ticker = ticker.upper()
        
        # Step 1: The Cashtag Check ($TICKER)
        # Immediate pass if explicit financial tag is used
        if f"${ticker}" in text:
            return True

        # Step 2: The Baseline & Threshold
        confidence = 0
        required_threshold = 2  # Normal Mode

        # Step 3: The Penalty (Strict Mode)
        # If it's a common word or very short, we need MORE evidence
        if ticker in self.common_words or len(ticker) <= 2:
            required_threshold = 3 
        
        # Clean company name for matching
        # "Aflac Inc." -> "Aflac"
        clean_name = company_name
        # Remove common suffixes for better matching
        suffixes = [r",? Inc\.?", r",? Corporation", r",? Corp\.?", r",? Company", r",? Co\.?", r",? PLC", r",? Ltd\.?"]
        for s in suffixes:
            clean_name = re.sub(s, "", clean_name, flags=re.IGNORECASE)
        clean_name = clean_name.strip()

        # Step 4: The Scoring
        
        # Criterion A: Company Name Match (+3 Points)
        # Strongest signal. "Aflac reports..."
        if clean_name and len(clean_name) > 2:
            if re.search(r'\b' + re.escape(clean_name) + r'\b', text, re.IGNORECASE):
                confidence += 3
        
        # Criterion B: Ticker Format (+1 Point)
        # "AFL" (all caps) vs "afl" (mixed/lower)
        # We look for explicit word boundaries around the ALL CAPS ticker
        if re.search(r'\b' + re.escape(ticker) + r'\b', text):
            confidence += 1
            
        # Criterion C: Financial Keywords (+1 or +2 Points)
        # Count how many unique financial keywords appear in the text
        found_keywords = 0
        text_lower = text.lower()
        for word in self.financial_signals:
            if re.search(r'\b' + re.escape(word) + r'\b', text_lower):
                found_keywords += 1
        
        if found_keywords >= 1:
            confidence += 1
        
        if found_keywords >= 3:
            confidence += 2  # Bonus for high density

        # Exception: Ticker 'A' (Agilent) is extremely hard. 
        # Even "A report" is ambiguous. Require name match explicitly for 'A'.
        if ticker == 'A' and confidence < 3: 
             # If we didn't match the name "Agilent", reject 'A' unless we have massive financial context
             if found_keywords < 4:
                 return False

        # Step 5: The Verdict
        return confidence >= required_threshold

if __name__ == "__main__":
    # Quick Test
    v = TickerValidator()
    
    cases = [
        ("AFL", "Aflac Inc.", "AFL hits a new low in the finals"), # Sport -> Should Fail
        ("AFL", "Aflac Inc.", "Aflac reports Q3 earnings growth"), # Stock -> Should Pass
        ("A", "Agilent Technologies", "A person walked by"), # Common word -> Should Fail
        ("A", "Agilent Technologies", "Agilent Technologies (A) reports strong revenue"), # Stock -> Should Pass
        ("IT", "Gartner Inc.", "It is a good day"), # Common word -> Should Fail
        ("IT", "Gartner Inc.", "Gartner (IT) sees stock rise"), # Stock -> Should Pass
        ("NVDA", "NVIDIA Corp", "NVDA surges 5%"), # Normal ticker -> Should Pass
    ]
    
    print("--- Running Tests ---")
    for t, name, txt in cases:
        result = v.validate(t, name, txt)
        print(f"[{'PASS' if result else 'FAIL'}] {t}: '{txt}'")
