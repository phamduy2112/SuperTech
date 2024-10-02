import React from 'react'
import ProductItem from '../../../../components/product/ProductItem'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function ProductCategory() {
  return (
    <div className='w-[80%] m-auto pt-[2rem] pb-[1rem]'>
        <div className="flex justify-between items-center pb-5">
        <div className='flex gap-[1rem]'>
            <div className='bg-[#F1F1F1] px-[2rem] py-[1rem]'>
                <span className='text-[1.4rem] font-medium'>IPHONE</span>
            </div>
            <div className='bg-[#F1F1F1] px-[2rem] py-[1rem]'>
                <span className='text-[1.4rem] font-medium'>SAMSUNG</span>
            </div>
            <div className='bg-[#F1F1F1] px-[2rem] py-[1rem]'>
                <span className='text-[1.4rem] font-medium'>XIAOMI</span>
            </div>
            <div className='bg-[#F1F1F1] px-[2rem] py-[1rem]'>
                <span className='text-[1.4rem] font-medium'>OPPO</span>
            </div>
        </div>
        <div className='flex gap-[0.5rem]'>
            <div className='w-[3rem] h-[3rem] rounded-[50%] bg-[#7500CF] flex justify-center items-center'>
            <IoIosArrowBack className="text-[2rem] text-white" />

            </div>
            <div className='w-[3rem] h-[3rem] rounded-[50%] bg-[#7500CF] flex justify-center items-center'>
            <IoIosArrowForward className="text-[2rem] text-white" />

            </div>
        </div>
        </div>
     <div className='flex'>
       <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
     </div>
     <div className="flex justify-center items-center mt-[1.5rem] gap-[1rem]">
          <div className="w-[10px] h-[10px] bg-[#7500CF] rounded-[50%] cursor-pointer">

          </div>
          <div className="w-[10px] h-[10px] bg-[#7B7B7B] rounded-[50%] cursor-pointer">

          </div>
          <div className="w-[10px] h-[10px] bg-[#7B7B7B] rounded-[50%] cursor-pointer">

          </div>
        </div>
 
    </div>
  )
}

export default ProductCategory