// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmUL4TRV_8s1dwZA6_fVrYWthSYeIV6tE",
  authDomain: "msmavn-6a805.firebaseapp.com",
  projectId: "msmavn-6a805",
  storageBucket: "msmavn-6a805.appspot.com",
  messagingSenderId: "1006812960896",
  appId: "1:1006812960896:web:dfe46b04b9d1d57a4cee65",
  measurementId: "G-4RQ9R94FHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);