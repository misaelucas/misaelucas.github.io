import { BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="text-xl mb-2">
        <a
          className="underline underline-offset-4 decoration-white hover:text-pink-500"
          href="https://github.com/misaelucas"
        >
          misaelucas
        </a>
        <a className="ml-4 pt-12" href="https://github.com/misaelucas">
          <BsGithub style={{ fontSize: '1.5em', }} />
        </a>
      </div>
    </div>
  );
};
