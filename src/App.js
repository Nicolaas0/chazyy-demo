import './index.css'
import Navbar from './Navbar';
import Post from './Post';

function App() {
  return (
    <div>
      <div className='nav'>
        <Navbar />
      </div>
      <div className='content'>
        <Post/>
      </div>
    </div>
  );
}

export default App;
