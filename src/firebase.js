// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Initialize Firebase
// *** USE YOUR CONFIG OBJECT ***
const firebaseConfig = {
    apiKey: "AIzaSyDYj1NOzK-WTrGc77ovTR763J7Njaq7U5k",
    authDomain: "project3roomtest.firebaseapp.com",
    projectId: "project3roomtest",
    storageBucket: "project3roomtest.appspot.com",
    messagingSenderId: "383731751876",
    appId: "1:383731751876:web:6d6a8d044c6f1ad2b26291"
};

// this exports the CONFIGURED version of firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const realtime = getDatabase(app);

export default realtime;