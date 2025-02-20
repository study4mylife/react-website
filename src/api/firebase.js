import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUPuJ0dUkaC6VbvR8e1mfGhjfcTDYG4jk",
  authDomain: "monsterkey-52e69.firebaseapp.com",
  projectId: "monsterkey-52e69",
  storageBucket: "monsterkey-52e69.firebasestorage.app",
  messagingSenderId: "31106678650",
  appId: "1:31106678650:web:26a1ca14c32f42dea8a0c3",
  measurementId: "G-HBV5P506HN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
