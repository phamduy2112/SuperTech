import React from 'react'
import { useAppSelector } from '../../../../redux/hooks';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown } from 'antd';
import { FaBars, FaUserCircle } from 'react-icons/fa';

function DropdownUser() {
    const user: any = useAppSelector((state) => state.user.user);
    console.log(user);
    
    const items = [
        {
          key: "1",
          label: user ? (
            <NavLink to={"/người-dùng"}>Trang cá nhân</NavLink>
          ) : (
            <NavLink to={"/đăng-nhập"}>Đăng nhập</NavLink>
          ),
        },
        {
          key: "2",
          label: user ? (
            <button >Đăng xuất</button>
          ) : (
            <NavLink to={"/đăng-kí"}>Đăng Kí</NavLink>
          ),
        },
        user?.role === "ADMIN"
          ? { key: "3", label: <NavLink to={"/admin/dashboard"}>Quản trị</NavLink> }
          : null,
      ];
  return (
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
        {user ? (
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${user.avatar ? "bg-cover bg-center bg-no-repeat" : "bg-[#F62682] text-[16px] text-white "} `}
                    style={{
                      backgroundImage: user.user_image
                        ? `url(${user.user_image})`
                        : "none",
                    }}
                  >
                    {user.user_image == null ? user.user_name[0].toUpperCase() : null}
                  </div>
                ) : (
                  <FaUserCircle />
                )}
        </div>
      </Button>
    </Dropdown>
  </div>
  )
}

export default DropdownUser