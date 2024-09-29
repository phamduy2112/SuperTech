import Search from "antd/es/input/Search";
import React from "react";
import "./Header.css";
import { Badge, Button, Dropdown } from "antd";
import { FaBars, FaRegHeart, FaUserCircle } from "react-icons/fa";
import { MdLanguage, MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { NavLink } from "react-router-dom";
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
      <div className="w-[100%]">
        <div className="flex justify-between items-center w-[100%] h-[75px]">
          <div className="text-[3.2rem] font-semibold">SuperTech</div>
          <div className="w-[70%]">
            <form action="" className="w-[100%] h-[38px]">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
                className="inputSearch"
              />
            </form>
          </div>
          <div className="flex gap-[1rem]">
            <div>
              <Badge count={0} showZero>
                <FaRegHeart className="text-[1.7rem] text-[#7500CF]" />
              </Badge>
            </div>
            <div>
              <Badge count={0} showZero>
                <FaRegHeart className="text-[1.7rem] text-[#7500CF]" />
              </Badge>
            </div>
            <div>
              <Badge count={0} showZero>
                <MdOutlineShoppingBag className="text-[1.8rem] text-[#7500CF]" />
              </Badge>
            </div>
            <div>
              <MdLanguage className="text-[1.7rem] text-[#7500CF]" />
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
                className="flex h-[40px] items-center gap-3"
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
      <div className="flex justify-between">
        <div className="h-[41px] bg-[#6308a8] text-white w-[225px]">
          <span className="text-[1rem] font-bold">Danh mục sản phẩm</span>
        </div>
        <div className="h-[41px] bg-[#6308a8]">Danh mục sản phẩm</div>
        <div className="h-[41px] bg-[#6308a8]">Danh mục sản phẩm</div>
      </div>
    </div>
  );
}

export default Header;
