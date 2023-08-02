import { BsGithub } from "react-icons/bs";

export const Footer = () => {
  const projectName = "surfing at the internetz";

  return (
    <div className="flex flex-wrap justify-center text-sm">
      <div className="flex my-2 ">
        <a
          href="https://leekspin.com/"
          className="rainbow underline underline-offset-4 mr-1 decoration-white"
        >
          {projectName}
        </a>
        <span className="ml-1 text-white">-</span>
        <a
          className="ml-2 underline underline-offset-4 decoration-white hover:text-pink-500"
          href="https://github.com/misaelucas"
        >
          misa
        </a>
        <a className="ml-2 text-xl " href="https://github.com/misaelucas">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};
