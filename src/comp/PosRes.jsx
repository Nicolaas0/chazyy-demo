import React from 'react';
import styled from 'styled-components';
import '../index.css'

const PosRes = (prop) => {

    const data = prop.val;

    return (
            <Container>
                {
                    data.map((d) => (
                        <DataPrev key={d.id}>
                            <Username>{d.username}</Username>
                            <Message className="message">{d.message}</Message>
                            <Like>Like: {d.like}</Like>
                        </DataPrev>
    ))
                }
            </Container>
    );
}

const DataPrev = styled.div`
    margin-bottom:0.5rem;
    padding:0;
`

const Username = styled.div`
    color:blue;
    font-size:0.8rem;
`

const Message = styled.p`
    margin:0;
    padding:0;
`

const Like = styled.div`
    margin:0.5rem 0;
    font-size:0.7rem
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:baseline;
    align-items:center;
`


 
export default PosRes;