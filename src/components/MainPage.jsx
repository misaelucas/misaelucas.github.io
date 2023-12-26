import "../assets/css/Bio.css";
import GitHubButton from "./GitHubButton";
import Projects from "./Projects";
import { Footer } from "./Footer";
import Gengar from "../assets/img/gengar.gif";
const MainPage = () => {

  function calculateAge(birthYear, birthMonth, birthDay) {
    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    return today.getFullYear() - birthDate.getFullYear() - (today < birthDate);
  }

  const age = calculateAge(1998, 9, 22);

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
          I am {age} years old, currently working with web developement. This is my my own personal space, feel free to browse through, here you will find my projects, things i might find interesting to share and a bit of literature. =)
        </div>
        <div className="leading-7 text-xl mt-4 tracking-tight px-5 lg:w-3/4">
          Currently, i develop mostly using{" "}
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
            Tailwindcss
          </a>
          {" and "}
          <a
            href="https://openai.com/"
            className="text-green-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nodejs.
          </a>{" "}
          All my work is made with a mobile first approach and minimalist design.

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
