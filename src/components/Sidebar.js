import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import "../css/sidebar.css";
function Sidebar() {
  return (
    <div className="xD">
      {" "}
      <Menu width={"201px"} right>
        <a id="home" className="menu-item" href="/">
          <Link to="/">home</Link>
        </a>
        <a id="about" className="menu-item" href="/about">
          <Link to="/contact">contact</Link>
        </a>
        {/* <a id="contact" className="menu-item" href="/contact">
          <Link to="/tools">tools</Link>
        </a> */}
      </Menu>
    </div>
  );
}

export default Sidebar;
