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
// =============== IMPORT ================

const Post = () => {
  //===== DECLARING VARIABLES / STATE =====
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");

  const [pending, setIsPending] = useState(false);
  const [unameErr, setUnameErr] = useState(false);
  //===== DECLARING VARIABLES / STATE =====

  const handleSubmit = (e) => {
    e.preventDefault();

    setId(uuidv4());
    console.log(id);

    setIsPending(true);
    setUnameErr(false);

    const ref = firebase.database().ref("Demo");
    const data = {
      username: username,
      message: message,
      id: id,
    };

    ref.push(data);

    setIsPending(false);
    setMessage("");
    setUsername("");
  };

  useEffect(() => {
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Block>
          <Label>@</Label>
          <Input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Block>
        <Block>
          <TextArea
            type="text"
            rows="5"
            cols="30"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Block>
        {unameErr && <Warn>Dont use space in Username!</Warn>}
        {!unameErr && ""}
        {!pending && <Button>Post</Button>}
        {pending && <Button>Adding</Button>}
      </form>
    </Container>
  );
};

//========== STYLED COMPONENTS / CSS AREA ==========
const Container = styled.div`
  width: 27rem;
  height: 14rem;
  border-radius: 1rem;
  position: relative;
  background-color: ${color.rBFogra};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 1rem;

  @media ${dev.mobileL} {
    width: 20rem;
  }
`;

const Label = styled.label`
  margin-right: 0.5rem;
  font-family: "Roboto Mono";
  font-weight: 600;
  color: ${color.sonicSv};
`;

const Block = styled.div`
  display: block;
  margin-bottom: 0.5rem;
`;

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

const Button = styled.button`
  border: 0.18rem solid ${color.sonicSv};
  padding: 0.2rem 0;
  background-color: ${color.rBFogra};
  color: ${color.lightgray};
  padding: 0.2rem 0.5rem;
  transition: 0.5s;
  cursor: pointer;
  width: 5rem;
  transition: 0.1s;
  font-family: "Roboto Mono";

  &:hover {
    width: 6rem;
    border: 0.18rem solid ${(props) => props.theme.themeColor};
    color: ${(props) => props.theme.themeColor};
  }
`;

const TextArea = styled.input`
  background-color: ${color.erie};
  color: ${color.lightgray};
  border: 0.18rem solid ${color.erie};
  font-family: "Roboto Mono";
  margin: 0.5rem 0;
  display: block;
  transition: 0.1s;
  border-radius: 0.3rem;
  resize: none;

  &:focus {
    border: 0.18rem solid ${(props) => props.theme.themeColor};
  }
`;

const Warn = styled.div`
  font-family: Archivo;
  color: ${(props) => props.theme.utilCol};
  margin-bottom: 0.4rem;
`;

export default Post;
