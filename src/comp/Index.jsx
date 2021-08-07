/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { dev } from "../config/breakp";
import { color } from "../config/theme";

const Index = () => {
  return (
    <Container>
      <Title>Chazyy</Title>
      <Desc>
        chat with <Span>[expression]</Span>
      </Desc>
      <BtnCon>
        <Link to="/SignUp">
          <Button>regist</Button>
        </Link>
        <Divider>//</Divider>
        <Link to="/SignIn">
          <Button>login</Button>
        </Link>
      </BtnCon>
      <QuCon>
        <Text>
          "The meaning of life is contained in every single expression of life."
        </Text>
        <Creator> --Michael Jackson</Creator>
      </QuCon>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 10rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: "Roboto Mono";
  font-weight: 700;
  color: ${color.lightgray};
  font-size: 4vw;

  @media ${dev.tablet} {
    font-size: 10vw;
  }
`;

const Desc = styled.div`
  margin: 2rem 0 1rem 0;
  font-family: "Roboto Mono";
  font-weight: 600;
  color: ${color.lightgray};
  font-size: 1.5vw;

  @media ${dev.tablet} {
    font-size: 5vw;
  }
`;

const BtnCon = styled.div`
  margin: 0.5rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Button = styled.button`
  font-family: "Roboto Mono";
  font-weight: 700;
  font-size: 1.5vw;
  padding: 0.5rem 3rem;
  border-radius: 6px;
  background-color: ${color.bgColor};
  border: ${color.sonicSv} 2px solid;
  color: ${color.sonicSv};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border: ${color.themecol} 2px solid;
    color:${color.themecol};
  }

  @media ${dev.tablet} {
    font-size: 3.5vw;
  }
`;

const Divider = styled.div`
  color: ${color.sonicSv};
  margin: 1rem 0;
  font-weight: 700;

  @media ${dev.tablet} {
    font-size: 3vw;
  }
`;

const QuCon = styled.div`
  border: ${color.erie} 3px dashed;
  padding: 1rem;

  @media ${dev.tablet} {
    width: 80vw;
  }
`;

const Text = styled.div`
  color: ${color.erie};
  font-family: "Roboto Mono";
  margin-bottom: 0.3rem;

  @media ${dev.tablet} {
    font-size: 3vw;
  }
`;

const Creator = styled.div`
  color: ${color.erie};
  font-family: "Roboto Mono";
  @media ${dev.tablet} {
    font-size: 3vw;
  }
`;

const Span = styled.span`
  color:${color.themecol};
  font-family:"Roboto Mono";
`
export default Index;
