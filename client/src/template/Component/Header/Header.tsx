import Search from "antd/es/input/Search";
import React from "react";
import "./Header.css";
import { Badge, Button, Dropdown } from "antd";
import { FaBars, FaRegHeart, FaUserCircle } from "react-icons/fa";
import { MdLanguage, MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Menu from "./Component/Menu/Menu";
import { CiLocationOn } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'
import { IoIosSearch } from "react-icons/io";
import TaskCart from "./Component/Menu/Modal/TaskCart";
import TaskEyes from "./Component/Menu/Modal/TaskEyes";
import TaskCatelogry from "./Component/Menu/Modal/TaskCatelogry";
function Header() {
  const onSearch = (value: any, _e: any, info: any) =>
    console.log(info?.source, value);
  const items = [
    {
      key: "1",
      label: <NavLink to={"auth/signin"}>Đăng Nhập</NavLink>,
    },
    {
      key: "2",
      label: <NavLink to={"auth/signin"}>Đăng Kí</NavLink>,
    },
  ];

  return (
    <div>
<div className="flex flex-col relative">
    <div className='w-[100%] h-[35px] bg-[#7500CF] text-white flex justify-center items-center'>
      <div className='w-[80%] m-auto flex md:justify-between sm:justify-center items-center'>
            <h3 className='text-[1.5rem] font-medium sm:text-center'>Chào mừng đến với cửa hàng SuperTech</h3>
            <div className="gap-[1.2rem] sm:hidden md:flex">
              <div className='flex justify-center items-center gap-[.5rem] text-[1.4rem]'>
              <CiLocationOn  className='text-[1.4rem]'/>
              <span>Địa điểm</span>
              </div>
              <div className='flex justify-center items-center gap-1 text-[1.4rem]'>
              <CiLocationOn  className='text-[1.4rem]'/>
              <span>Tra cứu hóa đơn</span>
              </div>
              <div className='flex justify-center items-center gap-1 text-[1.4rem]'>
              <CiLocationOn  className='text-[1.4rem]'/>
              <span>Cửa hàng</span>
              </div>
              <div className='flex justify-center items-center gap-1 text-[1.4rem]'>
              <FaRegUser   className='text-[1.4rem]'/>
              <span>Tài khoản</span>
              </div>
            </div>
      </div>
      </div>
      <div className="xl:w-[80%] xmd:w-[90%] sm:w-[95%] m-auto sm:hidden md:block" >
  
        <div className="flex justify-between items-center w-[100%] md:h-[5rem] lg:h-[75px]">
          <div className="md:text-[2.5rem] xl:text-[3.2rem] font-semibold">SuperTech</div>
          <div className="2xl:w-[70%] lg:w-[60%] md:w-[50%]">
            <form action="" className="w-[100%] h-[38px]">
              <Search
                placeholder="Tìm kiếm sản phẩm"
                onSearch={onSearch}
                enterButton
                className="inputSearch"
              />
            </form>
          </div>
          <div className="flex gap-[1rem]">
            <div>

                <FaRegHeart className="xl:text-[2.5rem] md:text-[2rem] xl:block sm:hidden text-[#7500CF]" />
   
            </div>
            <div>
              <Badge count={0} showZero>
                <FaRegHeart className="xl:text-[2.4rem]  md:text-[2rem] text-[#7500CF]" />
              </Badge>
            </div>
            <div>
              <Badge count={0} showZero>
                <MdOutlineShoppingBag className="xl:text-[2.6rem]  md:text-[2rem] text-[#7500CF]" />
              </Badge>
            </div>
            <div>
              <MdLanguage className="xl:text-[2.5rem]  md:text-[2rem] text-[#7500CF]" />
            </div>
          </div>
          <div>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
              arrow
              trigger={["click"]}
          
            >
              <Button
                className="flex xl:h-[40px] md:h-[3rem] items-center xl:gap-3 md:gap-2 md:rounded-[1.5rem] xl:rounded-[3rem] DropDown"

              >
                <FaBars />
                <div className="xl:text-[25px] md:text-[2rem]">
                  <FaUserCircle />
                </div>
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="md:flex items-center lg:justify-start xl:justify-between md:justify-center w-[80%] m-auto sm:hidden">
     <div className="relative">
          <div className="h-[41px] md:hidden lg:flex bg-[#6308a8] rounded-t-[.5rem] text-white xl:w-[225px] justify-center items-center">
          <div className="md:text-[1.3rem] px-[1.5rem] xl:text-[1.5rem] xl:font-semibold"
      
          >Danh mục sản phẩm</div>
          
        </div>
        {/* <TaskCatelogry/> */}
     <div>
   
     </div>

     </div>
    
       <div className="flex justify-center items-center lg:ml-[5rem] xl:ml-0 md:py-5 xl:py-0">
        <Menu/>
       </div>
        <div className=" md:hidden xl:flex text-[1.6rem] text-[#FF0000] font-semibold">Miễn phí vận chuyển trên 25 triệu</div>
      </div>
      
      {/* mobile */}
      <div className="md:hidden sm:shadow-xl flex justify-center items-center ">
            <div className=" w-[95%] m-auto">
              <div className="flex items-center justify-between bg-white py-[1rem]">
                  <div className="text-[2rem]">
                 <FaBars />
              </div>
              <h3 className="text-[2.5rem]">SuperTech</h3>
              <div className="text-[2.5rem] flex">
                <IoIosSearch />
                <Badge count={0} showZero>
                <MdOutlineShoppingBag className="text-[2.5rem] text-[#7500CF]" />
              </Badge>
              </div>
              </div>
            
              <div>

              </div>
            </div>
      </div>
      {/* <TaskCart/> */}
      {/* <TaskEyes/> */}
      
    </div>

    </div>
    
  );
}

export default Header;
