import React, {useState} from "react";
import Header from "../components/Header";
import "../css/Header.css";

import "../css/Contact.css";

function Contact() {
    const [isHome, setHome] = useState(true);

  return (
    <>
    <Header home={isHome}/>
    <div className="container">
      <h2>So, how to reach me?</h2>
    </div>
    </>
  );
}

export default Contact;
