import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import rand from './Functions/rand.js';


const africa = ['Zebras', 'Liūtas', '', 'Raganosis', '', 'Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];
let numbs = [];

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ul className="list-group list-group-flush">
          {
            africa.map((a, i) => a !== '' ? <li key={i}> {a} </li> : '')
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
