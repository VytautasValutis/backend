import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import rand from './Functions/rand.js';


const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];
let numbs = [];

function App() {

  const [sum, setSum] = useState(0);

  const clickIt = () => {
    numbs.push(rand(1, 10));
    console.log(numbs);
    setSum(numbs.reduce((b, a) => b += a, 0))
  }


  return (
    <div className="App">
      <header className="App-header">
      <h3>Suma {sum}</h3>
      <button type="button" className="btn btn-outline-warning mt-4"  onClick={clickIt}>CLICK</button>
      </header>
    </div>
  );
}

export default App;
