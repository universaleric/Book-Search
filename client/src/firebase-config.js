// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// *****REMEMBER to move API Key to .env file*****
const firebaseConfig = {
  apiKey: "AIzaSyAoccedB1qQvg8-JhIh3DP0FdRFhaSnMYs",
  authDomain: "book-search-54bac.firebaseapp.com",
  projectId: "book-search-54bac",
  storageBucket: "book-search-54bac.appspot.com",
  messagingSenderId: "1062689226767",
  appId: "1:1062689226767:web:a40a3a2453a05ed517637a",
  measurementId: "G-P8YMQ9P0HZ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
