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

          <div className="md: flex flex-col p-5 bg-white h-[1500px] w-auto mt-8 rounded-lg">
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


            {/* from start */}
            <from className="md:columns-2 h-screen  w-full mt-[70px]" >
              <div className='border	 h-screen'>

                <div className='p-4'>
                  <p className='font-semibold'>Full Name</p>
                  <input
                    type='text'
                    placeholder='Name'
                    className='bg-slate-200 h-[50px] w-full rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white'
                  />

                </div>
                <div className='p-4'>
                  <p className='font-semibold'>Phone Number</p>
                  <input
                    type='text'
                    placeholder='0 123 2523 2693'
                    className='bg-slate-200 h-[50px] w-full rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white'
                  />

                </div>
                <div className='p-4'>
                  <p className='font-semibold'>Website</p>
                  <input
                    type='text'
                    placeholder='www.boss.com'
                    className='bg-slate-200 h-[50px] w-full rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white'
                  />

                </div>
                <div className='p-4'>
                  <p className='font-semibold'>Experience</p>
                  <input
                    type='text'
                    placeholder='5-10 Years'
                    className='bg-slate-200 h-[50px] w-full rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white'
                  />

                </div>
                <div className='p-4'>
                  <p className='font-semibold'>Education Levels</p>
                  <input
                    type='text'
                    placeholder='certificate'
                    className='bg-slate-200 h-[50px] w-full rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white'
                  />

                </div>
             
              </div>

              <div className='border	  h-screen'>
                
              <div className='p-4'>
                  <p className='font-semibold'>Job Title</p>
                  <input
                    type='text'
                    placeholder='UI designer'
                    className='bg-slate-200 h-[50px] w-full rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white'
                  />
              </div>
                
              <div className='p-4'>
                  <p className='font-semibold'>Email address</p>
                  <input
                    type='text'
                    placeholder='boss@gmail.com'
                    className='bg-slate-200 h-[50px] w-full rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white'
                  />
              </div>

              </div>

            </from>
            b bj 
          </div>
        </div>

      </div>
    </>
  )
}

export default Myprofile
