import React from 'react'
import '../css/Header.css';
import { RiSunFoggyLine } from 'react-icons/ri'

function Header() {
  return (
    <div className="navbar">
      <div className="links">
        <ul>
          <li>
            <a href="#">about me</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          

        </ul>
        
      </div>
      <RiSunFoggyLine className="sun" />  
    </div>
  )
}

export default Header