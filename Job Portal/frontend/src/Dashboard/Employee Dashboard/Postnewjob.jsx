import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Nav2 from "../../NavBar/Nav2";
import { BsBriefcaseFill } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";  
import { BsCheck2Circle } from "react-icons/bs"; 
import Select from "react-select";
import { NavLink } from "react-router-dom";

// -------- for multiple seleting options---------
const options = [
  { value: "Banking", label: "Banking" },
  { value: "Digital & Creative", label: "Digital & Creative" },
  { value: "Retail", label: "Retail" },
  { value: "Human Resourses", label: "Human Resourses" },
  { value: "Management", label: "Management" },
  { value: "Digital", label: "Digital" },
  { value: "Creative Art", label: "Creative Art" },
];

function Postnewjob() {
  const [selectedoptions, setSelectedoptions] = useState([]);
  const handelChange = (selectedoption) => {
    setSelectedoptions(selectedoption);
  };
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
              Post a New Job!
            </p>
            <p className="mt-3">Ready to jump back in?</p>

            <div className="md:flex flex-col p-9 bg-white md:h-[1900px] h-[2650px] w-auto mt-8 rounded-lg  ">
              <p className="font-semibold  text-lg ">Post Job</p>

              {/* ---ist ----- */}
              <div className="mt-3 md:flex-row flex flex-col  ">

                <div className="inline-flex  md:w-[241px]  w-full  ">
                  <div>
                    <div className="p-5 mt-5 ml-4 text-4xl h-20 w-20 bg-sky-100 rounded-full text-sky-600">
                      <BsBriefcaseFill />
                    </div>
                  </div>

                  <div className="p-4 mt-7 text-xl ">
                    Job Detail
                  </div>
                </div>

                <div className="inline-flex  md:w-[400px]  w-full md:ml-14  ">
                  <div>
                    <div className="p-5 mt-5 ml-4 text-4xl h-20 w-20 bg-sky-100 rounded-full text-sky-600">
                      <GiMoneyStack />
                    </div>
                  </div>

                  <div className="p-4 mt-7 text-xl ">
                   Package & Payments
                  </div>
                </div>

                <div className="inline-flex  md:w-[241px]  w-full  ">
                  <div>
                    <div className="p-5 mt-5 ml-4 text-4xl h-20 w-20 bg-sky-100 rounded-full text-sky-600">
                    <BsCheck2Circle />
                    </div>
                  </div>

                  <div className="p-4 mt-7 text-xl ">
                  Confirmation
                  </div>
                </div>


              </div>

              <div className=" mt-7">
                    <label className="  font-semibold">
                    Job Title
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Title"
                      required=""
                      className="  p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-3  h-12  w-full"
                    />
                  </div>

                <div className=" mt-7">
                <label className="font-semibold">Job Description</label>
                <textarea
                  type="text"
                  name="name"
                  placeholder="write some details about job"
                  required=""
                  className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-[300px] h-[350px] md:w-[980px] w-full"
                />
              </div>

              {/* ------- ist form------ */}
              <form className="md:flex    w-full  mt-5  ">
                {/* -------- ist column --------------------- */}
                <div className=" py-5  ">
                  <div className="flex flex-col">
                    <label className="  font-semibold">
                    Email Address
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="abcd@gmail.com"
                      required=""
                      className="  p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="font-semibold">
                    Specialisms
                    </label>

                    <Select
                      className=" p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-16 h-12 md:w-[460px] w-full"
                      options={options}
                      value={selectedoptions}
                      onChange={handelChange}
                      isMulti={true}
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="font-semibold">Offered Salary</label>
                    <select
                      name="teamSize"
                      className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500 rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                      required
                    >
                      <option value="">Select </option>
                      <option value="$1500">$1500</option>
                      <option value="$2000">$2000</option>
                      <option value="$2500">21500</option>
                      <option value="$3000">$3000</option>
                      <option value="$4500">$4500</option>
                      <option value="$5000">$5000</option>
                     
                    </select>
                  </div>
                  <div className="flex flex-col mt-6">
                    <label className="font-semibold">Experience</label>
                    <select
                      name="teamSize"
                      className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500 rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                      required
                    >
                      <option value="">Select </option>
                      <option value="Banking">Banking</option>
                      <option value="Digital & Creative">Digital & Creative</option>
                      <option value="Retail">Retail</option>
                      <option value="Human Resourses">Human Resourses</option>
                      <option value="Management">Management</option> 
                    </select>
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="font-semibold">
                    Industry
                    </label>

                    <Select
                      className=" p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-16 h-12 md:w-[460px] w-full"
                      options={options}
                      value={selectedoptions}
                      onChange={handelChange}
                      isMulti={true}
                    />
                  </div>
                </div>

                {/* ------------ 2nd column -------------------- */}
                <div className=" py-5 md:ml-14">
                  <div className="flex flex-col">
                    <label className="  font-semibold">Username</label>
                    <input
                      type="text"
                      name="name"
                      placeholder=""
                      required=""
                      className="  p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="font-semibold">Job Type</label>
                    <select
                      name="teamSize"
                      className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500 rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                      required
                    >
                      <option value="">Select </option>
                      <option value="Banking">Banking</option>
                      <option value="Digital & Creative">Digital & Creative</option>
                      <option value="Retail">Retail</option>
                      <option value="Human Resourses">Human Resourses</option>
                      <option value="Management">Management</option> 
                    </select>
                  </div>
                  <div className="flex flex-col mt-6">
                    <label className="font-semibold">Career Level</label>
                    <select
                      name="teamSize"
                      className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500 rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                      required
                    >
                      <option value="">Select </option>
                      <option value="Banking">Banking</option>
                      <option value="Digital & Creative">Digital & Creative</option>
                      <option value="Retail">Retail</option>
                      <option value="Human Resourses">Human Resourses</option>
                      <option value="Management">Management</option> 
                    </select>
                  </div>
                  <div className="flex flex-col mt-6">
                    <label className="font-semibold">Gender</label>
                    <select
                      name="teamSize"
                      className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500 rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-6">
                    <label className="font-semibold">Qualification</label>
                    <select
                      name="teamSize"
                      className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500 rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                      required
                    >
                      <option value="">Select </option>
                      <option value="Banking">Banking</option>
                      <option value="Digital & Creative">Digital & Creative</option>
                      <option value="Retail">Retail</option>
                      <option value="Human Resourses">Human Resourses</option>
                      <option value="Management">Management</option> 
                    </select>
                  </div>
                </div>
              </form>

              <div className="">
                    <label className="  font-semibold">
                    Application Deadline Date
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Date"
                      required=""
                      className="  p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-3    w-full"
                    />
                  </div>


                {/* -----last form------   */}
                <form className="md:flex h-auto  w-full  mt-5 ">
                <div className="">
                <div className="flex flex-col">
                    <label className="font-semibold">Country</label>
                    <select
                      name="teamSize"
                      className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500 rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                      required
                    >
                      <option value="">Select Your Country</option>
                      <option value="India">India</option>
                      <option value="Australia">Australia</option>
                      <option value="Japan">Japan</option>
                      <option value="China">China</option>
                      <option value="USA">USA</option>
                    </select>
                  </div>
               
                </div>
                <div className=" md:ml-14">
                <div className="flex flex-col md:mt-0 mt-3">
                    <label className="font-semibold">City</label>
                    <select
                      name="teamSize"
                      className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500 rounded-md mt-2 md:h-14 h-12 md:w-[475px] w-full"
                      required
                    >
                      <option value="">Select Your City</option>
                      <option value="Melborne">Melborne</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="China">China</option>
                      <option value="USA">USA</option>
                    </select>
                  </div>
               
                </div >
              

              </form>

              <div className="flex flex-col mt-6">
                    <label className="  font-semibold">
                    Complete Address
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Write Full Address"
                      required=""
                      className="  p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12  w-full"
                    />
                  </div>

                  <div className="flex">
                  <div className="flex flex-col mt-6">
                    <label className="  font-semibold">
                    Find On Map
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="point here"
                      required=""
                      className="  p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                    />
                  </div>
                  <div className="flex flex-col mt-6 md:ml-6">
                    <label className="  font-semibold">
                    Latitude
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="point here"
                      required=""
                      className="  p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[245px] w-full"
                    />
                  </div>
                  <div className="flex flex-col mt-6 md:ml-6">
                    <label className="  font-semibold">
                    Longitude
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="point here"
                      required=""
                      className="  p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[240px] w-full"
                    />
                  </div>
                  </div>

                  <div className=" flex mt-7">
              <div className="  bg-blue-600 w-36 hover:bg-sky-100 md:h-12 h-10 rounded-lg transition duration-800">
                <NavLink className="flex justify-center p-3 text-[14px] text-white hover:text-blue-700">
                  {" "}
                  Search Location{" "}
                </NavLink>
              </div>

              <div className=" ml-10  bg-blue-600 w-32  md:h-12 h-10 rounded-lg ">
                <NavLink className="flex justify-center text-[18px] mt-2 text-white">
                  {" "}
                  Save{" "}
                </NavLink>
              </div>
              </div>


            </div>

            {/* -------------------footer----------------------------- */}
            <div className='flex justify-center mt-4'>
            <p className='text-slate-500 text-sm'>© 2024 Superio by <button className='text-blue-600'>ib-themes.</button> All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Postnewjob;
