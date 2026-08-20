import requests
import json

def load_simulation_holdings(simulation_id, user_token):
    """
    Fetches the current holdings for a given simulation ID.
    Returns a dictionary of {ticker: weight} and the total portfolio value.
    If the simulation is empty or simulation_id is None, returns ({}, 0.0).
    """
    if not simulation_id or not user_token:
        return {}, 0.0

    try:
        url = f"http://localhost:5001/api/portfolio?simulationId={simulation_id}"
        headers = {
            "Authorization": f"Bearer {user_token}",
            "Content-Type": "application/json"
        }
        
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            msg = f"⚠️ [Auth Error] Backend returned {response.status_code}" if response.status_code == 401 else f"⚠️ Error {response.status_code}"
            print(f"{msg} for {url}")
            # Return an error indicator so the thought log can show it
            return {"error": msg}, 0.0
            
        data = response.json()
        holdings = data.get('holdings', [])
        total_value = data.get('total_portfolio_value', 0.0)
        
        if not holdings:
            return {}, 0.0
            
        invested_value = sum(h.get('market_value', 0.0) for h in holdings)
        
        if invested_value <= 0:
            return {}, 0.0
            
        current_weights = {}
        for h in holdings:
            ticker = h.get('ticker')
            market_value = h.get('market_value', 0.0)
            if ticker:
                # Calculate weights based on gross assets, but ensure we don't divide by zero
                # We use market_value / total_portfolio_value (Net Liq) to stay consistent with optimizer
                div = total_value if total_value > 0 else invested_value
                current_weights[ticker] = market_value / div if div > 0 else 0.0
                
        return current_weights, total_value if total_value > 0 else invested_value
        
    except Exception as e:
        print(f"⚠️ [Holdings Loader] Exception fetching portfolio: {e}")
        return {}, 0.0
