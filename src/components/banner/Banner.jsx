import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Typewriter from "typewriter-effect";
import banner1 from "../../assets/html5.svg";
import banner2 from "../../assets/css3.svg";
import banner3 from "../../assets/tailwindcss.svg";
import banner4 from "../../assets/javascript.svg";
import banner5 from "../../assets/react.svg";
import banner6 from "../../assets/nodejs.svg";
import banner7 from "../../assets/expres.js.png";
import banner8 from "../../assets/mongodb.svg";
import banner9 from "../../assets/firebase.svg";
import banner10 from "../../assets/github2.svg";
import bg from "../../assets/834_prev_ui (1).png";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./banner.css";
import PDFDownloadButton from "../PDFDownloadButton";

const Banner = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="h-screen relative text-secondary">
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
                  quantity: 1,
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
      <div className="absolute left-0 top-16 lg:top-0 w-full h-full">
        <div className="h-full max-w-7xl mx-5 md:mx-10 xl:mx-auto flex flex-col-reverse lg:flex-row lg:items-center">
          <div className="flex-1 text-center lg:text-start">
            <h3 className="text-xl sm:text-2xl font-semibold">Hello !</h3>
            <h3 className="text-primary flex flex-col sm:flex-row items-center justify-center lg:justify-start sm:gap-3 font-bold text-2xl sm:text-3xl xl:text-4xl mt-2 mb-6 sm:mb-8 lg:mb-10">
              <span className="text-secondary">I am</span>
              <Typewriter
                options={{
                  strings: [
                    "Md. Nuruzzaman",
                    "Junior Web Developer",
                    "Junior React Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
            <div className="flex items-center justify-center lg:justify-start  flex-wrap">
              <a
                href="#contact"
                className="btn btn-sm sm:h-10 bg-primary hover:bg-primary text-secondary border-none rounded font-medium z-10"
              >
                <BsFillTelephoneFill />
                Contact Me
              </a>
              <div className="divider divider-horizontal divider-info opacity-40 mx-2 lg:mx-4"></div>
              <PDFDownloadButton />
            </div>
          </div>
          <div className="flex items-center justify-center select-none">
            <img className="w-80 sm:w-96 lg:w-full" src={bg} alt="" />
          </div>
        </div>
      </div>

      <div className="absolute w-full bottom-0">
        <div className="scroll-container">
          <div className="circular-container">
            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img1 w-8 h-8" src={banner1} alt="" />
              <h3 className="font-semibold">HTML</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img2 w-8 h-8" src={banner2} alt="" />
              <h3 className="font-semibold">CSS</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img3 w-8 h-8" src={banner3} alt="" />
              <h3 className="font-semibold">Tailwind Css</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img4 w-8 h-8" src={banner4} alt="" />
              <h3 className="font-semibold">JavaScript</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img5 w-8 h-8" src={banner5} alt="" />
              <h3 className="font-semibold">React</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img6 w-8 h-8" src={banner6} alt="" />
              <h3 className="font-semibold">Node.js</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img7 w-8 h-8" src={banner7} alt="" />
              <h3 className="font-semibold">Express.js</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img8 w-8 h-8" src={banner8} alt="" />
              <h3 className="font-semibold">MongoDB</h3>
            </div>
            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img9 w-8 h-8" src={banner9} alt="" />
              <h3 className="font-semibold">Firebase</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img10 w-8 h-8" src={banner10} alt="" />
              <h3 className="font-semibold">Github</h3>
            </div>
          </div>
          <div className="circular-container">
            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img1 w-8 h-8 " src={banner1} alt="" />
              <h3 className="font-semibold">HTML</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img2 w-8 h-8" src={banner2} alt="" />
              <h3 className="font-semibold">CSS</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img3 w-8 h-8" src={banner3} alt="" />
              <h3 className="font-semibold">Tailwind Css</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img4 w-8 h-8" src={banner4} alt="" />
              <h3 className="font-semibold">JavaScript</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img5 w-8 h-8" src={banner5} alt="" />
              <h3 className="font-semibold">React</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img6 w-8 h-8" src={banner6} alt="" />
              <h3 className="font-semibold">Node.js</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img7 w-8 h-8" src={banner7} alt="" />
              <h3 className="font-semibold">Express.js</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img8 w-8 h-8" src={banner8} alt="" />
              <h3 className="font-semibold">MongoDB</h3>
            </div>
            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img9 w-8 h-8" src={banner9} alt="" />
              <h3 className="font-semibold">Firebase</h3>
            </div>

            <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 shadow-gray-950 rounded-btn">
              <img className="img10 w-8 h-8" src={banner10} alt="" />
              <h3 className="font-semibold">Github</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
