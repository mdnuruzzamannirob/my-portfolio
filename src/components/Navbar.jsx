import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };
  return (
    <nav className="w-full fixed top-0 bg-white shadow">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            className="w-8 rounded-full outline-none border-none"
            src={logo}
            alt=""
          />
          <h3 className="text-2xl font-semibold font-clashDisplay">
            Md. Nuruzzaman
          </h3>
        </div>
        <div className="flex items-center gap-10 text-lg font-clashDisplay font-medium">
          <a
            href=""
            className={
              activeSection === ""
                ? " text-primary underline underline-offset-[6px] decoration-primary decoration-2"
                : "hover:underline underline-offset-[6px] decoration-2 decoration-primary"
            }
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => handleNavLinkClick("about")}
            className={
              activeSection === "about"
                ? " text-primary underline underline-offset-[6px] decoration-primary decoration-2"
                : "hover:underline underline-offset-[6px] decoration-2 decoration-primary"
            }
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => handleNavLinkClick("skills")}
            className={
              activeSection === "skills"
                ? " text-primary underline underline-offset-[6px] decoration-primary decoration-2"
                : "hover:underline underline-offset-[6px] decoration-2 decoration-primary"
            }
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => handleNavLinkClick("projects")}
            className={
              activeSection === "projects"
                ? " text-primary underline underline-offset-[6px] decoration-primary decoration-2"
                : "hover:underline underline-offset-[6px] decoration-2 decoration-primary"
            }
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => handleNavLinkClick("contact")}
            className={
              activeSection === "contact"
                ? " text-primary underline underline-offset-[6px] decoration-primary decoration-2"
                : "hover:underline underline-offset-[6px] decoration-2 decoration-primary"
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
