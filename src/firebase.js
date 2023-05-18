import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVh6INyjNJDkscgBYNW6DXjHjgmdkj2d4",
    authDomain: "slime-echo12.firebaseapp.com",
    projectId: "slime-echo12",
    storageBucket: "slime-echo12.appspot.com",
    messagingSenderId: "842544945695",
    appId: "1:842544945695:web:79b75d42724c97bcced32a",
    measurementId: "G-TEEQGZCVTJ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();