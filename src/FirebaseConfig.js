// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9RiCtziVCklE2KDgQY-tw-Qufj2iNZOE",
  authDomain: "routing-auth-39b84.firebaseapp.com",
  projectId: "routing-auth-39b84",
  storageBucket: "routing-auth-39b84.appspot.com",
  messagingSenderId: "511483161822",
  appId: "1:511483161822:web:8c285c72fa7261f889664f",
  measurementId: "G-M4268K43VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;