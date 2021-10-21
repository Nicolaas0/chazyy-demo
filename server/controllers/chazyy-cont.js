import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Firebase.js";
import dayjs from "dayjs";
import uniqid from "uniqid";
import {
  collection,
  addDoc,
  getFirestore,
  setDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const date = dayjs().format("dddd, MMMM D YYYY");
const id = uniqid();

export const getChazyy = async (req, res) => {
  const { username } = req.params;
  const data = {
    uid: null,
    email: null,
  };
  const postData = [];

  onAuthStateChanged(auth, (user) => {
    console.log("ini si user yang lagi login", "=>", user);
  });

  const querySnapshot = await getDocs(collection(db, "chazyypost"));
  querySnapshot.forEach((doc) => {
    postData.push(doc.data());
  });
  data.data = postData;
  console.log(data);
};

export const postChazyy = async (req, res) => {
  const { username } = req.params;
  const { message } = req.body.post;

  const dbRef = doc(db, `chazyypost/${id}`);
  const userRef = doc(db, `users/${username}/post/${id}`);

  try {
    await setDoc(dbRef, {
      message: message,
      dateCreated: date,
      username: username,
    });
    await setDoc(userRef, {
      message: message,
      dateCreated: date,
    });
    console.log("Success posting data, the id: " + id);
  } catch (e) {
    console.log("Error posting data :" + e);
  }
};
