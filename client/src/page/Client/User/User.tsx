import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '../../../components/Style/Container'
import { FaEdit } from "react-icons/fa";
import {  NavLink } from "react-router-dom";
import { CiHeart, CiUser } from "react-icons/ci";
import { IoMdExit } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { useAppSelector } from '../../../redux/hooks';
import { IMG_BACKEND } from '../../../constants';
function User() {
  const user: any = useAppSelector((state) => state.user.user);

  return (
    <Container className="pt-[1rem]">
   <div className="flex justify-between">
        <div className="w-[25%] p-[2rem] bg-white h-[100%] shadow-md">
          <div className="flex gap-[1rem]">
            <div className="w-[7rem] h-[7rem] rounded-[50%] overflow-hidden">
            <div className="xl:text-[25px] md:text-[2rem]">
                        {  <div
                className={`flex text-[2.5rem] h-[7rem] w-full items-center justify-center rounded-full ${user?.user_image ? "bg-cover bg-center bg-no-repeat" : "bg-[#F62682] text-[16px] text-white "} `}
                style={{
                  backgroundImage: user?.user_image ? `url(${IMG_BACKEND}/${user.user_image})` : "none",
                }}
              >
                              {(user?.user_image==null||user?.user_image=='' && user?.user_name) ? user?.user_name[0].toUpperCase() : null}

              </div>}
                    </div>
            </div>
            <div className="mt-[.5rem]">
              <h3 className="text-[2rem]">Phạm Ngọc Duy</h3>
              <div className="flex text-[1.8rem] py-[.6rem] text-customColor">
                <FaEdit />
                <p>Chỉnh sửa</p>
              </div>
            </div>
          </div>
          <ul className="mt-[3rem]">
            <NavLink
              to=""
              className="
                    flex gap-[.5rem] text-[1.9rem] border border-customColor bg-customColor text-white px-[1rem] py-[.9rem]"
            >
              <CiUser className="font-medium" />
              <div>Tài khoản</div>
            </NavLink>
            <NavLink
              to=""
              className="
                    flex gap-[.5rem] text-[1.9rem] border border-customColor px-[1rem] py-[.9rem] border-b-transparent"
            >
              <FaEdit />
              <NavLink to="/don-hang-cua-ban">Đơn mua</NavLink>
            </NavLink>
            <NavLink
              to=""
              className="
                    flex gap-[.5rem] text-[1.9rem] border border-customColor px-[1rem] py-[.9rem] border-b-transparent"
            >
              {" "}
              <FiMessageSquare />
              <NavLink to="">Tin nhắn</NavLink>
            </NavLink>
            <NavLink
              to=""
              className="
                    flex gap-[.5rem] text-[1.9rem] border border-customColor px-[1rem] py-[.9rem] border-b-transparent"
            >
              {" "}
              <CiHeart />
              <NavLink to="">Yêu thích</NavLink>
            </NavLink>
            <NavLink
              to=""
              className="
                    flex gap-[.5rem] text-[1.9rem] border border-customColor px-[1rem] py-[.9rem] "
            >
              {" "}
              <IoMdExit />
              <NavLink to="">Thoát</NavLink>
            </NavLink>
          </ul>
    
        </div>
        <div className='w-[70%] p-[2rem] bg-white h-[100%] shadow-md'>
         <Outlet/>    
        </div>
    
      </div>
       
    </Container>
  )
}

export default User