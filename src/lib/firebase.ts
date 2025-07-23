// ? Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_REVIEW_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_REVIEW_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_REVIEW_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_REVIEW_STORAGE_BUCKET,
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_REVIEW_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_REVIEW_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
