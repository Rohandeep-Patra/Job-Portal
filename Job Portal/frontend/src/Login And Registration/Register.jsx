import React from "react";

function Register() {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen w-screen bg-white">
        <div className="flex flex-col justify-center w-screen lg:w-1/2 p-6 lg:p-14 h-full">
          <div className="text-center relative">
            <p className="text-black text-3xl font-Josefin">Register Your Account</p>
            <p className="text-black">And Go Apply For It.</p>
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute opacity-35 h-auto w-auto sm:h-80 sm:w-80 self-center bottom-20 top-0 sm:left-20 lg:left-40 rotate-[12deg]"
              id="blobSvg"
            >
              <path
                id="blob"
                d="M391,296.5Q343,343,296.5,359.5Q250,376,163.5,399.5Q77,423,70,336.5Q63,250,74.5,168Q86,86,168,91Q250,96,320,103Q390,110,414.5,180Q439,250,391,296.5Z"
                fill="#a29bfe"
              ></path>
            </svg>
          </div>

          <div className="mt-10 space-y-2 text-slate-500">
            <div className="space-y-1">
              <label className="text-xl">Username</label>
              <input
                placeholder="Enter username"
                className="placeholder:text-slate-400 h-12 w-full mt-2 rounded focus:outline-none bg-transparent border-2 border-slate-500 pl-4"
                type="text"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xl">Full Name</label>
              <input
                placeholder="Enter fullname"
                className="placeholder:text-slate-400 h-12 w-full mt-2 rounded focus:outline-none bg-transparent border-2 border-slate-500 pl-4"
                type="text"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xl">Email</label>
              <input
                placeholder="Enter email"
                className="placeholder:text-slate-400 h-12 w-full mt-2 rounded focus:outline-none bg-transparent border-2 border-slate-500 pl-4"
                type="email"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xl">Password</label>
              <input
                placeholder="Enter password"
                className="placeholder:text-slate-400 h-12 w-full mt-2 rounded focus:outline-none bg-transparent border-2 border-slate-500 pl-4"
                type="password"
              />
            </div>
            <div className="pt-4 text-white">
              <button className="w-full h-12 rounded border-2 border-blue-600 bg-blue-600  text-lg ">Register</button>
            </div>
            <div className="flex items-center my-4">
              <div className="h-[1px] flex-grow bg-black"></div>
              <p className="mx-4">Or</p>
              <div className="h-[1px] flex-grow bg-black"></div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <button className="border border-[#ea4335] px-4 py-3 rounded flex items-center justify-between w-full sm:w-auto">
                <img className="h-[26px] w-[34px] pr-2" src="gmail.png" alt="Gmail" />
                Login with Gmail
              </button>
              <button className="border border-[#0866ff] px-4 py-3 rounded flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0">
                <img className="h-[26px] w-[34px] pr-2" src="facebook.png" alt="Facebook" />
                Login with FaceBook
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block overflow-hidden flex-grow">
          <img src="Webinar-rafiki.png" className="h-[800px] object-cover " alt="Webinar illustration" />
        </div>
      </div>
    </>
  );
}

export default Register;
