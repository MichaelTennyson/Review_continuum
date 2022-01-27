import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore';
require("dotenv").config();

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_TOKEN,
    authDomain: "review-continuum.firebaseapp.com",
    databaseURL: "https://review-continuum-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "review-continuum",
    storageBucket: "review-continuum.appspot.com",
    messagingSenderId: "678488961569",
    appId: process.env.FIREBASE_APP_ID,
    measurementId: "G-ECZ5GEJXTK"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export const db = getFirestore(app)