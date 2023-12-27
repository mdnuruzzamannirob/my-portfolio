import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PDFDownloadButton from "./PDFDownloadButton";
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-secondary">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
        <div className="h-full flex flex-col sm:flex-row items-center justify-between gap-4 py-6 lg:py-10 ">
          <div className="flex items-start gap-3">
            <img
              className="w-8 rounded-full outline-none border-none"
              src={logo}
              alt=""
            />
            <div className="">
              {" "}
              <h3 className="text-xl lg:text-2xl font-semibold font-clashDisplay">
                Md. Nuruzzaman
              </h3>
              <small>A junior web developer</small>
            </div>
          </div>
          <PDFDownloadButton />
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Md-Nuruzzaman-nirob"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 lg:w-8 lg:h-8" />
            </a>
            <a
              href="http://linkedin.com/in/mdnuruzzamannirob"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 lg:w-8 lg:h-8" />
            </a>
          </div>
        </div>
        <hr className="opacity-50" />
        <div className="text-center py-5">
          <small>
            Copyright © 2023 - All right reserved by{" "}
            <a
              href="https://mdnuruzzaman.web.app/"
              className="underline font-semibold"
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
