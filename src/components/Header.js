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
            <li>{props.home ? <Link to="/">go home</Link> : <p></p>}</li>
            <li>{props.blog ? <Link to="/blog">blog</Link> : <></>}</li>

            <li>{props.books ? <Link to="/books">books</Link> : <></>}</li>
            <li>
              {props.contact ? <Link to="/contact">contact</Link> : <></>}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
