import React, { useContext } from "react";
import "../css/Bio.css";
import "../css/Slide.css";
import duck from "../img/duck.gif";

const Bio = () => {
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
    <div className="bio ">
      <div>
        <h1 className="title fadein">Hi, I’m Misa. </h1>
      </div>
      <div className="shenanigans fadein2">
        <p>
          I am {age} years old, currently studying fullstack development, i have
          done a few jobs, you can check them at my github. I also have great
          interest in muay thai, stoicism and i really like good poems.
        </p>
        <p>
          This is my personal page, feel free to browse through, here you will
          be able to find my portfolio, things that i like to think they are
          interesting, and the convergence of my considerations and perceptions
          about life.
        </p>
      </div>
      <div className="github-button">
        <button type="button" className="slide">
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
          <i className="icon-arrow-right"></i>
        </button>
      </div>
      <img
        src={duck}
        alt="a drawing of a duck with a variety of swords in his back, and he's also using an armor, which display his name: DUCK"
        className="responsive fadein2"
      />
    </div>
  );
};

export default Bio;
