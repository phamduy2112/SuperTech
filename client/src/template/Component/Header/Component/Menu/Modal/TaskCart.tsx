import React from 'react'
import { IoMdClose } from 'react-icons/io'

function TaskCart() {
  return (
    <div className='w-[100%] h-[100vh] fixed bg-[rgb(0,0,0,0.5)] z-30 top-0 left-0'>
 <div className='w-[320px] h-[100vh] bg-[#E5E5E5] absolute top-0 right-0'>
    <div className='w-[100%] py-[2rem] px-[1rem] flex justify-between items-center'>
         <div className='text-[1.8rem] font-semibold'>
         GIỎ HÀNG
        </div> 
        <div className='text-[2rem] cursor-pointer'>
            <IoMdClose />
        </div>
    </div>
    <div>

    </div>
    <div className='w-[100%] bg-[#7500CF] py-[1rem] px-[1rem] cursor-pointer'>
        <div className='text-[1.5rem] text-white text-center'>Xem Giỏ Hàng</div>
    </div>
      
        </div>
    </div>
   
  )
}

export default TaskCart