import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TaskProduct from "./Modal/TaskProduct";
import { getCatelogryThunkAll } from "../../../../../redux/catelogry/catelogry.slice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";

interface Category {
  category_id: number;
  category_name: string | null;
  category_image: string | null;
  category_dad: number | null;
  category_date_task: string;
  category_task: boolean;
}

function Menu() {
  const catelogries = useAppSelector((state) => state.category.AlllistCatelories as Category[]);

  const AppDispatch = useAppDispatch();

  useEffect(() => {
    AppDispatch(getCatelogryThunkAll());
  }, [AppDispatch]);
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isProductClicked, setIsProductClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsProductHovered(true); // Set to true on hover
  };

  const handleMouseLeave = () => {
    setIsProductHovered(false); // Set to false when hover leaves
  };

  const handleClick = () => {
    setIsProductClicked(!isProductClicked); // Toggle on click
  };

  return (
    <div>
      <ul className="flex items-center">
        <li className="relative md:mr-6">
          <NavLink
            to="/"
            className="text-[1.8rem] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem] text-black font-bold hover:text-purple-600 relative"
          >
            Trang chủ
          </NavLink>
        </li>
        <li className="relative md:mr-6">
          <NavLink
            to="/"
            className="text-[1.8rem] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem] text-black font-bold hover:text-purple-600 relative"
          >
            Giới thiệu
          </NavLink>
        </li>
        <li
          className="relative md:mr-6"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick} // Toggle click state
        >
          <div className="text-[1.8re1m] md:mr-[2rem] lg:mr-[2rem] xl:mr-[6rem] text-black font-bold hover:text-purple-600 relative">
            Sản phẩm
          </div>
          {/* Display TaskProduct when hovered or clicked */}
          {(isProductHovered || isProductClicked) && (
            <div className="absolute left-0 top-full z-20">
              <TaskProduct props={catelogries} />
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Menu;
