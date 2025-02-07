// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getReactNativePersistence , initializeAuth } from "firebase/auth";
import { getFirestore , collection } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB26CnOjdC4h9Vu3U8a1UIrM3_eiivVmYw",
  authDomain: "focustodoro.firebaseapp.com",
  projectId: "focustodoro",
  storageBucket: "focustodoro.firebasestorage.app",
  messagingSenderId: "829073767409",
  appId: "1:829073767409:web:73e5e219ecaf65b9d46250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db , "users");