import { useState } from "react";

function HW7004({txt1, txt2, col}) {
    return (
        <div className="App">
          <header  style={{color: col}} className="App-header">
            <h1>{txt1}</h1>
            <h2>{txt2}</h2>
          </header>
        </div>
      );        
}

export default HW7004;