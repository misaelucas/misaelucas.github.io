import { Link } from "react-router-dom";
import homegengar from "../assets/img/homegengar.png";
import { FaLinkedin } from "react-icons/fa";
import brFlag from "../assets/img/br-flag.svg";
import usaFlag from "../assets/img/usa-flag.svg";

function Header({ isEnglish, toggleLanguage }) {
  return (
    <div className="flex justify-between fade-in text-white mt-4">
      <div className="flex text-xl underline underline-offset-4">
        <div className="mx-2 mr-4">
          <Link
            to="/"
            className="px-2 py-1 rounded relative overflow-hidden group"
          >
            <span className="absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-pink-600 rounded-r transition-all duration-500"></span>
            <img
              src={homegengar}
              alt="Home"
              className="relative z-10"
              style={{ width: "50px", height: "40px" }}
            />
          </Link>
        </div>
        {/* <div className="mx-2">
            <Link
              to="/literature"
              className="px-2 py-1 rounded relative overflow-hidden group"
            >
              <span className="absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-pink-600 rounded-r transition-all duration-500"></span>
              <span className="relative z-10">literature</span>
            </Link>
          </div>  */}
        {/* <div className="mx-2">
            <Link
              to="/blog"
              className="px-2 py-1 rounded relative overflow-hidden group"
            >
              <span className="absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-pink-600 rounded-r transition-all duration-500"></span>
              <span className="relative z-10">blog</span>
            </Link>
          </div> */}
        <div className="mx-2 ml-4">
          <Link
            to="/contact"
            className="px-2 py-2 rounded relative overflow-hidden group"
          >
            <span className="absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-pink-600 rounded-r transition-all duration-500"></span>
            <span className="relative z-10">contact</span>
          </Link>
        </div>
      </div>
      <div className="mr-4  flex items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/misael-lucas" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition duration-300"
        >
          <FaLinkedin size={36} />
        </a>
        <button
          onClick={toggleLanguage}
          className="flex items-center bg-slate-800 text-white hover:text-black font-semibold px-2 py-1 rounded transition duration-300 hover:bg-gray-300"
        >
          <img
            src={isEnglish ? usaFlag : brFlag}
            alt={isEnglish ? "English" : "Portuguese"}
            className="mr-2 transition-transform duration-300 ease-in-out"
            style={{ width: "20px", height: "20px" }}
          />

          {isEnglish ? "EN" : "BR"}
        </button>
      </div>
    </div>
  );
}

export default Header;
