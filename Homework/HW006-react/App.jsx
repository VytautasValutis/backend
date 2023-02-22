import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import rand from './Functions/rand';

const numbs = [{id: uuidv4(), num:1}];

function App() {
  // console.clear();

  const [lBalls, setLBalls] = useState([]);
  const [rBalls, setRBalls] = useState([]);
  const [count, setCount] = useState(0);

  // const reset = () => {
  //   setLBalls(_ => numbs.slice(0, rand(5, 15)));
  // }
  const reset = () => {
    setCount(c => c + 1);
    setLBalls(b => [...b, {
      id:uuidv4(),
      num: count
    }
    ]);
  }


  return (
    <div className="App">
      <header className="App-header">
        <button type="button" className="btn btn-outline-danger" onClick={reset}>RESET</button>
        <div className="desk">
          <div className="ball-block">
          {
            lBalls.map((a, i) => <div key={i} className="balls">{a}</div>)
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
