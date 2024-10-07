import React from 'react'
import { FaFacebook, FaRegPaperPlane } from 'react-icons/fa'
import { RiHeadphoneFill } from 'react-icons/ri'
import nganHang from "../../../assets/nganhang.png"
function Footer() {
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
    <div className='w-[100%] m-auto mt-[1.5rem]'>
      <div className=' bg-[#7500CF] sm:rounded-t-[2rem] md:rounded-none w-[100%] md:h-[6rem] sm:pt-[2rem] md:pt-[0] flex justify-center items-center'>
        <div className='xl:w-[80%]  xmd:w-[90%] relative sm:w-[100%] m-auto md:flex items-center justify-between'>
        <h1 className='md:hidden text-[3rem] text-white text-center'>SuperTeach</h1>
          <div className="flex sm:text-[1.8rem] md:text-[2rem] text-white sm:gap-[1rem] md:gap-[2rem] items-center sm:justify-center sm:my-[1.5rem] md:my-[0rem]">
        
          <FaRegPaperPlane className='sm:text-[2rem] md:text-[1.6rem]'/>
          <span>Đăng kí để nhận thêm ưu đãi</span>
        </div>
        <div className='flex items-center relative sm:top-5 md:top-0 sm:shadow-xl md:shadow-none' >

          <input type="text" className='xl:w-[45rem] md:h-[4rem] sm:h-[4.5rem] sm:w-[100%] focus:border-none focus:outline-none p-[1rem] pl-[2rem] text-[1.8rem] rounded-s-[.5rem]' placeholder='Nhập email của bạn'/>
          <button className='md:w-[10rem] sm:w-[15rem] bg-[#444444] text-white md:h-[4rem] sm:h-[4.5rem] text-[1.8rem] rounded-e-[.5rem]'>Đăng kí</button>
        </div>
        </div>
        
      </div>
        <div className='xl:w-[80%]  xmd:w-[90%] sm:w-[95%] m-auto py-[3rem] flex flex-wrap justify-between
       
        '>
          <div className='lg:w-[25%] xmd:w-[50%] sm:w-[100%]'>
            <h3 className='text-[3.5rem] font-semibold'>
              SuperTech
            </h3>
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
                <p><FaFacebook className='text-[1.7rem]'/></p>
              </div>
          </div>
          {
            listFooter.map((item)=>{
              return    <div className='mt-[1rem] xmd:w-[50%] lg:w-[15%]'>
            <h3 className='text-[2.1rem] font-semibold'>
            {item.title}
            </h3>
            <div className='mt-[1.9rem]'>
              {item.desc.map((item)=>{
                return               <p className='mb-[1.5rem] text-[1.8rem]'>{item}</p>

              })}
        

            </div>
          
          </div>
            })
          }
       
     
        </div>
        <div className='w-[100%] bg-[#E5E5E5] sm:h-[100%] p-[1rem] h-[4rem] flex flex-col justify-center items-center'>
          <div className='xl:w-[80%]  xmd:w-[90%] sm:w-[95%] m-auto md:flex justify-between items-center'>
          <p className='md:text-[1.5rem] xl:text-[1.8rem] text-[#34005C] sm:hidden md:block'>SuperTech - Cửa Hàng Chuyên Các Mặt Hàng Công Nghệ.</p>
          <img src={nganHang} alt="" className='md:w-[25rem] flex justify-center items-center' />
          </div>
        </div>
      </div>
  )
}

export default Footer