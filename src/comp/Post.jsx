import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const Post = () => {

  const [ username, setUsername ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ pending, setIsPending ] = useState(false);

  const fixUname = (name) => {
    return '@'+ name
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let v = { username, message};
    const un = fixUname(v.username);
    v.username = un;

    setIsPending(true);

    fetch("http://localhost:8000/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(v),
    }).then(() => {
      setIsPending(false);
    });
  };

    useEffect(() => {
    //add dependencies for l so it didnt create infinite loop
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
      <Block>
        <Label>@</Label>
          <Input type='text'
            required
            value={username}
            onChange={(e)=> setUsername(e.target.value)}/>
      </Block>
      <Block>
      <Label>Message</Label>
        <TextArea type='text' rows='5' cols='30'
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}/>
        </Block>
        {!pending && <Button>Post</Button>}
        {pending && <Button>Adding</Button>}
        </form>
    </Container>
  );
};

const Container = styled.div`
  width:30rem;
  height:17rem;
  border:0.35rem ${props => props.theme.mainYellow} solid;
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
`

const Label = styled.label`
  margin-right:0.5rem;
`

const Block = styled.div`
  display:block;
`

const Input = styled.input`
  border:0.25rem ${props => props.theme.mainBlue} solid;
  transition:0.3s;
  font-size:0.9rem;

  &:focus{
    padding:0.3rem;
  }
`

const Button = styled.button`
  background-color:transparent;
  border:0.25rem ${props => props.theme.mainBlue} solid;
  padding:0.2rem 0.5rem;
  transition:0.5s;
  cursor:pointer;
  width:5rem;
  
  &:hover{
    width:6rem;
  }
`

  const TextArea = styled.textarea`
  margin:0.5rem 0;
  display:block;
  border:0.25rem ${props =>props.theme.mainBlue} solid;
`

export default Post;
