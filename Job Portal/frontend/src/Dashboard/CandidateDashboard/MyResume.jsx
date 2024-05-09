import React from 'react'
import CandidateSidebar from './CandidateSidebar'
import Nav2 from '../../NavBar/Nav2'

function MyResume() {
  return (
    <>

      <div className='relative '>
        <div className='absolute z-50'>
          <Nav2 />

        </div>

        {/* ..........code......... */}
        <div className='flex  bg-slate-200 mt-20'>
          <div className=' w-[16%] fixed '><CandidateSidebar /></div>


          <div className='  md:p-9 p-9  md:ml-[16%]  mx-auto  w-full     ' >
            <p className=' text-2xl font-medium md:text-3xl md:font-semibold' >My Resume!</p>
            <p className=' mt-2' >Ready to jump back in?</p>


            <div className="md: flex flex-col p-5 bg-white h-[2000px] md:h-[1500px] w-auto mt-8 rounded-lg">
              <p className="font-semibold  text-lg md:mt-3 p-3  ">My Profile</p>
              {/* .............frome start.............. */}
              <div className='p-4'>
                <p className='font-semibold'>Select Your CV</p>
                <select className='bg-slate-200/60 h-[50px] w-full md:w-[600px]
              rounded-md p-3 mt-4 focus:outline-blue-700 focus:bg-white '
                  name="salary"
                >
                  <option value="">My CV</option>
                  <option value="40k-70k">My CV </option>

                </select>
              </div>

              <div className='p-3'>
                <p className='font-semibold '> Description</p>
                <textarea
                  type='text'
                  placeholder='write your self some things'
                  className='p-3 bg-slate-200/60 focus:bg-white focus:outline-blue-400  rounded-md mt-2 md:h-[300px] h-[350px]  w-full resize-none'
                />
              </div>

              {/* .................Education............. */}
              <div className=' border border-black p-3 h-auto w-full'>

                <div className='border border-black h-[50px]  '>
                  <p className='font-semibold '> Education</p>
                  <div className='flex ml-[1000px] text-red-500'>
                    <span class="material-symbols-outlined bg-red-200 rounded-full">
                      add
                    </span>
                    <button className='ml-2  '>Add Aducation</button>
                  </div>
                </div>
                {/* .........loop_ start....... */}

                <div className='border border-black h-auto '>

                  <div className='border flex'>
                    <p className='font-semibold whitespace-nowrap'> Bachlors in Fine Arts</p>
                    <p className='md:h-[33px] md:w-24 text-center  md:rounded-[15px] rounded-md  bg-red-200 text-red-500 font-semibold ml-8 whitespace-nowrap '>2012-2014</p>
                    <button className='hover:bg-blue-500 hover:text-white bg-slate-200 rounded-[10px] h-8 w-8 py-1 ml-10'>
                      <span class="material-symbols-outlined">
                        stylus
                      </span>
                    </button>
                    <button className='hover:bg-blue-500 hover:text-white bg-slate-200 rounded-[10px] h-8 w-8 py-1 ml-4'>
                      <span class="material-symbols-outlined">
                        delete
                      </span>
                    </button>
                  
                  </div>
                  <div><p className='font-semibold text-red-500 '> Modern College</p></div>
                  



                  <div></div>


                </div>

              </div>

            </div>


          </div>

        </div>
      </div>
    </>

  )
}

export default MyResume
