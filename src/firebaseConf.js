// Import the functions you need from the SDKs you need
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//https://firebase.google.com/docs/auth/web/start

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfigData = {
  apiKey: "AIzaSyAKiu5FPyqdGy_P2HiP-8QBymX4kdrTqn4",
  authDomain: "video-ui-363b9.firebaseapp.com",
  projectId: "video-ui-363b9",
  storageBucket: "video-ui-363b9.appspot.com",
  messagingSenderId: "147711080867",
  appId: "1:147711080867:web:5231381a48f8f34302c216",
  measurementId: "G-YCNCD2YH3Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfigData);
const auth = getAuth(app);
export default auth;
