import React from "react";
import { FaNodeJs, FaReact, FaDatabase, FaMobileAlt } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import {
  SiFirebase,
  SiTailwindcss,
  SiExpo,
  SiMaterialui,
} from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      name: "Anabolic Archives",
      description:
        "Uma aplicação onde usuários podem criar protocolos estéticos e filtrar de acordo com os próprios parâmetros. Fullstack, em desenvolvimento.",
      icon: <FaDatabase />,
      technologiesUsed: ["React", "TailwindCSS", "Firebase", "Material-UI"],
      link: "https://github.com/misaelucas/anabolica",
    },
    {
      name: "Baldersbra",
      description:
        "Aplicação em React Native que calcula macros utilizando fórmulas científicas, ele determina a TMB do usuário e fornece as calorias necessárias para seu objetivo.",
      icon: <FaMobileAlt />,
      technologiesUsed: ["React Native", "Expo"],
      link: "https://github.com/misaelucas/baldersbra",
    },
    {
      name: "Centro Médico Hebrom",
      description:
        "Clínica médica, Single Page Application intuitiva, UI/UX focado em levar o usuário a agendar consultas.",
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
    "Material-UI": {
      icon: <SiMaterialui />,
      bgClass: "bg-indigo-500",
      name: "Material-UI",
    },
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col text-white bg-gray-800 font-mono rounded-lg p-4 shadow-lg hover:bg-pink-700 transition duration-300 ease-in-out transform-gpu hover:scale-105"
          >
            <h3 className="text-xl mb-2 md:mb-4">{project.name}</h3>
            <p className="mt-2 mb-4 flex-grow">{project.description}</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {project.technologiesUsed.map((technology, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center h-10 md:h-12 rounded-md ${technologyIcons[technology].bgClass}`}
                >
                  {technologyIcons[technology].icon}
                  <span className="text-white text-xs ml-1">
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
