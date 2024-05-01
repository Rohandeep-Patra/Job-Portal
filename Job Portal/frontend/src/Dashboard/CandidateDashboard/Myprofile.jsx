import React from 'react'
import CandidateSidebar from './CandidateSidebar'
import { FaAnglesUp } from "react-icons/fa6";

function Myprofile() {
  return (

    <>
      <div className='flex  bg-slate-200'>
        <div className=' w-[16%] fixed'><CandidateSidebar /></div>


        <div className='  md:p-9 p-7 md:ml-[15%]  mx-auto  w-full md:mt-0 mt-9   ' >
          <p className=' text-2xl font-medium md:text-3xl md:font-semibold' >My Profile!</p>
          <p className=' mt-2' >Ready to jump back in?</p>

          <div className="md: flex flex-col p-5 bg-white h-[2330px] md:h-[1500px] w-auto mt-8 rounded-lg">
            <p className="font-semibold  text-[20px] md:mt-3 p-3 md:ml-5   ">My Profile</p>

            <div className="md:flex  mt-6 shadow-b-black ">
              <input class="absolute  opacity-0 " id="file" type="file" />

              <label
                for="file"
                class="md:w-52 w-52 md:h-[125px] h-28 hover:border-2 hover:border-slate-500 border-2 border-slate-300 md:ml-9 border-dashed relative flex flex-col justify-center items-center font-medium ml-3 font-Georgia rounded-lg">
                {""}
                <FaAnglesUp />
                <p>Browse Logo</p>
              </label>
              <div className=" flex  md:p-12 p-2 text-sm font-Georgia ml-1 mt-2	">
                Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png
              </div>
            </div>
            {/* <div className='h-[2px] w-[1200px] bg-slate-100 md:mt-12   '></div> */}


            {/* from start */}
            <div>
              <from className=" md:flex h-screen    w-full md:mt-6 " >
                <div className=' py-5 md:ml-6  full md:w-[550px] '>

                  <div className='p-4 '>
                    <p className='font-semibold'>Full Name</p>
                    <input
                      type='text'
                      placeholder='Name'
                      className='bg-slate-200 h-[50px] w-full rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white'
                    />

                  </div>
                  <div className='p-4 '>
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
                  <div className='p-4'>
                    <p className='font-semibold'>Current Salary($)</p>
                    <select className='bg-slate-200 h-[50px] w-full rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white '
                      name="salary"
                    >
                      <option value="">select salary</option>
                      <option value="40k-70k">40k-70k</option>
                      <option value="50k-80k">50k-80k</option>
                      <option value="60k-90k">60k-90k</option>
                      <option value="900k-100k">90k-100k</option>
                      <option value="105k-105k">105k-105k</option>
                    </select>
                  </div>


                </div>

                {/* 2nd col */}

                <div className=' py-5  md:ml-9	w- full md:w-[550px]'>

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

                  <div className='p-4'>
                    <p className='font-semibold'>Current Salary($)</p>
                    <select className='bg-slate-200 h-[50px] w-full rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white '
                      name="salary"
                    >
                      <option value="">select salary</option>
                      <option value="40k-70k">40k-70k</option>
                      <option value="50k-80k">50k-80k</option>
                      <option value="60k-90k">60k-90k</option>
                      <option value="900k-100k">90k-100k</option>
                      <option value="105k-105k">105k-105k</option>
                    </select>
                  </div>

                  {/* <div className='p-4'>
                  <p className='font-semibold'>Expected Salary($)</p>
                  <select className='bg-slate-200 h-[50px] w-full rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white '
                    name="salary"
                  >
                    <option value="">select salary</option>
                    <option value="40k-70k">40k-70k</option>
                    <option value="50k-80k">50k-80k</option>
                    <option value="60k-90k">60k-90k</option>
                    <option value="900k-100k">90k-100k</option>
                    <option value="105k-105k">105k-105k</option>
                  </select>
                </div> */}

                  <div className='p-4'>
                    <p className='font-semibold'>Age </p>
                    <select className='bg-slate-200 h-[50px] w-full rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white '
                      name="salary"
                    >
                      <option value="">select Age </option>
                      <option value="">23-27 Years </option>
                      <option value="">24-28 Years </option>
                      <option value="">25-29 Years </option>
                      <option value="">26-30 Years </option>
                    </select>
                  </div>

                  <div className='p-4'>
                    <p className='font-semibold'>Languages</p>
                    <input
                      type='text'
                      placeholder='English,Hindi'
                      className='bg-slate-200 h-[50px] w-full rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white'
                    />
                  </div>

                  <div className='p-4'>
                    <p className='font-semibold'>Allow In Search & Listing</p>
                    <select className='bg-slate-200 h-[50px] w-full rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white '
                      name="salary"
                    >
                      <option value="">Yes</option>
                      <option value="Yes">Yes </option>
                      <option value="No">No </option>

                    </select>
                  </div>


                </div>

              </from>

              {/* ........ Description.......... */}

              <div className='md:p-8 p-3 md:mt-5'>
                <p className='font-semibold'> Description</p>
                <textarea
                  type='text'
                  placeholder='write your self some things'
                  className='p-3 bg-slate-200 focus:bg-white focus:outline-blue-400  rounded-md mt-2 md:h-[300px] h-[350px] md:w-[1099x] w-full'
                />
              </div>
              <button className='bg-blue-700 h-[50px] w-[150px]  ml-3 md:ml-8 rounded-[10px]	 text-white text-center text-mono'>Save</button>
            </div>

          </div>
          {/* .............Social Network.............. */}

          <div className='md: flex flex-col p-5 bg-white h-[1000px] md:h-[500px] w-auto mt-8 rounded-lg'>
          <p className="font-semibold  text-[20px] md:mt-2 p-3 md:ml-5   ">Social Network</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Myprofile
