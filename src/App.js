import './App.css';
import Header from './components/Header';
import Bio from './components/Bio';
import React, { useState } from 'react';



function App() {
  const [isHome, setHome] = useState(false)
  return (
      <div className="App" >
        <Header home={isHome}/>
        <Bio />

      </div>

  );
}

export default App;
