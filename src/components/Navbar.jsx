import { useState } from "react";
import logo from "../assets/logo0.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };
  return (
    <nav className="w-full fixed top-0 bg-slate-300">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img className="w-8" src={logo} alt="" />
          <h3 className="text-2xl font-semibold font-clashDisplay">
            Md. Nuruzzaman
          </h3>
        </div>
        <div className="flex items-center gap-6 text-lg font-clashDisplay font-medium">
          <a
            href=""
            className={
              activeSection === "" ? "underline underline-offset-4" : ""
            }
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => handleNavLinkClick("about")}
            className={
              activeSection === "about" ? "underline underline-offset-4" : ""
            }
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => handleNavLinkClick("skills")}
            className={
              activeSection === "skills" ? "underline underline-offset-4" : ""
            }
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => handleNavLinkClick("projects")}
            className={
              activeSection === "projects" ? "underline underline-offset-4" : ""
            }
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => handleNavLinkClick("contact")}
            className={
              activeSection === "contact" ? "underline underline-offset-4" : ""
            }
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
