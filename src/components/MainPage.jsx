import "../assets/css/Bio.css";
import Projects from "./Projects";
import Gengar from "../assets/img/gengar.gif";
import Work from "./Work";

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

        <div className="text-md md:text-lg text-justify font-medium max-w-prose">
          {isEnglish ? (
            <>
              <p className="font-montserrat">
                Hello! Here, you'll find my work, projects, things I find
                interesting to share, and perhaps a bit of literature. All my
                work is created with a mobile-first approach and a minimalist
                design.
              </p>
            </>
          ) : (
            <>
              <p>
                Olá! Aqui, você encontrará meu trabalho, projetos, coisas que
                acho interessantes para compartilhar e talvez um pouco de
                literatura. Todo o meu trabalho é criado com uma abordagem
                mobile-first e um design minimalista.
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
