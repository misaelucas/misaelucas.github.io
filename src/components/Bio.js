import React, { useContext } from "react";
import "../css/Bio.css";
import { Button } from "@mui/material";

const Bio = () => {
  const github = "https://github.com/misaelucas";

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
    <div className="bio flex mt-12 xl:mt-24 text-white justify-center flex-col">
      <div className="flex flex-col w-3/4 xl:w-2/4 lg:w-2/4">
        <div className="title wotfard-font font-bold text-5xl tracking-wider margin">
          Hi, I’m Misa.
        </div>
        <div className="wotfard-font leading-6 text-base mt-4 tracking-wider margin ">
          I am {age} years old, currently studying fullstack development, i have
          done a few projects, you can check them at my github. I'm deeply
          interested in muay thai, stoicism and good poems.
        </div>
        <div className="wotfard-font tracking-wider mt-2  margin ">
          This is my personal page, feel free to browse through, here you will
          be able to find my portfolio, things that i like to think they are
          interesting, and the convergence of my considerations and perceptions
          about life.
        </div>
        <div className="mt-4 wotfard-font margin ">
          <Button
            href={github}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            className=""
            size="large"
            sx={{
              width: 150,
              fontFamily: "monospace",
            }}
          >
            Github
          </Button>
        </div>
        <div className="projects">Projects</div>
        <div className="projects">
          <ul>
            <li>
              <a
                href="https://centromedicohebrom.com.br"
                target="_blank"
                rel="noreferrer"
              >
                Centro Médico Hebrom
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="https://github.com/misaelucas/baldersbra"
                target="_blank"
                rel="noreferrer"
              >
                Baldersbra
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="https://github.com/misaelucas/crud"
                target="_blank"
                rel="noreferrer"
              >
                Express CRUD
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="projects-container"></div>
    </div>
  );
};

export default Bio;
