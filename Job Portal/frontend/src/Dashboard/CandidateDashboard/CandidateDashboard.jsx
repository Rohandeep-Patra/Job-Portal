import React from "react";
import CandidateSidebar from "./CandidateSidebar";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsCardText } from "react-icons/bs";
import { BsChatSquareText } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { TfiBag } from "react-icons/tfi";
import { IoBookmarksOutline } from "react-icons/io5";
import { BsBookmarks } from "react-icons/bs";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { RiHandbagLine } from "react-icons/ri";
import { FaMoneyBills } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Navbar from "../../NavBar/Navbar";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";

// const [open, setOpen] = useState(true);

function CandidateDashboard() {

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




  let job = [
    {
      Image:
        "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-1.png",
      title: "Software Engineer (Android),Library",
      type: "Segment",
      location: "London, UK",
      salary: "35k-45k",
      time: "12  hours ago ",
    },
    {
      Image:
        "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-2.png",
      title: "Recruiting Coordinates",
      type: "Segment",
      location: "London, UK",
      salary: "40k-50k",
      time: "11 hours ago",
    },
    {
      Image:
        "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-3.png",
      title: "Product Manager, Studio",
      type: "Invision",
      location: "London, UK",
      salary: "45k-50k",

      time: "12 hours ago ",




    },
    {
      Image:
        "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-4.png",
      title: "Senior Product Designer",
      type: "Upwork",
      location: "London, UK",
      salary: "50k-60k",
      time: "12 hours ago ",
    },
    {
      Image:
        "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-5.png",
      title: "Senior Full Stack Engineer",
      type: "Medium",
      location: "London, UK",
      salary: "20k-25k",
      time: "12  hours ago ",
    },
    {
      Image:
        "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-6.png",
      title: "Software engineer(Android)",
      type: "Figma",
      location: "London, UK",
      salary: "20k-25k",
      time: "12  hours ago ",
    },
  ];
  return (
    <>
      <div>
        <nav id="navBar" className="w-full fixed top-0 left-0">
          <div
            className={`md:flex items-center justify-between py-4 md:px-4 px-7 bg-blue-950 md:ease-in`}
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
              className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-950 md:${showBackground ? "bg-blue-900" : "bg-transparent"
                } md:ease-out  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 ${open ? "top-[77px] " : "top-[-490px]"
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
                      <span class="material-symbols-outlined ">
                        expand_more
                      </span>
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
      </div>

      <div className='flex bg-slate-100 mt-20'>

<div className=' w-[16%] fixed'><CandidateSidebar /></div>
  <div className='md:p-9 p-9  md:ml-[16%]  mx-auto  w-full md:mt-0 mt-9'>
    <p className=' text-2xl font-medium md:text-3xl md:font-semibold '>Dashboard Home!</p>
    <p className='mt-2'>Ready to jump back in?</p>

    

    <div className='flex-col md:flex-row w-full flex justify-between gap-0'>

      <div className='inline-flex mt-10  md:w-[241px] h-[120px] w-full bg-white rounded-lg'>

        <div>
          <div className='p-4 mt-7 ml-5 text-3xl bg-sky-100 rounded-md text-sky-600'><BsBriefcaseFill /></div>
        </div>

        <div className='md:ml-0 mx-auto'>
          <h4 className='md:ml-18 ml-20 mt-6 text-3xl font-semibold text-sky-600'>22</h4>
          <p className=' text-2sm ml-12 '>Applied Jobs</p>

        </div>

      </div>



      <div className='inline-flex mt-10  md:w-[241px] h-[120px] w-full bg-white md:ml-5 rounded-lg'>
        <div>
          <div className='p-4 mt-7 ml-7 text-3xl bg-red-100 rounded-md text-red-600'><BsCardText /></div>
        </div>

        <div className='md:ml-0 mx-auto'>
          <h4 className='ml-16 mt-6 text-3xl font-semibold text-red-600'>9382</h4>
          <p className=' text-2sm ml-16'>Job Alerts</p>

        </div>
      </div>

      <div className='inline-flex mt-10  md:w-[241px] h-[120px] w-full bg-white md:ml-5 rounded-md'>
        <div>
          <div className='p-4 mt-7 ml-7 text-3xl bg-yellow-100 rounded-md text-yellow-400'><BsChatSquareText /></div>
        </div>

        <div className='md:ml-0 mx-auto'>
          <h4 className='ml-20 mt-6 text-3xl font-semibold text-yellow-400'>74</h4>
          <p className=' text-2sm ml-16'>Messages</p>

        </div>
      </div>


      <div className='inline-flex mt-10  md:w-[241px] h-[120px] w-full bg-white md:ml-5 rounded-lg'>
        <div>
          <div className='p-4 mt-7 ml-7 text-3xl bg-green-100 rounded-md text-green-500'><BsBookmark /></div>
        </div>

        <div className='md:ml-0 mx-auto'>
          <h4 className='ml-20 mt-6 text-3xl font-semibold text-green-500'>32</h4>
          <p className=' text-2sm ml-16'>Shortlist</p>

        </div>
      </div>


    </div>

    <div className='md:w-auto flex-col bg-white mt-8 md:ml-[720px] h-[510px] rounded-lg w-full'>

      <p className='p-5 ml-5 text-[20px] font-medium'>Notifications</p>

      <div className='inline-flex  p-2 ml-5'>
        <div className='mt-1 bg-sky-100 rounded-full h-9 w-9'>
          <div className='mt-2 ml-[9px] text-sky-700'><TfiBag /></div>
        </div>
        <div className='mt-2'>
          <p className='font-medium inline-flex ml-2'>Henry Wilson </p> applied for a job<p className='text-sky-200px md:inline-flex text-sky-700 md:ml-2 ml-2'>Product Designer</p>
        </div>
      </div>


      <div className='inline-flex p-2 ml-5 '>
        <div className='mt-1 bg-sky-100 rounded-full h-9 w-9'>
          <div className='mt-2 ml-[9px] text-green-500'><TfiBag /></div>
        </div>
        <div className='mt-2'>
          <p className='font-medium inline-flex ml-2'>Raul Costa </p> applied for a job<p className='text-green-200px md:inline-flex text-green-400 md:ml-2 ml-2'>Product Manager,Risk</p>
          {/* <p className='text-sky-200px md:inline-flex text-green-400 mr-4 md:ml-2 ml-2'> Risk</p> */}
        </div>
      </div>

      <div className='inline-flex p-2 ml-5'>
        <div className='mt-1 bg-sky-100 rounded-full h-9 w-9'>
          <div className='mt-2 ml-[9px] text-sky-700'><TfiBag /></div>
        </div>
        <div className='mt-2'>
          <p className='font-medium inline-flex ml-2'>Jack Milk </p> applied for a job<p className='text-sky-200px md:inline-flex text-sky-700 md:ml-2 ml-2'>Technical Architect</p>
        </div>
      </div>

      <div className='inline-flex p-2 ml-5'>
        <div className='mt-1 bg-green-100 rounded-full h-9 w-9'>
          <div className='mt-2 ml-[9px] text-green-500'><TfiBag /></div>
        </div>
        <div className='mt-2'>
          <p className='font-medium inline-flex ml-2'>Michel Arian </p> applied for a job<p className='text-green-200px md:inline-flex text-green-400 md:ml-2 ml-2'>Software Engineer</p>
        </div>
      </div>

      <div className='inline-flex p-2 ml-5'>
        <div className='mt-1 bg-sky-100 rounded-full h-9 w-9'>
          <div className='mt-2 ml-[9px] text-sky-700'><TfiBag /></div>
        </div>
        <div className='mt-2'>
          <p className='font-medium inline-flex ml-2'>Wade Warren </p> applied for a job<p className='text-sky-200px md:inline-flex text-sky-700 md:ml-2 ml-2'>Web Developer</p>
        </div>
      </div>

      <div className='inline-flex p-2 ml-5'>
        <div className='mt-1 bg-green-100 rounded-full h-9 w-9'>
          <div className='mt-2 ml-[9px] text-green-500'><TfiBag /></div>
        </div>
        <div className='mt-2'>
          <p className='font-medium inline-flex ml-2'>Michel Arian </p> applied for a job<p className='text-green-200px md:inline-flex text-green-400 md:ml-2 ml-2'>Software Engineer</p>
        </div>
      </div>

    </div>
{/* card */}

    <div className='  w-full flex-row  md:p-10 mt-8 md:h-[790px] h-auto  bg-white p-6 rounded-lg '>

      <div><p className='font-semibold text-[20px]  px-4'>Jobs Applied Recently
      </p></div>

      <div className='md:flex flex-wrap md:mt-7  mt-5 justify-evenly  '>

        {job.map((jobs) => (
          <div className='  mt-8 md:mt-6 flex h-auto md:m-3 md:w-[530px] w-full  rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
            <div className='h-full w-full p-5  '>
              <div className='h-[68%] w-full  flex '>
                <div className='  w-[40%] h-full md:w-[20%] flex justify-center items-center overflow-hidden'>
                  <img className="   h-16 w-16 md:h-20 md:w-20 " src={jobs.Image}alt='' />
                </div>

                <div className='pl-5' >

                  <div className='flex justify-between items-center'>
                    <NavLink className="  text-[20px] md:text-[19px] font-semibold"> {jobs.title} </NavLink><span class="material-symbols-outlined">
                      bookmark
                    </span></div>
                  <div className='flex flex-wrap mt-2'>
                    <div className='flex mr-4'>
                      <span class="material-symbols-outlined pr-1 font-light">
                        business_center
                      </span>
                      <p>{jobs.type}</p>
                    </div>
                    <div className='flex mr-4 '>
                      <span class="material-symbols-outlined pr-1 font-light">
                        location_on
                      </span>
                      <p>{jobs.location}</p>
                    </div>
                    <div className='flex mr-4'>
                      <span class="material-symbols-outlined pr-1 font-light">
                        schedule
                      </span>
                      <p>{jobs.time}</p>
                    </div>
                    <div className='flex '>
                      <span class="material-symbols-outlined pr-1 font-light">
                        currency_rupee
                      </span>
                      <p>{jobs.salary}</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className=' flex   py-4 md:ml-[100px]'>
                <div className='h-[33px] w-24 text-center rounded-full bg-blue-200 mr-2'><p className='pt-1'>Full time </p></div>
                <div className='h-[33px] w-24 text-center text-black rounded-full bg-lime-200	 mr-2'><p className='pt-1'>Private </p></div>
                <div className='h-[33px] w-24 text-center text-g rounded-full bg-yellow-200	'><p className='pt-1'>Urgent</p></div>
              </div>
            </div>

          </div>
        ))}


      </div>



    </div>

    <div className='text-center mt-2'>© 2024 Superio by <button className='text-blue-600			'>ib-themes.</button> All Right Reserved.</div>
  </div>
  </div>
    </>
  );
}
export default CandidateDashboard;
