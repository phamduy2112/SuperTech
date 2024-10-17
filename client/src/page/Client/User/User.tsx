import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '../../../components/Style/Container'
import { FaEdit } from "react-icons/fa";
import {  NavLink } from "react-router-dom";
import { CiHeart, CiUser } from "react-icons/ci";
import { IoMdExit } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
function User() {
  
  return (
    <Container className="pt-[1rem]">
   <div className="flex justify-between">
        <div className="w-[25%] p-[2rem]">
          <div className="flex gap-[1rem]">
            <div className="w-[7rem] h-[7rem] rounded-[50%] overflow-hidden">
              <img
                className="w-[100%] h-[auto] max-w-full max-h-full"
                src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/370806166_3341899006026926_5652140347426452061_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=dZ_Nu8wRLDYQ7kNvgGdvkku&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AuQykorbPs584QhB_6DcMSM&oh=00_AYCUqAiN4zPLkGc5FdX33QjAy-gLr5BAvgZ-GxbVAgQVhg&oe=671673CF"
                alt=""
              />
            </div>
            <div className="mt-[.5rem]">
              <h3 className="text-[2rem]">Phạm Ngọc Duy</h3>
              <div className="flex text-[1.8rem] py-[.6rem] text-[#7500CF]">
                <FaEdit />
                <p>Chỉnh sửa</p>
              </div>
            </div>
          </div>
          <ul className="mt-[3rem]">
            <NavLink
              to=""
              className="
                    flex gap-[.5rem] text-[1.9rem] border border-[#7500CF] bg-[#7500CF] text-white px-[1rem] py-[.9rem]"
            >
              <CiUser className="font-medium" />
              <div>Tài khoản</div>
            </NavLink>
            <NavLink
              to=""
              className="
                    flex gap-[.5rem] text-[1.9rem] border border-[#7500CF] px-[1rem] py-[.9rem] border-b-transparent"
            >
              <FaEdit />
              <NavLink to="">Đơn mua</NavLink>
            </NavLink>
            <NavLink
              to=""
              className="
                    flex gap-[.5rem] text-[1.9rem] border border-[#7500CF] px-[1rem] py-[.9rem] border-b-transparent"
            >
              {" "}
              <FiMessageSquare />
              <NavLink to="">Tin nhắn</NavLink>
            </NavLink>
            <NavLink
              to=""
              className="
                    flex gap-[.5rem] text-[1.9rem] border border-[#7500CF] px-[1rem] py-[.9rem] border-b-transparent"
            >
              {" "}
              <CiHeart />
              <NavLink to="">Yêu thích</NavLink>
            </NavLink>
            <NavLink
              to=""
              className="
                    flex gap-[.5rem] text-[1.9rem] border border-[#7500CF] px-[1rem] py-[.9rem] "
            >
              {" "}
              <IoMdExit />
              <NavLink to="">Thoát</NavLink>
            </NavLink>
          </ul>
    
        </div>
        <div className='w-[70%] p-[2rem]'>
         <Outlet/>    
        </div>
    
      </div>
       
    </Container>
  )
}

export default User