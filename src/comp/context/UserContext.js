import React, { useContext, useState, useEffect } from "react";
import firebase from "../../Firebase";
import dayjs from "dayjs";
import uniqid from 'uniqid'

const UserContext = React.createContext();
const auth = firebase.auth();
const firestore = firebase.firestore();
const date = dayjs().format("DD/MM/YYYY HH:mm:ss");

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  const signUp = async (email, pass, username) => {

    await auth.createUserWithEmailAndPassword(email, pass)

    auth.onAuthStateChanged(user => {
      firestore.collection('users').doc(user.uid).set({
        dateCreated: date,
      })
      firestore.collection('users').doc(user.uid).collection('info').doc('accountInfo').set({
        username: username,
        email: email,
        pass: pass,
        uid: user.uid,
      })
      user.updateProfile({
        displayName: username
      })
    })
  };

  const signIn = (email, pass) => {
    return auth.signInWithEmailAndPassword(email, pass);
  };

  const updateEmail = (email) => {
    return auth.currentUser.updateEmail(email);
  };

  const updateUsername = (username) => {
    return auth.currentUser.updateProfile({
      displayName: username
    })
  };

  // eslint-disable-next-line no-unused-vars
  const logout = () => {
    return auth.signOut()
  }

  const post = (message) => {
    auth.onAuthStateChanged((user) => {
      const uid = uniqid();
      const ref = firebase.database().ref(`Demo/${uid}`);
      const data = {
        username: user.displayName ? user.displayName : user.email,
        message: message,
        id: uid,
      };
      ref.set(data).then(() => {
        firestore.collection('users').doc(user.uid).collection('post').doc(uid).set({
          id: uid,
          message: message,
        })
      })
    })
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log(currentUser)
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    updateEmail,
    logout,
    post,
    updateUsername
  };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};
