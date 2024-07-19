// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtml7zF_1mSH0AlcnC2_Zk6qsQ7O9tOBM",
  authDomain: "my-cf8a9.firebaseapp.com",
  projectId: "my-cf8a9",
  storageBucket: "my-cf8a9.appspot.com",
  messagingSenderId: "360232902372",
  appId: "1:360232902372:web:0a6b49b9671b0d667096f1",
  measurementId: "G-D5P016MKFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();