import firebase_admin
from firebase_admin import firestore
import datetime
import sys

# Ensure firebase app is initialized (it should be by backend_auth.py or main app)
# If not, it might need initialization here, but typically we assume the main app does it.
# We'll assume backend_api.py imports backend_auth which inits the app.

def get_db():
    return firestore.client()

def initialize_account(user_id):
    """
    Ensures user doc exists and migrates legacy portfolio data to a 'Default Portfolio' 
    if it hasn't been done yet.
    """
    db = get_db()
    user_ref = db.collection('users').document(user_id)
    doc = user_ref.get()
    
    if not doc.exists:
        user_ref.set({
            'created_at': datetime.datetime.now(),
            'migration_complete': True
        })
        # Create standardized primary simulation
        create_primary_simulation(user_id)
        return
    
    data = doc.to_dict()
    if not data.get('migration_complete'):
        # Just create the standardized primary simulation
        create_primary_simulation(user_id)
        
        # Capture and move any legacy holdings if they exist in the old 'portfolio' collection
        legacy_holdings = user_ref.collection('portfolio').stream()
        sim_ref = user_ref.collection('simulations').document('primary_portfolio')
        for hold in legacy_holdings:
            sim_ref.collection('holdings').document(hold.id).set(hold.to_dict())
            hold.reference.delete()

        user_ref.update({'migration_complete': True})

def create_primary_simulation(user_id):
    """
    Creates or ensures the existence of the standardized primary portfolio.
    """
    db = get_db()
    sim_ref = db.collection('users').document(user_id).collection('simulations').document('primary_portfolio')
    # Use set with merge=True to be idempotent
    sim_ref.set({
        'name': "Default Portfolio",
        'cash_balance': 100000.00,
        'created_at': datetime.datetime.now()
    }, merge=True)

def create_simulation(user_id, name, initial_cash=0.0):
    db = get_db()
    sim_ref = db.collection('users').document(user_id).collection('simulations').document()
    sim_ref.set({
        'name': name,
        'cash_balance': initial_cash,
        'created_at': datetime.datetime.now()
    })
    return sim_ref.id

def list_simulations(user_id):
    db = get_db()
    initialize_account(user_id) # Ensure doc exists
    
    print(f"🔍 [Backend] Scanning simulations for user {user_id}...")
    sim_list = []
    try:
        # Fetch all simulations
        sim_docs = db.collection('users').document(user_id).collection('simulations').stream()
        
        for s in sim_docs:
            data = s.to_dict()
            name = data.get('name') or f"Unnamed Simulation ({s.id[:4]})"
            sim_list.append({
                'id': s.id,
                'name': name,
                'cash': data.get('cash_balance', 0.0),
                'created_at': data.get('created_at')
            })
            print(f"   ✅ Found Document: {s.id} (Name: {name})")
            
    except Exception as e:
        print(f"❌ [Backend] Error during simulation scan: {e}")
        
    print(f"📊 [Backend] Total simulations compiled: {len(sim_list)}")
    sys.stdout.flush()
    
    # Sort in Python: newer (or those with dates) first, then those without
    try:
        def get_ts(x):
            ts = x.get('created_at')
            if not ts: return 0
            # Firestore Datetime objects often have a timestamp() method
            if hasattr(ts, 'timestamp'): 
                try: return ts.timestamp()
                except: return 0
            # Fallback for other date objects or floats
            try: return float(ts)
            except: return 0
            
        sim_list.sort(key=get_ts, reverse=True)
    except Exception as e:
        print(f"⚠️ [Backend] Sorting failed, returning unsorted list: {e}")
    
    # Remove created_at from results to ensure JSON serialization
    for s in sim_list:
        s.pop('created_at', None)
        
    return sim_list

def rename_simulation(user_id, sim_id, new_name):
    db = get_db()
    sim_ref = db.collection('users').document(user_id).collection('simulations').document(sim_id)
    sim_ref.update({'name': new_name})
    return True

def delete_simulation(user_id, sim_id):
    db = get_db()
    sim_ref = db.collection('users').document(user_id).collection('simulations').document(sim_id)
    # Delete holdings sub-collection first (Firestore requires manual batch deletion or just stream)
    holdings = sim_ref.collection('holdings').stream()
    for h in holdings:
        h.reference.delete()
    sim_ref.delete()
    return True

