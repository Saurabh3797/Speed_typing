import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5ckqmiRux_GxywEIYdyBs07HZ8aFw-AQ",
  authDomain: "typing-speed-4078d.firebaseapp.com",
  projectId: "typing-speed-4078d",
  storageBucket: "typing-speed-4078d.appspot.com",
  messagingSenderId: "22073662259",
  appId: "1:22073662259:web:71e9c5969e2a9c9daa3c46"
};

// Initialize Firebase


const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebaseApp.firestore();

  export {auth, db};



  /*
  
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVwMbNpMZtAGzpP_pQEiVn1g-l4uofFSI",
  authDomain: "typing-test-7d7a8.firebaseapp.com",
  projectId: "typing-test-7d7a8",
  storageBucket: "typing-test-7d7a8.appspot.com",
  messagingSenderId: "624834698998",
  appId: "1:624834698998:web:ba4c87ed8eb98c18d956d7",
  measurementId: "G-GQ25BYY3VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
  */