import React from 'react'
import { useState } from 'react';
// import { BsArrowLeftShort } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { RiContactsFill } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { RiHandbagLine } from "react-icons/ri";
import { LuBellRing } from "react-icons/lu";
import { BsChatLeftDots } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoBagRemoveOutline } from "react-icons/io5";
import { CiBookmarkCheck } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiLock } from "react-icons/ci";


import { SlMenu } from "react-icons/sl";

import { NavLink } from 'react-router-dom';
import Messages from './Messages';



function CandidateSidebar() {
    //   const [open, setOpen] = useState(true);
    return (
        <>
            <div className="flex">

                <div className='md:hidden block p-3'><SlMenu /></div>

                <div className=' hidden md:block bg-white h-screen  p-2  relative'>

                    <nav>

                        {/* <BsArrowLeftShort className={`text-2xl bg-white rounded-full absolute -right-3 border border-slate-600 cursor-pointer ${!open && "rotate-180"}`} 
                     onClick={() => setOpen(!open)}/> */}


                        <NavLink to={"/candidate-dash"} className={"nav"}>
                            <div className='flex hover:bg-slate-200 w-52 h-10 rounded-md mt-3 group mr-2'>
                                <div className='text-2xl p-2 ml-2 group-hover:text-blue-500'>
                                    <GoHome />
                                </div>
                                <h1 className='text-1sm p-2 group-hover:text-blue-500'>Dashboard</h1>
                            </div>
                        </NavLink>

                        <NavLink to="/candidate-dash/myprofile" className={"nav"}>
                            <div className='flex hover:bg-slate-200 w-52 h-10 rounded-md mt-3 group mr-2'>
                                <div className=' text-2xl p-2 ml-2 group-hover:text-blue-500'>
                                    <CgProfile />

                                </div>
                                <h1 className='text-sm p-2 group-hover:text-blue-500'>My profile</h1>
                            </div>
                        </NavLink>
                        <NavLink to={"/candidate-dash/myResume"} className={"nav"}>
                            <div className='flex hover:bg-slate-200 w-52 h-10 rounded-md mt-3 group mr-2'>
                                <div className='text-2xl p-2 ml-2 group-hover:text-blue-500'>
                                    <FaRegFileAlt />

                                </div>
                                <h1 className='text-1sm p-2 group-hover:text-blue-500'>MyResume</h1>
                            </div>

                        </NavLink>
                        <NavLink to={"/candidate-dash/appliedJob"} className="nav">
                            <div className='flex hover:bg-slate-200 w-52 h-10 rounded-md mt-3 group mr-2'>
                                <div className='text-2xl p-2 ml-2 group-hover:text-blue-500'>
                                    <IoBagRemoveOutline />

                                </div>
                                <h1 className="text-1sm p-2 group-hover:text-blue-500"> AppliedJob</h1>
                            </div>
                        </NavLink>
                        <NavLink to={"/candidate-dash/jobAlerts"} className={"nav"}>

                            <div className='flex hover:bg-slate-200 w-25 h-10 rounded-md mt-3 group mr-2'>
                                <div className='text-2xl p-2 ml-2 group-hover:text-blue-500'>
                                    <LuBellRing />

                                </div>
                                <h1 className='text-1sm p-2 group-hover:text-blue-500'>JobAlerts</h1>
                            </div>
                        </NavLink>
                        <NavLink to={"/candidate-dash/candidateshort"} className={"nav"}>
                            <div className='flex hover:bg-slate-200 w-25 h-10 rounded-md mt-3 group mr-2'>
                                <div className='text-2xl p-2 ml-2 group-hover:text-blue-500'>
                                    <CiBookmarkCheck />

                                </div>
                                <h1 className='text-1sm p-2 group-hover:text-blue-500'>Shortlisted Job</h1>
                            </div>
                        </NavLink>
                        <NavLink to={"/candidate-dash/changePassword"} className={"nav"}>
                            <div className='flex hover:bg-slate-200 w-25 h-10 rounded-md mt-3 group mr-2'>
                                <div className='text-2xl p-2 ml-2 group-hover:text-blue-500'>
                                <CiLock />


                                </div>
                                <h1 className='text-1sm p-2 group-hover:text-blue-500'> ChangePassword</h1>
                            </div>
                        </NavLink>

                    </nav>

                </div>


            </div>
        </>
    )
}

export default CandidateSidebar