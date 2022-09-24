import React, {useState} from 'react'
import Header from "../components/Header";
import "../css/Header.css";

export default function MacroCalculator() {
    const [isHome, setHome] = useState(true)

  return (
    <div><Header  home={isHome}/></div>
  )
}
