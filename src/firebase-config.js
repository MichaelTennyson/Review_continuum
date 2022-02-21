import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import 'firebase/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
require("dotenv").config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_TOKEN,
    authDomain: "review-continuum.firebaseapp.com",
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: "review-continuum",
    storageBucket: "review-continuum.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export default firebaseConfig;