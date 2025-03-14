import React from "react";
import { FaFilePdf } from "react-icons/fa";

const Resume = ({ isEnglish }) => {
  const resumeLink = isEnglish ? "/CV-ENGLISH.pdf" : "/CV-PORTUGUESE.pdf";
  const resumeTitle = isEnglish ? "Resume" : "Currículo";

  return (
    <div className="flex flex-col items-center min-h-screen text-white p-4">
      <h1 className="text-3xl sm:text-4xl font-bold mt-16 mb-8">
        {resumeTitle}
      </h1>
      <div className="flex justify-center">
        <a
          href={resumeLink}
          download
          className="flex items-center px-6 py-3 bg-green-600 rounded hover:bg-green-700 transition font-bold text-lg"
        >
          <FaFilePdf className="text-2xl mr-2" />
          PDF
        </a>
      </div>
    </div>
  );
};

export default Resume;
