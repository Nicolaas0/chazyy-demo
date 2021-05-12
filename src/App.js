import './index.css';
import Navbar from './comp/Navbar';
import Post from './comp/Post';
import Result from './comp/Result';
import styled from 'styled-components';
import Profile from './comp/Profile';

function App() {
  return (
    <Container>
      <Nav>
        <Navbar/>
      </Nav>
      <Content>
        <LeftSide>
          <Post />
          <Profile/>
          </LeftSide>
        <Result/>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
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

const LeftSide = styled.div`
  display:flex;
  flex-direction:column;
`

export default App;
