import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import "../css/Header.css";
import "../css/Macro.css";

export default function MacroCalculator() {
  const [isHome, setHome] = useState(true);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [tmb, setTMB] = useState("");
  const [get, setGET] = useState("");
  const [activitylevel, setActivityLevel] = useState("");
  const [bmi, setBMI] = useState("");

  const calculateStuff = (e) => {
    e.preventDefault();
    console.log(age);
    if (gender == "female") {
      setTMB(10 * weight + 6.25 * height - 5 * age - 161);
      setGET(tmb * activitylevel);
    }
    if (gender == "male") {
      setTMB(10 * weight + 6.25 * height - 5 * age + 5);
      setGET(tmb * activitylevel);
    }
  };

  return (
    <div>
      <Header home={isHome} />
      <form className="formulario">
        <table>
          <tbody>
            <tr className="genero">
              <td>Gênero:</td>
              <td>
                <input
                  type="radio"
                  name="gender"
                  className="radio-input"
                  value="Male"
                  id="male"
                  onClick={() => setGender("male")}
                ></input>
                <label htmlFor="male">{"\u00a0"}homem</label>
                <input
                  type="radio"
                  name="gender"
                  className="radio-input"
                  value="Female"
                  id="female"
                  onClick={() => setGender("female")}
                ></input>
                <label htmlFor="female">{"\u00a0"}mulher</label>
              </td>
            </tr>
            <tr className="tr-wrapper">
              <td className="input-wrapper">
                <label htmlFor="age">
                  Idade:{"\u00a0"}
                  <input
                    onChange={(e) => setAge(e.target.value)}
                    type="text"
                    className="input-text"
                    name="age"
                    maxLength="3"
                  ></input>
                </label>
                <label htmlFor="weight">
                  Peso:
                  <input
                    onChange={(e) => setWeight(e.target.value)}
                    type="text"
                    className="input-text"
                    name="weight"
                    maxLength="3"
                    placeholder="kg"
                  ></input>
                </label>
                <label htmlFor="height">
                  Altura:
                  <input
                    onChange={(e) => setHeight(e.target.value)}
                    type="text"
                    className="input-text"
                    name="Height"
                    maxLength="3"
                    placeholder="cm"
                  ></input>
                </label>
                <label htmlFor="atividade">
                  Atividade:{"\u00a0"}
                  <select
                    name="atividade"
                    className="atividade"
                    onChange={(e) => setActivityLevel(e.target.value)}
                    value={activitylevel}
                  >
                    <option value="1.4" defaultValue="Mui">
                      Muito Sedentário
                    </option>
                    <option value="1.5">Sedentário pouco ativo</option>
                    <option value="1.6">Sedentário mais ativo</option>
                    <option value="1.7">Moderadamente ativo (treina) </option>
                    <option value="1.8">Muito ativo</option>
                    <option value="2">Atividade intensa</option>
                  </select>
                </label>
                <button
            type="submit"
            onClick={calculateStuff}
            className="calculate-button buttons1"
          >
            bulking
          </button>
          <button
            type="submit"
            onClick={calculateStuff}
            className="calculate-button buttons2"
          >
            cutting
          </button>
          <button
            type="submit"
            onClick={calculateStuff}
            className="calculate-button buttons3"
          >
            recomp
          </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="buttons-calc">
          
        </div>
      </form>
    </div>
  );
}
