import React from "react";
import Sidebar from "./Sidebar";
import Nav2 from "../../NavBar/Nav2";
import { BsBriefcaseFill } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";  
import { BsCheck2Circle } from "react-icons/bs"; 

function Postnewjob() {
  return (
    <>
      <div className="relative">
        <div className="absolute z-50">
          <Nav2 />
        </div>

        <div className="  mt-20 flex z-49 absolute w-full  bg-slate-100">
          <div className="w-[16%] fixed">
            <Sidebar />
          </div>
          <div className="md:p-12 p-6 md:ml-[16%]  mx-auto w-full md:mt-0 mt-9">
            <p className=" text-3xl font-medium md:text-3xl md:font-semibold ">
              Post a New Job!
            </p>
            <p className="mt-3">Ready to jump back in?</p>

            <div className="md:flex flex-col p-9 bg-white md:h-[1350px] h-[1870px] w-auto mt-8 rounded-lg ">
              <p className="font-semibold  text-lg ">Post Job</p>
              <div className="mt-3 md:flex-row flex flex-col h-28 border border-black">

                <div className="inline-flex  md:w-[241px] h-[150px] w-full border border-black ">
                  <div>
                    <div className="p-5 mt-5 ml-4 text-4xl h-20 w-20 bg-sky-100 rounded-full text-sky-600">
                      <BsBriefcaseFill />
                    </div>
                  </div>

                  <div className="p-4 mt-7 text-xl ">
                    Job Detail
                  </div>
                </div>

                <div className="inline-flex  md:w-[400px] h-[150px] w-full md:ml-14 border border-black ">
                  <div>
                    <div className="p-5 mt-5 ml-4 text-4xl h-20 w-20 bg-sky-100 rounded-full text-sky-600">
                      <GiMoneyStack />
                    </div>
                  </div>

                  <div className="p-4 mt-7 text-xl ">
                   Package & Payments
                  </div>
                </div>

                <div className="inline-flex  md:w-[241px] h-[150px] w-full border border-black ">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Postnewjob;
