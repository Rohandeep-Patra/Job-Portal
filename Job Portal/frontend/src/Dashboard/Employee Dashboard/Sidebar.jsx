import React from 'react'
// import { useState } from 'react';
// import { BsArrowLeftShort } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { RiContactsFill } from "react-icons/ri";
import { LuSendHorizonal } from "react-icons/lu";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";

import { SlMenu } from "react-icons/sl";

import { NavLink } from 'react-router-dom';



function Sidebar() {
//   const [open, setOpen] = useState(true);
  return (
    <>
            <div className="flex">

                <div className='md:hidden block p-4'><SlMenu /></div>

                <div className=' hidden md:block bg-white h-screen  p-2  relative'>
                  
                  <nav>

                    {/* <BsArrowLeftShort className={`text-2xl bg-white rounded-full absolute -right-3 border border-slate-600 cursor-pointer ${!open && "rotate-180"}`} 
                     onClick={() => setOpen(!open)}/> */}


                    <NavLink to={"/employee-dash"} className={"nav"}>
                    <div className='flex hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[220px] h-10 rounded-md mt-3 group mr-2'>
                        <div className='text-2xl p-2 ml-4 group-hover:text-blue-700 group-hover:text-[25px]'>
                            <GoHome />
                        </div>
                        <h1 className=' text-base p-2  group-hover:text-blue-700 group-hover:font-medium group-hover:text-'>Dashboard</h1>
                        </div>
                    </NavLink>
                    


                    <NavLink to={"/employee-dash/company"} className={"nav"}>
                    <div className='flex hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[220px] h-10 rounded-md mt-3 group'>
                        <div className=' text-2xl p-2 ml-4 group-hover:text-blue-700 group-hover:text-[25px]'>
                        <RiContactsFill />
                        </div>
                    <h1 className='text-1sm p-2 group-hover:text-blue-700 group-hover:font-medium'>Company Profile</h1>
                    </div>
                    </NavLink>


                    <NavLink to={"/employee-dash/postnewjob"} className={"nav"}>
                    <div className='flex hover:shadow-[rgba(0,_0,_0,_0.24)_1px_3px_8px] w-[220px] h-10 rounded-md mt-3 group'>
                        <div className='text-2xl p-2 ml-4 group-hover:text-blue-700 group-hover:text-[25px]'>
                        <LuSendHorizonal />
                        </div>
                    <h1 className='text-1sm p-2 group-hover:text-blue-700 group-hover:font-medium'>Post A New Job</h1>
                    </div>
                    </NavLink>


                    <NavLink to={"/employee-dash/manage"} className={"nav"}>
                    <div className='flex hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[220px] h-10 rounded-md mt-3 group'>
                        <div className='text-2xl p-2 ml-4 group-hover:text-blue-700 group-hover:text-[25px]'>
                        <IoBagCheckOutline />
                        </div>
                    <h1 className='text-1sm p-2 group-hover:text-blue-700 group-hover:font-medium'>Manage Jobs</h1>
                    </div>
                    </NavLink>

                    <NavLink to={"/employee-dash/applicants"} className={"nav"}>
                    <div className='flex hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[220px] h-10 rounded-md mt-3 group'>
                        <div className='text-2xl p-2 ml-4 group-hover:text-blue-700 group-hover:text-[25px]'>
                        <FaWpforms />
                        </div>
                    <h1 className='text-1sm p-2 group-hover:text-blue-700 group-hover:font-medium'>All Applicants</h1>
                    </div>
                    </NavLink>


                    <NavLink to={"/employee-dash/short"} className={"nav"}>
                    <div className='flex hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[220px] h-10 rounded-md mt-3 group'>
                        <div className='text-2xl p-2 ml-4 group-hover:text-blue-700 group-hover:text-[25px]'>
                        <BsBookmark />
                        </div>
                    <h1 className='text-1sm p-2 group-hover:text-blue-700 group-hover:font-medium'>Shortlist Resumes</h1>
                    </div>
                    </NavLink>


                    
                

                  </nav>
                     
                </div>

                
            </div>
        </>
  )
}

export default Sidebar