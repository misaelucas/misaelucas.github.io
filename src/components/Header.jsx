import { Link } from "react-router-dom";
import homegengar from "../assets/img/homegengar.png";

function Header() {
  return (
    <div className="flex justify-between fade-in text-white font-mono mt-4">
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
            className="px-2 py-1 rounded relative overflow-hidden group"
          >
            <span className="absolute left-0 top-0 w-full h-full bg-transparent group-hover:bg-pink-600 rounded-r transition-all duration-500"></span>
            <span className="relative z-10">contact</span>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
