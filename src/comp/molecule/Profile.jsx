import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { dev } from "../../config/breakp";
import { color } from "../../config/theme";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const [error, setError] = useState(false);
  const emailRef = useRef();

  const { currentUser } = useAuth();
  const { updateEmail } = useAuth();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (emailRef.current.value === currentUser.email) {
        setError(true);
      } else {
        await updateEmail(emailRef.current.value);
        window.location.reload();
      }
    } catch (error) {}
  };

  useEffect(() => {}, [currentUser.email]);
  return (
    <Body>
      <Routing>
        Chazyy /{" "}
        <Link to="/Chazyy/">
          <Redir>Main</Redir>
        </Link>{" "}
        / <Span>Profile</Span>
      </Routing>
      <MainCon onSubmit={handleUpdate}>
        <Heading>Hello,</Heading>
        <Email>{currentUser.email}</Email>
        <SecHeading>wanna change your email?</SecHeading>
        <Input placeholder="sure its....." required ref={emailRef} />
        {error ? (
          <Button>Error while updating</Button>
        ) : (
          <Button>Change it please...</Button>
        )}
      </MainCon>
    </Body>
  );
};

const Body = styled.body`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Routing = styled.div`
  margin: 1rem 0;
  font-family: "Roboto Mono";
  font-size: 1.4rem;
  padding: 1rem;
  margin: 1rem 0;
  font-weight: 700;
  color: ${color.lightgray};

  @media${dev.tablet} {
    font-size: 5vw;
  }
`;

const MainCon = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 40vw;

  @media${dev.tablet} {
    width: 70vw;
  }
`;

const Heading = styled.div`
  margin: 2.5rem 0;
  align-self: start;
  height: auto;
  width: auto;
  font-size: 4.5vw;
  font-family: "Roboto Mono";
  color: ${color.lightgray};
  font-weight: 400;

  @media${dev.tablet} {
    font-size:6vw;
  }
`;

const SecHeading = styled.div`
  margin: 2rem 0;
  height: auto;
  width: auto;
  font-size: 1.7vw;
  font-family: "Roboto Mono";
  color: ${color.lightgray};
  font-weight: 400;

  @media${dev.tablet} {
    font-size: 3.5vw;
  }
`;

const Email = styled.div`
  font-family: "Roboto Mono";
  font-size: 3vw;
  font-weight: 600;
  text-decoration: underline;
  color: ${color.lightgray};
  height: auto;
  width: auto;
  transition: 0.5s;
  cursor: pointer;

  @media${dev.tablet} {
    font-size: 6vw;
  }

  &:hover {
    color: ${color.themecol};
  }
`;

const Input = styled.input`
  height: auto;
  width: 20vw;
  font-family: "Roboto Mono";
  background-color: ${color.bgColor};
  border: none;
  font-size: 1.5vw;
  border-bottom: 1px solid ${color.erie};
  color: ${color.lightgray};
  transition: 0.5s;

  @media${dev.tablet} {
    width:50vw;
    font-size: 3vw;
  }

  &:focus {
    border-color: ${color.themecol};
  }
`;

const Button = styled.button`
  margin: 1rem 0 0 0;
  height: auto;
  width: auto;
  border: 2px solid ${color.erie};
  background-color: ${color.bgColor};
  color: ${color.sonicSv};
  border-radius: 10px;
  padding: 0.3rem;
  font-family: "Roboto Mono";
  cursor: pointer;
  transition: 0.5s;

  @media${dev.tablet} {
    font-size: 3vw;
  }

  &:hover {
    padding: 0.5rem 0.5rem;
    color: ${color.themecol};
    border-color: ${color.themecol};
  }
`;

const Redir = styled.span`
  font-family: "Roboto Mono";
  color: ${color.lightgray};
`;

const Span = styled.span`
  font-family: "Roboto Mono";
  border-radius: 0.3rem;
  background-color: ${color.erie};
  padding: 0.1rem 0.2rem;
`;
export default Profile;
