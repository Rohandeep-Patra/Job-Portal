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
      image: "https://superio-reactjs.ibthemespro.com/images/resource/candidate-1.png",
      name:  "Darlene Robertson",
      type: "Ui Designer",
      location: "London, UK",
      salary: "$44 / hour",
    },
    {
      image: "https://superio-reactjs.ibthemespro.com/images/resource/candidate-2.png",
      name:  "Wade Warren",
      type: "Developer",
      location: "London, UK",
      salary: "$99 / hour",
    },
    {
      image: "https://superio-reactjs.ibthemespro.com/images/resource/candidate-3.png",
      name:  "Leslie Alexander",
      type: "Digital Marketer",
      location: "London, UK",
      salary: "$88 / hour",
    },
    {
      image: "https://superio-reactjs.ibthemespro.com/images/resource/candidate-4.png",
      name:  "Floyd Miles",
      type: "Front-end Developer",
      location: "London, UK",
      salary: "$44 / hour",
    },
    {
      image: "https://superio-reactjs.ibthemespro.com/images/resource/candidate-5.png",
      name:  "Cameron Williamson",
      type: "Backend Developer",
      location: "London, UK",
      salary: "$99 / hour",
    },
    {
      image: "https://superio-reactjs.ibthemespro.com/images/resource/candidate-6.png",
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