import React from "react";
import { NavLink } from "react-router-dom";
import TaskProduct from "./Modal/TaskProduct";

function Menu() {
  const menuIcons: any = [
    {
      name: "Trang chủ",
      path: "/",
    },
    {
      name: "Giới thiệu",
      path: "giới-thiệu",
    },
    {
      name: "Sản Phẩm",
      path: "sản-phẩm",
    },
    {
      name: "Bài viết",
      path: "bài-viết",
    },
    {
      name: "Liên hệ",
      path: "liên-hệ",
    },
  ];
  return (
    <div>
      {/* {menuIcons.map((item: any) => {
        return (
       
          <NavLink
            key={item.path}
            to={item.path}
            className={
              ({ isActive }) =>
                `text-[1.7rem] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem]` + // Class chung cho mọi NavLink
                (isActive
                  ? "text-purple-600 font-bold" // Class khi active
                  : "text-black font-bold") // Class khi không active
            }
          >
            {item.name}
          </NavLink>
        );
      })} */}
      <ul>
        <li className="flex">
          <NavLink to="" className="text-[1.7rem] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem] text-black font-bold">Trang chủ</NavLink>
          <NavLink to="" className="text-[1.7rem] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem] text-black font-bold">Giới thiệu</NavLink>
          <div>
          <button className="text-[1.7rem] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem] text-black font-bold">Sản Phẩm</button>
          {/* <TaskProduct/> */}
          </div>

          <NavLink to="" className="text-[1.7rem] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem] text-black font-bold">Bài viết</NavLink>
          <NavLink to="" className="text-[1.7rem] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem] text-black font-bold">Liên hệ</NavLink>

        </li>
      </ul>
    </div>
  );
}

export default Menu;
