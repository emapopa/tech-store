import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const firebaseConfig = {

  apiKey: "AIzaSyDgwrJgx8sofUGLnq1MQhvmzaNIIsVMs2I",

  authDomain: "techstore-496a9.firebaseapp.com",

  projectId: "techstore-496a9",

  storageBucket: "techstore-496a9.appspot.com",

  messagingSenderId: "794821544488",

  appId: "1:794821544488:web:863389aba36b7a18e5431d"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export 

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()