// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoBkIclor-IXEHuzahNoE2JWqb3sw2smo",
  authDomain: "ecommerce-ema.firebaseapp.com",
  projectId: "ecommerce-ema",
  storageBucket: "ecommerce-ema.appspot.com",
  messagingSenderId: "11574669952",
  appId: "1:11574669952:web:d80fa6d8e741918b3dec65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;