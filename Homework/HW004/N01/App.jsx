import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import rand from './Functions/rand.js.js';


const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function App() {

  const [rnd1, setRnd1] = useState(0);
  const [rnd2, setRnd2] = useState(0);

  const clickIt = () => {
    setRnd1(rand(1, 6));
    setRnd2(rand(1, 6));
  }


  return (
    <div className="App">
      <header className="App-header">
      <h2>pirmas skaičius <span className={(rnd1 === rnd2) ? "red" : ""}>{rnd1}</span></h2>
      <h2>antras skaičius <span className={(rnd1 === rnd2) ? "red" : ""}>{rnd2}</span></h2>
      <button type="button" className="btn btn-outline-warning mt-4"  onClick={clickIt}>CLICK</button>
      </header>
    </div>
  );
}

export default App;
