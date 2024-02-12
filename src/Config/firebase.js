// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyAu8qBN0s4NhD5b7zx1yF7W4C-lOT3Pq20",
  authDomain: "newauth-d5d39.firebaseapp.com",
  projectId: "newauth-d5d39",
  storageBucket: "newauth-d5d39.appspot.com",
  messagingSenderId: "92170229683",
  appId: "1:92170229683:web:b981374b9f2c6a67d19dc6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);