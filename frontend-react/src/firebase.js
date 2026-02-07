// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFR_6Cfo2UGWkfY8uaHMphVDDw9UGmXlY",
  authDomain: "senti-bot-auth.firebaseapp.com",
  projectId: "senti-bot-auth",
  storageBucket: "senti-bot-auth.firebasestorage.app",
  messagingSenderId: "390528220641",
  appId: "1:390528220641:web:bcd981d2b2fb13d35a26a0",
  measurementId: "G-JTNSNH1XK5"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;