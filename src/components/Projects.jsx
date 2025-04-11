// src/components/Projects.js
import React from "react";
import {
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaMobileAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiExpo,
  SiFlask,
  SiAxios,
} from "react-icons/si";

const materialUiSvg = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    role="img"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Material-UI Icon</title>
    <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z" />
  </svg>
);

const Projects = ({ isEnglish }) => {
  const projects = [
    {
      name: "Centro Médico Hebrom",
      description: isEnglish
        ? "A professional medical clinic website built with React and TailwindCSS. Features a streamlined appointment system and responsive design optimized for healthcare services."
        : "Website profissional para clínica médica desenvolvido com React e TailwindCSS. Possui sistema de agendamento simplificado e design responsivo otimizado para serviços de saúde.",
      icon: <FaReact />,
      technologiesUsed: ["React", "TailwindCSS"],
      link: "https://centromedicohebrom.com.br/",
    },
    {
      name: "Sedimentary Rocks",
      description: isEnglish
        ? "An interactive slideshow about sedimentary rocks, featuring AI-generated images and smooth animations. Built with React, Tailwind CSS, and Framer Motion."
        : "Uma apresentação interativa sobre rochas sedimentares, com imagens geradas por IA e animações suaves. Construído com React, Tailwind CSS e Framer Motion.",
      icon: <FaReact />,
      technologiesUsed: ["React", "TailwindCSS"],
      link: "https://github.com/misaelucas/SedimentaryRocks",
    },
    {
      name: "Anno Domini",
      description: isEnglish
        ? "Enterprise-grade EHR system built with React, Redux, and MongoDB. Implements secure patient records, financial analytics, and role-based access control."
        : "Sistema EHR empresarial desenvolvido com React, Redux e MongoDB. Implementa prontuários seguros, análise financeira e controle de acesso baseado em funções.",
      icon: <FaReact />,
      technologiesUsed: ["React", "Redux", "Node.js", "MongoDB", "TailwindCSS"],
      link: "#",
    },
    {
      name: "RHiD-Attendance-Bot",
      description: isEnglish
        ? "Application using Python and Selenium to monitor employee attendance. The program extracts input and output data from an online timekeeping system, ensuring data accuracy and graphing. Real-time alerts are delivered via Twilio."
        : "Aplicação feita em Python utilizando Selenium para monitorar a presença dos funcionários. O programa extrai dados de entrada e saída de um sistema de ponto online, garantindo a precisão dos dados e plotagem de gráficos. Alertas em tempo real são entregues via Twilio.",
      icon: <FaPython />,
      technologiesUsed: ["Python"],
      link: "https://github.com/misaelucas/RHiD-Attendance-Bot",
    },
    {
      name: "HnH Server Checker",
      description: isEnglish
        ? "A comprehensive solution to track the status of the Haven and Hearth game server."
        : "Uma solução robusta para rastrear o status do servidor de Haven and Hearth.",
      icon: <FaPython />,
      technologiesUsed: ["Python", "Flask", "Axios"],
      link: "https://github.com/misaelucas/HnH-Server-Checker",
    },
  ];

  const technologyIcons = {
    React: { icon: <FaReact />, bgClass: "bg-blue-500", name: "React" },
    Redux: { icon: <FaReact />, bgClass: "bg-purple-500", name: "Redux" },
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
    MongoDB: { icon: <FaDatabase />, bgClass: "bg-green-800", name: "MongoDB" },
    "React Native": {
      icon: <FaMobileAlt />,
      bgClass: "bg-blue-500",
      name: "React Native",
    },
    Expo: { icon: <SiExpo />, bgClass: "bg-purple-600", name: "Expo" },
    "Material-UI": {
      icon: materialUiSvg,
      bgClass: "bg-indigo-500",
      name: "Material-UI",
    },
    Express: { icon: <FaNodeJs />, bgClass: "bg-gray-900", name: "Express" },
    Python: { icon: <FaPython />, bgClass: "bg-yellow-500", name: "Python" },
    Flask: { icon: <SiFlask />, bgClass: "bg-gray-300", name: "Flask" },
    Axios: { icon: <SiAxios />, bgClass: "bg-blue-600", name: "Axios" },
  };

  return (
    <div className="flex flex-col gap-6 bg-cool-blue p-4 rounded-lg w-full">
      <div className="relative group">
        <div className="mb-1 text-2xl sm:text-4xl md:text-3xl font-bold mt-12 text-left text-white">
          {isEnglish ? "Projects" : "Projetos"}
        </div>
        <div className="absolute underline bottom-0 left-0 w-full h-0.5 bg-green-600 transition-colors duration-300"></div>
      </div>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) =>
          project.link && project.link !== "#" ? (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center text-white bg-gray-900 rounded-lg p-4 sm:p-6 shadow-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex-1">
                <h3 className="text-lg md:text-xl mb-1 text-left font-bold">
                  {project.name}
                </h3>
                <p className="text-sm sm:text-base mb-2 text-left">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologiesUsed.map((technology, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center h-8 px-2 rounded-md ${
                        technologyIcons[technology]?.bgClass || "bg-gray-500"
                      }`}
                    >
                      {technologyIcons[technology]?.icon}
                      <span className="text-white text-xs ml-1">
                        {technologyIcons[technology]?.name || technology}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ) : (
            <div
              key={index}
              className="flex flex-row items-center text-white bg-gray-900 rounded-lg p-4 sm:p-6 shadow-lg"
            >
              <div className="flex-1">
                <h3 className="text-lg md:text-xl mb-1 text-left font-bold">
                  {project.name}
                </h3>
                <p className="text-sm sm:text-base mb-2 text-left">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologiesUsed.map((technology, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center h-8 px-2 rounded-md ${
                        technologyIcons[technology]?.bgClass || "bg-gray-500"
                      }`}
                    >
                      {technologyIcons[technology]?.icon}
                      <span className="text-white text-xs ml-1">
                        {technologyIcons[technology]?.name || technology}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Projects;
