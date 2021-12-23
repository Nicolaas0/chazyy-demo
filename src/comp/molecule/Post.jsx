// =============== REACT ================
import React, { useEffect, useState } from "react";
// =============== REACT ================
import styled from "styled-components"; //STYLED COMPONENTS
// =============== IMPORT ================
// import firebase from "../../Firebase";
import { dev } from "../../config/breakp";
import { color } from "../../config/theme";
import uniqid from 'uniqid'
import { useAuth } from "../context/AuthContext";
import sent from "../../assest/sent.png";
import { useActv } from "../context/UserContext";
// =============== IMPORT ================

const PostPrivate = () => {
  //===== DECLARING VARIABLES / STATE =====
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");
  const { currentUser } = useAuth();
  const { post } = useActv()
  const uid = uniqid();

  //===== DECLARING VARIABLES / STATE =====

  const handleSubmit = (e) => {
    e.preventDefault();

    post(currentUser.email, message, uid);
    setMessage("");
  };

  useEffect(() => { }, []);

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
