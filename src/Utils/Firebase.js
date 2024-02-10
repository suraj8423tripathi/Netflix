// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbSBdp1xh2rEqN7n6UvyKBPyGGsZNOQyk",
  authDomain: "netflix-bb3fd.firebaseapp.com",
  projectId: "netflix-bb3fd",
  storageBucket: "netflix-bb3fd.appspot.com",
  messagingSenderId: "724575749578",
  appId: "1:724575749578:web:07fa6b6e9baa687eac3b33",
  measurementId: "G-PYW40CTWPD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
