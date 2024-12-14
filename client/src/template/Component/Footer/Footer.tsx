import React, { useEffect, useState } from 'react'
import { FaFacebook, FaRegPaperPlane } from 'react-icons/fa'
import { RiHeadphoneFill } from 'react-icons/ri'
import nganHang from "../../../assets/nganhang.png"
import { Container } from '../../../components/Style/Container'
import LoadingFooter from './Component/Loading/LoadingFooter'
function Footer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);

  if (isLoading) {
    return <LoadingFooter />;
  }
  const listFooter=[
    {
      title:"Tìm kiếm nhanh",
      desc:["Điện thoại","Laptop","Phụ kiện","Máy tính bảng"]
    },
    {
      title:"Tác vụ",
      desc:["Liên hệ","Danh mục ","Hỏi đáp","Có thể bạn thích","Giới thiệu"]
    },
    {
      title:"Chăm sóc khách hàng",
      desc:["Câu hỏi thường gặp","Hỏi Đáp","Hỗ trợ sản phẩm","Tài khoản","Tra cứu hóa đơn"]
    },

  ]
  return (
    <div className='w-[100%] m-auto mt-[1.5rem] bg-white'>
      <div className='bg-[#7500CF] sm:rounded-t-[2rem] md:rounded-none w-[100%] md:h-auto py-[2rem] flex justify-center items-center'>
        <Container className='relative flex flex-col md:flex-row items-center justify-between gap-[2rem]'>
          <h1 className='md:hidden text-[2.5rem] text-white text-center'>SuperTeach</h1>
          <div className="flex text-[1.6rem] md:text-[1.8rem] text-white gap-[1rem] items-center justify-center">
            <FaRegPaperPlane className='text-[1.6rem]'/>
            <span>Đăng kí để nhận thêm ưu đãi</span>
          </div>
          <div className='flex items-center w-full md:w-auto'>
            <input type="text" className='flex-1 md:w-[35rem] h-[4rem] focus:border-none focus:outline-none p-[1rem] text-[1.6rem] rounded-s-[.5rem]' placeholder='Nhập email của bạn'/>
            <button className='w-[12rem] bg-[#444444] text-white h-[4rem] text-[1.6rem] rounded-e-[.5rem]'>Đăng kí</button>
          </div>
        </Container>
      </div>

      <div className='w-[90%] xl:w-[80%] m-auto py-[3rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]'>
        <div className='col-span-1'>
          <h3 className='text-[2.8rem] font-semibold'>SuperTech</h3>
          <div className='flex gap-[2rem] mt-[1.5rem] mb-[2rem]'>
            <RiHeadphoneFill className='md:text-[4rem] sm:text-[5rem] xl:text-[5rem] text-[#7500CF] font-semibold'/>
            <div>
              <p className='md:text-[1.5rem] sm:text-[1.6rem]'>Bạn có thắc mắc? Liên hệ ngay!</p>
              <p className='md:text-[1.6rem] sm:text-[2rem] text-[#7500CF] font-semibold md: mt-[.5rem] sm:mt-[1rem]'>1900 6969</p>
            </div>
          </div>
          <div>
            <h4 className='md:text-[1.8rem] sm:text-[1.9rem] font-semibold'>Liên hệ</h4>
            <p className='md:text-[1.6rem] my-[1rem] sm:text-[1.8rem]'>Công Viên Phần Mềm Quang Trung, Tân Chánh Hiệp, Quận 12, Hồ ChÍ Minh, Việt Nam</p>
            <p>
              <FaFacebook className='text-[1.7rem]'/>
            </p>
          </div>
        </div>
        
        {listFooter.map((item) => (
          <div className='col-span-1'>
            <h3 className='text-[1.8rem] font-semibold'>{item.title}</h3>
            <div className='mt-[1.5rem]'>
              {item.desc.map((desc) => (
                <p className='mb-[1.2rem] text-[1.6rem]'>{desc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='w-full bg-[#E5E5E5] py-[2rem]'>
        <div className='w-[90%] xl:w-[80%] m-auto flex flex-col md:flex-row justify-between items-center gap-[2rem]'>
          <p className='text-[1.4rem] text-[#34005C] text-center md:text-left'>SuperTech - Cửa Hàng Chuyên Các Mặt Hàng Công Nghệ.</p>
          <img src={nganHang} alt="" className='w-[20rem] md:w-[25rem]' />
        </div>
      </div>
    </div>
  )
}

export default Footer