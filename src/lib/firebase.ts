import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Using explicit project config to resolve "invalid-api-key" error
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAs-PLACEHOLDER", 
  authDomain: "siddhi-industrial-services-85949.firebaseapp.com",
  projectId: "siddhi-industrial-services-85949",
  storageBucket: "siddhi-industrial-services-85949.firebasestorage.app",
  messagingSenderId: "1055569646",
  appId: "1:1055569646:web:6e2f1e2f1e2f1e2f1e2f1e",
};

// Initialize Firebase with safety checks
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
