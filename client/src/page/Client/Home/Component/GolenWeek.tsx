import React from "react";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";

function GolenWeek() {
  return (
    <div className="w-[100%] mx-auto">
      
      <div>
        <div className="flex">
          <div className="xll:w-[140px] sm:w-[130px]">
            <img
              className="w-[100%]"
              src="https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg"
              alt=""
            />
          </div>
          <div>
          <div className="bg-[#F1F1F1] py-[.6rem] px-[.8rem] xxl:w-[45%] sm:w-[70%]">
                    <span className="text-[1.3rem] font-semibold">Trả góp 0%</span>
                    
                </div>
                <h3 className="xxl:text-[1.7rem] sm:text-[1.5rem] lg:text-[1.6rem] font-semibold my-[.7rem]">MacBook Air 13</h3>
                <div className="flex items-center  gap-1">
                    <PiCurrencyDollarSimpleFill className="text-[1.7rem]"/>
                <span className="text-gray-500 text-[1.5rem]">Online giá rẻ quá</span></div>
                <p className="xll:text-[1.8rem] sm:text-[1.6rem] text-[#DB363B] font-semibold my-[.7rem]">
                30.000.000đ
            </p>
            <div>
                <button className="w-[100%] sm:py-[.8rem] xll:py-[1rem] border border-[#7500CF] text-[#7500CF] text-[1.6rem] font-semibold rounded-[0.5rem] transition-all
                hover:bg-[#7500CF] hover:text-white hover:font-medium
                ">Thêm giỏ hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GolenWeek;
