import React, { useContext } from "react";
import "../css/Bio.css";
import { Button } from "@mui/material";

const Bio = () => {
  const github = "https://github.com/misaelucas";

  return (
    <div className="bio  flex mt-12 xl:mt-24 text-white justify-center font-mono flex-col">
      <div className="flex flex-col w-11/12 xl:w-2/4 ml-6 sm:w-11/12 lg:w-3/4 ml-8 sm:ml-12 md:ml-20 lg:ml-40">
        <div className=" font-bold font-sans text-3xl sm:text-4xl md:text-4xl sm:-ml-4 lg:text-5xl tracking-wider">
          Hi, I’m Misa.
        </div>
        <div className="text-xl leading-7 mt-4 tracking-tight p-1 w-11/12">
          I am 24 years old, currently working with web development. I'm also
          deeply interested in muay thai, stoicism and good poems.
        </div>
        <div className="leading-7 text-xl mt-4 tracking-tight p-1 w-11/12">
          This is my personal page, feel free to browse through, here you will
          be able to find my portfolio, things that i like to think they are
          interesting, and the convergence of my considerations and perceptions
          about life.
        </div>
        <div className="leading-7 text-xl mt-4  tracking-tight p-1 w-11/12">
          For now, i mainly code being heavily dependent on React, Tailwindcss
          and GPT-3. All my work is mobile-first driven.
        </div>
        <div className="mt-4">
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
        <div class="relative blur-opacity ">
          <div
            class="mb-1 text-2xl sm:text-4xl md:text-3xl sm:-ml-4 
          lg:text-3xl font-bold mt-12 w-80 transition ease-in-out delay-150 
          hover:-translate-y-1 hover:scale-110 duration-300"
          >
            My Work
          </div>
          <div class="absolute underline bottom-0 left-0 w-full h-0.5 bg-white "></div>
        </div>
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
