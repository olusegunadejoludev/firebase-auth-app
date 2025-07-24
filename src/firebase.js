// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0eSdlYQ-iWXfVRe3yKWhGcNhY8HQEgPU",
  authDomain: "brainy-authapp.firebaseapp.com",
  projectId: "brainy-authapp",
  storageBucket: "brainy-authapp.firebasestorage.app",
  messagingSenderId: "537434025327",
  appId: "1:537434025327:web:80f311ad5f705f2ea64c9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);