import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBGIjwTG0iS_NQjBASPaTw7iT-koxAzrKM",
    authDomain: "skills-swap-8b154.firebaseapp.com",
    projectId: "skills-swap-8b154",
    storageBucket: "skills-swap-8b154.firebasestorage.app",
    messagingSenderId: "848805922691",
    appId: "1:848805922691:web:36162aba65f1cd9e8e18b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
