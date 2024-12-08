import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { getCatelogry } from "../../../../../../service/catelogry/catelogry.service";

function TaskProduct() {
  const [cateloriesDad, setCatelories] = useState([]);

  useEffect(() => {
    const getCategoriesDad = async () => {
      const resp = await getCatelogry();
      setCatelories(resp.data.content);
    };
    getCategoriesDad();
  }, []);
  
  return (
    <div className="absolute z-50 left-0 top-full mt-2 bg-white p-4 shadow-lg rounded-lg">
      <div className="w-[250px] py-[1.5rem] px-[1.6rem]">
        <ul className="space-y-6">
          <div>
            <h3 className="text-[1.6rem] text-[#7500CF] mb-[1rem] font-semibold border-b-2 border-[#7500CF] pb-2">
              Điện thoại
            </h3>
            {cateloriesDad
              .filter((item) => item.category_dad === 1)
              .map((item) => (
                <li key={item.id} className="py-2 hover:bg-gray-100 rounded-lg">
                  <NavLink
to={`/list-san-pham?category_dad=${item.category_dad}&category=${item.category_id}`}
className="text-[1.6rem] text-gray-800 hover:text-[#7500CF] transition-all duration-300"
                  >
                    {item.category_name}
                  </NavLink>
                </li>
              ))}
          </div>

          <div>
            <h3 className="text-[1.6rem] text-[#7500CF] mb-[1rem] font-semibold border-b-2 border-[#7500CF] pb-2">
              Laptop
            </h3>
            {cateloriesDad
              .filter((item) => item.category_dad === 2)
              .map((item) => (
                <li key={item.id} className="py-2 hover:bg-gray-100 rounded-lg">
                  <NavLink
                    to=""
                    className="text-[1.6rem] text-gray-800 hover:text-[#7500CF] transition-all duration-300"
                  >
                    {item.category_name}
                  </NavLink>
                </li>
              ))}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default TaskProduct;
