import React, { useEffect, useState } from "react";
import styled from "styled-components";
import firebase from "../Firebase";
import moment from "moment";
import { dev } from "../config/breakp";
// import { v4 as uuidv4 } from "uuid";

const Post = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setIsPending] = useState(false);
  const [unameErr, setUnameErr] = useState(false);
  const [date, setDate] = useState("");
  // const [uuid, setUuid] = useState("");

  const fixUname = (name) => {
    if (name.includes(" ") && name.length > 15) {
      return null;
    } else {
      return "@" + name;
    }
  };

  // const uuidGen = () => {
  //   const i = setUuid(uuidv4());
  //   return setUuid(i);
  // };

  const dateGen = () => {
    const vd = moment().format("MMMM Do YYYY, h:mm:ss a");
    return setDate(vd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // uuidGen();
    dateGen();

    const un = fixUname(username)

    let v = { username, message, date};

    if (v.username === null) {
      setUnameErr(true);
    } else {
      v.username = un;

      setIsPending(true);
      setUnameErr(false);

      const ref = firebase.database().ref("Demo");
      const data = {
        username: username,
        message: message,
        date: date,
      };

      ref.push(data);

      setIsPending(false);
      setMessage("");
      setUsername("");
    }
  };

  useEffect(() => {
    //add dependencies for l so it didnt create infinite loop
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

const Container = styled.div`
  width: 27rem;
  height: 14rem;
  border-radius: 1rem;
  position: relative;
  background-color: ${(props) => props.theme.lghtBgColor};
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
  font-family: Mulish;
  font-weight:600;
  color: ${(props) => props.theme.themeColor};
`;

const Block = styled.div`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.lghtUtilBlack};
  font-family: Mulish;
  font-weight: 600;
  border: 0.2rem solid ${(props) => props.theme.bgColor};
  border-radius: 1rem;
  transition: 0.3s;
  font-size: 1rem;
  padding: 0.35rem;
  transition: 0.1s;
  color: ${(props) => props.theme.fontCol};

  &:focus {
    border: 0.2rem solid ${(props) => props.theme.themeColor};
  }
`;

const Button = styled.button`
    border: 0.18rem solid ${(props) => props.theme.bgColor};
  padding:0.2rem 0;
  background-color: ${(props) => props.theme.lghtUtilBlack};
  color:${(props) => props.theme.utilCol}}}
  dding: 0.2rem 0.5rem;
  transition: 0.5s;
  cursor: pointer;
  width: 5rem;
  transition: 0.1s;

  &:hover {
    width: 6rem;
    border: 0.18rem solid ${(props) => props.theme.themeColor};
    color: ${(props) => props.theme.themeColor};
  }
`;

const TextArea = styled.textarea`
  background-color: ${(props) => props.theme.lghtUtilBlack};
  color: ${(props) => props.theme.fontCol};
  border: 0.18rem solid ${(props) => props.theme.bgColor};
  font-family: Archivo;
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
