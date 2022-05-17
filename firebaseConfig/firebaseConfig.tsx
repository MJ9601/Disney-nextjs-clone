// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJc7BJEZY4mn4LPn9jlG0Vxkqzynv13lQ",
  authDomain: "disney-auth-1a5ed.firebaseapp.com",
  projectId: "disney-auth-1a5ed",
  storageBucket: "disney-auth-1a5ed.appspot.com",
  messagingSenderId: "1021386950796",
  appId: "1:1021386950796:web:bcf4d92bfb50ed657f93a9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// import firebase from "firebase/compat/app";
// import "firebase/firestore";

// const firestore = (
//   firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)
// ).firestore();

// export { firestore };
export { app, auth, provider, db };
