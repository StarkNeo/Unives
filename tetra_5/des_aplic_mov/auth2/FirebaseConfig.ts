// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
//import { getReactNativePersistence } from "firebase/auth/react-native";
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';
//import AsyncStorage from "@react-native-async-storage/async-storage";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//import { getFirestore } from "firebase/firestore";
//import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Y8EBIJn5qBOqkEZNf9US8pAakwN45tw",
  authDomain: "fir-app-28ec7.firebaseapp.com",
  projectId: "fir-app-28ec7",
  storageBucket: "fir-app-28ec7.firebasestorage.app",
  messagingSenderId: "825101331142",
  appId: "1:825101331142:web:27c436a03c71985bbc05c7",
  measurementId: "G-LZHT4KT26Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialilze Auth with React Native Persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);
