import './index.css';
import Result from './comp/Result';
import Navbar from './comp/Navbar';

function App() {
  return (
    <div>
      <div className='nav'>
        <Navbar/>
      </div>
      <div className='content'>
        <Result/>
      </div>
    </div>
  );
}

export default App;
