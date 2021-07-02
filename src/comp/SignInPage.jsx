import styled from "styled-components";
import img from "../assest/cactus.jpg";

const SignInPage = () => {
  return (
    <Container>
      <ImageSide src={img} />
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
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #161616;
  width: 40vw;
  height: 50vh;
  border-radius: 8px;
`;

const ImageSide = styled.img`
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
  text-align: center;
  display: block;
  margin-bottom: 0.2rem;
`;

const Input = styled.input``;

const Button = styled.button``;
export default SignInPage;
