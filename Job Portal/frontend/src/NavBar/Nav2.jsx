"use client";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Popup from "reactjs-popup";


const Nav2 = () => {
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
          className={`md:flex items-center justify-between py-2 md:px-4 px-7 bg-blue-950   md:ease-in`}
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
          <img className="h-10 w-10 mr-2" src="login.png"/>
        </div>
      </nav>
    </>
  );
};

export default Nav2;
