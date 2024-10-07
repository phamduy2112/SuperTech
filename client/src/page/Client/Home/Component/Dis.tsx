import React from 'react'
import { FaGift, FaMoneyBill } from 'react-icons/fa'
import { FaHeadphonesSimple, FaTruckFast } from 'react-icons/fa6'

function Dis() {
  return (
    <div className='w-[80%] m-auto py-[2rem]'>
        <div className='grid lg:grid-cols-4 xmd:grid-cols-2'>
            <div className='flex flex-col items-center justify-center'>
            <FaTruckFast className='text-[5rem] text-[#7500CF]'/>
            <h3 className='text-[2rem] font-semibold mt-[1rem]'>Miễn phí vận chuyển</h3>
            <p className='text-[1.6rem] mt-[.5rem]'>Miễn phí vận chuyển cho đơn hàng trên 25 triệu</p>
        </div>
            <div className='flex flex-col items-center justify-center'>
            <FaGift  className='text-[5rem] text-[#7500CF]'/>
            <h3 className='text-[2rem] font-semibold mt-[1rem]'>Tiết kiệm lớn</h3>
            <p className='text-[1.6rem] mt-[.5rem]'>24 giờ một ngày, 7 ngày một tuần</p>

        </div>
            <div className='flex flex-col items-center justify-center'>
            <FaHeadphonesSimple  className='text-[5rem] text-[#7500CF]'/>
            <h3 className='text-[2rem] font-semibold mt-[1rem]'>24/07 Có người hộ trỡ</h3>
            <p className='text-[1.6rem] mt-[.5rem]'>24 giờ một ngày, 7 ngày một tuần</p>
        </div>
            <div className='flex flex-col items-center justify-center'>
            <FaMoneyBill  className='text-[5rem] text-[#7500CF]'/>
            <h3 className='text-[2rem] font-semibold mt-[1rem]'>Thanh toán linh hoạt</h3>
            <p className='text-[1.6rem] mt-[.5rem]'>Thanh toán đa dạng</p>
        </div>
        </div>
        
    </div>
  )
}

export default Dis