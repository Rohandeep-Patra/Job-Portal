import React from 'react'
import CandidateSidebar from './CandidateSidebar'
import Nav2 from '../../NavBar/Nav2'

// loop


function CandidateShort() {
  return (
    <>
      {/* ....NavBar....... */}
      <div className='relative'>
        <div className='absolute z-50'>
          <Nav2 />
        </div>

        {/* sidebar */}
        <div className=' mt-20 flex z-49 absolute w-full   bg-slate-100'>

          <div className='w-[16%] fixed '><CandidateSidebar /></div>
          {/* code */}


          <div className='  md:p-9 p-9  md:ml-[16%]  mx-auto  w-full     ' >
            <p className=' text-2xl font-medium md:text-3xl md:font-semibold' >Shortlisted jobs!</p>
            <p className=' mt-2' >Ready to jump back in?</p>


            {/* from */}

            <div className='md:flex flex-col p-5 bg-white md:h-[770px] h-[1000px] w-auto mt-8 rounded-lg'>

              <div className='md:flex'>
                <p className="font-semibold  text-lg">My Favorite Jobs</p>
                <div className="md:ml-[670px]">
                  <select
                    name="teamSize"
                    className="p-2 md:ml-[200px] bg-slate-200 focus:bg-white focus:outline-blue-500 rounded-md md:mt-0 mt-3 md:h-10 h-12  w-[160px]"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Last 6 Months">Last 6 Months</option>
                    <option value="Last 12 Months">Last 12 Months</option>
                    <option value="Last 16 Months">Last 16 Months</option>
                    <option value="Last 24 Months">Last 24 Months</option>
                    <option value="Last 5 Years">Last 5 Years</option>
                  </select>
                </div>
              </div>

              <div className=" mt-5 md:h-18 h-[65px]  w-full bg-slate-100 flex flex-row rounded-md">
                <div className="p-3 ml-5 font-semibold text-blue-700 text-[16px] font-serif mt-2	">
                Job Title
                </div>
                <div className="p-3 md:ml-[400px] ml-40 font-semibold text-blue-600 text-[16px] font-serif  mt-2	">
                  Date Applied
                </div>
                <div className="p-3 ml-28 font-semibold text-blue-600 text-[16px] md:block hidden font-serif	 mt-2">
                  Status
                </div>
                <div className="p-3 ml-28 font-semibold text-blue-600 text-[16px] md:block hidden font-serif	 mt-2">
                  Action
                </div>
                <div className="p-3 ml-28 font-semibold text-blue-600 text-[16px] md:block hidden font-serif	 mt-2">
                  Action
                </div>
              </div>






            </div>



          </div>
        </div>


      </div>


    </>
  )
}

export default CandidateShort