@firestore.transactional
def trade_transaction(transaction, sim_ref, portfolio_ref, action, ticker, quantity, price, cost):
    """
    Atomic transaction for executing a trade within a specific simulation.
    """
    snapshot = sim_ref.get(transaction=transaction)
    sim_data = snapshot.to_dict()
    
    if not sim_data:
        raise Exception("Simulation context not found")
        
    current_cash = sim_data.get('cash_balance', 0.0)
    
    if action == "BUY":
        # Disable insufficient funds check for 'Unlimited Wallet' simulation mode
        # if current_cash < cost:
        #     raise ValueError(f"Insufficient funds. Required: ${cost:.2f}, Available: ${current_cash:.2f}")
            
        new_cash = current_cash - cost
        
        pf_doc = portfolio_ref.get(transaction=transaction)
        
        if pf_doc.exists:
            pf_data = pf_doc.to_dict()
            old_qty = pf_data.get('quantity', 0)
            old_avg = pf_data.get('avg_price', 0.0)
            new_qty = old_qty + quantity
            total_val = (old_qty * old_avg) + cost
            new_avg = total_val / new_qty
            
            transaction.update(portfolio_ref, {
                'quantity': new_qty,
                'avg_price': new_avg,
                'last_updated': datetime.datetime.now()
            })
        else:
            transaction.set(portfolio_ref, {
                'ticker': ticker,
                'quantity': quantity,
                'avg_price': price,
                'last_updated': datetime.datetime.now()
            })
            
        transaction.update(sim_ref, {'cash_balance': new_cash})

    elif action == "SELL":
        pf_doc = portfolio_ref.get(transaction=transaction)
        if not pf_doc.exists:
             raise ValueError(f"You do not own any shares of {ticker}")
             
        pf_data = pf_doc.to_dict()
        current_qty = pf_data.get('quantity', 0)
        
        if current_qty < quantity:
            raise ValueError(f"Insufficient shares. Owned: {current_qty}, Selling: {quantity}")
            
        new_cash = current_cash + cost
        new_qty = current_qty - quantity
        
        if new_qty == 0:
            transaction.delete(portfolio_ref)
        else:
            transaction.update(portfolio_ref, {
                'quantity': new_qty,
                'last_updated': datetime.datetime.now()
            })
            
        transaction.update(sim_ref, {'cash_balance': new_cash})
        
    return new_cash

def execute_trade(user_id, simulation_id, ticker, action, quantity, price):
    db = get_db()
    initialize_account(user_id)
    
    user_ref = db.collection('users').document(user_id)
    sim_ref = user_ref.collection('simulations').document(simulation_id)
    portfolio_ref = sim_ref.collection('holdings').document(ticker)
    
    cost = price * quantity
    transaction = db.transaction()
    
    try:
        new_balance = trade_transaction(transaction, sim_ref, portfolio_ref, action, ticker, quantity, price, cost)
        
        # Log History under simulation-specific history or global user history
        # Let's keep history simulation-tagged
        history_ref = sim_ref.collection('history').document()
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

def get_portfolio(user_id, simulation_id=None):
    db = get_db()
    initialize_account(user_id)
    
    user_ref = db.collection('users').document(user_id)
    
    # If no sim_id provided, default to the first available or the "Default Portfolio"
    if not simulation_id:
        sims = list_simulations(user_id)
        if not sims:
            return {'cash': 0.0, 'holdings': [], 'name': 'No Simulation'}
        simulation_id = sims[0]['id']

    sim_ref = user_ref.collection('simulations').document(simulation_id)
    sim_doc = sim_ref.get()
    
    if not sim_doc.exists:
        return {'error': 'Simulation not found'}
        
    data = sim_doc.to_dict()
    cash = data.get('cash_balance', 0.0)
    name = data.get('name', 'Unnamed Simulation')
        
    holdings = []
    holdings_col = sim_ref.collection('holdings').stream()
    
    for doc in holdings_col:
        h_data = doc.to_dict()
        holdings.append({
            'ticker': h_data.get('ticker', doc.id),
            'quantity': h_data.get('quantity'),
            'avg_price': h_data.get('avg_price')
        })
        
    return {
        'id': simulation_id,
        'name': name,
        'cash': cash,
        'holdings': holdings
    }

def delete_position(user_id, simulation_id, ticker):
    db = get_db()
    portfolio_ref = db.collection('users').document(user_id).collection('simulations').document(simulation_id).collection('holdings').document(ticker)
    portfolio_ref.delete()
    return True
