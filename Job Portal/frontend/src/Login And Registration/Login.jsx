import React from "react";
import { useState } from "react";
const Login = () => {

  const [toggle, setToggle] = useState(0);

  function handleClick() {
    
  }

  return (
    <>
      <div className="h-screen w-screen bg-lime-300">
        <div className=" bg-pink-300 h-full flex lg:flex-row flex-col-reverse  mx-6 lg:mx-0  ">
          <div className=" h-full lg:h-full w-full items-center justify-center text-center flex flex-col lg:flex-row relative ">
            <div id="loginPop" className="bg-white  h-full w-full flex flex-col justify-center items-center absolute z-[]">
              <p className=" text-4xl font-bold font-Josefin lg:mb-10">
                Log In
              </p>
              <input
                className="mt-6 bg-slate-200/60 py-4 pl-3 lg:w-[500px] w-full focus:outline-none rounded-md"
                type="text"
                placeholder="Enter Username Or Email"
              />
              <input
                className="mt-3 bg-slate-200/60 py-4 pl-3 lg:w-[500px] w-full focus:outline-none rounded-md"
                type="password"
                placeholder="Enter Password"
              />
            </div>

            <div id="registerPop" className=" h-full w-full flex flex-col justify-center items-center">
              <p className=" text-4xl font-bold font-Josefin lg:mb-10 ">
                Register
              </p>
              <div>
                <button className="h-14 w-40 rounded-lg bg-blue-300/30 font-semibold uppercase text-base text-blue-600 mx-3 focus:bg-teal-500 focus:text-white ">
                  Candidate
                </button>
                <button className="h-14 w-40 rounded-lg bg-blue-300/30 font-semibold uppercase text-base text-blue-600 mx-3 focus:bg-teal-500 focus:text-white">
                  Employee
                </button>
              </div>
              <input
                className="mt-3 bg-slate-200/60 py-4 pl-3 lg:w-[500px] w-full focus:outline-none rounded-md"
                type="text"
                placeholder="Enter Email"
              />
              <input
                className="mt-3 bg-slate-200/60 py-4 pl-3 lg:w-[500px] w-full focus:outline-none rounded-md"
                type="password"
                placeholder="Enter Password"
              />
            </div>

            
          </div>

          <div className=" h-full lg:h-full w-full items-center justify-center text-center flex flex-col lg:flex-row relative hidden">
            
          <div id="signInSide" className=" bg-gradient-to-r from-sky-500 to-indigo-600 h-full w-full flex flex-col justify-center items-center ">
              <p className="text-white text-4xl font-bold uppercase">
                already have an account!
              </p>
              <p className="text-white uppercase mt-3 text-wrap">
                Find Your suitable jobs here . log in and start searching !!
              </p>
              <p className="text-white uppercase mt-3 text-wrap">
                Find Your best candidates here . log in and start posting jobs
                !!
              </p>
              <button id="signInBtn" className="bg-white mt-8 py-3 px-10 rounded-lg font-semibold text-blue-500">
                Sign In
              </button>
            </div>

            <div id="registerSide" className=" bg-gradient-to-l from-sky-500 to-indigo-600 h-full w-full flex flex-col justify-center items-center ">
              <p className="text-white text-4xl font-bold uppercase">
                welcome!
              </p>
              <p className="text-white uppercase mt-3">
                Find Your suitable jobs here . register and start searching !!
              </p>

              <button id="registerBtn" className="bg-white mt-8 py-3 px-10 rounded-lg font-semibold text-blue-500">
                Create Account
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
