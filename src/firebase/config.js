import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAgIIbhk41ROpVPDKjP5-y8lWLu-_wCNtU',
  authDomain: 'ofofo-c7072.firebaseapp.com',
  projectId: 'ofofo-c7072',
  storageBucket: 'ofofo-c7072.appspot.com',
  messagingSenderId: '334547224732',
  appId: '1:334547224732:web:d26061b3bec150c5aa8559',
};

//init app
initializeApp(firebaseConfig);

//init database
const db = getFirestore();

//init Authentication
const auth = getAuth();

export { db, auth };
