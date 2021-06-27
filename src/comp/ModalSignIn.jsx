import styled from "styled-components";
import { useState,useRef } from "react";
import SignIn from "../SignIn";
import Navbar from "./Navbar";

const ModalSignIn = ({ showModal, setShowModal }) => {
  const [useEmail, setEmail] = useState("");
  const [usePass, setPass] = useState("");
  const modalRef = useRef();

  const handleSignIn = () => {
    SignIn(useEmail, usePass);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  }

  return (
    <Background ref={modalRef} onClick={closeModal}>
      {/* {offModal ? ( */}
      <Container>
        <Header>Sign In</Header>
        <Body>
          <Form onSubmit={handleSignIn}>
            <Label htmlFor="">Email</Label>
            <Input
              type="text"
              require
              value={useEmail}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(useEmail)
              }}
            />
            <Label htmlFor="">Password</Label>
            <Input
              type="password"
              require
              value={usePass}
              onChange={(e) => {
                setPass(e.target.value);
                console.log(usePass)
              }}
            />
            <Label htmlFor="">Re-Password</Label>
            <Input type="password" />
            <Button>Sign In!</Button>
          </Form>
        </Body>
      </Container>
      {/* ) : null} */}
    </Background>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.lghtBgColor};
  height: auto;
  width: 20%;
  border: 1px ${(props) => props.theme.lghtBgColor} solid;
  border-radius: 0.7rem;
`;

const Header = styled.div`
  color: ${(props) => props.theme.themeColor};
  font-family: Archivo;
  font-weight: 700;
  font-size: 1.3rem;
  margin-top: 0.5rem;
  padding: 0.5rem 0;
  text-align: center;
  height: 7%;
  width: 100%;
  border-bottom: 0.3rem ${(props) => props.theme.utilBlack} solid;
`;

const Body = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Input = styled.input`
  font-size: 0.8rem;
  margin: 0.5rem 0;
  padding: 0.3rem 0.3rem;
  border-radius: 1rem;
  border: 3px solid ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.lghtUtilBlack};
  color: ${(props) => props.theme.fontCol};
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: ${(props) => props.theme.fontCol};
  font-family: Archivo;
  font-weight: 500;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.lghtUtilBlack};
  border: 3px solid ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.themeColor};
  cursor: pointer;
`;

const Background = styled.div`
  margin-top: 37rem;
  background-color: rgba(0, 0, 0, 0.7);
  display:flex;
  position:absolute;
  justify-content:center;
  align-items:center;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0;
`;

export default ModalSignIn;
