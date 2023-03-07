// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ1WlhHfAVeBCCv3RCEvNbzbW3V0daN04",
  authDomain: "ambot-f4cd1.firebaseapp.com",
  projectId: "ambot-f4cd1",
  storageBucket: "ambot-f4cd1.appspot.com",
  messagingSenderId: "226616845619",
  appId: "1:226616845619:web:bbcf03147b660b44fb0a46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();