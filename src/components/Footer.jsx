import { FaFileArrowDown } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-secondary">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
        <div className="h-full flex flex-col lg:flex-row items-center justify-between py-10">
          <div className="">
            <div className="flex items-center gap-3">
              <img
                className="w-8 rounded-full outline-none border-none"
                src={logo}
                alt=""
              />
              <h3 className="text-xl lg:text-2xl font-semibold font-clashDisplay">
                Md. Nuruzzaman
              </h3>
            </div>
          </div>
          <button className="btn btn-sm bg-primary hover:bg-primary text-white border-none rounded-md font-medium">
            <FaFileArrowDown /> My Resume
          </button>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Md-Nuruzzaman-nirob"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="http://linkedin.com/in/mdnuruzzamannirob"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
        <hr />
        <div className="text-center py-5">
          <small>
            Copyright © 2023 - All right reserved by{" "}
            <a
              href="https://my-portfolio-project-37460.web.app/"
              className="underline font-bold"
            >
              Md. Nuruzzaman
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
