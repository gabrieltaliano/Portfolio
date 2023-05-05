import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const config = {
  apiKey: process.env.NEXT_PUBLIC_firebaseApiKey,
  authDomain: "gabrieltaliano-dev.firebaseapp.com",
  projectId: "gabrieltaliano-dev",
  storageBucket: "gabrieltaliano-dev.appspot.com",
  messagingSenderId: "733135398068",
  appId: "1:733135398068:web:7df4a90fc2413e337163e1",
};

// Initialize firebase
const firebaseApp = initializeApp(config);

// Initialize auth && firestore with the 'firebaseApp' property
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export default firebaseApp;
