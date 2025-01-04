import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_COMMENTS_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_COMMENTS_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_COMMENTS_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_COMMENTS_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_COMMENTS_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_COMMENTS_APP_ID,
    measurementId: "G-59FL5WNW4L"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };