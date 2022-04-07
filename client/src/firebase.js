// Import the functions you need from the SDKs you need

import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

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