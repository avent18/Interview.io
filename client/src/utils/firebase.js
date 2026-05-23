
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-ai-547db.firebaseapp.com",
  projectId: "interview-ai-547db",
  storageBucket: "interview-ai-547db.firebasestorage.app",
  messagingSenderId: "69567522655",
  appId: "1:69567522655:web:2a58fe273e180494be78ea",
  measurementId: "G-JYGNW2EFMP"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}