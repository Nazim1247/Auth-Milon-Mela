// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpOi565Y8lgA-BimMJygB0TEWJkLfwfVI",
  authDomain: "auth-milon-mela-212ea.firebaseapp.com",
  projectId: "auth-milon-mela-212ea",
  storageBucket: "auth-milon-mela-212ea.firebasestorage.app",
  messagingSenderId: "381712094091",
  appId: "1:381712094091:web:0958e8b33b4eeca58fd58e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);