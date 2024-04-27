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
                    <div className='flex hover:bg-slate-200 w-52 h-10 rounded-md mt-3 group mr-2'>
                        <div className='text-2xl p-2 ml-2 group-hover:text-blue-500'>
                            <GoHome />
                        </div>
                        <h1 className='text-1sm p-2 group-hover:text-blue-500'>Dashboard</h1>
                        </div>
                    </NavLink>
                    


                    <NavLink to={"/employee-dash/company"} className={"nav"}>
                    <div className='flex hover:bg-slate-200 w-52 h-10 rounded-md mt-2 group'>
                        <div className='text-2xl p-2 ml-2 group-hover:text-blue-500'>
                        <RiContactsFill />
                        </div>
                    <h1 className='text-sm p-2 group-hover:text-blue-500'>Company Profile</h1>
                    </div>
                    </NavLink>


                    <NavLink to={"/employee-dash/postnewjob"} className={"nav"}>
                    <div className='flex hover:bg-slate-200 w-52 h-10 rounded-md mt-2 group'>
                        <div className='text-2xl p-2 ml-2 group-hover:text-blue-500'>
                        <LuSendHorizonal />
                        </div>
                    <h1 className='text-sm p-2 group-hover:text-blue-500'>Post A New Job</h1>
                    </div>
                    </NavLink>


                    <NavLink to={"/employee-dash/manage"} className={"nav"}>
                    <div className='flex hover:bg-slate-200 w-52 h-10 rounded-md mt-2 group'>
                        <div className='text-2xl p-2 ml-2 group-hover:text-blue-500'>
                        <IoBagCheckOutline />
                        </div>
                    <h1 className='text-sm p-2 group-hover:text-blue-500'>Manage Jobs</h1>
                    </div>
                    </NavLink>

                    <NavLink to={"/employee-dash/applicants"} className={"nav"}>
                    <div className='flex hover:bg-slate-200 w-52 h-10 rounded-md mt-2 group'>
                        <div className='text-2xl p-2 ml-2 group-hover:text-blue-500'>
                        <FaWpforms />
                        </div>
                    <h1 className='text-sm p-2 group-hover:text-blue-500'>All Applicants</h1>
                    </div>
                    </NavLink>


                    <NavLink to={"/employee-dash/short"} className={"nav"}>
                    <div className='flex hover:bg-slate-200 w-52 h-10 rounded-md mt-2 group'>
                        <div className='text-2xl p-2 ml-2 group-hover:text-blue-500'>
                        <BsBookmark />
                        </div>
                    <h1 className='text-sm p-2 group-hover:text-blue-500'>Shortlist Resumes</h1>
                    </div>
                    </NavLink>


                    
                

                  </nav>
                     
                </div>

                
            </div>
        </>
  )
}

export default Sidebar