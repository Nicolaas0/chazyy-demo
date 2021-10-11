import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import firebase from "../src/Firebase";
import { useAuth } from "./comp/context/AuthContext";

const UsePost = (mess) => {
  const [message, setMessage] = useState(null);
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  const { currentUser } = useAuth();

  const postData = (e) => {
    e.preventDefault();

    setUsername(currentUser.email);
    setMessage(mess);

    setId(uuidv4());

    const ref = firebase.database().ref("Demo");
    const data = {
      username: username,
      message: message,
      id: id,
    };

    ref.push(data);

    setMessage("");
    setUsername("");
  };

  useEffect(() => {
    postData();
  }, []);
};
export default UsePost;
