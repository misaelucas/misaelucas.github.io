import {
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaMobileAlt,
  FaPython,
} from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiExpo } from "react-icons/si";

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
); // I DONT KNOW WHY WHEN BUILDING WHEN VITE I DONT HAVE THIS ICON... :( IT HAD USING CREATE-REACT-APP.

const Projects = ({ isEnglish }) => {
  const projects = [
    {
      name: "Anabolic Archives",
      description: isEnglish
        ? "An application where users can create fitness protocols and filter according to their own parameters."
        : "Um aplicativo onde os usuários podem criar protocolos de fitness e filtrar de acordo com seus próprios parâmetros.",
      icon: <FaDatabase />,
      technologiesUsed: ["React", "TailwindCSS", "Firebase", "Material-UI"],
      link: "https://github.com/misaelucas/anabolica",
    },
    {
      name: "HnH Server Checker",
      description: isEnglish
        ? "HnH Server Checker is a Python script utilizing web scraping with BeautifulSoup to monitor the real-time status of the Haven and Hearth game server from an online URL."
        : "HnH Server Checker é um script Python que utiliza web scraping com BeautifulSoup para monitorar o status em tempo real do servidor do jogo Haven and Hearth a partir de uma URL online.",
      icon: <FaPython />,
      technologiesUsed: ["Python"],
      link: "https://github.com/misaelucas/HnH-Server-Checker",
    },
  ];

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
      icon: materialUiSvg,
      bgClass: "bg-indigo-500",
      name: "Material-UI",
    },
    Express: { icon: <FaNodeJs />, bgClass: "bg-gray-900", name: "Express" },
    Python: { icon: <FaPython />, bgClass: "bg-yellow-500", name: "Python" },
  };

  return (
    <div className="flex flex-col gap-6 bg-cool-blue p-4 -ml-2 rounded-lg">
      <div className="relative blur-opacity group">
        <div className="mb-1 text-2xl sm:text-4xl md:text-3xl sm:-ml-4 lg:text-3xl font-bold mt-12 w-80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white">
          {isEnglish ? "Projects" : "Projetos"}
        </div>
        <div className="absolute underline bottom-0 left-0 w-full h-0.5 bg-pink-600 transition-colors duration-300"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col text-white bg-slate-800 font-sans rounded-lg p-4 shadow-lg hover:bg-pink-700 transition duration-500 ease-in-out transform-gpu hover:scale-105"
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
