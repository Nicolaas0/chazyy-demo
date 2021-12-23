// =============== REACT ================
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// =============== REACT ================
import styled from "styled-components"; //STYLED COMPONENTS
// =============== IMPORT ================
import Navbar from "./molecule/Navbar";
import Result from "./molecule/Result";
import Post from "./molecule/Post";
import Footer from "./molecule/Footer";
// eslint-disable-next-line no-unused-vars
// =============== IMPORT ================

const ChazyyMain = () => {

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
        <Post />
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
  width: 100%;
  height: 100%;
`;

const Nav = styled.div`
  height: auto;
  width: 100%;
`;

const Main = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Ft = styled.div`
  height: auto;
  width: 100%;
`;
export default ChazyyMain;
