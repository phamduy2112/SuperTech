import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import { FaCloudMoon } from "react-icons/fa6";

import { HiMenuAlt1 } from 'react-icons/hi'
import { IoIosSearch, IoMdSettings } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../../redux/admin/component/ToggleSliceBar';
import { RiAddLargeLine } from 'react-icons/ri';
import { Popover } from 'antd';
import { LuUser2 } from "react-icons/lu";
import { IoSettingsOutline } from 'react-icons/io5';



function AdminHeader() {

  const title = (
    <div className='text-[12px] w flex justify-start p-[12px] gap-5 items-center w-[250px] h-auto text-[#555]'>
      <img className='w-[40px] h-[40px] object-cover rounded-full bg-black' src="https://images2.thanhnien.vn/528068263637045248/2024/5/6/edit-dam-vinh-hung-3-17149941374961801909026.jpeg" alt="" />
      <div className='flex flex-col'>
        <span>Đàm Vĩnh Hưng</span>
        <span>hungofflineca989@gmail.com</span>

      </div>
    </div>
  );
  const content = (
    <div className='text-[12px] p-[12px] gap-3 flex flex-col text-[#555] cursor-pointer'>
      <div className='flex-1 py-[12px]  px-[12px] box-border  transition-all duration-700 hover:bg-[#64646411] rounded-xl flex justify-start gap-3 text-[14px] items-center'>
        <LuUser2 className='text-[25px]' />
        <span className='font-medium'>Hồ Sơ</span>
      </div>
      <div className='flex-1 py-[12px]  box-border transition-all duration-700 rounded-xl hover:bg-[#64646411] px-[12px] flex items-center gap-3 justify-start text-[14px]'>
        <IoSettingsOutline className='text-[25px]' />
        <span className='font-medium'>Cài Đặt Tài Khoản</span>
      </div>
    </div>
  );


  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isOpen = useSelector((state: any) => state.toggleSidebar.isOpen);




  return (
    <>
      <div className='text-[#000000] text-[20px] grid grid-cols-2 auto-rows-[75px]'>
        <div className='px-[30px]  text-[25px] flex items-center opacity-[25%] '>
          <div onClick={() => dispatch(toggle())}>
            {
              isOpen ? <HiMenuAlt1 /> : <RiAddLargeLine className='rotate-45 text-red-600 font-bold' />
            }

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

          <div className=' flex items-center justify-center gap-5'>
            <div className='w-[55px] h-[55px] relative flex justify-center items-center'>
              <span className='w-[8px] h-[8px] absolute bg-green-400 rounded-full mt-12 ml-14'></span>

              <div className=' w-[45px] h-[45px] rounded-full overflow-hidden flex justify-center items-center '>
                <img className='object-cover' src="https://vuatocgia.com/medias/2022/11/kieu-toc-mr-dam-3-1.jpg" alt="" />

              </div>



            </div>
            <div className='grid grid-cols-1 gap-2 text-[10px] font-semibold'>
              <span className='text-[8px] text-[#e6cb33]'>Admin</span>
              <span className='font-medium text-[#ae00ffdf]'>Đàm Vĩnh Hưng</span>

            </div>

          </div>
          <div className='opacity-[25%]'>
            <Popover placement="bottomRight" title={title} content={content}>
              <IoMdSettings />
            </Popover>
          </div>

        </div>
      </div>
    </>
  )
}

export default AdminHeader