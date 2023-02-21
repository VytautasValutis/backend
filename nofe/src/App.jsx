import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import rand from './Functions/rand.js';


const africa = ['Zebras', 'Liūtas', '', 'Raganosis', '', 'Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];
let numbs = [];

function App() {
  console.clear();

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col">
              Pirmas skaicius
            </div>
            <div className="col">
              Antras skaicius
            </div>
          </div>
        </div>      </header>
    </div>
  );
}

export default App;
