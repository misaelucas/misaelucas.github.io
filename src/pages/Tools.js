import React, {useState} from "react";
import Header from "../components/Header";
import "../css/Header.css";
import "../css/Tools.css";
import "../css/button-tools.css";
import { useNavigate } from "react-router-dom";

function Tools() {
  const navigate = useNavigate();
  const navigateMacro = () => {
    navigate('/macrocalculator');
  };

  const [isHome, setHome] = useState(true)

  

  return (
    <div>
      <Header  home={isHome}/>
      <div className="tools-container">
        <h1 className="title">
          my tools 
        </h1>
        <hr></hr>
        <div className="buttonfix">
          <button
            onClick={navigateMacro}
            data-hover="we all gonna make it!"
          >
            <div className="toolstuff">macro calculator</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tools;
