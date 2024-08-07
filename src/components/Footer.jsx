import { BsGithub } from "react-icons/bs";

 function Footer ()  {
  return (
    <div className="flex justify-center !font-mono mb-2">
      <div className="text-xl ">
        <a
          className="underline underline-offset-4 text-2xl decoration-white hover:text-pink-500"
          href="https://github.com/misaelucas"
        >
          misaelucas
        </a>
        <a className="ml-4 -mb-2" href="https://github.com/misaelucas">
          <BsGithub style={{ fontSize: '1.4em', }} />
        </a>
      </div>
    </div>
  );
};

export default Footer
