"use client";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Popup from "../Login And Registration/LoginPopUp.jsx";

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

  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
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

            <div className="flex flex-row items-center justify-center content-center" >
              <div >
                <button
                  onClick={togglePopup}
                  className=" md:bg-transparent md:text-white text-base py-2 px-6 rounded md:ml-8 md:hover:bg-white md:hover:text-black duration-500 mr-4 md:mr-0 bg-white text-black hover:bg-transparent hover:text-white border border-white"
                >
                  LOGIN/REGISTRATION
                </button>
                <Popup isOpen={isPopupOpen} onClose={togglePopup} />
              </div>
              <div>
                <button className="bg-white text-black text-base py-2 px-[65px] md:px-4 rounded md:mr-10 md:ml-8 hover:bg-transparent hover:text-white border border-white duration-500  ">
                  JOB POST
                </button>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
