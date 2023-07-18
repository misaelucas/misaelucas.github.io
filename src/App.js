import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";
import Projects from "./components/Projects.js";
import MainPage from "./components/MainPage";

function App() {
  console.log(
    "Howdy, fellow struggler. If you happen to spot any errors, specially about website responsiveness, you can reach me at misaelucas@gmail.com, i will be happy to know."
  );

  const isHome = false;
  const contact = true;
  const books = true;
  const blog = true;
  return (
    <div className="App fade-in overflow-hidden">
      <Header home={isHome} contact={contact} books={books} blog={blog} />
      <MainPage />
    </div>
  );
}

export default App;
