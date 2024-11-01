// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Q4dINegSrTkiOgCimyR7BtS2y-egN9Y",
  authDomain: "herhack2024.firebaseapp.com",
  projectId: "herhack2024",
  storageBucket: "herhack2024.firebasestorage.app",
  messagingSenderId: "204436613516",
  appId: "1:204436613516:web:e2b3b80deb32f34d170ea9",
  measurementId: "G-B2G77K8SBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);