import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth/auth';

// import { seedDataBase } from "../seed";

// here i want to import the sedd file
// heres where i want to call the seed file only ONCE

const config = {
    apiKey: "AIzaSyDCQAQhxpvo3YVNRuTWSuCE4iH0Dya-72Q",
    authDomain: "instagram-clone-94506.firebaseapp.com",
    projectId: "instagram-clone-94506",
    storageBucket: "instagram-clone-94506.appspot.com",
    messagingSenderId: "942863976625",
    appId: "1:942863976625:web:e1bf0d4c78d32d7c5f3a90"
};

const firebase = Firebase.initializeApp(config)
const {FieldValue} = Firebase.firestore;

console.log("firebase", firebase);

//seedDataBase(firebase);

export { firebase, FieldValue };