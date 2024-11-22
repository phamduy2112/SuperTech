import React, { useEffect } from 'react'
import { Drawer, Popover } from 'antd';
import { BsThreeDots } from 'react-icons/bs';
import { MdOutlineMarkEmailUnread, MdOutlineZoomOutMap } from 'react-icons/md';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { IoAdd, IoSearchOutline } from 'react-icons/io5';
import { FaRegBellSlash } from 'react-icons/fa';
import { PiMessengerLogoBold, PiMinus } from 'react-icons/pi';
import { LuDelete } from 'react-icons/lu';
import { LiaUserAltSlashSolid } from 'react-icons/lia';
import BoxChat from './BoxChat';
import { socket } from '../../../service/ChatApp/Socket.io';


function ChatAdmin() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server with socket ID: ", socket.id);
    });
    socket.on("authentication", (data) => {
      console.log("Received authentication response:", data);
    });
  }, [])




  const boxChats = [1, 2, 3, 4, 5];

  const numberOfItemsToShow = 3;
  const filteredBoxChats = boxChats.slice(-Math.min(numberOfItemsToShow, boxChats.length));

  const PopupMes = () => {
    return (
      <div className='flex-1 cursor-pointer flex gap-3 flex-col items-center h-auto box-border'>
        <div className='flex-1 w-[400px] h-auto box-border'>
          <div className='flex flex-1 h-auto items-center hover:bg-[#85858525] justify-start rounded-lg p-[7px] gap-3 font-semibold text-[14px]'>
            <MdOutlineMarkEmailUnread className='text-[20px]' />
            <span>Đánh dấu là chưa đọc</span>
          </div>
          <div className='flex items-center justify-start hover:bg-[#85858525]  rounded-lg p-[7px] gap-3 font-semibold text-[14px]'>
            <PiMessengerLogoBold className='text-[20px]' />
            <span>Dùng thử SuperTech Messenger dành cho Windows</span>
          </div>
          <div className='flex items-center justify-start hover:bg-[#85858525]  rounded-lg p-[7px] gap-3 font-semibold text-[14px]'>
            <FaRegBellSlash className='text-[20px] ' />
            <span>Bật lại thông báo</span>
          </div>

        </div>
        <div className='bg-[#79797953] h-[1px] w-[380px] rounded-full'>

        </div>
        <div className='flex-1 w-[400px] cursor-pointer h-auto box-border'>

          <div className='flex flex-1 h-auto items-center hover:bg-[#85858525] justify-start rounded-lg p-[7px] gap-3 font-semibold text-[14px]'>
            <LiaUserAltSlashSolid className='text-[20px]' />
            <span>Chặn</span>
          </div>
          <div className='flex items-center justify-start hover:bg-[#85858525]  rounded-lg p-[7px] gap-3 font-semibold text-[14px]'>
            <LuDelete className='text-[20px]' />
            <span>Xóa đoạn chat</span>
          </div>
        </div>
      </div>
    )
  }



  const RecentMessages = () => {
    return (
      <div className='flex flex-col'>
        <span className='text-[14px] font-semibold'>Nguyễn Thu Lê</span>
        <span className='text-[12px]'>Xin Chào Shop!</span>
      </div>
    )
  }


  const HeaderMess = () => {
    return (
      <div className='flex-1 text-[#5d5d5e] items-center flex justify-between'>
        <div className='text-[24px] flex items-center'>
          <span>Đoạn Chat</span>
        </div>
        <div className='flex cursor-pointer text-[20px] gap-[25px]'>
          <div className='hover:bg-[rgba(0,0,0,0.15)] transition-all hover:text-[#00000084] duration-500 flex items-center justify-center rounded-full w-[32px] h-[32px]'>
            <BsThreeDots className='' />
          </div>
          <div className='hover:bg-[rgba(0,0,0,0.15)] transition-all duration-500 flex items-center justify-center  rounded-full  w-[32px] h-[32px]'>
            <MdOutlineZoomOutMap />
          </div>
          <div className='hover:bg-[rgba(0,0,0,0.15)] transition-all duration-500 flex items-center justify-center  text-[16px] rounded-full  w-[32px] h-[32px]'>
            <FaRegPenToSquare />

          </div>

        </div>




      </div>
    )
  }

  const CreateChat = () => {
    return (
      <div className='text-[12px]'>
        <span>Tin nhắn mới</span>
      </div>
    )
  }
  const OptionMess = () => {
    return (
      <div className='text-[12px]'>
        <span>Tùy chọn</span>
      </div>
    )
  }
  const ValueOption = () => {
    return (
      <div className='text-[12px] box-border cursor-pointer gap-4 flex flex-col'>
        <div className='flex gap-3 hover:bg-[rgba(0,0,0,0.08)] duration-500 transition-all rounded-md p-[5px] items-center'>
          <div className='border border-spacing-1 box-border hover:bg-[#85858525] flex items-center justify-center transition-all duration-500  rounded-full'>
            <IoAdd className='text-[20px] transform rotate-[45deg]' />
          </div>
          <span>Đóng tất cả đoạn chat</span>
        </div>
        <div className='flex hover:bg-[rgba(0,0,0,0.08)] duration-500 transition-all rounded-md p-[5px] gap-3 items-center'>
          <div className='border border-spacing-1 hover:bg-[#85858525] flex items-center justify-center transition-all duration-500  rounded-full'>
            <PiMinus className='text-[20px]' />
          </div>
          <span>Thu nhỏ đoạn chat đang mở</span>
        </div>
      </div>
    )
  }


  return (
    <div className='flex h-[100vh] cursor-pointer relative overflow-hidden  flex-col p-12 gap-5 bg-[#f2edf3]'>
      <Drawer
        title={<HeaderMess />}
        placement="right"
        closable={false}
        open={false}
        getContainer={false}
        mask={false}
        loading={false}
        width={440}
        style={{ minHeight: '100vh' }}
      >
        <div className=' flex-1 flex flex-col h-full gap-7'>
          <div className='bg-[rgba(0,0,0,0.08)]  text-[#5d5d5e] gap-2 flex items-center rounded-full px-[10px]'>
            <IoSearchOutline className='text-[20px]' />
            <input type="text" className='flex-1 h-[40px] text-[14px] bg-transparent outline-none' placeholder='Tìm kiếm trên SuperTech Messenger' />
          </div>
          <div className=' text-[14px] font-medium flex gap-3'>
            <button className='px-[15px] py-[11px] bg-[#c345feb1] text-[white] rounded-3xl'>Hộp Thư</button>
            <button className='px-[15px] py-[11px] transition-all duration-500 hover:bg-[rgba(0,0,0,0.08)] rounded-3xl'>Nhóm</button>
          </div>
          <div className='flex-1 overflow-y-auto'>
            <div className='hover:bg-[rgb(0,0,0,0.10)] flex flex-row transition-all items-center justify-between duration-500 rounded-lg box-border  p-[6px]'>
              <div className='flex flex-1 flex-row items-center gap-3'>
                <div className='w-[68px] h-[68px] flex items-center justify-center overflow-hidden relative'>
                  <div className='w-[56px] h-[56px] rounded-full  overflow-hidden'>
                    <img className='w-full h-full object-cover ' src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/465713850_122113169258572750_2010770374122077854_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=Hx5rvX4UPj4Q7kNvgGUTKBQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AwmEUqU-ci1wUIHtkjJDYiS&oh=00_AYDog5dZwqVgegWznA_S6-SDoWisIeP8x_aQnIDrcFrqpg&oe=67390EAD" alt="" />
                  </div>
                  <div className='bg-[#62e823] absolute w-[15px] bottom-[10px] right-[5px] h-[15px] rounded-full'></div>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='text-[14px] font-semibold'>
                    <span >Nguyễn Thu Lê</span>
                  </div>
                  <div className='flex text-[12px] gap-2'>
                    <span>Xin Chào Shop! </span>
                    <span>18 phút trước</span>
                  </div>
                </div>
              </div>
              <div className='hover:bg-[rgba(0,0,0,0.15)] text-[#5d5d5e98] transition-all hover:text-[#ffffff] duration-500 flex items-center justify-center rounded-full w-[32px] h-[32px]'>

                <Popover placement="bottom" trigger="click" content={<PopupMes />}>
                  <button>
                    <BsThreeDots className='text-[17px]' />
                  </button>
                </Popover>

              </div>
              <div className=' text-[#ff0000] transition-all duration-500 flex items-center justify-center rounded-full w-[32px] h-[32px]'>
                <FaRegBellSlash className='text-[20px] ' />
              </div>
            </div>

          </div>
        </div>

      </Drawer>
      <div className='absolute bottom-0 right-0 w-auto gap-4 items-end justify-end flex flex-row h-[500px]'>

        {filteredBoxChats.map((item, index) => (
          <BoxChat key={index} index={index} data={item} />
        ))}
        <div className='flex flex-col py-[20px] gap-4 justify-end items-center w-[80px] box-border h-auto '>
          <Popover placement="left" trigger="hover" content={<OptionMess />}>
            <Popover placement='topLeft' trigger={'click'} content={<ValueOption />}>
              <div className='text-[20px] rounded-full bg-[rgba(0,0,0,0.15)]  p-[8px]'>
                <BsThreeDots className='text-[white]' />
              </div>
            </Popover>

          </Popover>


          {filteredBoxChats.map((item, index) => (
            <div className='w-full relative flex items-center justify-center h-[56px]'>
              <Popover placement="left" trigger="hover" content={<RecentMessages />}>
                <div className='w-[48px] h-[48px] rounded-full overflow-hidden'>
                  <img className='w-full h-full object-cover ' src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/465713850_122113169258572750_2010770374122077854_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=Hx5rvX4UPj4Q7kNvgGUTKBQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AwmEUqU-ci1wUIHtkjJDYiS&oh=00_AYDog5dZwqVgegWznA_S6-SDoWisIeP8x_aQnIDrcFrqpg&oe=67390EAD" alt="" />
                </div>
              </Popover>
              <div className='absolute rounded-full right-[10px]  top-[5px] bg-black'>
                <IoAdd className=' text-[white]  text-[20px] transform rotate-[45deg]' />
              </div>
              <div className='absolute rounded-full w-[12px] h-[12px] right-[15px]  bottom-[7px] bg-[#62e823]'>
              </div>
            </div>))}
          <Popover placement="left" trigger="hover" content={<CreateChat />}>
            <div className='text-[20px] w-[48px] h-[48px] flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.15)]  p-[8px]'>
              <FaRegPenToSquare className='text-[white]' />
            </div>

          </Popover>


        </div>

      </div>



    </div>
  )
}

export default ChatAdmin