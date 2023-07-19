import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import CuteGengarWithAsh from "../img/meandgengar.gif";
import Header from "../components/Header";
import { FaLinkedin, FaDiscord, FaEnvelope } from "react-icons/fa";
import "../css/contact.css";

function Contact() {
  const [showContent, setShowContent] = useState(false);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowImage(false);
    }, 1500); // Adjust the delay in milliseconds before hiding the image

    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 1000); // Adjust the delay in milliseconds before showing the content

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="contact-container">
      <Header />
      <div className="content-container">
        {showContent && (
          <>
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
          </>
        )}
      </div>
      <Footer />
      {showImage && (
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat max-h-screen overflow-hidden transition-opacity duration-500"
          style={{
            backgroundImage: `url(${CuteGengarWithAsh})`,
            opacity: showContent ? 0 : 1,
          }}
        />
      )}
    </div>
  );
}

export default Contact;
