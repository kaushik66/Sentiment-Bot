import firebase_admin
from firebase_admin import firestore
import datetime

# Ensure firebase app is initialized (it should be by backend_auth.py or main app)
# If not, it might need initialization here, but typically we assume the main app does it.
# We'll assume backend_api.py imports backend_auth which inits the app.

def get_db():
    return firestore.client()

def initialize_account(user_id):
    """
    Checks if user document exists. 
    If missing cash_balance, set it to $100,000.00.
    """
    db = get_db()
    user_ref = db.collection('users').document(user_id)
    
    doc = user_ref.get()
    
    if not doc.exists:
        # Create new user doc with default cash
        user_ref.set({
            'cash_balance': 100000.00,
            'created_at': datetime.datetime.now()
        })
        return 100000.00
    else:
        # Check for cash_balance
        data = doc.to_dict()
        if 'cash_balance' not in data:
            user_ref.update({'cash_balance': 100000.00})
            return 100000.00
        return data['cash_balance']

@firestore.transactional
def trade_transaction(transaction, user_ref, portfolio_ref, action, ticker, quantity, price, cost):
    """
    Atomic transaction for executing a trade.
    """
    snapshot = user_ref.get(transaction=transaction)
    user_data = snapshot.to_dict()
    
    if not user_data:
        # Should have been initialized, but just in case
        raise Exception("User account not found")
        
    current_cash = user_data.get('cash_balance', 0.0)
    
    # --- BUY LOGIC ---
    if action == "BUY":
        if current_cash < cost:
            raise ValueError(f"Insufficient funds. Required: ${cost:.2f}, Available: ${current_cash:.2f}")
            
        new_cash = current_cash - cost
        
        # Update Portfolio
        pf_doc = portfolio_ref.get(transaction=transaction)
        
        if pf_doc.exists:
            pf_data = pf_doc.to_dict()
            old_qty = pf_data.get('quantity', 0)
            old_avg = pf_data.get('avg_price', 0.0)
            
            new_qty = old_qty + quantity
            # Weighted Average Price
            # (OldVal + NewVal) / NewQty
            total_val = (old_qty * old_avg) + cost
            new_avg = total_val / new_qty
            
            transaction.update(portfolio_ref, {
                'quantity': new_qty,
                'avg_price': new_avg,
                'last_updated': datetime.datetime.now()
            })
        else:
            # New holding
            transaction.set(portfolio_ref, {
                'ticker': ticker,
                'quantity': quantity,
                'avg_price': price,
                'last_updated': datetime.datetime.now()
            })
            
        # Update User Cash
        transaction.update(user_ref, {'cash_balance': new_cash})

    # --- SELL LOGIC ---
    elif action == "SELL":
        pf_doc = portfolio_ref.get(transaction=transaction)
        
        if not pf_doc.exists:
             raise ValueError(f"You do not own any shares of {ticker}")
             
        pf_data = pf_doc.to_dict()
        current_qty = pf_data.get('quantity', 0)
        
        if current_qty < quantity:
            raise ValueError(f"Insufficient shares. Owned: {current_qty}, Selling: {quantity}")
            
        new_cash = current_cash + cost # For sell, cost is revenue (price * qty)
        new_qty = current_qty - quantity
        
        if new_qty == 0:
            transaction.delete(portfolio_ref)
        else:
            transaction.update(portfolio_ref, {
                'quantity': new_qty,
                'last_updated': datetime.datetime.now()
            })
            
        # Update Cash
        transaction.update(user_ref, {'cash_balance': new_cash})
        
    else:
        raise ValueError("Invalid action. Must be BUY or SELL")
        
    return new_cash

def execute_trade(user_id, ticker, action, quantity, price):
    """
    Orchestrates the trade with transaction and logging.
    """
    db = get_db()
    
    # Ensure user exists before trade
    initialize_account(user_id)
    
    user_ref = db.collection('users').document(user_id)
    portfolio_ref = user_ref.collection('portfolio').document(ticker)
    
    cost = price * quantity
    
    transaction = db.transaction()
    
    try:
        # Run atomic transaction
        new_balance = trade_transaction(transaction, user_ref, portfolio_ref, action, ticker, quantity, price, cost)
        
        # Log History (Non-transactional is fine, or include if strict consistency needed)
        # We'll do it after success to keep transaction light
        history_ref = user_ref.collection('history').document()
        history_ref.set({
            'ticker': ticker,
            'action': action,
            'quantity': quantity,
            'price': price,
            'total_value': cost,
            'timestamp': datetime.datetime.now()
        })
        
        return {"status": "success", "new_balance": new_balance}
        
    except ValueError as e:
        return {"status": "error", "message": str(e)}
    except Exception as e:
        print(f"Trade Error: {e}")
        return {"status": "error", "message": "Internal Trade Error"}

def get_portfolio(user_id):
    """
    Return { cash, holdings: [{ticker, qty, avg_price, current_value}] }.
    Current value requires live price, which we might fetch here or user passes.
    For basic structure we return data from DB. Caller (backend_api) enriches with live price.
    """
    db = get_db()
    user_ref = db.collection('users').document(user_id)
    
    # 1. Get Cash
    user_doc = user_ref.get()
    if not user_doc.exists:
        initialize_account(user_id)
        cash = 100000.00
    else:
        cash = user_doc.to_dict().get('cash_balance', 100000.00)
        
    # 2. Get Holdings
    holdings = []
    portfolio_col = user_ref.collection('portfolio').stream()
    
    for doc in portfolio_col:
        data = doc.to_dict()
        holdings.append({
            'ticker': data.get('ticker', doc.id), # doc.id is usually ticker
            'quantity': data.get('quantity'),
            'avg_price': data.get('avg_price')
        })
        
    return {
        'cash': cash,
        'holdings': holdings
    }

def delete_position(user_id, ticker):
    """
    Deletes a position from the portfolio.
    This does NOT credit cash. It simply removes the record.
    """
    db = get_db()
    user_ref = db.collection('users').document(user_id)
    portfolio_ref = user_ref.collection('portfolio').document(ticker)
    
    portfolio_ref.delete()
    return True
