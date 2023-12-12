const Skills = () => {
  return (
    <div id="skills" className=" py-20 bg-gray-900 text-secondary">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
        <h3 className="text-4xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-primary">
          My Skills
        </h3>
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="flex-1 font-medium">
            <div className="p-5 xl:p-10 space-y-5">
              <h3 className="text-2xl font-clashDisplay font-medium mb-5">
                Front-End Skills :
              </h3>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>HTML</h3>
                  <p>90%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={90}
                  max="100"
                ></progress>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>CSS</h3>
                  <p>70%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={70}
                  max="100"
                ></progress>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Tailwind Css</h3>
                  <p>90%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={90}
                  max="100"
                ></progress>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>JavaScript</h3>
                  <p>65%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={65}
                  max="100"
                ></progress>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>React</h3>
                  <p>80%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={80}
                  max="100"
                ></progress>
              </div>
              <h3 className="text-2xl font-clashDisplay font-medium my-5">
                Back-End Skills :
              </h3>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Node.js</h3>
                  <p>60%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={60}
                  max="100"
                ></progress>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Express.js</h3>
                  <p>60%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={60}
                  max="100"
                ></progress>
              </div>

              <h3 className="text-2xl font-clashDisplay font-medium my-5">
                Database Skills :
              </h3>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>MongoDB</h3>
                  <p>65%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={65}
                  max="100"
                ></progress>
              </div>

              <h3 className="text-2xl font-clashDisplay font-medium my-5">
                Additional Skills :
              </h3>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Firebase</h3>
                  <p>80%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={80}
                  max="100"
                ></progress>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Git & Github</h3>
                  <p>75%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={75}
                  max="100"
                ></progress>
              </div>
            </div>
          </div>

          <div className="flex-1 font-medium">
            <div className="p-5 xl:p-10 space-y-5">
              <h3 className="text-2xl font-clashDisplay font-medium mb-5">
                Development Skills :
              </h3>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Front-End</h3>
                  <p>80%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={80}
                  max="100"
                ></progress>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Back-End</h3>
                  <p>60%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={60}
                  max="100"
                ></progress>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Database</h3>
                  <p>65%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={65}
                  max="100"
                ></progress>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Security </h3>
                  <p>60%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={60}
                  max="100"
                ></progress>
              </div>

              <h3 className="text-2xl font-clashDisplay font-medium my-5">
                Soft Skills :
              </h3>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Communication</h3>
                  <p>65%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={65}
                  max="100"
                ></progress>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Collaboration</h3>
                  <p>70%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={70}
                  max="100"
                ></progress>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Problem-solving</h3>
                  <p>65%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={65}
                  max="100"
                ></progress>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Critical thinking</h3>
                  <p>65%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={65}
                  max="100"
                ></progress>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Time management</h3>
                  <p>65%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={65}
                  max="100"
                ></progress>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Adaptability</h3>
                  <p>70%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={70}
                  max="100"
                ></progress>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h3>Organization</h3>
                  <p>65%</p>
                </div>
                <progress
                  className="progress progress-info bg-secondary outline outline-2"
                  value={65}
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
