import React, { useState } from "react";
import Header from "../components/Header";
import "../css/Header.css";
import "../css/Macro.css";
export default function MacroCalculator() {
  const [isHome, setHome] = useState(true);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");


  return (
    <div>
      <Header home={isHome} />
      <form className="formulario">
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        {/* <input type="radio" value="Male" name="gender" onClick={changeGender} /> Male */}
        <input type="radio" value="Female" name="gender" /> Female
      </form>
    </div>
  );
}
