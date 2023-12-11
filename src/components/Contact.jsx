import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="py-20 bg-gray-900 text-secondary">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
        <h3 className="text-4xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-primary">
          Contact Me
        </h3>
        <p className="text-center text-lg mt-5">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 py-20">
          <div
            className="flex-[3] space-y-10"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-6">
              <MdEmail className="w-8 h-8 text-primary" />
              <div className="font-clashDisplay">
                <h3 className="font-medium">My Email Address</h3>
                <p className="text-sm opacity-90">
                  info.mdnuruzzaman1@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <BsFillTelephoneFill className="w-8 h-8 text-primary" />
              <div className="font-clashDisplay">
                <h3 className="font-medium">My Phone Number</h3>
                <p className="text-sm  opacity-90">+8801973875893</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <FaLocationArrow className="w-8 h-8 text-primary" />
              <div className="font-clashDisplay">
                <h3 className="font-medium">My Location</h3>
                <p className="text-sm opacity-90">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* form part */}
          <form
            //  ref={form} onSubmit={sendEmail}
            className="flex-[5] font-clashDisplay"
          >
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex-1">
                <label className="font-medium" htmlFor="">
                  Your Name
                </label>
                <input
                  className="w-full mt-2 px-4 py-2 text-black bg-secondary font-redHatDisplay font-medium border border-transparent outline-none focus:border-primary rounded-md"
                  placeholder="Enter your name..."
                  type="text"
                  name="from_name"
                  id=""
                  required
                />
              </div>

              <div className="flex-1">
                <label className="font-medium" htmlFor="">
                  Your Email
                </label>
                <input
                  className="w-full mt-2 px-4 py-2 text-black bg-secondary font-redHatDisplay font-medium border border-transparent outline-none focus:border-primary rounded-md"
                  placeholder="Enter your email..."
                  type="text"
                  name="from_email"
                  id=""
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-5">
              <label className="font-medium" htmlFor="textAria">
                Your Message
              </label>
              <textarea
                name="message"
                id="textAria"
                cols="30"
                rows="6"
                className="w-full mt-2 px-3 py-2 text-black bg-secondary font-redHatDisplay font-medium border border-transparent outline-none focus:border-primary rounded-md cursor-text"
                placeholder="Enter your message..."
                required
              ></textarea>
            </div>
            <div
              className="text-center mt-8"
              data-aos="flip-up"
              data-aos-duration="500"
            >
              <input
                className="btn btn-sm lg:h-10 px-10 bg-primary hover:bg-primary text-white border-none rounded-md font-medium lg:text-lg"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
