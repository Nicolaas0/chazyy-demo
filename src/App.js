import './index.css';
import Navbar from './comp/Navbar';
import Post from './comp/Post';
import Footer from "./comp/Footer";
import Result from './comp/Result';
import styled from 'styled-components';
import Helmet from 'react-helmet';
// import Profile from './comp/Profile';
// import Loading from './comp/Loading';

function App() {
  return (
    <Container>
      <Helmet>
        <title>Chazyy | Demo</title>
      </Helmet>
      <Nav>
        <Navbar />
      </Nav>
      <Content>
        <Second>
          <Result />
          <Post />
        </Second>
      </Content>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  flex:1;
  width:100%;
  height:100%;
`

const Nav = styled.div`
  height: auto;
  width: auto;
`;

const Content = styled.div`
height:auto;
width:auto;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  margin-top:1rem;
`

const Second = styled.div`
  height: auto;
  width: auto;
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
