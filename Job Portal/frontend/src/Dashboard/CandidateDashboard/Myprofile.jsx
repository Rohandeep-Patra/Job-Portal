import React from 'react'
import CandidateSidebar from './CandidateSidebar'
import { FaAnglesUp } from "react-icons/fa6";

function Myprofile() {
  return (

    <>
      <div className='flex  bg-slate-200'>
        <div className=' w-[16%] fixed'><CandidateSidebar /></div>


        <div className='  md:p-9 p-9  md:ml-[16%]  mx-auto  w-full md:mt-0 mt-9   ' >
          <p className=' text-2xl font-medium md:text-3xl md:font-semibold' >My Profile!</p>
          <p className=' mt-2' >Ready to jump back in?</p>

          <div className="md: flex flex-col p-5 bg-white h-[1000px] w-auto mt-8 rounded-lg">
            <p className="font-semibold  text-lg md:mt-3 p-3  ">My Profile</p>

            <div className="md:flex  mt-6 shadow-b-black ">
              <input class="absolute  opacity-0 " id="file" type="file" />

              <label
                for="file"
                class="md:w-52 w-52 md:h-[125px] h-28 hover:border-2 hover:border-slate-500 border-2 border-slate-300 border-dashed relative flex flex-col justify-center items-center font-medium font-Georgia rounded-lg">
                {""}
                <FaAnglesUp />
                <p>Browse Logo</p>
              </label>
              <div className=" flex  md:p-12 p-2 text-sm font-Georgia 	">
              Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png
              </div>
            </div>
            {/* <div className='h-[2px] w-[1200px] bg-slate-100 md:mt-12   '></div> */}


          </div>
        </div>

      </div>
    </>
  )
}

export default Myprofile
