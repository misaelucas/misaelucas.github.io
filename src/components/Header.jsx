import { Link } from "react-router-dom";
import { useState } from "react";
import homegengar from "../assets/img/homegengar.png";
import { FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import brFlag from "../assets/img/br-flag.svg";
import usaFlag from "../assets/img/usa-flag.svg";

function Header({ isEnglish, toggleLanguage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links that we can reuse
  const navLinks = (
    <>
      <Link
        to="/"
        onClick={() => setIsMobileMenuOpen(false)}
        className="block px-4 py-2 text-white hover:bg-pink-600"
      >
        Home
      </Link>
      <Link
        to="/contact"
        onClick={() => setIsMobileMenuOpen(false)}
        className="block px-4 py-2 text-white hover:bg-pink-600"
      >
        {isEnglish ? "Contact" : "Contato"}
      </Link>
      <Link
        to="/resume"
        onClick={() => setIsMobileMenuOpen(false)}
        className="block px-4 py-2 text-white hover:bg-pink-600"
      >
        {isEnglish ? "Resume" : "Currículo"}
      </Link>
    </>
  );

  return (
    <header className="bg-gray-800 px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Left section: Logo and nav links for larger screens */}
        <div className="flex items-center">
          <Link to="/" className="mr-4">
            <img
              src={homegengar}
              alt="Home"
              style={{ width: "50px", height: "40px" }}
            />
          </Link>
          <div className="hidden md:flex space-x-4">{navLinks}</div>
        </div>

        {/* Right section: Social, language toggle, and hamburger for small screens */}
        <div className="flex items-center space-x-4">
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
              className="mr-2"
              style={{ width: "20px", height: "20px" }}
            />
            {isEnglish ? "EN" : "BR"}
          </button>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 bg-gray-700 rounded">{navLinks}</div>
      )}
    </header>
  );
}

export default Header;
