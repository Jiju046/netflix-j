// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import {initializeApp} from 'firebase/app';
import firebase from "firebase/app";
// import { getAuth } from "firebase/auth";
import  'firebase/auth';
import "firebase/firestore" 

const firebaseConfig = {
    apiKey: "AIzaSyDXfCl2498URzQbMQvg6uMkCLb5EjQEX4I",
    authDomain: "netflix-mr-j.firebaseapp.com",
    projectId: "netflix-mr-j",
    storageBucket: "netflix-mr-j.appspot.com",
    messagingSenderId: "110447695350",
    appId: "1:110447695350:web:9773e6ad49033dfca723d7",
    measurementId: "G-BNQEQGLNQ5"
  };
  

  // const firebaseApp= firebase.initializeApp(firebaseConfig); // initialise with key to access the firebase acc 
  // const db= firebaseApp.firestore(); //database
  // const auth=firebase.auth();

  // export default db;
  // export {auth};
  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };