// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKuCT3wTyiVbQpuHzLox-rIwDavWTfCGg",
    authDomain: "freeway-proyecto-react.firebaseapp.com",
    projectId: "freeway-proyecto-react",
    storageBucket: "freeway-proyecto-react.appspot.com",
    messagingSenderId: "403376643118",
    appId: "1:403376643118:web:3ffb1fe6da4a65d9d553bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;