import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
require("dotenv").config();

// var firebaseConfig = {
//   apiKey: "AIzaSyCaJlXubJpyMsiAJKHaHGz6hfkIN7MDFC0",
//   authDomain: "chazyy-e64d1.firebaseapp.com",
//   projectId: "chazyy-e64d1",
//   storageBucket: "chazyy-e64d1.appspot.com",
//   messagingSenderId: "559137273140",
//   appId: "1:559137273140:web:ff6d1460af4a6a585a6161",
//   measurementId: "G-RGCFRG0DH0",
// };

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASURMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
