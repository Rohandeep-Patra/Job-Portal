import React from "react";
import Nav2 from "../NavBar/Nav2";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="relative">
        <div className=" absolute z-50">
          <Nav2 />
        </div>
        <div className="absolute z-49">
          <iframe
            className="w-screen lg:h-[300px] h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.278350055479!2d88.42902937475702!3d22.56869043311469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275d225555559%3A0x50bfb8cf3005f8d1!2sARDENT%20COMPUTECH%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1714633648246!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="bg-white mx-24 h-auto flex flex-col lg:flex-row justify-center gap-10 my-6 lg:my-16">
            <div className=" flex flex-col h-auto lg:w-80 w-full  items-center">
              <span class="material-symbols-outlined text-7xl text-sky-600">
                location_on
              </span>
              <p className=" font-semibold text-xl font-Josefin mt-2 ">
                Address
              </p>
              <p className=" text-wrap mt-4 ">
              Module #132, Ground Floor, SDF Building, GP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091
              </p>
            </div>
            <div className=" flex flex-col h-auto lg:w-80 w-full items-center">
              <span class="material-symbols-outlined text-7xl text-sky-600">
                phone_in_talk
              </span>
              <p className=" font-semibold text-xl font-Josefin mt-2 ">
                Call Us
              </p>
              <a
                className="text-xl text-blue-600 font-medium mt-3"
                href="tel:9832392104"
              >
                983 239 2104
              </a>
            </div>
            <div className=" flex flex-col h-auto lg:w-80 w-full items-center">
              <span class="material-symbols-outlined text-7xl text-sky-600">
                mail
              </span>
              <p className=" font-semibold text-xl font-Josefin mt-2">Email</p>
              <a href="mailto: rohandeepp100@gmail.com " className="mt-3">
                rohandeepp100@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-white h-auto lg:h-[850px] mt-20">
            <div className="bg-white lg:mx-64 m-6 h-auto rounded-lg border border-slate-300">
              <div className="lg:m-10 m-3  ">
                <p className="text-black font-medium text-2xl pt-12 pb-8 font-Josefin">
                  Contact With Us
                </p>

                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="flex flex-col">
                    <label>Your Name</label>
                    <input
                      className=" focus:outline-none p-5 rounded-lg lg:w-[450px] w-full mt-3 bg-slate-200/40 h-14 "
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="flex flex-col mt-6 lg:mt-0">
                    <label>Your Email</label>
                    <input
                      className=" focus:outline-none p-5 rounded-lg lg:w-[450px] w-full mt-3 bg-slate-200/40 h-14"
                      type="text"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-col">
                  <label>Subject</label>
                  <input
                    className=" focus:outline-none p-5 rounded-lg w-full mt-3 bg-slate-200/40 h-14 "
                    type="text"
                    placeholder="Subject Name"
                  />
                </div>

                <div className="mt-6 flex flex-col">
                  <label>Message</label>
                  <textarea className="focus:outline-none p-5 rounded-lg w-full mt-3 bg-slate-200/40 h-48 resize-none" placeholder="Enter Your Message.."/>
                </div>

                <button className="w-full h-16 mt-8 bg-blue-500 rounded-lg text-white hover:bg-blue-700 hover:duration-500 mb-10">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative lg:top-[1500px] top-[2000px]">
        <Footer/>
      </div>

    </>
  );
};

export default Contact;
