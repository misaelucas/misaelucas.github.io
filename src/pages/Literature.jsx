import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DionSixtyEighth from "../posts/DionSixtyEighth";
import Siddhartha from "../posts/Siddhartha"; // Import the new component
import "../App.css";

function Literature() {
  const booksData = [
    {
      author: "Dião Crisóstomo",
      title: "O Sexagésimo Oitavo Discurso: Sobre Opinião",
      component: DionSixtyEighth,
    },
    {
      author: "Hermann Hesse",
      title: "Siddhartha",
      component: Siddhartha,
    },
  ];

  const [expandedBook, setExpandedBook] = useState(null);

  const toggleTextDisplay = (index) => {
    if (expandedBook === index) {
      setExpandedBook(null);
    } else {
      setExpandedBook(index);
    }
  };

  return (
    <>
      <Header />
      <div className="text-white mx-auto max-w-3xl fade-in mt-8">
        {booksData.map((book, index) => (
          <div
            key={index}
            className="py-8 border-b border-white font-sans font-semibold border-opacity-25 last:border-b text-center"
          >
            <h2 className="text-2xl mb-2">
                {book.author}
            </h2>
            <h3 className="text-xl sm:text-2xl mb-4 px-5 italic">{book.title}</h3>
            <button
              onClick={() => toggleTextDisplay(index)}
              className="bg-pink-600 text-sm font-sans hover:bg-pink-600 rounded p-1 transition-all duration-500"
            >
              {expandedBook === index ? "Esconder" : "Mostrar"}
            </button>
            {expandedBook === index && (
              <div className="max-w-11/12 mt-4">
                <book.component />
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Literature;
