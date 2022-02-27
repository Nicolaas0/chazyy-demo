import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { dev } from "../../config/breakp";
import { color } from "../../config/theme";
import { useUser } from "../context/UserContext";
import user from "../../assest/user.png";
import email from "../../assest/email.png";
import firebase from "firebase";

const Profile = () => {
  const auth = firebase.auth;
  const [error, setError] = useState({
    username: {
      status: false,
      message: "",
    },
    email: {
      status: false,
      message: "",
    },
    password: {
      status: false,
      message: "",
    },
  });
  const emailRef = useRef();
  const usernameRef = useRef();
  const passRef = useRef();
  const [edit, setEdit] = useState({
    email: false,
    username: false,
  });

  const { currentUser, updateEmail, updateUsername } = useUser();

  const unameValidator = () => {
    const uname = usernameRef.current;
    const value = uname.value;

    if (value === "" || value.length === 0) {
      uname.style.borderColor = "#121212";
    } else {
      if (value === currentUser.displayName) {
        uname.style.borderColor = "orange";
        setError((prev) => ({
          ...prev,
          username: {
            status: true,
            message: "Dont use the same username",
          },
        }));
      } else {
        if (value.length > 15) {
          uname.style.borderColor = "red";
          setError((prev) => ({
            ...prev,
            username: {
              status: true,
              message: "Your username is too long! Max 15 characters.",
            },
          }));
        } else {
          uname.style.borderColor = "green";
          setError((prev) => ({
            ...prev,
            username: {
              status: false,
              message: "",
            },
          }));
        }
      }
    }
  };

  const emailValidator = () => {
    const email = emailRef.current;
    const value = email.value;

    if (value === "" || value.length === 0) {
      email.style.borderColor = "#121212";
    } else {
      if (value === currentUser.email) {
        email.style.borderColor = "red";
        setError((prev) => ({
          ...prev,
          email: {
            status: true,
            message: "Dont use your same email!",
          },
        }));
      } else {
        email.style.borderColor = "green";
        setError((prev) => ({
          ...prev,
          email: {
            status: false,
            message: "",
          },
        }));
      }
    }
  };

  const uUnameHandler = async (e) => {
    e.preventDefault();

    try {
      console.log("in try");
      if (usernameRef.current.value !== currentUser.displayName) {
        const cred = auth.EmailAuthProvider.credential(
          currentUser.email,
          passRef.current.value
        );
        await currentUser.reauthenticateWithCredential(cred);
        updateUsername(usernameRef.current.value);
        setEdit({
          username: false,
        });
        usernameRef.current.value = "";
        usernameRef.current.borderColor = "#121212";
      } else {
        console.log("ERROR!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const uEmailHandler = async (e) => {
    e.preventDefault();

    try {
      console.log("in try");
      if (emailRef.current.value !== currentUser.email) {
        console.log("in if");
        const cred = auth.EmailAuthProvider.credential(
          currentUser.email,
          passRef.current.value
        );
        await currentUser.reauthenticateWithCredential(cred);
        updateEmail(emailRef.current.value);
        setEdit({
          email: false,
        });
        usernameRef.current.value = "";
        usernameRef.current.borderColor = "#121212";
      } else {
        console.log("ERROR!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => { }, []);

  return (
    <Body>
      <Routing>
        Chazyy /{" "}
        <Link to="/app">
          <Redir>Main</Redir>
        </Link>{" "}
        / <Span>Profile</Span>
      </Routing>
      <MainCon>
        <SecCon onSubmit={uUnameHandler}>
          <Box>
            <Icon src={user} />
            <Input
              type="text"
              placeholder={
                currentUser.displayName
                  ? currentUser.displayName
                  : "Create your username"
              }
              ref={usernameRef}
              readOnly={!edit.username}
              onChange={unameValidator}
            />
            {edit.username ? (
              <Button
                onClick={() => {
                  setEdit({ username: false });
                  usernameRef.current.value = "";
                  usernameRef.current.style.borderColor = "#121212";
                  setError((prev) => ({
                    ...prev,
                    username: { ...prev.message, status: false },
                  }));
                }}
                type="button"
              >
                Cancel
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setEdit({ username: true });
                }}
                disabled={edit.email}
                type="button"
              >
                Edit
              </Button>
            )}
          </Box>
          {error.username.status ? (
            <Text col={usernameRef.current.style.borderColor}>
              {error.username.message}
            </Text>
          ) : null}
          {edit.username ? (
            <>
              <Input
                type="password"
                placeholder="Enter your password"
                ref={passRef}
              />
              <Button disabled={error.username.status} error={error}>
                Submit
              </Button>
            </>
          ) : null}
        </SecCon>

        <SecCon onSubmit={uEmailHandler}>
          <Box>
            <Icon src={email} />
            <Input
              type="text"
              placeholder={currentUser.email}
              ref={emailRef}
              readOnly={!edit.email}
              edit={edit}
              onChange={emailValidator}
            />
            {edit.email ? (
              <Button
                onClick={() => {
                  setEdit({ email: false });
                  emailRef.current.value = "";
                  emailRef.current.style.borderColor = "#121212";
                  setError((prev) => ({
                    ...prev,
                    email: { ...prev.message, status: false },
                  }));
                }}
                type="button"
              >
                Cancel
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setEdit({ email: true });
                }}
                disabled={edit.username}
                type="button"
              >
                Edit
              </Button>
            )}
          </Box>
          {error.email.status ? (
            <Text color={usernameRef.current.style.borderColor}>
              {error.email.message}
            </Text>
          ) : null}
          {edit.email ? (
            <>
              <Input
                type="password"
                placeholder="Enter your password"
                ref={passRef}
              />
              <Button error={error}>Submit</Button>
            </>
          ) : null}
        </SecCon>
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

const MainCon = styled.div`
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

const Input = styled.input`
  width: 60%;
  border-radius: 8px;
  padding: 0.3rem 0.5rem;
  font-size: 1rem;
  margin: 0.5rem;
  background-color: ${color.erie};
  border: 0.3rem ${color.rBFogra} solid;
  color: ${color.lightgray};
  transition: 0.5s;
  font-weight: 500;
  font-family: "Roboto Mono";
  cursor: ${({ edit }) => (edit ? "auto" : "pointer")};

  &:focus {
    border: 0.3rem solid ${color.platinum};
  }

  @media${dev.tablet} {
    width: 50vw;
  }
`;

const Button = styled.button`
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

// eslint-disable-next-line no-unused-vars
const Img = styled.image`
  height: 200px;
  width: 200px;
`;

const Text = styled.p`
  font-family: "Roboto Mono";
  color: ${({ col }) => (col === "orange" ? "orange" : "red")};
  margin: 2px 0;
`;

const SecCon = styled.form`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
export default Profile;
