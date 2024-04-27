import React from "react";
import Sidebar from "./Sidebar";
import { BsArrowUp } from "react-icons/bs";

function Company() {
  return (
    <>
      <div className="flex bg-slate-100">
        <div className="w-[16%] fixed">
          <Sidebar />
        </div>
        <div className="md:p-9 p-5 md:ml-[17%]  ml-4 w-full md:mt-0 mt-9 ">
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
              <div className=" py-5 border border-black ">
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
              </div>

              <div className=" py-5 border border-black ">
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
              </div>

              
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;
