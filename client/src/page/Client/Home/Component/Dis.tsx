import React from 'react'
import { FaGift, FaMoneyBill } from 'react-icons/fa'
import { FaHeadphonesSimple, FaTruckFast } from 'react-icons/fa6'

function Dis() {
  return (
<div className='max-w-screen-xl m-auto py-8 px-4'>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
    {/* Card 1 */}
    <div className='flex flex-col items-center justify-center text-center p-4'>
      <FaTruckFast className='text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] text-[var(--custom-color)]' />
      <h3 className='text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem] font-semibold mt-4'>
        Miễn phí vận chuyển
      </h3>
      <p className='text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem] mt-2'>
        Miễn phí vận chuyển cho đơn hàng trên 25 triệu
      </p>
    </div>

    {/* Card 2 */}
    <div className='flex flex-col items-center justify-center text-center p-4'>
      <FaGift className='text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] text-[var(--custom-color)]' />
      <h3 className='text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem] font-semibold mt-4'>
        Tiết kiệm lớn
      </h3>
      <p className='text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem] mt-2'>
        24 giờ một ngày, 7 ngày một tuần
      </p>
    </div>

    {/* Card 3 */}
    <div className='flex flex-col items-center justify-center text-center p-4'>
      <FaHeadphonesSimple className='text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] text-[var(--custom-color)]' />
      <h3 className='text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem] font-semibold mt-4'>
        24/07 Có người hỗ trợ
      </h3>
      <p className='text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem] mt-2'>
        24 giờ một ngày, 7 ngày một tuần
      </p>
    </div>

    {/* Card 4 */}
    <div className='flex flex-col items-center justify-center text-center p-4'>
      <FaMoneyBill className='text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] text-[var(--custom-color)]' />
      <h3 className='text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem] font-semibold mt-4'>
        Thanh toán linh hoạt
      </h3>
      <p className='text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem] mt-2'>
        Thanh toán đa dạng
      </p>
    </div>
  </div>
</div>

  )
}

export default Dis