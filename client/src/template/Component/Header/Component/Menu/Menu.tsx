import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TaskProduct from "./Modal/TaskProduct";

function Menu() {
  const [isProductHovered, setIsProductHovered] = useState(false);

  const menuIcons = [
    { name: "Trang chủ", path: "/" },
    { name: "Giới thiệu", path: "gioi-thieu" },
    { name: "Sản phẩm", path: "san-pham" },
    { name: "Bài viết", path: "bai-viet" },
    { name: "Liên hệ", path: "lien-he" },
  ];

  const handleMouseEnter = (itemName: string) => {
    if (itemName === "Sản phẩm") {
      setIsProductHovered(true);
    }
  };

  const handleMouseLeave = (itemName: string) => {
    if (itemName === "Sản phẩm") {
      setIsProductHovered(false);
    }
  };

  return (
    <div>
      <ul className="flex items-center">
        {menuIcons.map((item) => (
          <li
            key={item.path}
            className="relative md:mr-6"
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={() => handleMouseLeave(item.name)}
          >
            <NavLink
              to={item.path}
              className="text-[1.8rem] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem] text-black font-bold hover:text-purple-600 relative"
            >
              {item.name}
            </NavLink>

            {/* Hiển thị TaskProduct khi hover vào "Sản phẩm" */}
            {item.name === "Sản phẩm" && isProductHovered && (
              <div className="absolute left-0 top-full z-20">
                <TaskProduct />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
