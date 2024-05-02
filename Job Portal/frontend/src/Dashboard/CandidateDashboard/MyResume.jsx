import React from 'react'
import CandidateSidebar from './CandidateSidebar'

function MyResume() {
  return (
    <>
    











    {/* ..........code......... */}
      <div className='flex  bg-slate-200'>
        <div className=' w-[16%] fixed'><CandidateSidebar /></div>


        <div className='  md:p-9 p-9  md:ml-[16%]  mx-auto  w-full md:mt-0 mt-9   ' >
          <p className=' text-2xl font-medium md:text-3xl md:font-semibold' >My Resume!</p>
          <p className=' mt-2' >Ready to jump back in?</p>


          <div className="md: flex flex-col p-5 bg-white h-[2000px] md:h-[1500px] w-auto mt-8 rounded-lg">
            <p className="font-semibold  text-lg md:mt-3 p-3  ">My Profile</p>
            {/* .............frome start.............. */}
            <div className='p-4'>
              <p className='font-semibold'>Select Your CV</p>
              <select className='bg-slate-200 h-[50px] w-full md:w-[600px]
              rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white '
                name="salary"
              >
                <option value="">My CV</option>
                <option value="40k-70k">My CV </option>

              </select>
            </div>

            <div className='p-3'>
              <p className=''> Description</p>
             <textarea
             type='text'
             placeholder='write your self some things'
             className='p-3 bg-slate-200 focus:bg-white focus:outline-blue-400  rounded-md mt-2 md:h-[300px] h-[350px]  w-full'
             />
            </div>


          </div>


        </div>

      </div>
    </>

  )
}

export default MyResume
