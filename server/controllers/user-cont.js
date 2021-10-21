import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Firebase.js";
import dayjs from "dayjs";
import {
  collection,
  addDoc,
  getFirestore,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const date = dayjs().format("DD/MM/YYYY HH:mm:ss");

export const userAdd = async (req, res) => {
  const dbRef = collection(db, "users");
  const { username, password } = req.body.user;
  try {
    createUserWithEmailAndPassword(auth, username, password).then((res) => {
      const user = res.user;
    });
    await setDoc(doc(dbRef, username), {
      isCreated: true,
      timeCreated: date,
    });
    await setDoc(doc(dbRef, `${username}/info/accountInfo`), {
      username: username,
      password: password,
    });
    res.redirect("/SignIn");
    console.log("Document is wrriten! Your name is " + username);
  } catch (e) {
    console.log("Error adding doc: " + e);
  }
};

export const userLogin = async (req, res) => {
  const { username, password } = req.body.user;
  try {
    signInWithEmailAndPassword(auth, username, password).then((data) => {
      const user = data.user;
      const email = data.user.email;

      res.redirect(`/${email}`);
    });
    // console.log("SUCCESS LOGIN!!!");
    // res.redirect(`/${username}`);
  } catch (e) {
    console.log("Error login: " + e);
  }
};

export const userDetails = async (req, res) => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
      } else {
        console.log("No user signed!");
      }
    });
  } catch (e) {
    console.log("Error getting details: " + e);
  }
};
