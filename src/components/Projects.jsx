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
        ? "A minimalist medical clinic website built with React and TailwindCSS, designed to deliver essential information clearly and effectively. The UI is focused on guiding users seamlessly toward making an appointment."
        : "Um website minimalista para clínica médica construído com React e TailwindCSS, projetado para fornecer informações essenciais de forma clara e eficaz. A interface é focada em guiar os usuários de maneira intuitiva para marcar uma consulta.",
      icon: <FaReact />,
      technologiesUsed: ["React", "TailwindCSS"],
      link: "https://centromedicohebrom.com.br/",
    },
    {
      name: "RHiD Tracker",
      description: isEnglish
        ? "Python-based automation program using Selenium to efficiently monitor employee attendance. The program extracts clock-in and clock-out data from a web-based timekeeping system, ensuring data accuracy through rigorous validation checks. Real-time alerts are delivered via Twilio, with robust error handling in place to maintain system reliability."
        : "Programa de automação baseado em Python usando Selenium para monitorar eficientemente a frequência dos funcionários. O programa extrai dados de entrada e saída de um sistema de controle de ponto, garantindo a precisão dos dados por meio de verificações de validação rigorosas. Alertas em tempo real são entregues via Twilio, com tratamento de erros robusto para manter a confiabilidade do sistema.",
      icon: <FaPython />,
      technologiesUsed: ["Python"],
      link: "#",
    },
    {
      name: "Anabolic Archives",
      description: isEnglish
        ? "An application where users can create fitness protocols and filter according to their own parameters."
        : "Um aplicativo onde os usuários podem criar protocolos estéticos e filtrar de acordo com seus próprios parâmetros.",
      icon: <FaDatabase />,
      technologiesUsed: ["React", "TailwindCSS", "Firebase", "Material-UI"],
      link: "https://github.com/misaelucas/anabolica",
    },
    {
      name: "HnH Server Checker",
      description: isEnglish
        ? "A comprehensive solution to track the status of the Haven and Hearth game server. This project includes a Python backend to monitor the server and a React frontend to display the data interactively."
        : "Uma solução robusta para rastrear o status do servidor de um jogo chamado Haven and Hearth. Este projeto inclui um backend feito em Python para monitorar o servidor e React no frontend para exibir os dados interativamente.",
      icon: <FaPython />,
      technologiesUsed: ["Python", "Flask", "Axios"], // Included Flask and Axios for this project
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
    Flask: { icon: <SiFlask />, bgClass: "bg-gray-300", name: "Flask" }, // Added Flask icon
    Axios: { icon: <SiAxios />, bgClass: "bg-blue-600", name: "Axios" }, // Added Axios icon
  };

  return (
    <div className="flex flex-col gap-6 bg-cool-blue p-4 rounded-lg w-full">
      <div className="relative blur-opacity group">
        <div className="mb-1 text-2xl sm:text-4xl md:text-3xl sm:-ml-4 lg:text-3xl font-bold mt-12 text-start text-white">
          {isEnglish ? "Projects" : "Projetos"}
        </div>
        <div className="absolute underline bottom-0 left-0 w-full h-0.5 bg-pink-600 transition-colors duration-300"></div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col text-white bg-gray-900 rounded-lg p-4 sm:p-6 shadow-lg hover:bg-pink-700 transition duration-300 ease-in-out transform-gpu hover:scale-105 w-full"
          >
            <h3 className="text-lg md:text-xl mb-1 text-left font-bold">
              {project.name}
            </h3>
            <p className="text-sm sm:text-base mb-2 text-left max-w-full sm:max-w-prose">
              {project.description}
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologiesUsed.map((technology, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center h-8 px-2 rounded-md ${technologyIcons[technology].bgClass}`}
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
