import styled from "styled-components";

const SignInPage = () => {
  return (
    <Div>
      <Container>
        <ImageSide />
        <FormCon>
          <Form action="">
            <InputDiv>
              <Label>Email</Label>
              <Input type="text" />
            </InputDiv>
            <InputDiv>
              <Label>Password</Label>
              <Input type="text" />
            </InputDiv>
            <InputDiv>
              <Label>RePassword</Label>
              <Input type="text" />
            </InputDiv>
            <Button>Sign In</Button>
          </Form>
        </FormCon>
      </Container>
    </Div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props=>props.theme.drkrUtilBlack};
  width: 40vw;
  height: 50vh;
  border-radius: 8px;
`;

const ImageSide = styled.div`
  width: 15vw;
  background-color: red;

`;

const FormCon = styled.div`
  margin: 5vh 0;
  width: 25vw;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputDiv = styled.div`
  margin: 1vh 0;
`;

const Label = styled.label`
font-family: Archivo;
  text-align: center;
  display: block;
  margin-bottom: 0.2rem;
  color: ${props => props.theme.utilCol};
`;

const Input = styled.input`
  border-radius: 10px;
  padding: 0.3rem;
  background-color: ${(props) => props.theme.utilBlack};
  border: 0.2rem ${(props) => props.theme.bgColor} solid;
  color: ${(props) => props.theme.fontCol};
  transition:1s;

  &:focus {
    border: 0.2rem solid ${(props) => props.theme.themeColor};
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.drkrUtilBlack};
  border: solid 0.15rem ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontCol};
  width:5rem;
  transition:0.5s;

  &:hover {
    width: 6rem;
    border: 0.18rem solid ${(props) => props.theme.themeColor};
    color: ${(props) => props.theme.themeColor};
  }
`;

const Div = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100%;
`
export default SignInPage;