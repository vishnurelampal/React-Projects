// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2qhXYAXfeZR9I3Qf7JbHRetj3eYb0Ku8",
  authDomain: "webnetflix-59d3b.firebaseapp.com",
  projectId: "webnetflix-59d3b",
  storageBucket: "webnetflix-59d3b.firebasestorage.app",
  messagingSenderId: "165006679383",
  appId: "1:165006679383:web:45a229a7f421b6b37c3212",
  measurementId: "G-P19RJCHDSS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
