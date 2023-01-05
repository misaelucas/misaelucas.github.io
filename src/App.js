import "./App.css";
import Header from "./components/Header";
import Bio from "./components/Bio";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  console.log(
    "Howdy, fellow struggler. If you happen to spot any errors, specially about website responsiveness, you can reach me at misaelucas@gmail.com, i will be happy to know."
  );

  const [isHome, setHome] = useState(false);

  return (
    <div className="App">

      <Header home={isHome} />
      <Bio />
    </div>
  );
}

export default App;
