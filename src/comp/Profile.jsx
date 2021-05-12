import React from 'react';
import styled from 'styled-components';
import gitlogo from '../assest/github.png';
import twitterlogo from '../assest/twitter.png';

const Profile = () => {

    const op = 'Hello my Name is Albert Nicolas Augustinus Lerrick!';
    const mess = 'Thanks for using this SPA, i creating this for pratice my knowledge about react. For the source code you can see it on my Github:)'

    return (
        <Container>
            <Opening>{op}</Opening>
            <Desc>{mess}</Desc>
            <List>
                <GithubLogo src={gitlogo}></GithubLogo>
                <TwitterLogo src ={twitterlogo}></TwitterLogo>
            </List>
        </Container>
    );
}

const Container = styled.div`
width:30rem;
height:11rem;
border:0.35rem ${props => props.theme.mainYellow} solid;
position:relative;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
`

const GithubLogo = styled.img`
    margin:0;
    padding:0;
    cursor:pointer;
    Transform:scale(0.8);
`

const TwitterLogo = styled.img`
    margin:0;
    padding:0;
    cursor:pointer;
    Transform:scale(0.8);
`

const Opening = styled.div`
    
`

const Desc = styled.p`
text-align:center;
margin:0;
`

const List = styled.div`
    
`

export default Profile;