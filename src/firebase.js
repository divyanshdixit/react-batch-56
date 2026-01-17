// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFwBNRHqwWTs3aYX5sEhKLvZI_ARGwvDg",
  authDomain: "fir-firebase-learn.firebaseapp.com",
  projectId: "fir-firebase-learn",
  storageBucket: "fir-firebase-learn.firebasestorage.app",
  messagingSenderId: "759462576283",
  appId: "1:759462576283:web:142127be1ffc39c1e8463e",
  measurementId: "G-RKD93NLF0J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);