import React, { useState, useTransition } from "react";
import Header from "../components/Header";
import "../css/Contact.css";
function Contact() {
  const isHome = true;
  const contact = false;
  const books = true;
  const blog = true;
  return (
    <>
      <Header home={isHome} blog={blog} contact={contact} books={books} />
      <div className="container">
        <h2 className="">So, how to reach me?</h2>
        <div className="contact">
          <p>
            That's pretty simple. Just send me an email, my inbox is always
            open. I'll be happy to talk about coding or anything you might find
            browsing here. And lastly, it would be great to hear about any job
            opportunities.
          </p>
        </div>
        <div>
          <button type="button" className="mail-button">
            <div className="flexx">
              <a
                href="mailto:misaelucas@gmail.com"
                rel="noreferrer"
                className="mailbutton"
              >
                <div>Mail</div>
              </a>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
