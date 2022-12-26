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
    <div className="bio fadein">
      <div className="bio-container ">
        <div className="title">Hi, i'm Misa. </div>
        <div className="shenanigans">
          <p>
            I am {age} years old, currently living in Brazil and studying
            fullstack development, i have done a few jobs, you can check them at
            my github. I also enjoy playing Chess and Muay Thai.
          </p>
          <p>
            This is my personal page, feel free to browse through, here you will
            be able to find my portfolio, things that i like to think they are interesting, and the convergence of my considerations and perceptions about life.
          </p>
        </div>

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
          className="responsive"
        />
     </div>
  );
};

export default Bio;
