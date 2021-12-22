import styled from "styled-components";
import { useRef, useState } from "react";
import { color } from "../config/theme";
import { useAuth } from "../comp/context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { dev } from "../config/breakp";

const SignInPage = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { currentUser } = useAuth();

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signIn(emailRef.current.value, passRef.current.value);
      history.push(`/app`);
    } catch {
      setError("Error while signing in.");
    }
    setLoading(false);
  };

  return (
    <Div>
      <Heading>
        <Link to="/">
          <Redir>Chazyy</Redir>
        </Link>{" "}
        / <Span>Log in</Span>
      </Heading>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Email" ref={emailRef} />
          <Input type="password" placeholder="Password" ref={passRef} />
          {loading ? <Button>Loading</Button> : <Button>Sign In</Button>}
          <ForDonPass>
            New to Chazyy?{" "}
            <Link to="/signup">
              <Text>Click Here!</Text>
            </Link>
          </ForDonPass>
          <Warning error={error}>{error}</Warning>
          {/* {error ? <Warning>{error}</Warning> : null} */}
        </Form>
      </Container>
      <TipCon>
        <TipH>TIP:</TipH>
        <TipB>Enough for the tip, just have fun in Chazyy!!</TipB>
      </TipCon>
    </Div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 23vw;
  height: 50vh;
  border-radius: 8px;
  background-color: ${color.rBFogra};

  @media ${dev.tablet} {
    width: 70vw;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  &:focus {
    border: 0.3rem solid ${color.platnium};
  }

  @media${dev.tablet} {
    width: 50vw;
  }
`;

const Button = styled.button`
  margin: 1rem 0;
  background-color: ${color.rBFogra};
  border: solid 0.2rem ${color.bgColor};
  color: ${color.sonicSv};
  width: 5rem;
  font-weight: 700;
  font-family: "Roboto Mono";
  transition: 0.5s;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 0.5rem;

  &:hover {
    width: 6rem;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Heading = styled.div`
  margin: 1rem 0;
  font-family: "Roboto Mono";
  font-size: 1.4rem;
  padding: 1rem;
  margin-top: 1rem;
  font-weight: 700;
  color: ${color.lightgray};

  @media${dev.tablet} {
    font-size: 5vw;
  }
`;

const TipCon = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  width: 20%;
  display: flex;
  flex-direction: column;
  justfiy-content: center;
  align-items: center;
  border: 2px ${color.erie} dashed;

  @media${dev.tablet} {
    width: 50vw;
  }
`;
const TipH = styled.div`
  font-family: "Roboto Mono";
  font-weight: 700;
  color: ${color.erie};
`;
const TipB = styled.div`
  font-family: "Roboto Mono";
  font-weight: 700;
  color: ${color.erie};
`;

const Span = styled.span`
  font-family: "Roboto Mono";
  border-radius: 0.3rem;
  background-color: ${color.erie};
  padding: 0.1rem 0.2rem;
`;

const Warning = styled.span`
  display: ${(error) => (error ? "block" : "none")};
  margin: 0;
  font-family: "Roboto Mono";
  color: ${color.warning};
  font-size:1vw;
`;

const ForDonPass = styled.div`
  font-family: "Roboto Mono";
  font-size: 0.8rem;
  color: ${color.sonicSv};
  width: 100%;
  text-align: center;
  @media ${dev.tablet} {
    font-size: 3vw;
  }
`;

const Text = styled.span`
  display: block;
  text-align: center;
  font-family: "Roboto Mono";
  font-size: 0.8rem;
  color: ${color.themecol};
  text-decoration: none;
  margin: 0.3rem 0;
  padding: 0;

  @media${dev.tablet} {
    font-size: 3vw;
  }
`;

const Redir = styled.span`
  font-family: "Roboto Mono";
  color: ${color.lightgray};
`;
export default SignInPage;
