import React from 'react'
import { FaGift, FaMoneyBill } from 'react-icons/fa'
import { FaHeadphonesSimple, FaTruckFast } from 'react-icons/fa6'

function Dis() {
  return (
    <div className='m-auto py-[2rem] px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='flex flex-col items-center justify-center text-center p-4'>
          <FaTruckFast className='text-[3rem] sm:text-[4rem] lg:text-[5rem] text-[#7500CF]'/>
          <h3 className='text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] font-semibold mt-[1rem]'>Miễn phí vận chuyển</h3>
          <p className='text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] mt-[.5rem]'>Miễn phí vận chuyển cho đơn hàng trên 25 triệu</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center p-4'>
          <FaGift  className='text-[3rem] sm:text-[4rem] lg:text-[5rem] text-[#7500CF]'/>
          <h3 className='text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] font-semibold mt-[1rem]'>Tiết kiệm lớn</h3>
          <p className='text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] mt-[.5rem]'>24 giờ một ngày, 7 ngày một tuần</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center p-4'>
          <FaHeadphonesSimple  className='text-[3rem] sm:text-[4rem] lg:text-[5rem] text-[#7500CF]'/>
          <h3 className='text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] font-semibold mt-[1rem]'>24/07 Có người hộ trỡ</h3>
          <p className='text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] mt-[.5rem]'>24 giờ một ngày, 7 ngày một tuần</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center p-4'>
          <FaMoneyBill  className='text-[3rem] sm:text-[4rem] lg:text-[5rem] text-[#7500CF]'/>
          <h3 className='text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] font-semibold mt-[1rem]'>Thanh toán linh hoạt</h3>
          <p className='text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] mt-[.5rem]'>Thanh toán đa dạng</p>
        </div>
      </div>
    </div>
  )
}

export default Dis