import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';

function App() {
  console.clear();

  const [lBalls, setLBalls] = useState([]);
  const [rBalls, setRBalls] = useState([]);

const reset = () => {

};

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" className="btn btn-outline-danger" onClick={reset}>RESET</button>
        <div className="desk">
        <div className="ball-block">
          {
          }
        </div>
        <div className="ball-block">
          {
          }
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
