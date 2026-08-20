import firebase_admin
from firebase_admin import credentials;
from firebase_admin import auth;

cred = credentials.Certificate('senti-bot-auth-firebase-adminsdk-fbsvc-0bf6d81db0.json');
firebase_admin.initialize_app(cred);

def verify_token(id_token):
    """
    Verifies the JWT token sent from the frontend.
    Returns the User ID (uid) if valid, or None if invalid.
    """
    try:
        decoded_token = auth.verify_id_token(id_token)
        uid = decoded_token['uid']
        return uid
    except Exception as e:
        print(f"Token Verification Failed: {e}")
        return None