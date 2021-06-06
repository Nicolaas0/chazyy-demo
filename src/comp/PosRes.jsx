import React from "react";
import styled from "styled-components";
import "../index.css";
import love from "../assest/love.png";
import reply from "../assest/reply.png";

const PosRes = (prop) => {
  const data = prop.val;

  return (
    <Container>
      {data.map((d) => (
        <DataPrev key={d.id}>
          <Username>{d.username}</Username>
          <Message className="message">{d.message}</Message>
          <IcCont>
            <Love src={love}></Love>
            <Reply src={reply}></Reply>
          </IcCont>
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

const Message = styled.p`
  margin: 0.5rem 0;
  color: ${(props) => props.theme.fontCol};
  font-family: Archivo;
  letter-spacing: 0.05rem;
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
  overflow-x: none;
  scroll-behavior: smooth;
  transition: 0.5s;

  &:hover {
    border: 0.2rem ${(props) => props.theme.themeColor} solid;
  }
`;

  const IcCont = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    margin-top:1rem;
    margin-bottom:0.1rem;
  `

const Love = styled.img`
  width: auto;
  cursor:pointer;
`;

const Reply = styled.img`
  cursor:pointer;
`;
export default PosRes;
