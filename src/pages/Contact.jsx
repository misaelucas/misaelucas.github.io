import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { FaLinkedin, FaDiscord, FaEnvelope } from "react-icons/fa";
import "../assets/css/contact.css";

function Contact() {


  return (
    <div className="contact-container">
      <Header />
      <div className="content-container">
        <div className="text-center">
          <div className="text-xl text-white -mt-20 sm:text-2xl md:text-3xl font-bold mb-4">
            Olá, você pode falar comigo por aqui:
          </div>
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
              href="https://discordapp.com/users/271460156083142656"
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
