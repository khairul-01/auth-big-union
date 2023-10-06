// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr24qGxUNZN3elqXsPe_ZuTm6hys1j_Ng",
  authDomain: "auth-big-union.firebaseapp.com",
  projectId: "auth-big-union",
  storageBucket: "auth-big-union.appspot.com",
  messagingSenderId: "248780224688",
  appId: "1:248780224688:web:baa4aec44fc08604746375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;