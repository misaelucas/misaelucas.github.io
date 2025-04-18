import "../assets/css/Bio.css";
import Projects from "../components/Projects";
import Gengar from "../assets/img/gengar.gif";

const MainPage = ({ isEnglish }) => {
  return (
    <div className="bio flex flex-col items-center justify-center min-h-screen text-white font-sans">
      <div className="flex flex-col text-center p-4 lg:p-8 max-w-screen-lg">
        <div className="font-bold font-sans text-3xl sm:text-4xl lg:text-5xl tracking-wider mb-4">
          <div className="flex ">
            <div className="flex space-x-2 sm:-ml-2 md:-ml-4 ">
              <span className="fade-in fade-in-1">Hi,</span>
              <span className="fade-in fade-in-2">I'm</span>
              <span className="fade-in fade-in-3">Misa.</span>
            </div>
            <img
              src={Gengar}
              alt="Gengar animation"
              className="ml-8 sm:ml-10 md:ml-12 lg:ml-14 xl:ml-20 self-end fade-in fade-in-4 "
            />
          </div>
        </div>

        <div className="text-sm lg:text-xl text-justify font-medium max-w-prose">
          {isEnglish ? (
            <>
              <p className="font-montserrat">
                I'm a Full Stack Developer specializing in React, Node.js and modern web technologies.
                I focus on developing responsive applications with clean, efficient code.
                My goal is to create elegant solutions while continuously expanding my technical skills.
              </p>
            </>
          ) : (
            <>
              <p>
                Sou um Desenvolvedor Full Stack especializado em React, Node.js e tecnologias web modernas.
                Foco no desenvolvimento de aplicações responsivas com código limpo e eficiente.
                Meu objetivo é criar soluções elegantes enquanto expando continuamente minhas habilidades.
              </p>
            </>
          )}
        </div>

        <div className="flex flex-col">
          <Projects isEnglish={isEnglish} />{" "}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
