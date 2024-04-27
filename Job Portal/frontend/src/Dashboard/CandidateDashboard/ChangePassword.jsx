import React from 'react'
import CandidateSidebar from './CandidateSidebar'

function ChangePassword() {
  return (
    <>
      <div className='flex  bg-slate-200'>
        <div className=' w-[16%] fixed'><CandidateSidebar /></div>

        <div className='  flex md:p-9 md:ml-[16%] mx-auto ' >

          {/* <div className='bg-slate-200 h-auto w-full md:w-[1500px]  '> */}
           <div className=' '> 
           <p className=' text-[30px]  font-semibold  mt-2 ' >Change Password!</p>
            <p className=' mt-2' >Ready to jump back in?</p>
           </div>
           <div className='bg-white  mt-8 '>

           </div>

            {/* <div className='md:h-[700px]   h-auto w-full  md:w-[1200px] md:ml-1 md:mt-[65px] bg-neutral-100 shadow-2xl rounded-md	border border-black	'>
              <p className='md:mt-6 text-[20px] p-7  font-semibold '>Change Password</p>
            </div> */}
            {/* <input type="text" className='bg-black'/> */}
          {/* </div> */}

        </div>

      </div>
    </>
  )
}

export default ChangePassword
