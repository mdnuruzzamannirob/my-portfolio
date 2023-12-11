import image from "../assets/MERN-Stack-Development.png";
import { FaFileCode } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-900 text-secondary">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
        <h3 className="text-4xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-primary">
          About Me
        </h3>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 py-16">
          <div className="flex-1">
            <img src={image} alt="" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Hello , </h3>
            <p>
              I&apos;m Md. Nuruzzaman, a devoted MERN Stack Developer passionate
              about bringing ideas to life through code. Freshly graduated with
              my Higher Secondary Certificate (HSC), I&apos;m on an exhilarating
              learning journey at{" "}
              <a
                href="https://www.programming-hero.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                Programming-Hero
              </a>{" "}
              Institute, exploring the dynamic world of web development.
              <span className="block my-3">
                My interest in coding originates from a fascination with the
                digital world&apos;s inner workings. I specialize in crafting
                robust, user-friendly web applications, prioritizing clean and
                efficient code. For me, great software not only solves problems
                but also enhances the overall user experience.{" "}
              </span>
              <span className="block my-3">
                I&apos;m driven by the chance to contribute to innovative
                solutions with a positive impact. I thrive in collaborative
                development, whether it&apos;s brainstorming ideas, solving
                complex problems, or learning from fellow developers. Beyond
                coding, I stay updated on the latest web development trends,
                read tech blogs, and actively engage with the developer
                community. In my downtime, I find joy in coding.
              </span>
              <span>
                Currently shaping my professional narrative, I am eager to apply
                my skills and enthusiasm in a dynamic work environment.
                Let&apos;s connect to discuss collaboration, opportunities, or
                simply share thoughts on the exciting possibilities in the world
                of web development.
              </span>
            </p>
            <div className="flex items-center justify-center my-10">
              <a
                href="#projects"
                className="btn btn-sm lg:h-10 bg-primary hover:bg-primary text-white border-none rounded-md font-medium lg:text-lg "
              >
                <FaFileCode /> My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
