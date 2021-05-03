import React from "react";
import styled from 'styled-components';

const Post = () => {

  return (
    <Container>
      <Block>
        <Label>@</Label>
        <Input type='text' />
      </Block>
      <Block>
      <Label>Message</Label>
        <TextArea type='text' />
        </Block>
      <Button>Post</Button>
    </Container>
  );
};

const Container = styled.div`
  width:30%;
  border:0.35rem ${props => props.theme.mainYellow} solid;
  position:relative;
  top:1rem;
  left:2.5rem;
`

const Label = styled.label`
  margin-right:0.5rem;
`

const Block = styled.div`
  margin: 0.5rem 6rem;
  display:block;
`

const Input = styled.input`
  margin:0.5rem 0;
  border:0.25rem ${props => props.theme.mainBlue} solid;
  transition:0.3s;

  &:focus{
    padding:0.3rem;
  }
`

const Button = styled.button`
  margin-left:11rem;
  margin-bottom:0.5rem;
  background-color:transparent;
  border:0.25rem ${props => props.theme.mainBlue} solid;
  padding:0.2rem 0.5rem;
  transition:0.5s;
  cursor:pointer;
  
  &:hover{
    padding:0.2rem 1rem;
  }
`

  const TextArea = styled.textarea`
  margin:0.5rem 0;
  display:block;
  border:0.25rem ${props =>props.theme.mainBlue} solid;
`

export default Post;
