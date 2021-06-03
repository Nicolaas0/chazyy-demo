import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Post = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setIsPending] = useState(false);
  const [unameErr, setUnameErr] = useState(false);

  const fixUname = (name) => {
    if (name.includes(" ")) {
      return null;
    } else {
      return "@" + name;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let v = { username, message };
    const un = fixUname(v.username);
    if (un === null) {
      setUnameErr(true);
    } else {
      v.username = un;
      setIsPending(true);
      setUnameErr(false);

      fetch("http://localhost:8000/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(v),
      }).then(() => {
        setIsPending(false);
        setMessage("");
        setUsername("");
      });
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
        {unameErr && <div>Dont use space in Username!</div>}
        {!unameErr && ''}
        {!pending && <Button>Post</Button>}
        {pending && <Button>Adding</Button>}
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 27rem;
  height: 14rem;
  border-radius:1rem;
  position: relative;
  background-color:${props=>props.theme.lghtBgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-right: 0.5rem;
  color:${props=>props.theme.fontCol};
`;

const Block = styled.div`
  display: block;
  margin-bottom:0.5rem;
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.lghtUtilBlack};
  font-family:Archivo;
  border: none;
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
  border: none;
  background-color: ${(props) => props.theme.lghtUtilBlack};
  padding: 0.2rem 0.5rem;
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
  color:${props => props.theme.fontCol};
  font-family:Archivo;
  margin: 0.5rem 0;
  display: block;
  border: none;
  transition:0.1s;
  border-radius:0.3rem;
  resize:none;

  &:focus {
    border: 0.18rem solid ${(props) => props.theme.themeColor};
  }
`;

export default Post;
