import "../assets/css/Bio.css";
import GitHubButton from "./GitHubButton";
import Projects from "./Projects";
import { Footer } from "./Footer";
import Gengar from "../assets/img/gengar.gif";
import { calculateAge } from "../utils/CalculateAge"; // Assume calculateAge is moved to a utility file

const MainPage = () => {
  const age = calculateAge(1998, 9, 22);

  return (
    <div className="bio flex mt-12 lg:mt-16 text-white justify-center font-mono flex-col">
      <div className="flex flex-col ml-8 sm:ml-12 md:ml-20 lg:ml-24">
        <div className="font-bold font-sans text-3xl sm:text-4xl md:text-4xl sm:-ml-4 lg:text-5xl tracking-wider">
          <div className="flex items-center">
            <span>Hi, I’m Misa.</span>
            <img
              src={Gengar}
              alt="Gengar animation"
              className="ml-2 self-end"
            />
          </div>
        </div>
        <div className="text-xl leading-7 mt-4 tracking-tight px-5 lg:w-3/4">
          I am {age} years old, an IT Analyst. This is my personal space; feel
          free to browse through it. Here you will find my projects, things I
          find interesting to share, and perhaps a little bit of literature in my blog page. 
        </div>
        <div className="leading-7 text-xl mt-4 tracking-tight px-5 lg:w-3/4">
          Currently, I mostly develop using{" "}
          <a
            href="https://react.dev/"
            className="underline text-blue-500 "
            target="_blank"
            rel="noopener noreferrer"
            title="Learn more about React"
          >
            React
          </a>
          {", "}
          <a
            href="https://tailwindcss.com/"
            className="underline text-sky-500"
            target="_blank"
            rel="noopener noreferrer"
            title="Learn more about Tailwind CSS"
          >
            Tailwind CSS
          </a>
          {" and "}
          <a
            href="https://nodejs.org/en"
            className="text-green-500 underline"
            target="_blank"
            rel="noopener noreferrer"
            title="Learn more about Node.js"
          >
            Node.js
          </a>
          . All my work is created with a mobile-first approach and minimalist
          design.
        </div>
        <div className="flex flex-col mt-8">
          <GitHubButton />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
