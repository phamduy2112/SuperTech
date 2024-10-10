import React, {  useState } from 'react'
import { FaExpand, FaRegBell } from 'react-icons/fa'
import { FaCloudMoon } from "react-icons/fa6";

import { HiMenuAlt1 } from 'react-icons/hi'
import { IoIosSearch, IoMdSettings } from 'react-icons/io'


function AdminHeader() {
   
  const [openSideBar, setOpenSideBar] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function toggleSideBar(Bar:any){
      setOpenSideBar(openSideBar === Bar ? false : Bar);

  }



  
  return (
    <>
      <div className='text-[#000000] text-[20px] grid grid-cols-2 auto-rows-[75px]'>
          <div className='px-[30px]  text-[25px] flex items-center opacity-[25%] '>
            <div onClick={() => toggleSideBar(true)}>
            <HiMenuAlt1 />
          
            </div>
          </div>
          <div className='flex gap-[40px] justify-end px-[38px] items-center'>
            <div className='opacity-[25%]'>
            <IoIosSearch />

            </div>
            <div className='opacity-[25%]'>
            <FaCloudMoon />


            </div>
            <div className='relative flex justify-end items-start'>
              <span className='opacity-[25%]'>            <FaRegBell />
              </span>
            <div className='absolute text-[6px] flex items-center justify-center text-white  font-bold bg-red-600 w-[10px] h-[10px] rounded-lg'>

              <span>2</span>
            </div>

            </div>
            <div className='opacity-[25%]'>
            <FaExpand />

            </div>
            <div className=' flex items-center justify-center gap-5'>
              <div className='w-[55px] h-[55px] relative flex justify-center items-center'>
                <span className='w-[8px] h-[8px] absolute bg-green-400 rounded-full mt-12 ml-12'></span>

                <div className=' w-[45px] h-[45px] rounded-full overflow-hidden flex justify-center items-center '>
                <img  className='object-cover' src="https://i.pinimg.com/736x/0a/e7/6f/0ae76f3362e2c1341f56a403b9c2d31f.jpg" alt="" />

                </div>



              </div>
              <div className='grid grid-cols-1 gap-1 text-[10px] font-semibold'>
                <span>Admin</span>
                <span>Phạm Ngọc Duy</span>

              </div>
              
            </div>
            <div className='opacity-[25%]'>
            <IoMdSettings />
            </div>

          </div>
      </div>
    </>
  )
}

export default AdminHeader