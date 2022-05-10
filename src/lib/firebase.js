import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth/auth'


// here i want to import the sedd file
// heres where i want to call the seed file only ONCE

const config = {};

const firebase = Firebase.initializeApp(config)
const {FieldValue} = Firebase.firestore;

// seedDataBase(firebase);

export { firebase, FieldValue };