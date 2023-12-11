// Banner.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Typewriter from "typewriter-effect";
import banner1 from "../../assets/html5.svg";
import banner2 from "../../assets/css3.svg";
import banner3 from "../../assets/tailwindcss.svg";
import banner4 from "../../assets/javascript.svg";
import banner5 from "../../assets/github2.svg";
import banner6 from "../../assets/firebase.svg";
import banner7 from "../../assets/react.svg";
import banner8 from "../../assets/nodejs.svg";
import banner9 from "../../assets/expres.js.png";
import banner10 from "../../assets/mongodb.svg";
import { FaFileArrowDown } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./banner.css";

const Banner = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="h-screen relative text-secondary font-clashDisplay font-semibold">
      <div className="bg-gray-900 h-full  relative -z-50 py-20">
        <Particles
          className="w-full h-full absolute top-0 -z-50"
          init={particlesInit}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 3,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#00ABE4",
              },
              links: {
                color: "#00ABE4",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.7,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className="absolute left-0 top-0 w-full h-full py-20">
        <div className="h-full max-w-7xl mx-5 md:mx-10 xl:mx-auto flex items-center">
          <div className="flex-1 text-5xl">
            <h3>Hi ,</h3>
            <h3 className="my-5">
              I&apos;m
              <span className="mx-5">Md.</span> <span>Nuruzzaman</span>
            </h3>
            <h3 className="text-primary text-4xl mt-5 mb-10">
              <Typewriter
                options={{
                  strings: "MERN Stack Developer",
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
            <div className="flex items-center gap-10">
              <a
                href="#contact"
                className="btn btn-sm h-10 bg-primary hover:bg-primary text-white border-none rounded-md px-5 font-medium text-lg"
              >
                <BsFillTelephoneFill />
                Contact
              </a>
              <button className="btn btn-sm h-10 bg-primary hover:bg-primary text-white border-none rounded-md px-5 font-medium text-lg">
                <FaFileArrowDown /> My Resume
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="circular-container">
              <img className="img1" src={banner1} alt="" />
              <img className="img2" src={banner2} alt="" />
              <img className="img3" src={banner3} alt="" />
              <img className="img4" src={banner4} alt="" />
              <img className="img4" src={banner5} alt="" />
              <img className="img4" src={banner6} alt="" />
              <img className="img4" src={banner7} alt="" />
              <img className="img4" src={banner8} alt="" />
              <img className="img4" src={banner9} alt="" />
              <img className="img4" src={banner10} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
