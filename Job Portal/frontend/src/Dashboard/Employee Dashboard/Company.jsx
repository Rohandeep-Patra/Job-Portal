import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { BsArrowUp } from "react-icons/bs";
import Nav2 from "../../NavBar/Nav2";

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

function Company() {
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

        <div className="  mt-20 flex z-49 absolute w-full bg-slate-100">
          <div className="w-[16%] fixed">
            <Sidebar />
          </div>
          <div className="md:p-12 p-6 md:ml-[16%]  mx-auto w-full md:mt-0 mt-9">
            <p className=" text-2xl font-medium md:text-3xl md:font-semibold ">
              Company Profile!
            </p>
            <p className="mt-3">Ready to jump back in?</p>

            {/* --------first form-------- */}
            <div className="md:flex flex-col p-9 bg-white md:h-[1350px] h-[1870px] w-auto mt-8 rounded-lg ">
              <p className="font-semibold  text-lg ">My Profile</p>

              {/* ------------ ist row------------------ */}
              <div className="md:flex  mt-6 ">
                <input class="absolute  opacity-0 " id="file" type="file" />
                <label
                  for="file"
                  class="md:w-52 w-52 md:h-[125px] h-28 hover:border-2 hover:border-slate-500 border-2 border-slate-300 border-dashed relative flex flex-col justify-center items-center font-medium font-Georgia rounded-lg"
                >
                  {" "}
                  <BsArrowUp /> <p>Browse Logo</p>
                </label>

                <div className=" flex  md:p-12 p-2 text-sm font-Georgia">
                  Max file size is 1MB, Minimum dimension: 330x300 And Suitable
                  files are .jpg & .png
                </div>
              </div>

              {/* -----------------  2nd row -------------------- */}
              <div className="md:flex  mt-12 ">
                <input class="absolute  opacity-0 " id="file" type="file" />
                <label
                  for="file"
                  class="md:w-52 w-52 md:h-[125px] h-28 hover:border-2 hover:border-slate-500 border-2 border-slate-300 border-dashed relative flex flex-col justify-center items-center font-medium font-Georgia rounded-lg"
                >
                  {" "}
                  <BsArrowUp /> <p>Browse Cover</p>
                </label>

                <div className=" flex  md:p-12 p-2 text-sm font-Georgia">
                  Max file size is 1MB, Minimum dimension: 330x300 And Suitable
                  files are .jpg & .png
                </div>
              </div>

              {/* ---------------- form start --------------------- */}

              <form className="md:flex  h-[850px]  w-full  mt-5 ">
                {/* -------- ist column --------------------- */}
                <div className=" py-5  ">
                  <div className="flex flex-col">
                    <label className="  font-semibold">
                      Company name (optional)
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Invisionn"
                      required=""
                      className="  p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="  font-semibold">Phone</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="0 123 456 7890"
                      required=""
                      className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="  font-semibold">Est. Since</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="06.04.2020"
                      required=""
                      className="  p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="font-semibold">
                      Multiple Select boxes
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
                    <label className="  font-semibold">Email address</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="abcd@gmail.com"
                      required=""
                      className="  p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="  font-semibold">Website</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="www.invision.com"
                      required=""
                      className="  p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="font-semibold">Team Size</label>
                    <select
                      name="teamSize"
                      className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500 rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                      required
                    >
                      <option value="">Select team size</option>
                      <option value="50-100">50-100</option>
                      <option value="100-150">100-150</option>
                      <option value="200-250">200-250</option>
                      <option value="300-350">300-350</option>
                      <option value="500-1000">500-1000</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="font-semibold">
                      Allow In Search & Listing
                    </label>
                    <select
                      name="teamSize"
                      className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500 rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                      required
                    >
                      <option value="">Select any one</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </form>

              <div className="flex flex-col mt-12">
                <label className="font-semibold">About Company</label>
                <textarea
                  type="text"
                  name="name"
                  placeholder="write some details about your company"
                  required=""
                  className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-[300px] h-[350px] md:w-[980px] w-full resize-none"
                />
              </div>

              <div className="justify-center flex mt-5 bg-blue-600 w-32  md:h-24 h-10 rounded-lg ">
                <NavLink className="flex p-2 text-[18px] text-white">
                  {" "}
                  Save{" "}
                </NavLink>
              </div>
            </div>

            {/* -----2nd form---------- */}
            <div className="md:flex flex-col p-7 bg-white md:h-[400px] h-[580px] w-auto mt-8 rounded-lg">
              <p className="font-semibold  text-lg ">Social Network</p>
              <form className="md:flex h-auto  w-full  mt-5 ">
                <div className="py-5 ">
                  <div className="flex flex-col ">
                    <label className="  font-semibold">Facebook</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="www.facebook.com"
                      required=""
                      className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                    />
                  </div>
                  <div className="flex flex-col  ">
                    <label className="  font-semibold mt-4">Linkedin</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="www.linkedin.com"
                      required=""
                      className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                    />
                  </div>
                </div>
                <div className="md:py-5 md:ml-14">
                  <div className="flex flex-col ">
                    <label className="  font-semibold">Twitter</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="www.twitter.com"
                      required=""
                      className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="  font-semibold mt-4">Google Plus</label>
                    <input
                      type="text"
                      name="name"
                      placeholder=""
                      required=""
                      className="p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                    />
                  </div>
                </div>
              </form>
              <div className="justify-center flex mt-5 bg-blue-600 w-32  md:h-12 h-10 rounded-lg ">
                <NavLink className="flex p-2 text-[18px] text-white">
                  {" "}
                  Save{" "}
                </NavLink>
              </div>
            </div>

            {/* ------3rd form--------- */}
            <div className="md:flex flex-col p-7 bg-white md:h-[600px] h-[610px] w-auto mt-8 rounded-lg">
              <p className="font-semibold  text-lg ">Contact Information</p>
              <form className="md:flex h-auto  w-full  mt-5 ">
                <div className="">
                  <div className="flex flex-col mt-5">
                    <label className="font-semibold">Country</label>
                    <select
                      name="teamSize"
                      className="p-3 bg-slate-200/60 focus:bg-white focus:outline-blue-500 rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
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
                  <div className="flex flex-col mt-5">
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
                </div>
              </form>

              <div className="flex flex-col mt-6">
                <label className="  font-semibold">Complete Address</label>
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
                  <label className="  font-semibold">Find On Map</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="point here"
                    required=""
                    className="  p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[460px] w-full"
                  />
                </div>
                <div className="flex flex-col mt-6 md:ml-6">
                  <label className="  font-semibold">Latitude</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="point here"
                    required=""
                    className="  p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[245px] w-full"
                  />
                </div>
                <div className="flex flex-col mt-6 md:ml-6">
                  <label className="  font-semibold">Longitude</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="point here"
                    required=""
                    className="  p-3 bg-slate-200/50 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[240px] w-full"
                  />
                </div>
              </div>

              <div className=" flex mt-5">
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

            {/* ------------footer--------- */}
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

export default Company;
