import "../assets/css/Bio.css";
import GitHubButton from "./GitHubButton";
import Projects from "./Projects";
import Gengar from "../assets/img/gengar.gif";
import Work from "./Work";

const MainPage = () => {
  return (
    <div className="bio flex flex-col items-center justify-center min-h-screen text-white font-sans">
      <div className="flex flex-col items-center text-center p-4 lg:p-8 max-w-screen-lg">
        <div className="font-bold font-sans text-3xl sm:text-4xl lg:text-5xl tracking-wider mb-4">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              {/* Apply CSS classes to each part of the text */}
              <span className="fade-in fade-in-1">Hi,</span>
              <span className="fade-in fade-in-2">I'm</span>
              <span className="fade-in fade-in-3">Misa.</span>
            </div>
            <img
              src={Gengar}
              alt="Gengar animation"
              className="ml-12 self-end fade-in fade-in-4"
            />
          </div>
        </div>
        <div className="text-xl leading-relaxed tracking-tight text-justify max-w-prose">
          <p>
            Hello! Here you will find my work, projects, things I might find
            interesting to share, and perhaps a little bit of literature in my
            blog page.
          </p>
          <p className="mt-4">
            All my work is created with a mobile-first approach and minimalist
            design.
          </p>
        </div>
        <div className="flex flex-col items-center mt-8">
          <GitHubButton />
          <Work />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
