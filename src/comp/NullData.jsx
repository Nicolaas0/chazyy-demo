import React from 'react';
import styled from 'styled-components';

const NullData = () => {
    return (
                <Container>
            <ErrorMes>Data is not available</ErrorMes>
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

export default NullData;