// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCONyZ1DFHXZ-TXP_DElW-oarahPsJMfCU",
    authDomain: "fb-ramen-munoz.firebaseapp.com",
    projectId: "fb-ramen-munoz",
    storageBucket: "fb-ramen-munoz.appspot.com",
    messagingSenderId: "707258861914",
    appId: "1:707258861914:web:fe3050b89e789b197d4b63"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);