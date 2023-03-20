
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyABhZ-6y4sNKzoWEhl20S5FzzgxvdkJHOI",
  authDomain: "nextjs-firebase-ecommerc-7da97.firebaseapp.com",
  projectId: "nextjs-firebase-ecommerc-7da97",
  storageBucket: "nextjs-firebase-ecommerc-7da97.appspot.com",
  messagingSenderId: "133901810191",
  appId: "1:133901810191:web:cc06e00a26117d193d017a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()