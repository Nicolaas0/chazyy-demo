import styled from "styled-components";
import { useRef, useState } from "react";
import { color } from "../config/theme";
import { useAuth } from "../comp/context/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const repassRef = useRef();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passRef.current.value !== repassRef.current.value) {
      return setError("The password did not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passRef.current.value);
      history.push("/SignIn");
    } catch {
      setError("Error while signing up.");
    }
    setLoading(false);
  };

  return (
    <Div>
      <Heading>
        Chazyy / <Span>Register</Span>
      </Heading>
      <Container>
        <FormCon>
          <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Email" ref={emailRef} />
            <Input type="password" placeholder="Password" ref={passRef} />
            <Input
              className="repass"
              type="password"
              placeholder="Re-Password"
              ref={repassRef}
            />
            <Warning error={error}>{error}</Warning>
            {loading ? <Button>Loading...</Button> : <Button>Sign Up</Button>}
            <ForDonPass>
              Already have an account? <Link to="/SignIn"><Text>Click Here!</Text></Link>
            </ForDonPass>
            {/* {error ? <Warning>{error}</Warning> : null} */}
          </Form>
        </FormCon>
      </Container>
      <TipCon>
        <TipH>TIP:</TipH>
        <TipB>
          Don't create password over your partner's name, we don't have password
          reset if you breaking up with them.
        </TipB>
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
`;

const FormCon = styled.div`
  width: 25vw;
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
    border: 0.3rem solid ${(props) => props.theme.themeColor};
  }
`;

const Button = styled.button`
  margin: 0.5rem 0;
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

    border: 0.2rem solid ${(props) => props.theme.themeColor};
    color: ${(props) => props.theme.themeColor};
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
`;

const ForDonPass = styled.div`
  font-family:"Roboto Mono";
  font-size:0.8rem;
  color:${color.sonicSv};
`;

const Text = styled.span`
  font-family: "Roboto Mono";
  font-size: 0.8rem;
  color:${color.cultured};
  text-decoration:none;
  margin:0;
  padding:0;
`;
export default SignUpPage;
