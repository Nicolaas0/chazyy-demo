import { useEffect, useState } from 'react';
import firebase from './Firebase'

const SignIn = (email,pass) => {
  // const [useUid, setUid] = useState('');

  useEffect(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, pass)
          .then((userCredential) => {
            var user = userCredential.user;
            console.log('Sucess!!')
            console.log(user);
          })
          .catch(() => {});
  },[])
    
      // useEffect(() => {
      //   firebase
      //     .auth()
      //     .signInAnonymously()
      //     .then((user) => {

      //     })
      //     .catch((error) => {
      //       // var errorCode = error.code;
      //       // var errorMess = error.message;
      //     });

      //   firebase.auth().onAuthStateChanged((user) => {
      //     if (user) {
      //         var uid = user.uid;
      //         setUid(uid)
      //       console.log(uid);
      //     } else {}
      //   });
      // }, []);
    // return { useUid };
}

export default SignIn;