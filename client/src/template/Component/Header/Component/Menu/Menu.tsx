import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TaskProduct from "./Modal/TaskProduct";
import { useSpring,animated, useTransition } from "react-spring";

function Menu() {
  const [isVisible, setIsVisible] = useState(false);

  // Sử dụng useTransition để quản lý hiệu ứng mở và đóng
  const transitions = useTransition(isVisible, {
    from: { transform: 'translateY(100%)', opacity: 0 }, // Bắt đầu ngoài màn hình dưới cùng
    enter: { transform: 'translateY(0%)', opacity: 1 },   // Trượt vào vị trí ban đầu
    leave: { transform: 'translateY(100%)', opacity: 0 }, // Trượt ra ngoài màn hình xuống dưới
    config: { tension: 220, friction: 20 }, // Tùy chỉnh độ mượt của hoạt ảnh
  });

  // Khóa cuộn khi menu mở
  // useEffect(() => {
  //   if (isVisible) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isVisible]);
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
                `text-[1.8rem] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem]` + // Class chung cho mọi NavLink
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
          <NavLink to="" className="text-[1.8rem] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem] text-black font-bold">Trang chủ</NavLink>
          <NavLink to="" className="text-[1.8rem] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem] text-black font-bold">Giới thiệu</NavLink>
          <div>
          <button onClick={()=>setIsVisible(!isVisible)} className="text-[1.8rem] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem] text-black font-bold">Sản Phẩm</button>
          {transitions((styles, item) =>
          item ? (
            <div className="">
              {/* Overlay */}
              <animated.div
                style={{
                  opacity: styles.opacity,
                }}
                className=""
                onClick={() => setIsVisible(false)}
              ></animated.div>

              {/* Menu di động với hiệu ứng trượt */}
              <animated.div
                style={{
                  transform: styles.transform,
                }}
                className=""
              >
                <TaskProduct  />
              </animated.div>
            </div>
          ) : null
        )}
     
          </div>

          <NavLink to="" className="text-[1.8rem] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem] text-black font-bold">Bài viết</NavLink>
          <NavLink to="" className="text-[1.8rem] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem] text-black font-bold">Liên hệ</NavLink>

        </li>
      </ul>
    </div>
  );
}

export default Menu;
