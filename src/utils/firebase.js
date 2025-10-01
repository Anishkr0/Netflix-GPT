// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbnb2K-XYEJWjKtH10ZFm6Gkyok2y8s5c",
  authDomain: "swigy-gtx.firebaseapp.com",
  projectId: "swigy-gtx",
  storageBucket: "swigy-gtx.firebasestorage.app",
  messagingSenderId: "393162931003",
  appId: "1:393162931003:web:e78bdcfb4a8f4c5993151e",
  measurementId: "G-Y9JPTZP67X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Comment out analytics for local development to avoid CORS errors
// const analytics = getAnalytics(app);

export const auth = getAuth(app);