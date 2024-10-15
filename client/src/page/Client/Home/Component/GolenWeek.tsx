import React from "react";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";

function GolenWeek() {
  return (
    <div className="w-[100%] mx-auto mt-[1rem] border border-[#E4E7E9] p-[1rem]">
      
      <div>
        <div className="flex">
          <div className="sm:w-[90px]">
            <img
              className="w-[100%]"
              src="https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg"
              alt=""
            />
          </div>
          <div>
        
                <h3 className="xxl:text-[1.8rem] sm:text-[1.5rem] lg:text-[1.6rem] font-semibold my-[.7rem]">MacBook Air 13 inch M2 10GPU</h3>
               
                <p className="xll:text-[1.7rem] sm:text-[1.6rem] text-[#DB363B] font-semibold my-[.7rem]">
                30.000.000đ
            </p>
            <div>
                <button className="px-[2rem] sm:py-[.8rem]  border border-[#7500CF] text-[#7500CF] text-[1.6rem] font-semibold rounded-[0.5rem] transition-all
                hover:bg-[#7500CF] hover:text-white hover:font-medium hover:px-[2rem]
                ">Thêm giỏ hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GolenWeek;
