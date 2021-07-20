// import React, { useState } from "react";
import styled from "styled-components";
import "../../index.css";
import "../../config/theme";
// import firebase from '../Firebase'
// import love from "../assest/love.png";
// import lovec from "../assest/loveclick.png";
// import reply from "../assest/reply.png";
// import spam from "../assest/spam.png"
import ScrollableFeed from "react-scrollable-feed";
import { dev } from "../../config/breakp";
import { useEffect } from "react";
import { color } from "../../config/theme";

const PosRes = (prop) => {
  // const [click, setClick] = useState(false)

  // const scrollToBottom = () => {
  //   window.scrollTo({
  //     bottom: 300,
  //     behavior: "smooth",
  //   });
  // };

  useEffect(() => {
    // scrollToBottom()
  }, []);

  const data = prop.val;
  console.log(data);

  return (
    <Container>
      <ScrollableFeed>
        {data.map((d) => (
          <DataPrev key={d.id}>
            <Username>{d.username}</Username>
            <Message className="message">{d.message}</Message>
            {/* <IcCont>
              <Icon src={spam}/>
            </IcCont> */}
            {/* <IcCont>
            {click ? <Love onClick={()=>{
              setClick(!click)
            }} src={lovec}></Love> : <Love onClick={()=>{
              setClick(!click)
            }} src={love}></Love>}
            <Reply src={reply}></Reply>
          </IcCont> */}
          </DataPrev>
        ))}
      </ScrollableFeed>
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
  background-color: ${color.rBFogra};

  @media ${dev.mobileL} {
    width: 20rem;
  }

  @media ${dev.mobileM} {
    width: 15rem;
    font-size: 75%;
  }
`;

const Username = styled.div`
  color: ${color.platinum};
  font-family: "Roboto Mono";
  font-weight: 700;
  letter-spacing: 0.06rem;
  font-size: 0.8rem;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  padding: 0;
`;

const Message = styled.p`
  margin: 0.5rem 0;
  color: ${color.lightgray};
  font-family: "Roboto Mono";
  font-weight: 400;
  letter-spacing: 0.03rem;
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
  scroll-behavior: smooth;
  transition: 0.5s;

  &:hover {
    border: 0.2rem ${(props) => props.theme.themeColor} solid;
  }

  @media ${dev.mobileL} {
    width: 25rem;
  }

  @media ${dev.mobileM} {
    width: 20rem;
  }
`;

// const Icon = styled.img`
//   cursor:pointer;
// `

// const IcCont = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   margin-top: 1rem;
//   margin-bottom: 0.1rem;
// `;

// const Love = styled.img`
//   width: auto;
//   cursor: pointer;
// `;

// const Reply = styled.img`
//   cursor: pointer;
// `;
export default PosRes;