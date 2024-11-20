import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACP0fE0mrhso0gTGTax0-4mJcwzQN361g",
  authDomain: "proyectovite60060.firebaseapp.com",
  projectId: "proyectovite60060",
  storageBucket: "proyectovite60060.firebasestorage.app",
  messagingSenderId: "604614669265",
  appId: "1:604614669265:web:2625d5736417faac4ca6f0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;