import React from 'react'

import CandidateSidebar from './CandidateSidebar'
import Nav2 from '../../NavBar/Nav2'
import { NavLink } from 'react-router-dom'
function JobAlerts() {

  let job = [

    {
      image: "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-5.png",
      name: "Senior Full Stack Engineer",
      location: "London, UK",
      Created	: "Human Resources, Junior",
      status: "Active",
    },
    {
      image: "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-6.png",
      name: "Software Engineer (Android)",
      location: "London, UK",
      Created	: "Human Resources, Junior",
      status: "Active",
    },
    {
      image: "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-1.png",
      name: "Software Engineer (Android)",
      location: "London, UK",
      Created	: "Human Resources, Junior",
      status: "Active",
    },
    {
      image: "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-2.png",
      name: "Recruiting Coordinator",
      location: "London, UK",
      Created	: "Human Resources, Junior",
      status: "Active",
    },

  ]


  return (
    <>
      {/* ....NavBar....... */}
      <div className='relative'>
        <div className='absolute z-50'>
         <Nav2/>
        </div>

        {/* sidebar */}
        <div className=' mt-20 flex z-49 absolute w-full   bg-slate-100'>

          <div className='w-[16%] fixed '><CandidateSidebar /></div>
          {/* code */}


          <div className='  md:p-9 p-9  md:ml-[16%]  mx-auto  w-full     ' >
            <p className=' text-2xl font-medium md:text-3xl md:font-semibold' >Job Alerts!</p>
            <p className=' mt-2' >Ready to jump back in?</p>


            {/* from */}

            <div className='md:flex flex-col p-5 bg-white md:h-[780px] h-[890px] md:w-[1200px] mt-8 rounded-lg '>

              <div className='md:flex'>
                <p className="font-semibold  text-[17px]  ">My Applied Jobs</p>
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
              <div className=' w-full  h-[55px] mt-8 rounded-md bg-slate-100 flex flex-row md:gap-[250px] gap-[100px]  ' >

                <div className='p-3 md:ml-4 ml-1 font-semibold text-blue-600 whitespace-nowrap'>
                  Job Title
                </div>
                <div className=' hidden lg:block p-3 ml-[35px] font-semibold text-blue-600'>
                Criteria
                </div>
                <div className='p-3 md:ml-4 ml-[110px] font-semibold text-blue-600'>
                  Status
                </div>
                <div className='hidden lg:block  p-3  font-semibold text-blue-600'>
                  Action
                </div>
              </div>
              {/* .........Job Title...... */}

              {job.map((jobs) =>
                <div className=' w-full h-[150px] mt-4 flex shadow-sm'>

                  <div className=' h-[100px] md:w-[310px] w-[290px]  '>



                    <div className=' mt-2 ml-4 w-[40%]  md:w-[80px] flex '>
                      <img className="   h-16 w-16  " src={jobs.image} alt='' />


                      <div className=' ml-3  '>

                    
                        <NavLink className="className=text-[17px] md:text-[18px] font-semibold whitespace-nowrap hover:text-blue-600"> {jobs.name}</NavLink>
                        {/* ..... */}

                        <div className='md:flex  md:mt-4 mt-2'>

                          <div className='flex mr-3 '>
                            <span class="material-symbols-outlined">
                              work
                            </span>
                            <p className='ml-2'>Segment</p>
                          </div>

                          <div className='flex md:mt-0 mt-2 '>
                            <span class="material-symbols-outlined">
                              location_on
                            </span>
                            <p className='ml-2'>London</p>
                          </div>

                        </div>


                      </div>

                    </div>

                  </div>

                  {/* .........	Criteria.... */}
                  <div className='hidden lg:block h-[50px] w-[100px] ml-[200px] mt-2 font-serif whitespace-nowrap'>
                    <p className='font-serif'>{jobs.Created}</p>
                  </div>

                  <div className=' h-[50px] w-[100px]  md:mt-2 mt-10  font-serif md:ml-[250px] ml-[88px]'>
                    <p className=' font-semibold font-serif text-green-500 '>{jobs.status}</p>
                  </div>

                  <div className='hidden lg:block h-[50px] w-[200px] ml-[240px] mt-2 '>
                    <button className='hover:bg-blue-500 hover:text-white bg-slate-200 rounded-[10px] h-10 w-10 py-2'>
                      <span class="material-symbols-outlined">
                        visibility
                      </span>
                    </button>
                    <button className='ml-[25px] hover:bg-blue-500 hover:text-white bg-slate-200 rounded-[10px] h-10 w-10 py-2'>
                      <span class="material-symbols-outlined">
                        delete
                      </span>
                    </button>


                  </div>


                </div>
              )}



            </div>


            <div className='text-center mt-5'>© 2024 Superio by <button className='text-blue-600			'>ib-themes.</button> All Right Reserved.</div>
          </div>
        </div>


      </div>

    </>
  )
}

export default JobAlerts
