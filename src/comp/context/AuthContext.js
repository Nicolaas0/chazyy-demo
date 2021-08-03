import React, { useContext, useState, useEffect } from "react";
import firebase from "../../Firebase";

const AuthContext = React.createContext();
const auth = firebase.auth();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  const signUp = (email, pass) => {
    return auth.createUserWithEmailAndPassword(email, pass);
  };

  const signIn = (email, pass) => {
    return auth.signInWithEmailAndPassword(email, pass);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log(currentUser)
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
