/* eslint-disable no-unused-vars */
// =============== REACT ================
import React, { useEffect, useState, useRef } from "react";
// =============== REACT ================
import styled from "styled-components"; //STYLED COMPONENTS
// =============== IMPORT ================
import firebase from "../../Firebase";
import { dev } from "../../config/breakp";
import { color } from "../../config/theme";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../context/AuthContext";
import sent from "../../assest/sent.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";
// =============== IMPORT ================

const PostPrivate = () => {
  //===== DECLARING VARIABLES / STATE =====
  // eslint-disable-next-line no-unused-vars
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");
  const { currentUser } = useAuth();
  const usernameRef = useRef();

  // eslint-disable-next-line no-unused-vars
  const [pending, setIsPending] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [unameErr, setUnameErr] = useState(false);
  //===== DECLARING VARIABLES / STATE =====

  // const handleSubmit = (e) => {
  //   console.log(currentUser.email);
  //   e.preventDefault();

  //   setId(uuidv4());
  //   setUsername(currentUser.email);

  //   setIsPending(true);
  //   setUnameErr(false);
  //   const ref = firebase.database().ref("Demo");

  //   const data = {
  //     username: currentUser.email,
  //     message: message,
  //     id: id,
  //   };

  //   ref.push(data);

  //   setIsPending(false);
  //   setMessage("");
  //   setUsername("");
  // };

  useEffect(() => {}, []);

  return (
    <Container>
      <ChCon action="" method="POST">
        <TextArea
          type="text"
          rows="1"
          cols="40"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a good words..."
        />
        {/* <Send src={sent} role="button" onClick={handleSubmit}></Send> */}
        {/* {!unameErr && ""}
        {!pending && <Button>Post</Button>}
        {pending && <Button>Adding...</Button>} */}
      </ChCon>
    </Container>
  );
};

//========== STYLED COMPONENTS / CSS AREA ==========
const Container = styled.div`
  height: auto;
  border-radius: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 1rem;

  @media ${dev.tablet} {
    width: 20rem;
  }
`;

const Button = styled.button``;

const Input = styled.input`
  background-color: ${color.erie};
  font-family: "Roboto Mono";
  font-weight: 600;
  border: 0.2rem solid ${color.erie};
  border-radius: 1rem;
  transition: 0.3s;
  font-size: 1rem;
  padding: 0.35rem;
  transition: 0.1s;
  color: ${color.lightgray};

  &:focus {
    border: 0.15rem solid ${color.lightgray};
  }
`;

const TextArea = styled.textarea`
  width: 80vw;
  background-color: ${color.bgColor};
  color: ${color.lightgray};
  font-family: "Roboto Mono";
  margin: 0.5rem 0;
  display: block;
  transition: 0.1s;
  border: none;
  resize: none;
  overflow-y: hidden;
`;

const Send = styled.img`
  width: 20px;
  cursor: pointer;
  height: 50%;
`;

const ChCon = styled.form`
  width: 40vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  border-radius: 7px;
  background-color: ${color.bgColor};
  border: ${color.rbForgap} 3px solid;

  @media ${dev.tablet} {
    width: 80vw;
  }
`;
export default PostPrivate;
