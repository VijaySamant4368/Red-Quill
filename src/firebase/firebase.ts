//https://firebase.google.com/docs/database/web/start#create_a_database

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA264DT9ABPxUYDn38gVOyaWt0nOEurGB0",
  authDomain: "red-quill-db5c6.firebaseapp.com",
  projectId: "red-quill-db5c6",
  storageBucket: "red-quill-db5c6.firebasestorage.app",
  messagingSenderId: "764558376778",
  appId: "1:764558376778:web:09e052db2ef49a9bfd8bb3",
  databaseURL: "https://red-quill-db5c6-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const db_firestore = getFirestore(app);
export const auth = getAuth(app)