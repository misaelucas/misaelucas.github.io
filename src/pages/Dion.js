import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import DionSixtyEighth from "../posts/DionSixtyEighth";

function Dion() {
  const booksData = [
    {
      author: "Dião Crisóstomo",
      title: "O Sexagésimo Oitavo Discurso: Sobre Opinião",
      text: <DionSixtyEighth />,
    },
  ];

  return (
    <>
      <Header />
      <div className="text-white font-mono mx-auto max-w-3xl mt-8">
        {booksData.map((book, index) => (
          <div
            key={index}
            className="py-8 border-t border-white font-sans font-bold border-opacity-25 last:border-b text-center"
          >
            <h2 className="text-3xl mb-4 ">{book.author}</h2>
            <h3 className="text-xl sm:text-2xl mb-2 px-5 ">{book.title}</h3>
            <p className="max-w-11/12">{book.text}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Dion;
