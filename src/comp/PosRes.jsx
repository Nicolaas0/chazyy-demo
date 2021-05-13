import React from 'react';
import styled from 'styled-components';
import '../index.css'

const PosRes = (prop) => {

    const data = prop.val;

    const handleDelete = () => {
        data.map((d) => {
            console.log(d);
            }
        )
    }

    return (
            <Container>
            {
                data.map((d) => (

                    <DataPrev key={d.id} onClick={handleDelete}>
                            <Username>{d.username}</Username>
                        <Message className="message">{d.message}</Message>
                        <Dates>{d.date}</Dates>
                        </DataPrev>
    ))
                }
            </Container>
    );
}

const DataPrev = styled.div`
    padding:0;
    width:25rem;
    height:auto;
    padding:0.5rem;
    margin:1rem 1.5rem;
    border:0.35rem ${props => props.theme.mainBlue} solid;
    cursor:pointer;
    transition:0.5s;

    &:hover{
        background-color:${props => props.theme.warningRed};
    }
`


const Dates = styled.div`
    
`
const Username = styled.div`
    color:blue;
    font-size:0.8rem;
    margin-left:0.5rem;
    font-size:0.8rem;
    padding:0;
`

const Message = styled.p`
    margin:0.5rem 0;
    padding:0;
    text-align:center;
`

const Like = styled.div`
    margin:0.5rem 0;
    font-size:0.7rem
`

const Container = styled.div`
    display:flex;
    width:30rem;
    flex-direction:column;
    align-items:center;
    border:1px solid black;
    border:0.35rem ${props => props.theme.mainYellow} solid;
    height:30rem;
    overflow:scroll;
    scroll-behavior:smooth;
`
 
export default PosRes;