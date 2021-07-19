import React from "react";
import styled from "styled-components";
import Navbar from "./molecule/Navbar";
import Result from "./molecule/Result";
import Post from "./molecule/Post";
import Footer from "./molecule/Footer";

const ChazyyMain = () => {
  return (
    <Container>
      {/* Navbar Area */}
      <Nav>
        <Navbar />
      </Nav>
      {/* End of Navbar area */}

      {/* Home Area */}
      <Home>
        <Second>
          <Result />
          <Post />
        </Second>
      </Home>
      {/* End of Home area */}

      {/* Footer Area */}
      <Footer />
      {/* End of Footer Area */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Nav = styled.div`
  height: 100%;
  width: 100%;
`;

const Home = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
`;

const Second = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export default ChazyyMain;
