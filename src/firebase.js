// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Initialize Firebase
// *** USE YOUR CONFIG OBJECT ***
const firebaseConfig = {
    apiKey: "AIzaSyC0URqrXuuJq3xxPlgHbAfLbtWLfkCd9oc",
    authDomain: "project-3-733ea.firebaseapp.com",
    databaseURL: "https://project-3-733ea-default-rtdb.firebaseio.com",
    projectId: "project-3-733ea",
    storageBucket: "project-3-733ea.appspot.com",
    messagingSenderId: "851225147569",
    appId: "1:851225147569:web:0a86fc471fbeec543d0a90"
};

// this exports the CONFIGURED version of firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const realtime = getDatabase(app);

export default realtime;