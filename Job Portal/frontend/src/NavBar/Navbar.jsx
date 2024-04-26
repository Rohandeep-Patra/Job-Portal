"use client";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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

  let Links = [
    { name: "HOME", link: "/" },
    { name: "FIND JOBS", link: "/jobs" },
    { name: "CANDIDATES", link: "/candidate" },
    { name: "EMPLOYEES", link: "/employee" },
    { name: "CONTACT US", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <nav id="navBar" className="w-full fixed top-0 left-0">
        <div
          className={`md:flex items-center justify-between py-4 md:px-4 px-7 bg-blue-950 md:${
            showBackground ? "bg-blue-900" : "bg-transparent"
          }  md:ease-in`}
        >
          <NavLink to="/" className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white">
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
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="text-white md:ml-8 text-base md:my-0 my-7 text-center justify-center hover:underline hover:underline-offset-8 hover:decoration-white"
                >
                  <NavLink to={link.link}>{link.name}</NavLink>
                </li>
              ))}
            </div>
           
            <div className="flex flex-row items-center justify-center content-center">
              
              <button className=" md:bg-transparent md:text-white text-base py-2 px-6 rounded md:ml-8 md:hover:bg-white md:hover:text-black duration-500 mr-4 md:mr-0 bg-white text-black hover:bg-transparent hover:text-white border border-white">
                LOGIN/REGISTRATION
              </button>
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
