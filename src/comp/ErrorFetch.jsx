import React from "react";
import styled from "styled-components";
import Result from "../comp/Result";
import storm from "../assest/strom.svg";

const ErrorFetch = (props) => {
  const mess = props.err;

  const handleReload = () => {
    const url = Result;
    window.location.href = url;
  };

  return (
    <Container>
      <Icon src={storm}></Icon>
      <ErrorMes>{mess}</ErrorMes>
      <Refresh onClick={handleReload}>Refresh</Refresh>
    </Container>
  );
};

const Icon = styled.img`
  width: 90px;
`;

const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  width: 30rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: 0.2rem solid ${(props) => props.theme.utilBlack};
  background-color: ${(props) => props.theme.bgColor};
  height: 15rem;
`;

const ErrorMes = styled.div`
  color: ${(props) => props.theme.fontCol};
  font-family: Archivo;
  letter-spacing: 0.05rem;
`;

const Refresh = styled.button`
  font-family: Archivo;
  letter-spacing: 0.05rem;
  margin-top: 1rem;
  background-color: transparent;
  color: ${(props) => props.theme.fontCol};
  border: 0.25rem ${(props) => props.theme.drkrUtilBlack} solid;
  padding: 0.2rem 0.5rem;
  transition: 0.5s;
  cursor: pointer;
  width: 5rem;

  &:hover {
    width: 6rem;
    border-radius: 5rem;
    color: ${(props) => props.theme.themeColor};
    border-color: ${(props) => props.theme.themeColor};
  }
`;

export default ErrorFetch;
