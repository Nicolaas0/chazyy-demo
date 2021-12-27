import React, { useContext, useState, useEffect } from "react";
import firebase from "../../Firebase";
import dayjs from "dayjs";

const UserContext = React.createContext();
const auth = firebase.auth();
const firestore = firebase.firestore();
// const storageRef = firebase.storage().ref();
const date = dayjs().format("DD/MM/YYYY HH:mm:ss");
// let metadata = {
//   contentType: 'image/png',
// };

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  const signUp = async (email, pass) => {

    await auth.createUserWithEmailAndPassword(email, pass)

    auth.onAuthStateChanged(user => {
      firestore.collection('users').doc(user.uid).set({
        dateCreated: date,
      })
      firestore.collection('users').doc(user.uid).collection('info').doc('accountInfo').set({
        email: email,
        pass: pass,
        uid: user.uid,
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

  const post = (email, message, id) => {
    const ref = firebase.database().ref(`Demo/${id}`);
    const data = {
      username: email,
      message: message,
      id: id,
    };
    ref.set(data).then(() => {
      firestore.collection('users').doc(email).collection('post').doc(id).set({
        id: id,
        message: message,
      })
    })
  }

  // const changeImage = (uid, file) => {
  //   storageRef.put(file).then((snapshot) => {
  //     console.log('You have upload a file', snapshot)
  //   })
  //   storageRef.child(`images/${uid}/profile`).listAll().then((res) => {
  //     res.items.forEach((itemRef) => {
  //       firestore.collection('users').doc(uid).collection('info').doc('accountInfo').set({
  //         photoURL: itemRef.fullPath
  //       })
  //       auth.onAuthStateChanged(user => {
  //         user.updateProfile({
  //           photoURL: itemRef.fullPath
  //         })
  //       })
  //     })
  //   })
  // }

  // const changeImage = (file) => {
  //   storageRef.put(file).then((snapshot) => {
  //     console.log('You have upload a file', snapshot)
  //   })
  //   auth.onAuthStateChanged(user => {
  //     storageRef.child(`images/${user.uid}/profile`).listAll().then((res) => {
  //       res.items.forEach((itemRef) => {
  //         firestore.collection('users').doc(user.uid).collection('info').doc('accountInfo').set({
  //           photoURL: itemRef.fullPath
  //         }).then(() => {
  //           user.updateProfile({
  //             photoURL: itemRef.fullPath
  //           })
  //         })
  //       })
  //     })
  //   })
  // }

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
  };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};
