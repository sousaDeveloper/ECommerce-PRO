// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyNcz9Y8VgEPUX59qFYKkhuqlOvTZDOt8",
  authDomain: "next-store-f2f10.firebaseapp.com",
  projectId: "next-store-f2f10",
  storageBucket: "next-store-f2f10.appspot.com",
  messagingSenderId: "269902806889",
  appId: "1:269902806889:web:e1e56595a9ab8bb56ec7f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
