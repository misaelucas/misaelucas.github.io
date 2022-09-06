import './App.css';
import Header from './components/Header';
import Bio from './components/Bio';
import { createContext, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";


export const ThemeContext = createContext(null)

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);



  return (
    <div className="App">
      <Header />
      <Bio />
      <div className="pedra">
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={80}
        />
      </div>
    </div>

  );
}

export default App;
