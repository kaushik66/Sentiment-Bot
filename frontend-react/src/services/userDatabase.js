import { db } from '../firebase';
import { doc, updateDoc, arrayUnion, arrayRemove, setDoc, getDoc } from 'firebase/firestore';

// 1. Get the user's watchlist
export const getWatchlist = async (userId) => {
  const userRef = doc(db, "users", userId);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    return docSnap.data().watchlist || [];
  } else {
    return [];
  }
};

// 2. Add a ticker (and create the user doc if it doesn't exist)
export const addToWatchlist = async (userId, ticker) => {
  const userRef = doc(db, "users", userId);
  
  // 'setDoc' with { merge: true } creates the document if missing, 
  // or updates it if it exists.
  await setDoc(userRef, { 
    watchlist: arrayUnion(ticker) 
  }, { merge: true });
};

// 3. Remove a ticker
export const removeFromWatchlist = async (userId, ticker) => {
  const userRef = doc(db, "users", userId);
  
  await updateDoc(userRef, {
    watchlist: arrayRemove(ticker)
  });
};