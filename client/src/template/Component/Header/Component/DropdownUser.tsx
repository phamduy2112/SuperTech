import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown } from 'antd';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { getUserThunk } from '../../../../redux/user/user.slice';
import { IMG_BACKEND } from '../../../../constants';

function DropdownUser() {
  const dispatch = useAppDispatch();
  const user: any = useAppSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  // Check if the token exists in local storage
  const token = localStorage.getItem('token');

  const items = [
    {
      key: "1",
      label: token ? (
        <NavLink to={"/nguoi-dung"}>Trang cá nhân</NavLink>
      ) : (
        <NavLink to={"/dang-nhap"}>Đăng nhập</NavLink>
      ),
    },
    {
      key: "2",
      label: token ? (
        <button>Đăng xuất</button>
      ) : (
        <NavLink to={"/dang-ky"}>Đăng Kí</NavLink>
      ),
    },
    user?.role === "ADMIN"
      ? { key: "3", label: <NavLink to={"/admin/dashboard"}>Quản trị</NavLink> }
      : null,
  ].filter(Boolean); // Remove null entries from items array

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
            {token ? (
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${user?.user_image ? "bg-cover bg-center bg-no-repeat" : "bg-[#F62682] text-[16px] text-white "} `}
                style={{
                  backgroundImage: user?.user_image ? `url(${IMG_BACKEND}/${user.user_image})` : "none",
                }}
              >
                {(user?.user_image && user?.user_name) ? user.user_name[0].toUpperCase() : null}
              </div>
            ) : (
              <FaUserCircle />
            )}
          </div>
        </Button>
      </Dropdown>
    </div>
  );
}

export default DropdownUser;
