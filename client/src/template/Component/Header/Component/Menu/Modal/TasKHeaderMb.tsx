import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Search from "antd/es/input/Search";
import { FaRegUser } from "react-icons/fa";
// Các import khác...

interface TaskHeaderMbProps {
  onClose: () => void;
}

function TaskHeaderMb({ onClose }: TaskHeaderMbProps) {
  return (
    <div className="w-[320px] h-[100vh] bg-white absolute top-0 left-0 py-4 px-[1rem]">
      <div className='text-[2rem] cursor-pointer absolute top-[1rem] right-[1rem]' onClick={onClose}>
        <IoMdClose />
      </div>
      <div className="text-[3rem] text-center border-b border-gray-500 py-[1rem]">
        <h4 className="mb-[1rem]">SuperTech</h4>
        <form action="" className="w-full h-[38px]">
          <Search
            placeholder="Tìm kiếm sản phẩm"
            // onSearch={onSearch}
            enterButton
            className="inputSearch"
          />
        </form>
      </div>
      <div>
        <ul>
          <li className="text-[2rem]">
            <div className="border-b border-gray-500 py-[1rem]">
              <NavLink to="/" className="text-[2rem] text-black">
                Trang chủ
              </NavLink>
            </div>
            <div className="border-b border-gray-500 py-[1rem]">
              <NavLink to="/gioi-thieu" className="text-[2rem] text-black">
                Giới thiệu
              </NavLink>
            </div>
            <div className="border-b border-gray-500 py-[1rem]">
              <NavLink to="/san-pham" className="text-[2rem] text-black">
                Sản Phẩm
              </NavLink>
            </div>
            <div className="border-b border-gray-500 py-[1rem]">
              <NavLink to="/bai-viet" className="text-[2rem] text-black">
                Bài viết
              </NavLink>
            </div>
            <div className="border-b border-gray-500 py-[1rem]">
              <NavLink to="/lien-he" className="text-[2rem] text-black">
                Liên hệ
              </NavLink>
            </div>
            <div className="border-b border-gray-500 py-[1rem]">
              <NavLink to="/yeu-thich" className="text-[2rem] text-black">
                Yêu thích
              </NavLink>
            </div>
          </li>
        </ul>
        <div className="mt-6">
          <h4 className="text-[1.9rem] py-3">Bạn cần giúp?</h4>
          <div className="text-[1.6rem] py-2">Công Viên Phần Mềm Quang Trung, Tân Chánh Hiệp, Quận 12, Hồ ChÍ Minh, Việt Nam</div>
          <div className="text-[1.6rem] py-2">Email: <b>info@fashionshop.com</b></div>
          <div className="text-[1.6rem] py-2">Phone: <b>1900 6969</b></div>
        </div>
        <div className="border border-gray-500 w-[28%] px-[1rem] py-[1rem] absolute bottom-[3rem]">
          <NavLink to="/dang-nhap" className="flex text-[1.7rem] gap-[1rem]">   
            <FaRegUser />
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default TaskHeaderMb;