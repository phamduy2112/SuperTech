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
      <div className=' bg-[#7500CF] w-[100%] h-[6rem] flex justify-center items-center'>
        <div className='w-[80%] m-auto flex  items-center justify-between'>
          <div className="flex text-[2rem] text-white gap-[2rem] items-center">
          <FaRegPaperPlane />
          <span>Đăng kí để nhận thêm ưu đãi</span>
        </div>
        <div className='flex items-center '>

          <input type="text" className='w-[45rem] h-[4rem] focus:border-none focus:outline-none p-[1rem] pl-[2rem] text-[1.8rem] rounded-s-[.5rem]' placeholder='Nhập email của bạn'/>
          <button className='w-[10rem] bg-[#444444] text-white h-[4rem] text-[1.8rem] rounded-e-[.5rem]'>Đăng kí</button>
        </div>
        </div>
        
      </div>
        <div className='w-[80%] m-auto py-[3rem] flex justify-between'>
          <div className='w-[25%]'>
            <h3 className='text-[3.5rem] font-semibold'>
              SuperTech
            </h3>
            <div className='flex gap-[2rem] mt-[1.5rem] mb-[2rem]'>
              <RiHeadphoneFill className='text-[3.5rem] text-[#7500CF] font-semibold'/>
              <div>
                <p className='text-[1.5rem]'>Bạn có thắc mắc? Liên hệ ngay!</p>
                <p className='text-[1.6rem] text-[#7500CF] font-semibold mt-[.5rem]'>1900 6969</p>
              </div>
              
            </div>
            <div>
                <h4 className='text-[1.8rem] font-semibold'>Liên hệ</h4>
                <p className='text-[1.6rem] my-[1rem]'>Công Viên Phần Mềm Quang Trung, Tân Chánh Hiệp, Quận 12, Hồ ChÍ Minh, Việt Nam</p>
                <p><FaFacebook className='text-[1.7rem]'/></p>
              </div>
          </div>
          {
            listFooter.map((item)=>{
              return    <div className='mt-[1rem]'>
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
        <div className='w-[100%] bg-[#E5E5E5] h-[4rem] flex flex-col justify-center items-center'>
          <div className='w-[80%] m-auto flex justify-between items-center'>
          <p className='text-[1.5rem] text-[#34005C]'>SuperTech - Cửa Hàng Chuyên Các Mặt Hàng Công Nghệ.</p>
          <img src={nganHang} alt="" className='w-[25rem]' />
          </div>
        </div>
      </div>
  )
}

export default Footer