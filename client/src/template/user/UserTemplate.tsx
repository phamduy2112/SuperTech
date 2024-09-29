
import { Outlet } from 'react-router-dom'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'
import { CiLocationOn } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'






function UserTemplate() {


  return (
    <div>
      <div className='w-[100%] h-[35px] bg-[#7500CF] text-white flex justify-center items-center'>
      <div className='w-[80%] m-auto flex justify-between items-center'>
            <h3 className='text-[.9rem]'>Chào mừng đến với cửa hàng SuperTech</h3>
            <div className="flex gap-[1rem]">
              <div className='flex justify-center items-center gap-1 text-[.9rem]'>
              <CiLocationOn  className='text-[1rem]'/>
              <span>Địa điểm</span>
              </div>
              <div className='flex justify-center items-center gap-1 text-[.9rem]'>
              <CiLocationOn  className='text-[1rem]'/>
              <span>Tra cứu hóa đơn</span>
              </div>
              <div className='flex justify-center items-center gap-1 text-[.9rem]'>
              <CiLocationOn  className='text-[1rem]'/>
              <span>Cửa hàng</span>
              </div>
              <div className='flex justify-center items-center gap-1 text-[.9rem]'>
              <FaRegUser   className='text-[1rem]'/>
              <span>Tài khoản</span>
              </div>
            </div>
      </div>
      </div>

         <div className='w-[80%] m-auto'>
        <Header/>
      <Outlet />
      <Footer />
    </div>
    </div>
 
  )
}

export default UserTemplate
