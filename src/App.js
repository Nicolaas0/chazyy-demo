import './index.css';
import Navbar from './comp/Navbar';
import Post from './comp/Post';
import Result from './comp/Result';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Nav>
        <Navbar/>
      </Nav>
      <Content>
        <Post />
        <Result/>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
`

const Nav = styled.div`

`

const Content = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  margin-top:1rem;
`

export default App;
