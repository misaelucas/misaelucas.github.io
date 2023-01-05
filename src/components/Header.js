import React from "react";

import { Link } from "react-router-dom";
import "../css/Header.css";
import Sidebar from "./Sidebar";

function Header(props) {
  return (
    <>
    <Sidebar />
      <div className="navbar">
        <p className="bootleg"></p>

        <div className="links">
          <ul>
            <li>{props.home ? <Link to="/">go back</Link> : <p></p>}</li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to="/tools">tools</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
