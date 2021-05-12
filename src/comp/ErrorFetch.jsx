import React from 'react';
import styled from 'styled-components';
import Result from '../comp/Result';

const ErrorFetch = (props) => {

    const mess = props.err;
    
    const handleReload = () => {
        const url = Result;
        window.location.href = url;
    }

    return (
        <Container>
            <ErrorMes>{mess}</ErrorMes>
            <Refresh onClick={handleReload}>Refresh</Refresh>
        </Container>
    );
}
 
const Container = styled.div`
    display:flex;
    width:30rem;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:1px solid black;
    border:0.35rem ${props => props.theme.mainYellow} solid;
    height:30rem;
`


const ErrorMes = styled.div`
    
`

const Refresh = styled.button`
margin-top:1rem;
      background-color:transparent;
  border:0.25rem ${props => props.theme.mainBlue} solid;
  padding:0.2rem 0.5rem;
  transition:0.5s;
  cursor:pointer;
  width:5rem;
  
  &:hover{
    width:6rem;
      border-radius:5rem;
  }
`

export default ErrorFetch;