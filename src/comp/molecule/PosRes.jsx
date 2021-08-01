// =============== REACT ================
import React from "react";
// =============== REACT ================
import styled from "styled-components"; //STYLED COMPONENTS
// =============== IMPORT ================
import "../../index.css";
import "../../config/theme";
import ScrollableFeed from "react-scrollable-feed";
import { dev } from "../../config/breakp";
import { useEffect } from "react";
import { color } from "../../config/theme";
// =============== IMPORT ================

const PosRes = (prop) => {

  //===== DECLARING VARIABLES / STATE =====
  const data = prop.val;
  //===== DECLARING VARIABLES / STATE =====

  useEffect(() => {}, []);

  return (
    <Container>
      <ScrollableFeed>
        {data.map((d) => (
          <DataPrev key={d.id}>
            <Username>{d.username}</Username>
            <Message className="message">{d.message}</Message>
          </DataPrev>
        ))}
      </ScrollableFeed>
    </Container>
  );
};

//========== STYLED COMPONENTS / CSS AREA ==========
const DataPrev = styled.div`
  padding: 0;
  width: 25rem;
  height: auto;
  padding: 0.5rem;
  margin: 1rem 1.5rem;
  border-radius: 1rem;
  background-color: ${color.rBFogra};

  @media ${dev.mobileL} {
    width: 20rem;
  }

  @media ${dev.mobileM} {
    width: 15rem;
    font-size: 75%;
  }
`;

const Username = styled.div`
  color: ${color.platinum};
  font-family: "Roboto Mono";
  font-weight: 700;
  letter-spacing: 0.06rem;
  font-size: 0.8rem;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  padding: 0;
`;

const Message = styled.p`
  margin: 0.5rem 0;
  color: ${color.lightgray};
  font-family: "Roboto Mono";
  font-weight: 400;
  letter-spacing: 0.03rem;
  padding: 0;
  text-align: center;
`;

const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  width: 30rem;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  border: 0.2rem solid ${(props) => props.theme.utilBlack};
  background-color: ${(props) => props.theme.bgColor};
  height: 15rem;
  overflow-y: scroll;
  scroll-behavior: smooth;
  transition: 0.5s;

  &:hover {
    border: 0.2rem ${(props) => props.theme.themeColor} solid;
  }

  @media ${dev.mobileL} {
    width: 25rem;
  }

  @media ${dev.mobileM} {
    width: 20rem;
  }
`;

export default PosRes;
