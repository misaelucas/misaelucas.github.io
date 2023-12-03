import "../assets/css/Bio.css";
import GitHubButton from "./GitHubButton";
import Projects from "./Projects";
import { Footer } from "./Footer";
import Gengar from "../assets/img/gengar.gif";
const MainPage = () => {
  return (
    <div className="bio flex mt-12 lg:mt-16 text-white justify-center font-mono flex-col">
      <div className="flex flex-col ml-8 sm:ml-12 md:ml-20 lg:ml-24">
        <div className="font-bold font-sans text-3xl sm:text-4xl md:text-4xl sm:-ml-4 lg:text-5xl tracking-wider">
          <div className="flex items-center">
            <span>Hi, I’m Misa.</span>
            <img src={Gengar} alt="" className="ml-2 self-end" />
          </div>
        </div>
        <div className="text-xl leading-7 mt-4 tracking-tight px-5 lg:w-3/4">
          Tenho 24 anos, atualmente trabalho com desenvolvimento web. Também me
          interesso profundamente por muay thai, estoicismo e bons poemas.
        </div>
        <div className="leading-7 text-xl mt-4 tracking-tight px-5 lg:w-3/4">
          Esta é minha página pessoal, fique à vontade para navegar, aqui você
          poderá encontrar meu portfólio, coisas que gosto de pensar que são
          interessantes, e a convergência de minhas considerações e percepções
          sobre a vida.
        </div>
        <div className="leading-7 text-xl mt-4 tracking-tight px-5 lg:w-3/4">
          Por enquanto, eu desenvolvo dependendo fortemente de{" "}
          <a
            href="https://react.dev/"
            className="underline text-blue-500 "
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          {", "}
          <a
            href="https://tailwindcss.com/"
            className="underline text-sky-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          {" e "}
          <a
            href="https://openai.com/"
            className="underline text-yellow-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase.
          </a>{" "}
          <p className="mt-1  ">
            Todo o meu trabalho é feito com uma abordagem mobile first e design
            minimalista.
          </p>
          <div className="mt-8">
            <GitHubButton />
          </div>
        </div>
        <div className="mr-2 -ml-2 ">
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;