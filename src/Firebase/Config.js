import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmRY9Wv6K6WW27XOTFiQBlIq958Y_mwsg",
  authDomain: "portfolio-3022b.firebaseapp.com",
  projectId: "portfolio-3022b",
  storageBucket: "portfolio-3022b.appspot.com",
  messagingSenderId: "111362015097",
  appId: "1:111362015097:web:3ca29a2e66bcb4987fb9a8",
  measurementId: "G-1D0QYPSV5B",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
