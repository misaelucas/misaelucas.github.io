import React from "react";
import { FaNodeJs, FaReact, FaDatabase, FaMobileAlt } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiFirebase, SiTailwindcss, SiExpo } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      name: "Anabolic Archives",
      description:
        "Um banco de dados para protocolos estéticos, aplicação fullstack, em desenvolvimento. React, Tailwindcss e Firebase.",
      icon: <FaDatabase />,
      technologiesUsed: ["React", "TailwindCSS", "Firebase"],
      link: "https://github.com/misaelucas/anabolica",
    },
    {
      name: "Centro Médico Hebrom",
      description:
        "Clínica médica, Single Page Application feita com React e Tailwindcss.",
      icon: <FaReact />,
      technologiesUsed: ["React", "TailwindCSS"],
      link: "https://centromedicohebrom.com.br",
    },
    {
      name: "Express CRUD",
      description:
        "API RESTful básico com funcionalidade CRUD para gerenciar uma coleção de usuários.",
      icon: <FaNodeJs />,
      technologiesUsed: ["Node.js", "Express"],
      link: "https://github.com/misaelucas/crud/",
    },
    {
      name: "Baldersbra",
      description:
        "Aplicação em React Native que calcula macros utilizando fórmulas científicas, ele determina a TMB do usuário e fornece as calorias necessárias para seu objetivo.",
      icon: <FaMobileAlt />,
      technologiesUsed: ["React Native", "Expo"],
      link: "https://github.com/misaelucas/baldersbra",
    },
  ];

  // Mapping object for technology icons
  const technologyIcons = {
    React: { icon: <FaReact />, bgClass: "bg-blue-500", name: "React" },
    Firebase: {
      icon: <SiFirebase />,
      bgClass: "bg-yellow-600",
      name: "Firebase",
    },
    "Node.js": { icon: <FaNodeJs />, bgClass: "bg-green-500", name: "Node.js" },
    TailwindCSS: {
      icon: <SiTailwindcss />,
      bgClass: "bg-sky-600",
      name: "TailwindCSS",
    },
    "React Native": {
      icon: <FaMobileAlt />,
      bgClass: "bg-blue-500",
      name: "React Native",
    },
    Expo: { icon: <SiExpo />, bgClass: "bg-purple-600", name: "Expo" },
    Express: { icon: <FaNodeJs />, bgClass: "bg-gray-900", name: "Express" },
  };

  return (
    <div className="flex flex-col gap-6 bg-cool-blue p-4 rounded-lg">
      <div className="relative blur-opacity group">
        <div className="mb-1 text-2xl sm:text-4xl md:text-3xl sm:-ml-4 lg:text-3xl font-bold mt-12 w-80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white">
          My Work
        </div>
        <div className="absolute underline bottom-0 left-0 w-full h-0.5 bg-white group-hover:bg-gray-300 transition-colors duration-300"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col text-white bg-gray-800 font-mono rounded-lg p-4 shadow-lg hover:bg-pink-700 transition duration-300 ease-in-out"
          >
            <h3 className="text-xl">{project.name}</h3>
            <p className="mt-2 font-mono">{project.description}</p>
            <div className="mt-4 grid grid-cols-2 px-8 mx-2 gap-2">
              {project.technologiesUsed.map((technology, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center w-full h-16 rounded-md ${technologyIcons[technology].bgClass}`}
                >
                  {technologyIcons[technology].icon}
                  <span
                    className={`text-white mt-1 text-xs ${
                      technology === "TailwindCSS" ? "text-sm" : ""
                    } ${technology === "React Native" ? "text-sm" : ""}`}
                  >
                    {technologyIcons[technology].name}
                  </span>
                </div>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
