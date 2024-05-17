import React from "react";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen w-screen bg-white">
        <div className="hidden lg:block overflow-hidden flex-grow ">
          <img
            src="Forgot password-cuate.png"
            className="h-[110%] object-cover "
            alt="Webinar illustration"
          />
        </div>
        <div className="flex flex-col justify-center w-screen lg:w-1/2 p-6 lg:p-32 h-full ">
          <div className="text-center relative mb-10">
            <p className="text-black text-3xl font-Josefin">
              Forget Your Password
            </p>
            <p className="text-black">Go And Change It.</p>
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute opacity-35 h-auto w-auto sm:h-80 sm:w-80 self-center left-20 -bottom-28 rotate-[12deg]"
              id="blobSvg"
            >
              <path
                id="blob"
                d="M391,296.5Q343,343,296.5,359.5Q250,376,163.5,399.5Q77,423,70,336.5Q63,250,74.5,168Q86,86,168,91Q250,96,320,103Q390,110,414.5,180Q439,250,391,296.5Z"
                fill="#a29bfe"
              ></path>
            </svg>
          </div>

          <div className="mt-10 space-y-2 text-slate-600 ">
            <div className="space-y-1">
              <label className="text-xl">Username</label>
              <input
                placeholder="Enter username"
                className="placeholder:text-slate-400 h-12 w-full mt-2 rounded focus:outline-none bg-transparent border-2 border-slate-400 pl-4"
                type="text"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xl">Email</label>
              <input
                placeholder="Enter email"
                className="placeholder:text-slate-400 h-12 w-full mt-2 rounded focus:outline-none bg-transparent border-2 border-slate-400 pl-4"
                type="email"
              />
            </div>

            <div className="pt-4 text-white flex flex-col">
              <button className="w-full h-14 rounded border-2 border-blue-600 bg-blue-600 text-lg ">
                Send Code Via Email
              </button>
              <NavLink
                to="/"
                className="px-24 py-3 mt-2 rounded border-2 border-blue-600 bg-blue-600 text-lg text-center"
              >
                Go Back To Home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
