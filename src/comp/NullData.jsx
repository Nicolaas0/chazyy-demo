import React from "react";
import styled from "styled-components";
import storm from "../assest/strom.svg";

const NullData = () => {
  return (
    <Container>
      <Icon src={storm}></Icon>
      <ErrorMes>Data is Unavailable</ErrorMes>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  width: 30rem;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  border: 0.2rem solid ${(props) => props.theme.themeColor};
  background-color: ${(props) => props.theme.bgColor};
  height: 15rem;
`;

const Icon = styled.img`
  width:90px;
`

const ErrorMes = styled.div`
  font-size: 1.5rem;
  font-family: Archivo;
  color: ${(props) => props.theme.lghtUtilBlack};
`;

export default NullData;
