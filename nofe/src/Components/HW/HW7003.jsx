import { useState } from "react";

function HW7003({arg}) {
    return (
        <div className="App">
          <header className="App-header">
            <h1 style={{color: (arg === "1" ? 'blue' : 'red')}}>Zebrai ir bebrai</h1>
          </header>
        </div>
      );        
}

export default HW7003;