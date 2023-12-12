// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfGCZo8lKSbS3b1yzI2t0zu3mBej-S59w",
  authDomain: "saas-dashboards.firebaseapp.com",
  projectId: "saas-dashboards",
  storageBucket: "saas-dashboards.appspot.com",
  messagingSenderId: "365821226235",
  appId: "1:365821226235:web:aea2236b5a4fae2654145e",
  measurementId: "G-GZGW61ZL1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export  { app, auth, firestore};
