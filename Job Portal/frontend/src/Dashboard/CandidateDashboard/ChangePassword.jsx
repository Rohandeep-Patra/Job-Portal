import React from 'react'
import CandidateSidebar from './CandidateSidebar'
import Nav2 from '../../NavBar/Nav2'

function ChangePassword() {
  return (
    <>
    {/* NavBar */}
    <div className='relative'>

      <div className='absolute z-50'><Nav2/></div>
      {/* code */}
      <div className='flex  bg-slate-200 mt-20'>
        <div className=' w-[16%] fixed '><CandidateSidebar /></div>

        <div className='  md:p-9 p-9  md:ml-[16%]  mx-auto  w-full   ' >
            <p className=' text-2xl font-medium md:text-3xl md:font-semibold' >Change Password!</p>
            <p className=' mt-2' >Ready to jump back in?</p>


            <div className='md:h-[600px] md:w-[1200px] bg-slate-100	 h-[600px] w-full mt-10 rounded-lg'>

              <p className='text-[20px] font-mono  font-semibold  p-7 ' >Change Password</p>

              <div className='p-7'>
             
                 <p className='font-semibold '>Old Password</p>
                <input placeholder='**********' className=' bg-slate-200 rounded-[7px] h-[50px]  w-full md:w-[600px] mt-5 p-3 focus:outline-blue-500' type='text' /> 

                 <p className='font-semibold mt-8 '>New Password</p>
                <input  placeholder='***********' className='bg-slate-200 rounded-[7px] h-[50px]  w-full md:w-[600px] mt-5 p-3 focus:outline-blue-500' type='text' /> 

                 <p className='font-semibold mt-8'>Confirm Password</p>
                <input  placeholder='***********' className=' bg-slate-200 rounded-[7px] h-[50px]  w-full md:w-[600px] mt-5 p-3 focus:outline-blue-500' type='text' /> 

              </div> 
              <button className='bg-blue-700 h-[50px] w-[150px] mx-7 rounded-[10px]	 mt-4 text-white text-center text-mono'>Update</button>
            </div>
            <div className='text-center mt-8'>© 2024 Superio by <button className='text-blue-600			'>ib-themes.</button> All Right Reserved.</div>

          </div>


        </div>
        </div>

     
    </>
  )
}

export default ChangePassword
