import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';


const tekstas = (arg) => { 
  return <h1> {arg} </h1> 
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {tekstas("lorem  trampapm pam")}
        {/* <p style={{color: 'red'}}>LABAS ZUIKI!</p> */}
      </header>
    </div>
  );
}

export default App;
