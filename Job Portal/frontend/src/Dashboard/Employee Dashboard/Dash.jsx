import React from 'react'
import Sidebar from './Sidebar'
import { BsBriefcaseFill } from "react-icons/bs";
import { BsCardText } from "react-icons/bs";
import { BsChatSquareText } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { TfiBag } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";

// const [open, setOpen] = useState(true);


function Dash() {


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
      image: "data:image/jpeg;base64,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",
      name:  "Darlene Robertson",
      type: "Ui Designer",
      location: "London, UK",
      salary: "$44 / hour",
    },
    {
      image: "data:image/jpeg;base64,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",
      name:  "Wade Warren",
      type: "Developer",
      location: "London, UK",
      salary: "$99 / hour",
    },
    {
      image: "data:image/jpeg;base64,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",
      name:  "Leslie Alexander",
      type: "Digital Marketer",
      location: "London, UK",
      salary: "$88 / hour",
    },
    {
      image: "data:image/jpeg;base64,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",
      name:  "Floyd Miles",
      type: "Front-end Developer",
      location: "London, UK",
      salary: "$44 / hour",
    },
    {
      image: "data:image/jpeg;base64,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",
      name:  "Cameron Williamson",
      type: "Backend Developer",
      location: "London, UK",
      salary: "$99 / hour",
    },
    {
      image: "data:image/jpeg;base64,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",
      name:  "Robert Fox",
      type: "Software Engineer",
      location: "London, UK",
      salary: "$77 / hour",
    },
      
  ]

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
    <div className='flex mt-20 bg-slate-100'>

