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
import "./skill.css";

const Skills = () => {
  return (
    <div id="skills" className="pt-24 pb-20 bg-gray-900 text-secondary">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
        <h3 className="text-4xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-primary">
          My Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 my-16 max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-5 bg-slate-700 hover:bg-slate-600 shadow-lg shadow-gray-950 rounded-btn p-8">
            <img className="img1 w-10 h-10 " src={banner1} alt="" />
            <h3 className="font-bold">HTML</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 bg-slate-700 hover:bg-slate-600 shadow-md shadow-gray-950 rounded-btn p-8">
            <img className="img2 w-10 h-10" src={banner2} alt="" />
            <h3 className="font-bold">CSS</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 bg-slate-700 hover:bg-slate-600 shadow-md shadow-gray-950 rounded-btn p-8">
            <img className="img3 w-10 h-10" src={banner3} alt="" />
            <h3 className="font-bold">Tailwind Css</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 bg-slate-700 hover:bg-slate-600 shadow-md shadow-gray-950 rounded-btn p-8">
            <img className="img4 w-10 h-10" src={banner4} alt="" />
            <h3 className="font-bold">JavaScript</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 bg-slate-700 hover:bg-slate-600 shadow-md shadow-gray-950 rounded-btn p-8">
            <img className="img5 w-10 h-10" src={banner5} alt="" />
            <h3 className="font-bold">React</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 bg-slate-700 hover:bg-slate-600 shadow-md shadow-gray-950 rounded-btn p-8">
            <img className="img6 w-10 h-10" src={banner6} alt="" />
            <h3 className="font-bold">Node.js</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 bg-slate-700 hover:bg-slate-600 shadow-md shadow-gray-950 rounded-btn p-8">
            <img className="img7 w-10 h-10" src={banner7} alt="" />
            <h3 className="font-bold">Express.js</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 bg-slate-700 hover:bg-slate-600 shadow-md shadow-gray-950 rounded-btn p-8">
            <img className="img8 w-10 h-10" src={banner8} alt="" />
            <h3 className="font-bold">MongoDB</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 bg-slate-700 hover:bg-slate-600 shadow-md shadow-gray-950 rounded-btn p-8">
            <img className="img9 w-10 h-10" src={banner9} alt="" />
            <h3 className="font-bold">Firebase</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 bg-slate-700 hover:bg-slate-600 shadow-md shadow-gray-950 rounded-btn p-8">
            <img className="img10 w-10 h-10" src={banner10} alt="" />
            <h3 className="font-bold">Github</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
