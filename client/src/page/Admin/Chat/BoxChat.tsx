import { Modal, Popover } from 'antd';
import React, { useState } from 'react'
import { BiSolidLike } from 'react-icons/bi'
import { BsFiletypeGif } from 'react-icons/bs';
import { CiSaveDown2 } from 'react-icons/ci';
import { FaRegBellSlash } from 'react-icons/fa';
import { GoChevronDown } from 'react-icons/go';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { IoMdImages } from 'react-icons/io'
import { IoAdd, IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { LiaUserAltSlashSolid } from 'react-icons/lia';
import { LuDelete, LuSticker } from 'react-icons/lu';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { PiMessengerLogoBold, PiMinus } from 'react-icons/pi';
import { SiIconify } from "react-icons/si";
import { FcRemoveImage } from "react-icons/fc";
import './BoxChat.css'
import { IMG_USER_BACKEND } from '../../../constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BoxChat({ index, data }: any) {
    console.log("Index:", index);
    console.log("Data:", data);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const ShowImage = () => {
        return (
            <div className='flex flex-col justify-center items-center gap-5'>
                <div className='flex items-center gap-10 justify-center'>
                    <div className='cursor-pointer flex gap-3  items-center text-[20px]'>
                        <CiSaveDown2 />
                        <span className='text-[14px]'>Lưu ảnh</span>
                    </div>
                    <div className='cursor-pointer text-[20px] flex gap-3  items-center'>
                        <FcRemoveImage />
                        <span className='text-[14px]'>Xóa ảnh khỏi đoạn chat</span>


                    </div>

                </div>

                <div className='flex flex-row justify-center items-center  gap-3'>
                    <div className='text-[20px] rounded-full bg-[#3130302d] text-[white] flex items-center p-[8px] justify-center'>
                        <IoChevronBackOutline />
                    </div>
                    <div>
                        <img className=' rounded-lg ' src="https://storage.googleapis.com/cdn-entrade/bovagau-meme/dam-vinh-hung-len-bia-tap-chi-da_1680063925" alt="" />
                    </div>


                    <div className='text-[20px] rounded-full bg-[#3130302d] text-[white] p-[8px] justify-center items-center'>
                        <IoChevronForwardOutline />
                    </div>


                </div>

                <div className='hide-scrollbar w-[400px] h-[120px]  flex items-center justify-start relative overflow-x-scroll'>
                    <div className='flex absolute gap-3 justify-start'>
                        <div className='w-[100px]'>
                            <img className='rounded-lg' src="https://storage.googleapis.com/cdn-entrade/bovagau-meme/dam-vinh-hung-len-bia-tap-chi-da_1680063925" alt="" />
                        </div>
                        <div className='w-[100px]'>
                            <img className='rounded-lg' src="https://storage.googleapis.com/cdn-entrade/bovagau-meme/dam-vinh-hung-len-bia-tap-chi-da_1680063925" alt="" />
                        </div>
                        <div className='w-[100px]'>
                            <img className='rounded-lg' src="https://storage.googleapis.com/cdn-entrade/bovagau-meme/dam-vinh-hung-len-bia-tap-chi-da_1680063925" alt="" />
                        </div>
                        <div className='w-[100px]'>
                            <img className='rounded-lg' src="https://storage.googleapis.com/cdn-entrade/bovagau-meme/dam-vinh-hung-len-bia-tap-chi-da_1680063925" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        )
    }

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
                        <HiOutlineUserGroup className='text-[20px]' />
                        <span>Tạo Nhóm</span>

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
    return (
        <div className={` bg-white rounded-lg p-[5px] text-[20px] w-[338px] px-[5px] flex flex-col gap-[4px] box-border h-[455px]`}>
            <div className='w-full flex  justify-between box-border bg-white h-[44px]'>
                <Popover placement="leftTop" trigger="click" content={<PopupMes />}>
                    <div className='flex hover:bg-[#85858525] transition-all duration-500 rounded-lg p-[5px] w-auto justify-start gap-3 items-center'>
                        <div className='relative flex items-center justify-start'>
                            <div className='w-[32px] h-[32px] rounded-full overflow-hidden'>
                                <img className='w-full h-full object-cover ' src={data.image === null || data.image === "" || data.image === undefined ? `https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg` : IMG_USER_BACKEND + data.image} alt="" />
                            </div>
                            <div className='w-[10px] right-0 bottom-0 absolute h-[10px] bg-green-400 rounded-full'>

                            </div>
                        </div>
                        <div className='flex gap-2 items-center justify-between'>
                            <div className='flex gap-1 flex-col text-[12px]'>
                                <span className='text-[14px] font-semibold'>{data.name}</span>
                                <span className='text-[#85858595]'>Đang hoạt động</span>
                            </div>
                            <div>
                                <GoChevronDown />
                            </div>
                        </div>
                    </div>
                </Popover>

                <div className='flex items-center box-border'>
                    <div className='p-[8px] hover:bg-[#85858525] flex items-center justify-center transition-all duration-500  rounded-full'>
                        <PiMinus className='text-[20px]' />

                    </div>
                    <div className='w-[36px] h-[36px] box-border hover:bg-[#85858525] flex items-center justify-center transition-all duration-500  rounded-full'>
                        <IoAdd className='text-[35.57px] transform rotate-[45deg]' />
                    </div>
                </div>
            </div>
            <div className='w-full py-[10px] flex box-border flex-col gap-3 overflow-y-auto h-[347px]'>
                <div className='flex items-end justify-start gap-3'>
                    <div className='w-[28px] h-[28px] rounded-full overflow-hidden'>
                        <img className='w-full h-full object-cover ' src={data.image === null || data.image === "" || data.image === undefined ? `https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg` : IMG_USER_BACKEND + data.image} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-[12px] border-[0.1px] border-[#a5a5a52d] text-black text-justify max-w-[180px] leading-10 h-auto p-[8px] rounded-lg'>
                            Xin chào Shop!
                        </div>
                        <div className='text-[12px]  border-[#a5a5a52d] border-[0.1px] text-justify max-w-[180px] leading-10 h-auto text-[black] p-[8px] rounded-lg'>
                            Em phỏng vấn làm nhân viên bên mình ạ !
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-end justify-end gap-3'>

                    <div className='flex items-end justify-end gap-3'>
                        <div className='flex flex-col gap-2'>
                            <div className='text-[12px] bg-[#c345feb1] text-justify max-w-[180px] leading-10 h-auto text-[white] p-[8px] rounded-lg'>
                                Xin chào Bạn!
                            </div>
                            <div className='text-[12px] bg-[#c345feb1] text-justify max-w-[180px] leading-10 h-auto text-[white] p-[8px] rounded-lg'>
                                Em phỏng vấn Tập Trung tại Toà nhà Văn phòng Nhân Sự GS25 TP THỦ ĐỨC (Q.2 cũ). Sau khi phỏng vấn xong em sẽ nhận được THƯ MỜI NHẬN VIỆC về làm chi nhánh gần nhà em nha. Nên e chịu khó đi xa bữa đầu phỏng vấn nha
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col items-end justify-end gap-3'>
                        <div className='flex  max-w-[180px] flex-col gap-2'>
                            <img onClick={showModal} className=' rounded-lg ' src="https://storage.googleapis.com/cdn-entrade/bovagau-meme/dam-vinh-hung-len-bia-tap-chi-da_1680063925" alt="" />
                        </div>
                        <div className='grid grid-cols-[88px_88px] box-border gap-[4px]'>
                            <img onClick={showModal} className=' rounded-lg ' src="https://storage.googleapis.com/cdn-entrade/bovagau-meme/dam-vinh-hung-len-bia-tap-chi-da_1680063925" alt="" />
                            <img onClick={showModal} className=' rounded-lg ' src="https://storage.googleapis.com/cdn-entrade/bovagau-meme/dam-vinh-hung-len-bia-tap-chi-da_1680063925" alt="" />


                        </div>
                        <div className='grid grid-cols-[57.33px_57.33px_57.33px] box-border gap-[4px]'>
                            <img onClick={showModal} className=' rounded-lg ' src="https://storage.googleapis.com/cdn-entrade/bovagau-meme/dam-vinh-hung-len-bia-tap-chi-da_1680063925" alt="" />
                            <img onClick={showModal} className=' rounded-lg ' src="https://storage.googleapis.com/cdn-entrade/bovagau-meme/dam-vinh-hung-len-bia-tap-chi-da_1680063925" alt="" />
                            <img onClick={showModal} className=' rounded-lg ' src="https://storage.googleapis.com/cdn-entrade/bovagau-meme/dam-vinh-hung-len-bia-tap-chi-da_1680063925" alt="" />
                            <img onClick={showModal} className=' rounded-lg ' src="https://storage.googleapis.com/cdn-entrade/bovagau-meme/dam-vinh-hung-len-bia-tap-chi-da_1680063925" alt="" />
                            <Modal
                                open={isModalOpen}
                                onOk={handleOk} onCancel={handleCancel}
                                footer={null}
                            >
                                <ShowImage />
                            </Modal>

                        </div>

                    </div>
                    <div className=' mx-[5px] w-[15px] h-[15px] rounded-full overflow-hidden'>
                        <img className='w-full h-full object-cover ' src={data.image === null || data.image === "" || data.image === undefined ? `https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg` : IMG_USER_BACKEND + data.image} alt="" />
                    </div>
                </div>


            </div>
            <div className='w-full justify-between flex p-1 items-center bg-white h-[60px]'>
                <div className='p-[8px] hover:bg-[#85858525] rounded-full flex items-center justify-center transition-all duration-500 '>
                    <IoMdImages />
                </div>
                <div className='p-[8px] hover:bg-[#85858525] rounded-full flex items-center justify-center transition-all duration-500 '>
                    <LuSticker className='transition-all transform rotate-[-2deg]' />

                </div>
                <div className='p-[8px] hover:bg-[#85858525] rounded-full flex items-center justify-center transition-all duration-500 '>
                    <BsFiletypeGif />
                </div>
                <div className='p-[8px] w-[144px] h-[36px] bg-[#85858525] rounded-full flex items-center justify-center transition-all duration-500'>
                    <input type="text" placeholder='Aa' className='rounded-full p-[5px] text-[14px] font-medium outline-none bg-transparent  w-full' />
                    <div className='p-[5.56px] hover:bg-[#85858525] flex items-center justify-center transition-all duration-500  rounded-full'>
                        <SiIconify className='text-[16.92px]' />
                    </div>

                </div>
                <div className='p-[8px] hover:bg-[#85858525] rounded-full flex items-center justify-center transition-all duration-500 hover:'>
                    <BiSolidLike className='text-[#c345feb1]' />

                </div>

            </div>
        </div>
    )
}

export default BoxChat