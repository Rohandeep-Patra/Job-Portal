import React from "react";
import Navbar from "../NavBar/Navbar";

const FindJobs = () => {
  return (
    <div className="relative">
      <div className="absolute z-50">
        <Navbar />
      </div>
      <div className="absolute z-49">
        <div className="bg-indigo-600 h-[45vh] w-screen pt-20 flex flex-col justify-center text-center relative">
          <p className="text-white text-3xl font-Josefin">
            Find Your Suitable Jobs
          </p>
          <p className="text-white">And Go Apply For It.</p>

          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute opacity-35 h-80 w-80 self-center"
            width="100%"
            id="blobSvg"
          >
            <path
              id="blob"
              d="M391,296.5Q343,343,296.5,359.5Q250,376,163.5,399.5Q77,423,70,336.5Q63,250,74.5,168Q86,86,168,91Q250,96,320,103Q390,110,414.5,180Q439,250,391,296.5Z"
              fill="#a29bfe"
            ></path>
          </svg>
        </div>

        <div className="pt-48 pl-52 ">
          <input className="opacity-0 absolute " type="file" id="file" />
          <label className="bg-white h-32 w-48  relative flex justify-center items-center border-2 border-slate-400 border-dashed rounded-md" for="file">
            <span class="material-symbols-outlined text-slate-400">add</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
