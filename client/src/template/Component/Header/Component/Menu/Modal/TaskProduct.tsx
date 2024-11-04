import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

function TaskProduct() {
  return (
    <div className="absolute z-50 di left-0 top-full mt-2 bg-white p-4 ">
      <div className="w-[500px] py-[2rem]  px-[1.6rem]">
        <ul className="flex justify-between">
          <div className="">
            <h3 className="text-[1.6rem] text-[#7500CF] mb-[.5rem] font-semibold">
              Điện thoại
            </h3>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem]">
                Iphone
              </NavLink>
            </li>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem]">
                Iphone
              </NavLink>
            </li>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem] ">
                Iphone
              </NavLink>
            </li>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem] ">
                Iphone
              </NavLink>
            </li>
          </div>
          <div className="">
            <h3 className="text-[1.6rem] text-[#7500CF] mb-[.5rem] font-semibold">
              Laptop
            </h3>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem] ">
                Iphone
              </NavLink>
            </li>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem] ">
                Iphone
              </NavLink>
            </li>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem] ">
                Iphone
              </NavLink>
            </li>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem] ">
                Iphone
              </NavLink>
            </li>
          </div>
          <div className="">
            <h3 className="text-[1.6rem] text-[#7500CF] mb-[.5rem] font-semibold">
              Phụ kiện
            </h3>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem] ">
                Iphone
              </NavLink>
            </li>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem] ">
                Iphone
              </NavLink>
            </li>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem] ">
                Iphone
              </NavLink>
            </li>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem] ">
                Iphone
              </NavLink>
            </li>
          </div>
          <div className="">
            <h3 className="text-[1.6rem] text-[#7500CF] mb-[.5rem] font-semibold">
              Sản phẩm
            </h3>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem] ">
                Sản phẩm mới
              </NavLink>
            </li>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem] ">
                Iphone
              </NavLink>
            </li>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem] ">
                Iphone
              </NavLink>
            </li>
            <li className="w-[100%] py-2">
              <NavLink to="" className="text-[1.6rem] ">
                Iphone
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default TaskProduct;
