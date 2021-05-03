import './index.css';
import Navbar from './comp/Navbar';
import Post from './comp/Post';

function App() {
  return (
    <div>
      <div className='nav'>
        <Navbar/>
      </div>
      <div className='content'>
        <Post/>
      </div>
    </div>
  );
}

export default App;
