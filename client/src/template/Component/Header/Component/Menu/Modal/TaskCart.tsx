import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { FiMinus } from 'react-icons/fi'
import { GoPlus } from 'react-icons/go'
import { IoMdClose } from 'react-icons/io'

function TaskCart() {
  return (
    <div className='w-[100%] h-[100vh] fixed bg-[rgb(0,0,0,0.5)] z-30 top-0 left-0'>
 <div className='w-[350px] h-[100vh] bg-[#E5E5E5] absolute top-0 right-0'>
    <div className='w-[100%] py-[2rem] px-[1rem] flex justify-between items-center'>
         <div className='text-[1.8rem] font-semibold'>
         GIỎ HÀNG
        </div> 
        <div className='text-[2rem] cursor-pointer'>
            <IoMdClose />
        </div>
    </div>
    <div className='bg-[white] px-2 py-[1rem]'>
    <div className='flex py-[1rem] border border-b-[gray]'>
      <div className='w-[90px]'>
      <img 
      className='w-[100%]'
      src="https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg" alt=""/>

    </div>
    <div className=''>
      <h3 className='text-[1.5rem] font-semibold'>iPhone 15 Pro Max 512GB – Like New</h3>
      <p className='text-[#7500CF] font-semibold text-[1.6rem] py-[.5rem]'>30.000.000 đ <span style={{textDecoration:"line-through"}} className='text-[1.5rem] text-[gray]'>28.000.000</span></p>
      <div className='text-[1.6rem] border border-[#7500CF] flex items-center w-[33%]  justify-between'>
        <div className='border  text-[1.7rem] border-r-[#7500CF] py-1 cursor-pointer'>
          <FiMinus />
          </div>
        <div>1</div>
        <div className='border text-[1.7rem] border-l-[#7500CF] py-1 cursor-pointer'><GoPlus /></div>
      </div>
  
    </div>
    <div className='text-[2rem] cursor-pointer text-[#7500CF]'>
        <FaTrash />
      </div>
    </div>  
    <div className='flex justify-end pt-6'>
      <h4 className='text-[1.5rem] font-semibold'>Tổng đơn: <span>0 đ</span></h4>
    </div>
    </div>
  
    <div className='w-[100%] bg-[#7500CF] py-[1rem] px-[1rem] cursor-pointer'>
        <div className='text-[1.5rem] text-white text-center'>Xem Giỏ Hàng</div>
    </div>
      
        </div>
    </div>
   
  )
}

export default TaskCart