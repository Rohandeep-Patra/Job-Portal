import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const [open ,setOpen] = useState(false);
  return (
    <>
      {/* <div className="flex">
        <div className={`absolute h-screen w-[270px] bg-white  flex-col border border-r border-slate-300 sm:${open ? "left-[-270px]" : "left-[0]"} `}>
          <NavLink
            className="flex flex-row pl-10  mt-8 mb-[10px] my-1 text-slate-500 hover:bg-blue-100/50 py-2 group font-normal hover:duration-500 mx-3 rounded-md"
            to=""
          >
            <span class="material-symbols-outlined text-2xl group-hover:text-blue-500">
              home
            </span>
            <p className="pl-2 pt-[6px] group-hover:text-blue-500 font-Josefin mr-2 text-base">
              Dashboard
            </p>
          </NavLink>
          
          <NavLink
            className="flex flex-row pl-10 text-base mb-[10px] text-slate-500 my-1 hover:bg-blue-100/50 py-2 group hover:duration-500 mx-3 rounded-md"
            to=""
          >
            <span class="material-symbols-outlined text-2xl group-hover:text-blue-500">
              person
            </span>
            <p className="pl-2 pt-[6px] group-hover:text-blue-500 font-Josefin mr-2">
              My Profile
            </p>
          </NavLink>
          <NavLink
            className="flex flex-row pl-10 text-base mb-[10px] text-slate-500 my-1 hover:bg-blue-100/50 py-2 group hover:duration-500 mx-3 rounded-md"
            to=""
          >
            <span class="material-symbols-outlined text-2xl group-hover:text-blue-500">
              description
            </span>
            <p className="pl-2 pt-[6px] group-hover:text-blue-500 font-Josefin mr-2">
              My Resume
            </p>
          </NavLink>
          <NavLink
            className="flex flex-row pl-10 text-base mb-[10px] text-slate-500 my-1 hover:bg-blue-100/50 py-2 group hover:duration-500 mx-3 rounded-md"
            to=""
          >
            <span class="material-symbols-outlined text-2xl group-hover:text-blue-500">
              enterprise
            </span>
            <p className="pl-2 pt-[6px] group-hover:text-blue-500 font-Josefin mr-2">
              Applied Jobs
            </p>
          </NavLink>
          <NavLink
            className="flex flex-row pl-10 text-base mb-[10px] text-slate-500 my-1 hover:bg-blue-100/50 py-2 group hover:duration-500 mx-3 rounded-md"
            to=""
          >
            <span class="material-symbols-outlined text-2xl group-hover:text-blue-500">
              notifications
            </span>
            <p className="pl-2 pt-[6px] group-hover:text-blue-500 font-Josefin mr-2">
              Job Alert
            </p>
          </NavLink>
          <NavLink
            className="flex flex-row pl-10 text-base mb-[10px] text-slate-500 my-1 hover:bg-blue-100/50 py-2 group hover:duration-500 mx-3 rounded-md"
            to=""
          >
            <span class="material-symbols-outlined text-2xl group-hover:text-blue-500">
              bookmark
            </span>
            <p className="pl-2 pt-[6px] group-hover:text-blue-500 font-Josefin mr-2">
              Shortlisted Jobs
            </p>
          </NavLink>
          <NavLink
            className="flex flex-row pl-10 text-base mb-[10px] text-slate-500 my-1 hover:bg-blue-100/50 py-2 group hover:duration-500 mx-3 rounded-md"
            to=""
          >
            <span class="material-symbols-outlined text-2xl group-hover:text-blue-500">
              lock
            </span>
            <p className="pl-2 pt-[6px] group-hover:text-blue-500 font-Josefin mr-2">
              Change Password
            </p>
          </NavLink>
          <NavLink
            className="flex flex-row pl-10 text-base mb-[10px] text-slate-500 my-1 hover:bg-blue-100/50 py-2 group hover:duration-500 mx-3 rounded-md"
            to=""
          >
            <span class="material-symbols-outlined text-2xl group-hover:text-blue-500">
              logout
            </span>
            <p className="pl-2 pt-[6px] group-hover:text-blue-500 font-Josefin mr-2">
              Logout
            </p>
          </NavLink>
          <NavLink
            className="flex flex-row pl-10 text-base mb-[10px] text-slate-500 my-1 hover:bg-blue-100/50 py-2 group hover:duration-500 mx-3 rounded-md"
            to=""
          >
            <span class="material-symbols-outlined text-2xl group-hover:text-blue-500">
              delete
            </span>
            <p className="pl-2 pt-[6px] group-hover:text-blue-500 font-Josefin mr-2">
              Delete Profile
            </p>
          </NavLink>
          
          
        </div>
        <div className="block md:hidden " >
          <span class=" material-symbols-outlined cursor-pointer" onClick={() => setOpen(open)}>menu</span>
        </div>
      </div> */}

      

    </>
  );
};

export default Sidebar;
