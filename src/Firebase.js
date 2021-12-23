import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCaJlXubJpyMsiAJKHaHGz6hfkIN7MDFC0",
  authDomain: "chazyy-e64d1.firebaseapp.com",
  projectId: "chazyy-e64d1",
  storageBucket: "chazyy-e64d1.appspot.com",
  messagingSenderId: "559137273140",
  appId: "1:559137273140:web:ff6d1460af4a6a585a6161",
  measurementId: "G-RGCFRG0DH0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
