import React from "react";
import styled from "styled-components";
import "../index.css";

const PosRes = (prop) => {
  const data = prop.val;



  return (
    <Container>
      {data.map((d) => (
        <DataPrev key={d.id}>
          <Username>{d.username}</Username>
          <Message className="message">{d.message}</Message>
        </DataPrev>
      ))}
    </Container>
  );
};

const DataPrev = styled.div`
  padding: 0;
  width: 25rem;
  height: auto;
  padding: 0.5rem;
  margin: 1rem 1.5rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.lghtBgColor};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.warningRed};
  }
`;

const Dates = styled.div``;
const Username = styled.div`
  color: blue;
  font-size: 0.8rem;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  padding: 0;
`;

const Message = styled.p`
  margin: 0.5rem 0;
  padding: 0;
  text-align: center;
`;

const Like = styled.div`
  margin: 0.5rem 0;
  font-size: 0.7rem;
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
  overflow-x: none;
  scroll-behavior: smooth;
`;

export default PosRes;
