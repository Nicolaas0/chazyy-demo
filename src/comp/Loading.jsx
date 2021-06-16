import React from "react";
import styled from "styled-components";
import {dev} from '../config/breakp'

const Loading = () => {
  return (
    <Container>
      <DataPrev>
        <Username>@ChazyyAdmin</Username>
        <Message>Your content is loading, please wait..</Message>
      </DataPrev>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  width: 30rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  border: 0.2rem solid ${(props) => props.theme.utilBlack};
  background-color: ${(props) => props.theme.bgColor};
  height: 15rem;
  overflow-y: scroll;
  overflow-x: none;
  scroll-behavior: smooth;
  transition: 0.5s;

  &:hover {
    border: 0.17rem ${(props) => props.theme.themeColor} solid;
  }

  @media ${dev.mobileL} {
    width: 25rem;
  }

  @media ${dev.mobileM} {
    width: 20rem;
  }
`;

const DataPrev = styled.div`
  padding: 0;
  width: 25rem;
  height: auto;
  padding: 0.5rem;
  margin: 1rem 1.5rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.lghtBgColor};

  @media ${dev.mobileL} {
    width: 20rem;
  }

  @media ${dev.mobileM} {
    width: 15rem;
    font-size: 75%;
  }
`;

const Username = styled.div`
  color: ${(props) => props.theme.themeColor};
  font-family: Archivo;
  letter-spacing: 0.06rem;
  font-size: 0.8rem;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  padding: 0;
`;

const Message = styled.div`
  margin: 0.5rem 0;
  color: ${(props) => props.theme.fontCol};
  font-family: Archivo;
  letter-spacing: 0.05rem;
  padding: 0;
  text-align: center;
`;

export default Loading;
