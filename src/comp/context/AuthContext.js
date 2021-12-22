import React, { useContext, useState, useEffect } from "react";
import firebase from "../../Firebase";
import dayjs from "dayjs";


const AuthContext = React.createContext();
const auth = firebase.auth();
const firestore = firebase.firestore();
const date = dayjs().format("DD/MM/YYYY HH:mm:ss");

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  const signUp = async (email, pass) => {
    await auth.createUserWithEmailAndPassword(email, pass)

    await auth.onAuthStateChanged(user => {
      firestore.collection('users').doc(user.uid).set({
        dateCreated: date,
      }).then(() => {
        firestore.collection('users').doc(user.uid).collection('info').doc('accountInfo').set({
          email: email,
          pass: pass
        })
      })
    })
  };

  const signIn = (email, pass) => {
    return auth.signInWithEmailAndPassword(email, pass);
  };

  const updateEmail = (email) => {
    return auth.currentUser.updateEmail(email);
  };

  // eslint-disable-next-line no-unused-vars
  const logout = () => {
    return auth.signOut()
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
    updateEmail
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
