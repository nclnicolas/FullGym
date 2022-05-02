// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAjogg_v2kT6J_cOi2YY3pAb0ip_Pp3Dc",
    authDomain: "freeway-proyecto-react-2012e.firebaseapp.com",
    projectId: "freeway-proyecto-react-2012e",
    storageBucket: "freeway-proyecto-react-2012e.appspot.com",
    messagingSenderId: "92521808421",
    appId: "1:92521808421:web:7802a30a34c5cd47c7f5cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;