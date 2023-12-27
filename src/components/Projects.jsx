import project1 from "../assets/invento-wave.png";
import project2 from "../assets/library-hub.png";
import project3 from "../assets/brand-shop.png";
const Projects = () => {
  return (
    <div id="projects" className="pt-24 lg:py-20 bg-gray-900 text-secondary">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
        <h3 className="text-4xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-primary">
          My Projects
        </h3>

        {/* project 1 */}
        <h3 className="text-2xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-primary mt-16 mb-5">
          Project 1
        </h3>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-16">
          <div className="flex-1 overflow-hidden">
            <a
              target="_blank"
              href="https://invento-wave.web.app/"
              rel="noreferrer"
            >
              <img
                className="rounded transition-transform hover:scale-105"
                src={project1}
                alt="project"
              />
            </a>
          </div>
          <div className="flex-1">
            <div className="mt-5">
              <h3 className="text-xl font-clashDisplay font-medium">
                Name : <span className="pl-2">Invento Wave</span>
              </h3>
              <h3 className="text-xl font-clashDisplay font-medium mt-4">
                Description :
              </h3>
              <p className="pl-5 text-justify">
                Invento Wave is a comprehensive inventory management website
                designed to streamline business operations for shop owners.
                Leveraging a modern tech stack, the project integrates React,
                Node.js, Express.js, MongoDB, Tailwind CSS, Firebase, Stripe and
                Email.js to deliver a robust and user-friendly experience.
              </p>
              <h3 className="text-xl font-clashDisplay font-medium mt-4">
                Key Features :
              </h3>
              <ul className="pl-5 list-inside list-disc">
                <li>User Authentication</li>
                <li>Shop Creation</li>
                <li>Role-Based Dashboards</li>
                <li>Inventory Management</li>
                <li>Sales Functionality</li>
                <li>Payment Integration</li>
                <li>Email Integration</li>
              </ul>
              <h3 className="text-xl font-clashDisplay font-medium mt-4 mb-2">
                Tools Used
              </h3>
              <div className="flex flex-wrap gap-3 items-center mb-5 pl-5 text-secondary">
                <p className="bg-primary text-sm font-medium px-3 py-1 rounded">
                  React
                </p>
                <p className="bg-lime-600 text-sm font-medium px-3 py-1 rounded">
                  Node.js
                </p>
                <p className="bg-slate-500 text-sm font-medium px-3 py-1 rounded">
                  Express.js
                </p>
                <p className="bg-green-600 text-sm font-medium px-3 py-1 rounded">
                  MongoDB
                </p>
                <p className="bg-primary text-sm font-medium px-3 py-1 rounded">
                  Tailwind Css
                </p>
                <p className="bg-yellow-500 text-sm text-white font-medium px-3 py-1 rounded">
                  Firebase
                </p>
                <p className="bg-indigo-500 text-sm font-medium px-3 py-1 rounded">
                  Stripe
                </p>
                <p className="bg-orange-400 text-white text-sm font-medium px-3 py-1 rounded">
                  Email.js
                </p>
                <p className="bg-black text-sm font-medium px-3 py-1 rounded">
                  Vercel
                </p>
                <p className="bg-secondary text-sm text-black font-medium px-3 py-1 rounded">
                  Github
                </p>
              </div>

              <div className="flex items-center justify-center flex-wrap gap-4 mt-10">
                <a
                  target="_blank"
                  href="https://github.com/mdnuruzzamannirob/invento-wave-client"
                  className="btn btn-sm bg-secondary hover:bg-secondary text-black border-none rounded font-medium"
                  rel="noreferrer"
                >
                  Github Link
                </a>
                <a
                  target="_blank"
                  href="https://invento-wave.web.app/"
                  className="btn btn-sm bg-primary hover:bg-primary text-white border-none rounded font-medium"
                  rel="noreferrer"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project 2 */}
        <h3 className="text-2xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-primary mt-16 mb-5">
          Project 2
        </h3>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-16">
          <div className="flex-1">
            <div className="mt-5">
              <h3 className="text-xl font-clashDisplay font-medium">
                Name : <span className="pl-2">Library Hub</span>
              </h3>
              <h3 className="text-xl font-clashDisplay font-medium mt-4">
                Description :
              </h3>
              <p className="pl-5 text-justify">
                Library Hub is a comprehensive library management system
                designed to simplify book management processes. Utilizing a
                powerful tech stack that includes React, Node.js, Express.js,
                MongoDB, Tailwind CSS, Firebase, the project empowers users to
                efficiently manage their personal book collections and borrowed
                books.
              </p>
              <h3 className="text-xl font-clashDisplay font-medium mt-4">
                Key Features :
              </h3>
              <ul className="pl-5 list-inside list-disc">
                <li>User Authentication</li>
                <li>Add Books</li>
                <li>Borrowed Books</li>
                <li>CRUD Operations</li>
                <li>Responsive Design</li>
              </ul>
              <h3 className="text-xl font-clashDisplay font-medium mt-4 mb-2">
                Tools Used
              </h3>
              <div className="flex flex-wrap gap-3 items-center mb-5 pl-5 text-secondary">
                <p className="bg-primary text-sm font-medium px-3 py-1 rounded">
                  React
                </p>
                <p className="bg-lime-600 text-sm font-medium px-3 py-1 rounded">
                  Node.js
                </p>
                <p className="bg-slate-500 text-sm font-medium px-3 py-1 rounded">
                  Express.js
                </p>
                <p className="bg-green-600 text-sm font-medium px-3 py-1 rounded">
                  MongoDB
                </p>
                <p className="bg-primary text-sm font-medium px-3 py-1 rounded">
                  Tailwind Css
                </p>
                <p className="bg-yellow-500 text-sm text-white font-medium px-3 py-1 rounded">
                  Firebase
                </p>
                <p className="bg-black text-sm font-medium px-3 py-1 rounded">
                  Vercel
                </p>
                <p className="bg-secondary text-sm text-black font-medium px-3 py-1 rounded">
                  Github
                </p>
              </div>

              <div className="flex items-center justify-center flex-wrap gap-4 mt-10">
                <a
                  target="_blank"
                  href="https://github.com/mdnuruzzamannirob/library-hub-client"
                  className="btn btn-sm bg-secondary hover:bg-secondary text-black border-none rounded font-medium"
                  rel="noreferrer"
                >
                  Github Link
                </a>
                <a
                  target="_blank"
                  href="https://library-hub-ef83f.web.app/"
                  className="btn btn-sm bg-primary hover:bg-primary text-white border-none rounded font-medium"
                  rel="noreferrer"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <a
              target="_blank"
              href="https://library-hub-ef83f.web.app/"
              rel="noreferrer"
            >
              <img
                className="rounded transition-transform hover:scale-105"
                src={project2}
                alt="project"
              />
            </a>
          </div>
        </div>

        {/* project 3 */}
        <h3 className="text-2xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-primary mt-16 mb-5">
          Project 3
        </h3>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-16">
          <div className="flex-1 overflow-hidden">
            <a
              target="_blank"
              href="https://brand-shop-61d84.web.app/"
              rel="noreferrer"
            >
              <img
                className="rounded transition-transform hover:scale-105"
                src={project3}
                alt="project"
              />
            </a>
          </div>
          <div className="flex-1">
            <div className="mt-5">
              <h3 className="text-xl font-clashDisplay font-medium">
                Name : <span className="pl-2">Brand Shop</span>
              </h3>
              <h3 className="text-xl font-clashDisplay font-medium mt-4">
                Description :
              </h3>
              <p className="pl-5 text-justify">
                Brand Shop is an automotive e-commerce website that brings
                together the latest technology stack to offer users a seamless
                and intuitive shopping experience. Developed with React,
                Node.js, Express.js, MongoDB, Tailwind CSS, this project enables
                users to explore, add, and purchase automotive products.
              </p>
              <h3 className="text-xl font-clashDisplay font-medium mt-4">
                Key Features :
              </h3>
              <ul className="pl-5 list-inside list-disc">
                <li>User Authentication</li>
                <li>Product Management</li>
                <li>Shopping Cart</li>
                <li>CRUD Operations</li>
                <li>Responsive Design</li>
              </ul>
              <h3 className="text-xl font-clashDisplay font-medium mt-4 mb-2">
                Tools Used
              </h3>
              <div className="flex flex-wrap gap-3 items-center mb-5 pl-5 text-secondary">
                <p className="bg-primary text-sm font-medium px-3 py-1 rounded">
                  React
                </p>
                <p className="bg-lime-600 text-sm font-medium px-3 py-1 rounded">
                  Node.js
                </p>
                <p className="bg-slate-500 text-sm font-medium px-3 py-1 rounded">
                  Express.js
                </p>
                <p className="bg-green-600 text-sm font-medium px-3 py-1 rounded">
                  MongoDB
                </p>
                <p className="bg-primary text-sm font-medium px-3 py-1 rounded">
                  Tailwind Css
                </p>
                <p className="bg-yellow-500 text-sm text-white font-medium px-3 py-1 rounded">
                  Firebase
                </p>
                <p className="bg-black text-sm font-medium px-3 py-1 rounded">
                  Vercel
                </p>
                <p className="bg-secondary text-sm text-black font-medium px-3 py-1 rounded">
                  Github
                </p>
              </div>

              <div className="flex items-center justify-center flex-wrap gap-4 mt-10">
                <a
                  target="_blank"
                  href="https://github.com/mdnuruzzamannirob/brand-shop-client"
                  className="btn btn-sm bg-secondary hover:bg-secondary text-black border-none rounded font-medium"
                  rel="noreferrer"
                >
                  Github Link
                </a>
                <a
                  target="_blank"
                  href="https://brand-shop-61d84.web.app/
                  "
                  className="btn btn-sm bg-primary hover:bg-primary text-white border-none rounded font-medium"
                  rel="noreferrer"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
