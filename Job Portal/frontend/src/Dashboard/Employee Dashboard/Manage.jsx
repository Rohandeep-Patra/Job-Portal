import React from "react";
import Sidebar from "./Sidebar";
import Nav2 from "../../NavBar/Nav2";
import { NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { TfiBag } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { RiDeleteBin5Line } from "react-icons/ri";

function Manage() {
  let job = [
    {
      image:
        "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-1.png",
      name: "Software Engineer (Android)",
      location: "London, UK",
      appli: "3+ Applied",
      date: "October 27, 2017 April 25, 2011",
      status: "Active",
    },
    {
      image:
        "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-2.png",
      name: "Recruiting Coordinator",
      location: "London, UK",
      appli: "3+ Applied",
      date: "October 27, 2017 April 25, 2011",
      status: "Active",
    },
    {
      image:
        "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-3.png",
      name: "SProduct Manager, Studio",
      location: "London, UK",
      appli: "3+ Applied",
      date: "October 27, 2017 April 25, 2011",
      status: "Active",
    },
    {
      image:
        "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-4.png",
      name: "Senior Product Designer",
      location: "London, UK",
      appli: "3+ Applied",
      date: "October 27, 2017 April 25, 2011",
      status: "Active",
    },
  ];

  return (
    <>
      <div className="relative">
        <div className="absolute z-50">
          <Nav2 />
        </div>

        <div className="  mt-20 flex z-49 absolute w-full   bg-slate-100">
          <div className="w-[16%] fixed">
            <Sidebar />
          </div>
          <div className="md:p-12 p-6 md:ml-[16%]  mx-auto w-full md:mt-0 mt-9">
            <p className=" text-3xl font-medium md:text-3xl md:font-semibold ">
              Manage Jobs!
            </p>
            <p className="mt-3">Ready to jump back in?</p>

            <div className="md:flex flex-col p-5 bg-white md:h-[730px] h-[1000px] w-auto mt-8 rounded-lg  ">
              <div className="md:flex">
                <p className="font-semibold  text-lg">My Job Listings</p>
                <div className="md:ml-[670px] ">
                  <select
                    name="teamSize"
                    className="p-2 bg-slate-200 focus:bg-white focus:outline-blue-500  rounded-md md:mt-0 mt-3 md:h-10 h-12  w-[160px]"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Last 6 Months" className="group-hover:bg-white ">Last 6 Months</option>
                    <option value="Last 12 Months">Last 12 Months</option>
                    <option value="Last 16 Months">Last 16 Months</option>
                    <option value="Last 24 Months">Last 24 Months</option>
                    <option value="Last 5 Years">Last 5 Years</option>
                  </select>
                </div>
              </div>

              <div className=" mt-5 md:h-18 h-12  w-full bg-slate-200 flex flex-row">
                <div className="p-3 ml-3 font-semibold text-blue-700 text-[16px]">
                  Title
                </div>
                <div className="p-3 md:ml-[230px] ml-40 font-semibold text-blue-700 text-[16px]">
                  Applications
                </div>
                <div className="p-3 ml-20 font-semibold text-blue-700 text-[16px] md:block hidden">
                  Created & Expired
                </div>
                <div className="p-3 ml-14 font-semibold text-blue-700 text-[16px] md:block hidden">
                  Status
                </div>
                <div className="p-3 ml-20 font-semibold text-blue-700 text-[16px] md:block hidden">
                  Action
                </div>
              </div>

              <div className=" mt-5 md:h-18 h-auto  w-full  flex flex-row">
                <div className="">
                  {job.map((jobs) => (
                    <div className=" flex h-auto w-full mt-2 pb-2 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.06)]">
                      <div className="h-full p-2 flex ">
                        <div className="h-[68%]  flex">
                          <div className="flex  h-14  overflow-hidden ">
                            <img src={jobs.image} alt="" />
                          </div>

                          <div className=" pl-4 md:w-44 w-[155px]">
                            <div className="flex ">
                              <NavLink className=" font-semibold hover:text-blue-600 md:whitespace-nowrap">
                                {jobs.name}
                              </NavLink>
                            </div>

                            <div className="flex mt-2">
                              <p className="inline text-[18px]  font-normal">
                                <TfiBag className="mt-1" />
                              </p>
                              <p className="inline  text-slate-500 ml-2">
                                {" "}
                                Segment
                              </p>
                            </div>

                            <div className="flex mt-2">
                              <p className="inline  text-[13px] text-slate-500  ">
                                {" "}
                                <IoLocationOutline className="inline md:mr-1 text-[22px]" />
                                {jobs.location}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 md:ml-12 ml-0 text-[16px]  text-blue-700 pt-8">
                        <NavLink className=" underline">{jobs.appli}</NavLink>
                      </div>

                      <div className="p-3 ml-12 w-36 text-[14px] text-slate-500  pt-8 md:block hidden whitespace-nowrap ">
                        {jobs.date}
                      </div>
                      <div className="p-3 ml-28 pt-10 text-green-500 text-[14px] md:block hidden">
                        {jobs.status}
                      </div>
                      <div className="p-3 ml-20 font-semibold text-blue-700 text-[16px] md:block hidden">
                        <div className=" mt-6">
                          <button className=" bg-slate-200 h-6 w-6 p-1 text-sky-500 rounded-lg hover:bg-blue-500 hover:text-white">
                            <FaEye />
                          </button>
                          <button className="bg-slate-200 h-6 w-6 p-1 ml-4 text-sky-500 rounded-lg hover:bg-blue-500 hover:text-white">
                            <GiCancel />
                          </button>
                          <button className="bg-slate-200 h-6 w-6 p-1 ml-4 text-sky-500 rounded-lg hover:bg-blue-500 hover:text-white">
                            <RiDeleteBin5Line />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ------------------- footer----------------- */}
            <div className="flex justify-center mt-4">
              <p className="text-slate-500 text-sm">
                © 2024 Superio by{" "}
                <button className="text-blue-600">ib-themes.</button> All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manage;
