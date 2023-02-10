// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiH4FEK5L3o5wxKuCPM9dQJPZk8kZhFn0",
  authDomain: "comision34870.firebaseapp.com",
  projectId: "comision34870",
  storageBucket: "comision34870.appspot.com",
  messagingSenderId: "698163889024",
  appId: "1:698163889024:web:77fb2988ef5a5e4dceb765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initFirebase= () => app
