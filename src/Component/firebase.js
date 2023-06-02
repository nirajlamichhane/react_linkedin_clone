import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCRXAXQdpAAMazzmkqmo9vtfDTrGBNF-1E",
    authDomain: "linkedin-clone-8c2f5.firebaseapp.com",
    projectId: "linkedin-clone-8c2f5",
    storageBucket: "linkedin-clone-8c2f5.appspot.com",
    messagingSenderId: "1039025225642",
    appId: "1:1039025225642:web:af3b52eaa90c3ca3f575d3"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export {db, auth}