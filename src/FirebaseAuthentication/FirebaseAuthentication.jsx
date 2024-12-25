// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO9TmIXeg5gQzd7p2HcKCynYhJyTNhTy4",
  authDomain: "chat-app-7ee3e.firebaseapp.com",
  projectId: "chat-app-7ee3e",
  storageBucket: "chat-app-7ee3e.firebasestorage.app",
  messagingSenderId: "879515464128",
  appId: "1:879515464128:web:2f0b344b2274cb6bed1825"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig;