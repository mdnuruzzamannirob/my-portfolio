import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash.substring(1); // Get the part of the URL after the #
      setActiveSection(hash);
    };

    handleNavigation();

    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  return (
    <nav className="w-full fixed top-0 bg-gray-900 z-[100] text-secondary overflow-hidden">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto py-6 flex items-center justify-between">
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
        <div className="hidden lg:flex items-center gap-10 text-lg font-clashDisplay font-medium">
          <a
            href="/"
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
            className={
              activeSection === "contact"
                ? " text-primary underline underline-offset-[6px] decoration-primary decoration-2"
                : "hover:underline underline-offset-[6px] decoration-2 decoration-primary"
            }
          >
            Contact
          </a>
        </div>
        <div className="flex lg:hidden">
          <label className="btn btn-circle bg-secondary hover:bg-white swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input onClick={() => setNavOpen(!navOpen)} type="checkbox" />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        <div
          className={`lg:hidden fixed top-0 left-0 w-3/4 sm:w-2/5 h-screen z-50 bg-gray-800 text-secondary px-5  transition-transform transform  ${
            navOpen ? "translate-x-0" : "-translate-x-full"
          } duration-700 ease-in-out`}
        >
          <div className="flex items-center justify-center h-[96px]">
            <div className="flex items-start gap-3">
              <img
                className="w-8 rounded-full outline-none border-none"
                src={logo}
                alt=""
              />
              <div>
                {" "}
                <h3 className="text-lg sm:text-xl font-semibold font-clashDisplay">
                  Md. Nuruzzaman
                </h3>
                <small>A junior web developer</small>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:hidden font-Epilogue font-semibold border-t py-12">
            <a
              href=""
              className={
                activeSection === ""
                  ? " text-primary underline underline-offset-[6px] decoration-primary decoration-2 btn bg-white/10 hover:bg-white/10 border-none text-base"
                  : "hover:underline underline-offset-[6px] decoration-2 decoration-primary btn bg-white/5 hover:bg-white/10 text-secondary border-none text-base"
              }
            >
              Home
            </a>
            <a
              href="#about"
              className={
                activeSection === "about"
                  ? " text-primary underline underline-offset-[6px] decoration-primary decoration-2 btn bg-white/10 hover:bg-white/10 border-none text-base"
                  : "hover:underline underline-offset-[6px] decoration-2 decoration-primary btn bg-white/5 hover:bg-white/10 text-secondary border-none text-base"
              }
            >
              About
            </a>
            <a
              href="#skills"
              className={
                activeSection === "skills"
                  ? " text-primary underline underline-offset-[6px] decoration-primary decoration-2 btn bg-white/10 hover:bg-white/10 border-none text-base"
                  : "hover:underline underline-offset-[6px] decoration-2 decoration-primary btn bg-white/5 hover:bg-white/10 text-secondary border-none text-base"
              }
            >
              Skills
            </a>
            <a
              href="#projects"
              className={
                activeSection === "projects"
                  ? " text-primary underline underline-offset-[6px] decoration-primary decoration-2 btn bg-white/10 hover:bg-white/10 border-none text-base"
                  : "hover:underline underline-offset-[6px] decoration-2 decoration-primary btn bg-white/5 hover:bg-white/10 text-secondary border-none text-base"
              }
            >
              Projects
            </a>
            <a
              href="#contact"
              className={
                activeSection === "contact"
                  ? " text-primary underline underline-offset-[6px] decoration-primary decoration-2 btn bg-white/10 hover:bg-white/10 border-none text-base"
                  : "hover:underline underline-offset-[6px] decoration-2 decoration-primary btn bg-white/5 hover:bg-white/10 text-secondary border-none text-base"
              }
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
