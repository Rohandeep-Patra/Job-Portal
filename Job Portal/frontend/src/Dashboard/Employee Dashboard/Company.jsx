import React from "react";
import Sidebar from "./Sidebar";
import { BsArrowUp } from "react-icons/bs";
import Nav2 from "../../NavBar/Nav2";



function Company() {

  

  return (
    <>

    <div className="relative">
   <div className="absolute z-50">
    <Nav2/>
    </div>


      <div className="  mt-20 flex z-49 absolute w-full bg-slate-100">
        <div className="w-[16%] fixed">
          <Sidebar />
        </div>
        <div className="md:p-10 p-6 md:ml-[16%]  mx-auto w-full md:mt-0 mt-9">
          <p className=" text-2xl font-medium md:text-3xl md:font-semibold ">
            Company Profile!
          </p>
          <p className="mt-3">Ready to jump back in?</p>

          <div className="md: flex flex-col p-5 bg-white h-[1000px] w-auto mt-8 rounded-lg">
            <p className="font-semibold  text-lg md:mt-3 ">My Profile</p>

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

            <form className=" md:columns-2  h-screen border border-black w-full  mt-5">

              {/* -------- ist column --------------------- */}
              <div className=" py-5 border border-red-400 ">
                <div className="flex flex-col">
                  <label className="  font-semibold">
                    Company name (optional)
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Invisionn"
                    required=""
                    className="  p-3 bg-slate-200 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[410px] w-[350px]"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="  font-semibold">
                  Phone
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="0 123 456 78900"
                    required=""
                    className="  p-3 bg-slate-200 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[410px] w-[350px]"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="  font-semibold">
                  Est. Since
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="06.04.2020"
                    required=""
                    className="  p-3 bg-slate-200 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[410px] w-[350px]"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="  font-semibold">
                  Est. Since
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="06.04.2020"
                    required=""
                    className="  p-3 bg-slate-200 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[410px] w-[350px]"
                  />
                </div>
              </div>
              
              {/* ------------ 2nd column -------------------- */}
              <div className=" py-5 border border-black ">
                <div className="flex flex-col">
                  <label className="  font-semibold">
                  Email address
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="abcd@gmail.com"
                    required=""
                    className="  p-3 bg-slate-200 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[410px] w-[350px]"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="  font-semibold">
                  Website
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="www.invision.com"
                    required=""
                    className="  p-3 bg-slate-200 focus:bg-white focus:outline-blue-500  rounded-md mt-2 md:h-14 h-12 md:w-[410px] w-[350px]"
                  />
                </div>
                <div className="flex flex-col mt-5">
                <label className="font-semibold">Team Size</label>
                  <select
                    name="teamSize"
                    className="p-3 bg-slate-200 focus:bg-white focus:outline-blue-500 rounded-md mt-2 md:h-14 h-12 md:w-[410px] w-[350px]"
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
                <label className="font-semibold">Team Size</label>
                  <select
                    name="teamSize"
                    className="p-3 bg-slate-200 focus:bg-white focus:outline-blue-500 rounded-md mt-2 md:h-14 h-12 md:w-[410px] w-[350px]"
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

              </div>

              
            </form>
          </div>
        </div>
      </div>

      </div>
    </>
  );
}

export default Company;
