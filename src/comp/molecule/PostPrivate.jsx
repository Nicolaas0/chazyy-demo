// =============== REACT ================
import React, { useEffect, useState } from "react";
// =============== REACT ================
import styled from "styled-components"; //STYLED COMPONENTS
// =============== IMPORT ================
import firebase from "../../Firebase";
import { dev } from "../../config/breakp";
import { color } from "../../config/theme";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../context/AuthContext";
import sent from "../../assest/sent.png";
// =============== IMPORT ================

const PostPrivate = () => {
  //===== DECLARING VARIABLES / STATE =====
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");
  const { currentUser } = useAuth();

  const [pending, setIsPending] = useState(false);
  const [unameErr, setUnameErr] = useState(false);
  //===== DECLARING VARIABLES / STATE =====

  const handleSubmit = (e) => {
    console.log(currentUser.email);
    e.preventDefault();

    setId(uuidv4());
    setUsername(currentUser.email);

    setIsPending(true);
    setUnameErr(false);

    const ref = firebase.database().ref("Demo");
    const data = {
      username: currentUser.email,
      message: message,
      id: id,
    };

    ref.push(data);

    setIsPending(false);
    setMessage("");
    setUsername("");
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <ChCon onSubmit={handleSubmit}>
        <TextArea
          type="text"
          rows="1"
          cols="40"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a good words..."
        />
        <Send src={sent} role="button" onClick={handleSubmit}></Send>
        {/* {!unameErr && ""}
        {!pending && <Button>Post</Button>}
        {pending && <Button>Adding...</Button>} */}
      </ChCon>
    </Container>
  );
};

//========== STYLED COMPONENTS / CSS AREA ==========
const Container = styled.div`
  width: auto;
  height: auto;
  border-radius: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 1rem;

  @media ${dev.mobileL} {
    width: 20rem;
  }
`;

const TextArea = styled.textarea`
  background-color: ${color.bgColor};
  color: ${color.lightgray};
  font-family: "Roboto Mono";
  margin: 0.5rem 0;
  display: block;
  transition: 0.1s;
  border:none;
  resize: none;
overflow-y:hidden;
`;

const Send = styled.img`
  width: 20px;
  cursor: pointer;
  height: 50%;
`;

const ChCon = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  border-radius: 5px;
  background-color: ${color.bgColor};
  border:${color.rbForga} 4px solid;
`;
export default PostPrivate;
