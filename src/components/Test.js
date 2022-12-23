import React, { useContext } from "react";
import "../css/Bio.css";
import "../css/Slide.css";
import "../css/Teste.css";
import duck from "../img/duck.gif";
import Header from "../components/Header";

const Test = () => {
  function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const age = getAge("1998/09/22");

  return (
    <div>
      {" "}
      <Header />
      <div className="Bio-Container-Teste">
          <h1 className="Title-Test">Hi, i'm Misa. </h1>
          <div className="bio">
            <p>
              I am {age} years old, currently living in Brazil and studying
              fullstack development, i have done a few jobs, you can check them
              at my github. I also enjoy playing Chess and Muay Thai.
              This is my personal page, feel free to browse through, here you
              will be able to find my portfolio, stuff about me and a few
              shenanigans..
            </p>
          </div>

        <button type="button" class="slide" className="flx">
          <div>
            <a
              href="https://github.com/misaelucas"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              github
            </a>
          </div>
          <i class="icon-arrow-right"></i>
        </button>

        <img
          src={duck}
          alt="a drawing of a duck with a variety of swords in his back, and he's also using an armor, which display his name: DUCK"
          className="res-img"
        />
      </div>
    </div>
  );
};

export default Test;