<div className='w-[16%] fixed'><Sidebar/></div>
<div className='md:p-9 p-6 md:ml-[16%]  mx-auto w-full md:mt-0 mt-9'>
    <p className=' text-2xl font-medium md:text-3xl md:font-semibold '>Dashboard Home!</p>
    <p className='mt-3'>Ready to jump back in?</p>

    <div className='flex-col  md:flex-row w-full flex justify-between gap-0'>

        <div className='inline-flex mt-10  md:w-[241px] h-[120px] w-full bg-white rounded-lg'>

            <div>
            <div className='p-4 mt-7 ml-6 text-3xl bg-sky-100 rounded-md text-sky-600'><BsBriefcaseFill /></div>
            </div>

            <div className='md:ml-0 mx-auto'>
            <h4 className='ml-16 mt-6 text-3xl font-semibold text-sky-600'>22</h4>
            <p className=' text-2sm ml-12'>Posted Jobs</p>

            </div>

        </div>



        <div className='inline-flex mt-10  md:w-[241px] h-[120px] w-full bg-white md:ml-6 rounded-lg'>
        <div>
        <div className='p-4 mt-7 ml-7 text-3xl bg-red-100 rounded-md text-red-600'><BsCardText /></div>
        </div>

        <div className='md:ml-0 mx-auto'>
        <h4 className='ml-16 mt-6 text-3xl font-semibold text-red-600'>9382</h4>
        <p className=' text-2sm ml-12'>Application</p>

        </div>
        </div>

        <div className='inline-flex mt-10  md:w-[241px] h-[120px] w-full bg-white md:ml-7 rounded-md'>
        <div>
        <div className='p-4 mt-7 ml-7 text-3xl bg-yellow-100  text-[13px]0 rounded-md text-yellow-400'><BsChatSquareText /></div>
        </div>

        <div className='md:ml-0 mx-auto'>
        <h4 className='ml-16 mt-6 text-3xl font-semibold text-yellow-400'>74</h4>
        <p className=' text-2sm ml-12'>Messages</p>

        </div>
        </div>


        <div className='inline-flex mt-10  md:w-[241px] h-[120px] w-full bg-white md:ml-7 rounded-lg'>
        <div>
        <div className='p-4 mt-7 ml-7 text-3xl bg-green-100 rounded-md text-green-500'><BsBookmark /></div>
        </div>

        <div className='md:ml-0 mx-auto'>
        <h4 className='ml-16 mt-6 text-3xl font-semibold text-green-500'>32</h4>
        <p className=' text-2sm ml-12'>Shortlist</p>

        </div>
        </div>


    </div>

    <div className='md:w-auto flex-col bg-white mt-8 md:ml-[630px] h-[490px] rounded-lg w-full'>

        <p className='p-5 ml-3 text-[20px] font-medium'>Notifications</p>

        <div className='inline-flex ml-3'>
           <div className='mt-1 bg-sky-100 rounded-full h-9 w-9'>
             <div className='mt-2 ml-[9px] text-sky-700'><TfiBag /></div>
            </div>
           <div className='mt-2'>
            <p className='font-medium inline-flex ml-2'>Henry Wilson </p> applied for a job<p className='text-sky-200px md:inline-flex text-sky-700 md:ml-2 ml-2'>Product Designer</p>
          </div>
        </div>


        <div className='inline-flex ml-3 mt-4 '>
           <div className='mt-1 bg-sky-100 rounded-full h-9 w-9'>
             <div className='mt-2 ml-[9px] text-green-500'><TfiBag /></div>
            </div>
           <div className='mt-2'>
            <p className='font-medium inline-flex ml-2'>Raul Costa </p> applied for a job<p className='text-green-200px md:inline-flex text-green-400 md:ml-2 ml-2'>Product Manager,Risk</p>
          </div>
        </div>

        <div className='inline-flex ml-3 mt-4'>
           <div className='mt-1 bg-sky-100 rounded-full h-9 w-9'>
             <div className='mt-2 ml-[9px] text-sky-700'><TfiBag /></div>
            </div>
           <div className='mt-2'>
            <p className='font-medium inline-flex ml-2'>Jack Milk </p> applied for a job<p className='text-sky-200px md:inline-flex text-sky-700 md:ml-2 ml-2'>Technical Architect</p>
          </div>
        </div>

        <div className='inline-flex ml-3 mt-4'>
           <div className='mt-1 bg-green-100 rounded-full h-9 w-9'>
             <div className='mt-2 ml-[9px] text-green-500'><TfiBag /></div>
            </div>
           <div className='mt-2'>
            <p className='font-medium inline-flex ml-2'>Michel Arian </p> applied for a job<p className='text-green-200px md:inline-flex text-green-400 md:ml-2 ml-2'>Software Engineer</p>
          </div>
        </div>

        <div className='inline-flex ml-3 mt-4'>
           <div className='mt-1 bg-sky-100 rounded-full h-9 w-9'>
             <div className='mt-2 ml-[9px] text-sky-700'><TfiBag /></div>
            </div>
           <div className='mt-2'>
            <p className='font-medium inline-flex ml-2'>Wade Warren </p> applied for a job<p className='text-sky-200px md:inline-flex text-sky-700 md:ml-2 ml-2'>Web Developer</p>
          </div>
        </div>

        <div className='inline-flex ml-3 mt-4'>
           <div className='mt-1 bg-green-100 rounded-full h-9 w-9'>
             <div className='mt-2 ml-[9px] text-green-500'><TfiBag /></div>
            </div>
           <div className='mt-2'>
            <p className='font-medium inline-flex ml-2'>Michel Arian </p> applied for a job<p className='text-green-200px md:inline-flex text-green-400 md:ml-2 ml-2'>Software Engineer</p>
          </div>
        </div>
        
    </div>


    <div className=' flex-row  mt-8 md:h-[790px] h-[1370px] bg-white'>

      <div><p className='font-semibold text-[20px] px-10 pt-5'>Recent Applicants</p></div>

      <div className=' md:flex flex-wrap md:mt-7 mt-5  justify-evenly'>

        {job.map((jobs) => (
          <div className='mt-7 md:mt-3 flex h-auto m-3 md:w-[470px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
              <div className='h-full w-full p-5 '>
                <div className='h-[68%] w-full flex'>
                  <div className='flex mx-4 self-center h-20 w-20 border rounded-full overflow-hidden '> 
                    <img src={jobs.image} alt='' />
                  </div>

                  <div className='md:pl-8 pl-2'>
                     <div className='flex'><NavLink className=" font-semibold">{jobs.name}</NavLink></div>
                     
                     <div className='flex mt-1'>
                        <p className='inline  text-[13px] text-sky-600 font-normal'>{jobs.type}</p>
                        <p className='inline  text-[13px] text-slate-500  ml-1'> <IoLocationOutline className='inline md:mr-1 text-[18px]' />{jobs.location}</p>
                     </div>

                     <div className='flex mt-1'>
                      <p className='inline text-[18px]  font-normal'><GiMoneyStack className='mt-1'/></p>
                      <p className='inline text-[15px] text-slate-500 ml-1'> {jobs.salary}</p>
                    </div>

                    <div className=' mt-3'>
                      <button className='rounded-xl bg-sky-100 md:w-14 w-12 h-[30px] pb-1 text-[13px]  text-slate-500'>App</button>
                      <button className='rounded-xl bg-sky-100 md:w-20 w-16 h-[30px] pb-1 text-[13px] ml-3 text-slate-500'>Design</button>
                      <button className='rounded-xl bg-sky-100 md:w-20 w-16 h-[30px] pb-1 text-[13px] ml-3 text-slate-500'>Digital</button>
                    </div>

                  <div className=' mt-6'>
                  <button className=' bg-slate-200 h-6 w-6 p-1 text-sky-600 rounded-lg hover:bg-blue-500 hover:text-white'><FaEye /></button>
                  <button className='bg-slate-200 h-6 w-6 p-1 ml-4 text-sky-600 rounded-lg hover:bg-blue-500 hover:text-white'><BiCheck /></button>
                  <button className='bg-slate-200 h-6 w-6 p-1 ml-4 text-sky-600 rounded-lg hover:bg-blue-500 hover:text-white'><GiCancel /></button>
                  <button className='bg-slate-200 h-6 w-6 p-1 ml-4 text-sky-600 rounded-lg hover:bg-blue-500 hover:text-white'><RiDeleteBin5Line  /></button>
                  
                 </div>
                    

                  </div>
                </div>
          
              </div>
          </div>
        ))}

      </div>


     

    </div>


    <div className='flex justify-center mt-4'>
      <p className='text-slate-500 text-sm'>© 2024 Superio by <button className='text-blue-600'>ib-themes.</button> All Rights Reserved.</p>
    </div>

</div>

</div>
    
    </>
  )
}

export default Dash