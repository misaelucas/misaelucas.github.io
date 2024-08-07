import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaLinkedin, FaDiscord, FaEnvelope } from "react-icons/fa";
import "../assets/css/contact.css";
import misamisa from "../assets/img/misamisa.gif";

function Contact() {
  return (
    <div className="contact-container">
      <Header />
      <div className="content-container">
        <img
          src={misamisa}
          className="w-2/4 sm:w-2/4  md:w-1/3 lg:w-1/6  rounded-full -mt-8 my-8"
          alt="Misamisa"
        />
        <div className="text-center">
          <div className="flex justify-center space-x-2 sm:space-x-4">
            <a
              href="https://www.linkedin.com/in/misael-lucas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://discordapp.com/users/1184574519692767272"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-blue-400 transition-colors"
            >
              <FaDiscord />
            </a>
            <a
              href="mailto:misaelucas@gmail.com"
              className="text-4xl text-white hover:text-blue-400 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
