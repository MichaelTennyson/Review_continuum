//imported functions
import {  initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import 'firebase/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
require("dotenv").config();


// firebase configuration detals
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_TOKEN,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const realtimeDB = getDatabase(app);
  export const auth = getAuth(app);
  export const analytics = getAnalytics(app);



  export default firebaseConfig;
  


  