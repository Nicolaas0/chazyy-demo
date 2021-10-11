// =============== REACT ================
import React from "react";
// =============== REACT ================
import styled from "styled-components"; //STYLED COMPONENTS
// =============== IMPORT ================
import { dev } from "../../config/breakp";
import { color } from "../../config/theme";
// =============== IMPORT ================

const Loading = () => {
  return (
    <Container>
      <DataPrev>
        <Username>@ChazyyAdmin</Username>
        <Message>Your content is loading..</Message>
      </DataPrev>
    </Container>
  );
};

//========== STYLED COMPONENTS / CSS AREA ==========
const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  width: 30rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  border: 0.2rem solid ${color.rBFograp};
  background-color: ${color.bgColor};
  height: ${({ currentUser }) => (currentUser ? "65vh" : "40vh")};
  overflow-y: scroll;
  overflow-x: none;
  scroll-behavior: smooth;
  transition: 0.5s;

  &:hover {
    border: 0.2rem ${color.themecol} solid;
  }

  @media ${dev.tablet} {
    width: 80vw;
  }
`;

const DataPrev = styled.div`
  padding: 0;
  width: 30vw;
  height: auto;
  padding: 0.5rem;
  margin: 1rem 1.5rem;
  border-radius: 1rem;
  background-color: ${color.rBFogra};

  @media ${dev.tablet} {
    width: 70vw;
  }
`;

const Username = styled.div`
  color: ${color.platinum};
  font-family: "Roboto Mono";
  font-weight: 700;
  letter-spacing: 0.06rem;
  font-size: 0.8rem;
  margin-left: 0.5rem;
  padding: 0;

  @media${dev.mobileL} {
    font-size: 3.5vw;
  }
`;

const Message = styled.p`
  margin: 0.5rem 0;
  color: ${color.lightgray};
  font-family: "Roboto Mono";
  font-weight: 400;
  letter-spacing: 0.03rem;
  padding: 0;
  text-align: center;
  @media${dev.mobileL} {
    font-size: 3.2vw;
  }
`;

export default Loading;
