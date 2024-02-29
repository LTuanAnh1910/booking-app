// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBvJWDIqYmSTX58xZ6FFt0GxC4xo8AbXY",
  authDomain: "booking-app-9932c.firebaseapp.com",
  projectId: "booking-app-9932c",
  storageBucket: "booking-app-9932c.appspot.com",
  messagingSenderId: "750693544423",
  appId: "1:750693544423:web:36b7a70b19aa56e4a70d42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
