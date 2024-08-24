// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "travel-planner-44e64.firebaseapp.com",
  projectId: "travel-planner-44e64",
  storageBucket: "travel-planner-44e64.appspot.com",
  messagingSenderId: "536129737124",
  appId: "1:536129737124:web:5fa042fd39e686de4ab131",
  measurementId: "G-E7JPLCZWB0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
