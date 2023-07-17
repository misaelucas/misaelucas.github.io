import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <div className="flex justify-between text-white font-mono mt-2">
        <div className="flex text-xl underline underline-offset-4">
          <div className="mx-2">
            {props.home ? (
              <Link
                to="/"
                className="px-2 py-1 rounded relative overflow-hidden group"
              >
                <span className="absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-green-500 transition-all duration-300"></span>
                <span className="relative z-10">go home</span>
              </Link>
            ) : (
              <p></p>
            )}
          </div>
          <div className="mx-2">
            {props.blog ? (
              <Link
                to="/blog"
                className="px-2 py-1 rounded relative overflow-hidden group"
              >
                <span className="absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-green-500 transition-all duration-300"></span>
                <span className="relative z-10">blog</span>
              </Link>
            ) : (
              <></>
            )}
          </div>
          <div className="mx-2">
            {props.books ? (
              <Link
                to="/books"
                className="px-2 py-1 rounded relative overflow-hidden group"
              >
                <span className="absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-green-500 transition-all duration-300"></span>
                <span className="relative z-10">books</span>
              </Link>
            ) : (
              <></>
            )}
          </div>
          <div>
            {props.contact ? (
              <Link
                to="/contact"
                className="px-2 py-1 rounded relative overflow-hidden group"
              >
                <span className="absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-green-500 transition-all duration-300"></span>
                <span className="relative z-10">contact</span>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Header;
