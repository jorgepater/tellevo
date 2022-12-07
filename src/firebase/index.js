import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQnLwUH-CXwIQ5dzYU8AQaYZOlqjJTDUM",
  authDomain: "react-firebase-upload-572d0.firebaseapp.com",
  projectId: "react-firebase-upload-572d0",
  storageBucket: "react-firebase-upload-572d0.appspot.com",
  messagingSenderId: "795861474931",
  appId: "1:795861474931:web:0d875851f0d2fbd1ac5406",
  measurementId: "G-N8WRTHS8J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
