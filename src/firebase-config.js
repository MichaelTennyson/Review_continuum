import { initializeApp } from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
require("dotenv").config();

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_TOKEN,
    authDomain: "review-continuum.firebaseapp.com",
    databaseURL: "https://review-continuum-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "review-continuum",
    storageBucket: "review-continuum.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export const db = getFirestore(app)