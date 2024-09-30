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
    <div className="flex flex-col">
    <div className='w-[100%] h-[35px] bg-[#7500CF] text-white flex justify-center items-center'>
      <div className='w-[80%] m-auto flex justify-between items-center'>
            <h3 className='text-[1.5rem] font-medium'>Chào mừng đến với cửa hàng SuperTech</h3>
            <div className="flex gap-[1.2rem]">
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
      <div className="w-[80%] m-auto">
  
        <div className="flex justify-between items-center w-[100%] h-[75px]">
          <div className="text-[3.2rem] font-semibold">SuperTech</div>
          <div className="w-[70%]">
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

                <FaRegHeart className="text-[2.5rem] text-[#7500CF]" />
   
            </div>
            <div>
              <Badge count={0} showZero>
                <FaRegHeart className="text-[2.4rem] text-[#7500CF]" />
              </Badge>
            </div>
            <div>
              <Badge count={0} showZero>
                <MdOutlineShoppingBag className="text-[2.6rem] text-[#7500CF]" />
              </Badge>
            </div>
            <div>
              <MdLanguage className="text-[2.5rem] text-[#7500CF]" />
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
                className="flex h-[40px] items-center gap-3 DropDown"
                style={{ borderRadius: "30px" }}
              >
                <FaBars />
                <div className="text-[25px]">
                  <FaUserCircle />
                </div>
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-[80%] m-auto">
        <div className="h-[41px] bg-[#6308a8] rounded-t-[.5rem] text-white w-[225px] flex justify-center items-center">
          <span className="text-[1.5rem] font-semibold"
      
          >Danh mục sản phẩm</span>
        </div>
       <div className="flex justify-center">
        <Menu/>
       </div>
        <div className="text-[1.6rem] text-[#FF0000] font-semibold">Miễn phí vận chuyển trên 25 triệu</div>
      </div>
    </div>
  );
}

export default Header;
