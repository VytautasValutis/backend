import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.scss';
import Gone10 from './Components/005/Gone10';


function App() {

  const [count, setCount] = useState(15);
  const [stars, setStars] = useState('');

  console.log('App');

  useEffect(() => {
    console.log('App born');
  }, []);

  useEffect(() => {
    console.log('count changed');
    setStars(''.padStart(count, '*'));
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        {
          count < 11 ? <Gone10 /> : null
        }
        <h1>{count}</h1>
        <h3>{stars}</h3>
        <button type="button" className="btn btn-outline-danger m-4" onClick={() => setCount(c => c + 1)}>add</button>
        <button type="button" className="btn btn-outline-danger m-4" onClick={() => setCount(c => c - 1)}>rem</button>
      </header>
    </div>
  );
}

export default App;
