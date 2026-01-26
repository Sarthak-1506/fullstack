// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrP8Tv0y6R5gjpUIzZo4PBXS6tUVyecyQ",
  authDomain: "garden-2aaeb.firebaseapp.com",
  projectId: "garden-2aaeb",
  storageBucket: "garden-2aaeb.firebasestorage.app",
  messagingSenderId: "1006426141288",
  appId: "1:1006426141288:web:e465d7dd481161e78e81dd",
  measurementId: "G-40WX73J7HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const fireDb = getFirestore(app)