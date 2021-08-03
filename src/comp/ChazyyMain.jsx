// =============== REACT ================
import React from "react";
// =============== REACT ================
import styled from "styled-components"; //STYLED COMPONENTS
// =============== IMPORT ================
import Navbar from "./molecule/Navbar";
import Result from "./molecule/Result";
import Post from "./molecule/Post";
import Footer from "./molecule/Footer";
import { useAuth } from "./context/AuthContext";
import PostPrivate from "./molecule/PostPrivate";
// =============== IMPORT ================

const ChazyyMain = () => {

  const { currentUser } = useAuth();
  return (
    <Container>
      {/* Navbar Area */}
      <Nav>
        <Navbar />
      </Nav>
      {/* End of Navbar area */}

      {/* Home Area */}
      <Main>
        <Result />
        {currentUser ? <PostPrivate /> : <Post />}
      </Main>
      {/* End of Home area */}

      {/* Footer Area */}
      <Ft>
        <Footer />
      </Ft>
      {/* End of Footer Area */}
    </Container>
  );
};

//========== STYLED COMPONENTS / CSS AREA ==========
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Nav = styled.div`
  height: auto;
  width: 100vw;
`;

const Main = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Ft = styled.div`
  height:auto;
  width:100vw;
`
export default ChazyyMain;
