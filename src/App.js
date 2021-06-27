import "./index.css";
import Navbar from "./comp/Navbar";
import Post from "./comp/Post";
import Footer from "./comp/Footer";
import Result from "./comp/Result";
import styled from "styled-components";
import Helmet from "react-helmet";
import SignIn from "./SignIn";
// import logo from './assest/logo.png'
// import Profile from './comp/Profile';
// import Loading from './comp/Loading';

function App() {
  // SignIn();

  return (
    <Container>
      <Helmet>
        <title>Chazyy | Demo</title>
        {/* <link rel="icon" type="image/png" href={logo} /> */}
      </Helmet>

      {/* BODY */}

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
}

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

// const LeftSide = styled.div`
//   display:flex;
//   flex-direction:column;
// `

export default App;
