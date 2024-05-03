import React from "react";
import Sidebar from "./Sidebar";
import Nav2 from "../../NavBar/Nav2";
import { IoLocationOutline } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";


function Short() {

  let job = [
    {
      image:
        "https://superio-reactjs.ibthemespro.com/images/resource/candidate-1.png",
      name: "Darlene Robertson",
      type: "Ui Designer",
      location: "London, UK",
      salary: "$44 / hour",
    },
    {
      image:
        "https://superio-reactjs.ibthemespro.com/images/resource/candidate-2.png",
      name: "Wade Warren",
      type: "Developer",
      location: "London, UK",
      salary: "$99 / hour",
    },
    {
      image:
        "https://superio-reactjs.ibthemespro.com/images/resource/candidate-3.png",
      name: "Leslie Alexander",
      type: "Digital Marketer",
      location: "London, UK",
      salary: "$88 / hour",
    },
    {
      image:
        "https://superio-reactjs.ibthemespro.com/images/resource/candidate-4.png",
      name: "Floyd Miles",
      type: "Front-end Developer",
      location: "London, UK",
      salary: "$44 / hour",
    },
    {
      image:
        "https://superio-reactjs.ibthemespro.com/images/resource/candidate-5.png",
      name: "Cameron Williamson",
      type: "Backend Developer",
      location: "London, UK",
      salary: "$99 / hour",
    },
    {
      image:
        "https://superio-reactjs.ibthemespro.com/images/resource/candidate-6.png",
      name: "Robert Fox",
      type: "Software Engineer",
      location: "London, UK",
      salary: "$77 / hour",
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
            <p className=" text-3xl font-medium md:text-[32px] md:font-semibold ">
              Shortlisted Resumes!
            </p>
            <p className="mt-3">Ready to jump back in?</p>

            <div className="md:flex flex-col p-5 bg-white md:h-[850px] h-[1700px] w-auto mt-8 rounded-lg  ">
              <div className="md:flex">
                <p className="font-semibold  text-lg">Shorlist Resumes</p>
                <div className="md:ml-[260px] md:mt-0 mt-3">
                  <div class="relative flex items-center md:h-10 h-12 w-full md:w-[380px] rounded-lg focus-within:shadow-lg bg-blue-500 overflow-hidden ">
                    <div class="grid place-items-center h-full w-12 text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>

                    <input
                      class="peer p-3 h-full w-full outline-none text-sm  bg-slate-200 focus:bg-white focus:outline-blue-500 "
                      type="text"
                      id="search"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="md:ml-[30px] md:mt-0 mt-3">
                  <select
                    name="teamSize"
                    className="p-2 bg-slate-200 focus:bg-white focus:outline-blue-500 rounded-md md:mt-0 mt-3 md:h-10 h-12 w-full md:w-[160px]"
                    required
                  >
                    <option value="">Newest</option>
                    <option value="Last 12 Months">Last 12 Months</option>
                    <option value="Last 16 Months">Last 16 Months</option>
                    <option value="Last 24 Months">Last 24 Months</option>
                    <option value="Last 5 Years">Last 5 Years</option>
                  </select>
                </div>
              </div>

              {/* ------start------- */}
              <div className=" md:flex flex-wrap md:mt-7 mt-5  justify-evenly">
                {job.map((jobs) => (
                  <div className="mt-7 md:mt-3 flex h-auto m-3 md:w-[470px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className="h-full w-full p-5 ">
                      <div className="h-[68%] w-full flex">
                        <div className="flex mx-4 self-center h-20 w-20 border rounded-full overflow-hidden ">
                          <img src={jobs.image} alt="" />
                        </div>

                        <div className="md:pl-8  w-42">
                          <div className="flex">
                            <NavLink className=" font-semibold">
                              {jobs.name}
                            </NavLink>
                          </div>

                          <div className="flex mt-1">
                            <p className="inline  text-[13px] text-sky-600 font-normal">
                              {jobs.type}
                            </p>
                            <p className="inline  text-[13px] text-slate-500  ml-1">
                              {" "}
                              <IoLocationOutline className="inline md:mr-1 text-[18px]" />
                              {jobs.location}
                            </p>
                          </div>

                          <div className="flex mt-1">
                            <p className="inline text-[18px]  font-normal">
                              <GiMoneyStack className="mt-1" />
                            </p>
                            <p className="inline text-[15px] text-slate-500 ml-1">
                              {" "}
                              {jobs.salary}
                            </p>
                          </div>

                          <div className=" mt-3">
                            <button className="rounded-xl bg-sky-100 md:w-14 w-12 h-[30px] pb-1 md:text-[13px]  text-[12px] text-slate-500">
                              App
                            </button>
                            <button className="rounded-xl bg-sky-100 md:w-20 w-12 h-[30px] pb-1 md:text-[13px]  text-[12px] ml-3 text-slate-500">
                              Design
                            </button>
                            <button className="rounded-xl bg-sky-100 md:w-20 w-12 h-[30px] pb-1 md:text-[13px]  text-[12px] ml-3 text-slate-500">
                              Digital
                            </button>
                          </div>

                          <div className=" mt-6">
                            <button className=" bg-slate-200 h-6 w-6 p-1 text-sky-600 rounded-lg hover:bg-blue-500 hover:text-white">
                              <FaEye />
                            </button>
                            <button className="bg-slate-200 h-6 w-6 p-1 ml-4 text-sky-600 rounded-lg hover:bg-blue-500 hover:text-white">
                              <BiCheck />
                            </button>
                            <button className="bg-slate-200 h-6 w-6 p-1 ml-4 text-sky-600 rounded-lg hover:bg-blue-500 hover:text-white">
                              <GiCancel />
                            </button>
                            <button className="bg-slate-200 h-6 w-6 p-1 ml-4 text-sky-600 rounded-lg hover:bg-blue-500 hover:text-white">
                              <RiDeleteBin5Line />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              
            </div>


            {/* -------footer-------------------- */}
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

export default Short;
