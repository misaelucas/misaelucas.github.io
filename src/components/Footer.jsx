import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="flex justify-center font-sans text-2xl xl:text-2xl mb-2">
      <a className="ml-4 mb-2" href="https://github.com/misaelucas">
        <BsGithub style={{ fontSize: "1.4em" }} />
      </a>
    </div>
  );
}

export default Footer;
