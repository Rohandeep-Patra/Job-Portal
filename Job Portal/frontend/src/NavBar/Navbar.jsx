"use client";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Popup from "reactjs-popup";

const Navbar = () => {
  const TOP_OFFSET = 50;
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let [open, setOpen] = useState(false);

  const Show = () => {
    if (document.getElementById("submenu").style.display === "block") {
      document.getElementById("submenu").style.display = "none";
    } else {
      document.getElementById("submenu").style.display = "block";
      document.getElementById("submenu1").style.display = "none";
    }
  };
  const Show1 = () => {
    if (document.getElementById("submenu1").style.display === "block") {
      document.getElementById("submenu1").style.display = "none";
    } else {
      document.getElementById("submenu1").style.display = "block";
      document.getElementById("submenu").style.display = "none";
    }
  };
  return (
    <>
      <nav id="navBar" className="w-full fixed top-0 left-0">
        <div
          className={`md:flex items-center justify-between py-4 md:px-4 px-7 bg-blue-950 md:${
            showBackground ? "bg-blue-900" : "bg-transparent"
          }  md:ease-in`}
        >
          <NavLink
            to="/"
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white"
          >
            <span className="text-3xl text-white mr-1 pt-2">
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            JOB SEEK
          </NavLink>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-950 md:${
              showBackground ? "bg-blue-900" : "bg-transparent"
            } md:ease-out  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 ${
              open ? "top-[77px] " : "top-[-490px]"
            }`}
          >
            <div className="md:flex md:mr-20 ">
              <li className="text-white md:ml-8 text-base md:my-0 my-7 text-center justify-center hover:underline hover:underline-offset-8 hover:decoration-white">
                <NavLink to="/">HOME</NavLink>
              </li>
              <li className="text-white md:ml-8 text-base md:my-0 my-7 text-center justify-center hover:underline hover:underline-offset-8 hover:decoration-white">
                <NavLink to="/jobs">FIND JOBS</NavLink>
              </li>

              <li className="text-white md:ml-8 text-base md:my-0 my-7 text-center justify-center relative md:inline-block group">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    onClick={Show}
                    className="md:relative inline-flex"
                  >
                    CANDIDATES
                    <span class="material-symbols-outlined">expand_more</span>
                  </Dropdown.Toggle>

                  <div
                    id="submenu"
                    className="bg-white text-black h-auto md:w-52 w-full hidden md:absolute rounded-md"
                  >
                    <NavLink
                      to="/candidate"
                      className=" md:text-left mx-3 mt-3 p-2 hover:bg-blue-100/30 rounded-md hover:font-medium hover:text-blue-800 inline-flex md:float-left w-full md:w-[180px]"
                    >
                      Candidate List
                    </NavLink>
                    <NavLink
                      to="/candidate-dash"
                      className=" md:text-left mx-3 mb-3 p-2 hover:bg-blue-100/30 rounded-md hover:font-medium hover:text-blue-800 inline-flex md:float-left w-full md:w-[180px]"
                    >
                      Candidate DashBoard
                    </NavLink>
                  </div>
                </Dropdown>
              </li>

              <li className="text-white md:ml-8 text-base md:my-0 my-7 text-center justify-center relative md:inline-block group">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    onClick={Show1}
                    className="md:relative inline-flex"
                  >
                    EMPLOYEES
                    <span class="material-symbols-outlined ">expand_more</span>
                  </Dropdown.Toggle>

                  <div
                    id="submenu1"
                    className="bg-white text-black w-full md:w-52 md:absolute hidden rounded-md"
                  >
                    <NavLink
                      to="/employee"
                      className=" md:text-left mx-3 mt-3 p-2 hover:bg-blue-100/30 rounded-md hover:font-medium hover:text-blue-800 inline-flex md:float-left w-full md:w-[180px] "
                    >
                      Employee List
                    </NavLink>
                    <NavLink
                      to="/employee-dash"
                      className=" md:text-left mx-3 mb-3 p-2 hover:bg-blue-100/30 rounded-md hover:font-medium hover:text-blue-800 inline-flex md:float-left w-full md:w-[180px]"
                    >
                      Employee DashBoard
                    </NavLink>
                  </div>
                </Dropdown>
              </li>

              <li className="text-white md:ml-8 text-base md:my-0 my-7 text-center justify-center hover:underline hover:underline-offset-8 hover:decoration-white">
                <NavLink to="/contact">CONTACT US</NavLink>
              </li>
            </div>

            <div className="flex flex-row items-center justify-center content-center">
              <Popup
                trigger={
                  <button className=" md:bg-transparent md:text-white text-base py-2 px-6 rounded md:ml-8 md:hover:bg-white md:hover:text-black duration-500 mr-4 md:mr-0 bg-white text-black hover:bg-transparent hover:text-white border border-white">
                    LOGIN/REGISTRATION
                  </button>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal ">
                    <div className="content bg-white h-[100vh] lg:h-[85vh] lg:w-[32vw] w-screen mt-20 relative rounded">
                      <button
                        className=" absolute lg:right-2 right-4 top-2 bg-slate-400/20 w-9 rounded group hover:bg-blue-500 hover:duration-500 "
                        onClick={() => close()}
                      >
                        <span class="material-symbols-outlined text-2xl group-hover:text-white group-hover:duration-500">
                          close
                        </span>
                      </button>

                      <div className="flex flex-col justify-center items-center m-10 mr-[42px]">
                        <p className="mt-8 text-2xl font-semibold font-Josefin">
                          Login to Job Seek!
                        </p>
                        <div className="flex flex-col w-full mt-10 ">
                          <label className="font-semibold">
                            Username or Email
                          </label>
                          <input
                            className="px-3 py-4 mt-2 bg-slate-200/60 rounded-md focus:outline-none"
                            placeholder="Enter username or email"
                          />
                          <label className="mt-5 font-semibold">Password</label>
                          <input
                            className="px-3 py-4 mt-2 bg-slate-200/60 rounded-md focus:outline-none"
                            placeholder="Enter password"
                          />
                        </div>
                        <button className="bg-blue-500 text-white mt-5 w-full h-14 rounded-md">
                          Log In
                        </button>
                        <div className="flex flex-row items-center justify-between w-full">
                          <NavLink className="mt-5 hover:text-blue-700 font-medium">
                            Forget Password ??
                          </NavLink>
                          <NavLink className="mt-5 hover:text-blue-700 font-medium">
                            Haven't Account?? Register Now
                          </NavLink>
                        </div>
                        <div className="mt-5 flex justify-between items-center w-full">
                          <div className="h-[1px] basis-5.5/12 w-full bg-slate-500"></div>
                          <p className="mx-4 basis-1/12 text-center">Or</p>
                          <div className="h-[1px] basis-5.5/12 w-full bg-slate-500"></div>
                        </div>
                        <div className="flex w-full justify-between items-center mt-6">
                          <button className="border border-blue-600 px-2 py-3 rounded flex items-center justify-between">
                            
                            <svg className="h-6 w-6 mx-2 fill-[#EA4335] flex items-center justify-center "  role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                            Login with Gmail
                          </button>
                          <button className="border border-blue-600 px-2 py-3 rounded flex items-center justify-between">
                          <svg className="h-6 w-6 mx-2 fill-[#0866FF] flex items-center justify-center "  role="img" xmlns="http://www.w3.org/2000/svg"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
                            Login with FaceBook
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Popup>

              {/* <NavLink to="/login" className=" md:bg-transparent md:text-white text-base py-2 px-6 rounded md:ml-8 md:hover:bg-white md:hover:text-black duration-500 mr-4 md:mr-0 bg-white text-black hover:bg-transparent hover:text-white border border-white">
                LOGIN/REGISTRATION
              </NavLink> */}
              <button className="bg-white text-black text-base py-2 px-[65px] md:px-4 rounded md:mr-10 md:ml-8 hover:bg-transparent hover:text-white border border-white duration-500  ">
                JOB POST
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
