import React from "react";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  const projectName = "surfing at the internetz";

  return (
    <div className="flex flex-wrap justify-center underline underline-offset-4 text-sm">
      <div className="flex my-2 mt-3">
        <a href="https://leekspin.com/" className="rainbow mr-1">
          {projectName}
        </a>
        <span className="ml-1 nounder text-white"> -</span>
        <Link
          className="ml-2 decoration-white hover:text-pink-500"
          to="https://github.com/misaelucas"
        >
          misa
        </Link>
        <Link className="ml-2 text-xl " to="https://github.com/misaelucas/">
          <BsGithub />
        </Link>
      </div>
    </div>
  );
};
