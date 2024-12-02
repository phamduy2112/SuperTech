import React, { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

function TaskCatelogry() {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null); // Dùng để theo dõi submenu đang mở
  const dropdownRef = useRef(null); // Sử dụng ref để tham chiếu đến dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (index) => {
    setSubMenuOpen(subMenuOpen === index ? null : index); // Mở hoặc đóng submenu
  };

  const handleClickOutside = (event) => {
    // Nếu click ngoài dropdown thì đóng dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside); // Cleanup khi component unmount
    };
  }, [isOpen]);

  return (
    <div className='relative' ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        className="h-[43px] cursor-pointer md:hidden lg:flex bg-[#6308a8] rounded-t-[.5rem] text-white xl:w-[225px] justify-center items-center"
      >
        <div className="md:text-[1.3rem] px-[1.5rem] xl:text-[1.5rem] xl:font-semibold">
          Danh mục sản phẩm
        </div>
      </div>

      {isOpen && (
        <div
          className={`absolute z-50 left-0 w-full bg-white shadow-lg rounded-b-[.5rem] transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='w-[100%]'>
            <ul>
              <li className='w-[100%] border border-b-[#7500CF] py-[1.2rem] px-[1.5rem]'>
                <NavLink to="" className="text-[1.8rem]">asdsad</NavLink>
              </li>
              <li className='w-[100%] relative border border-b-[#7500CF] py-[1.2rem] px-[1.5rem]'>
                <button
                  className="text-[1.8rem] flex justify-between items-center w-[100%] relative"
                  onClick={() => toggleSubMenu(0)} // Mở submenu thứ nhất
                >
                  asdsad
                  <MdKeyboardArrowRight className="text-[#7500CF]" />
                </button>
                {/* Submenu */}
                <ul
                  className={`absolute right-[-9.9rem] top-[-4.5rem] bg-[white] shadow-lg rounded-b-[.5rem] transition-all duration-300 ease-in-out ${
                    subMenuOpen === 0 ? ' opacity-100' : 'opacity-0'
                  }`}
                >
                  <li className='w-[100%] border border-b-[#7500CF] py-[1.2rem] px-[1.5rem]'>
                    <NavLink to="" className="text-[1.8rem]">asdsad</NavLink>
                  </li>
                  <li className='w-[100%] border border-b-[#7500CF] py-[1.2rem] px-[1.5rem]'>
                    <button className="text-[1.8rem] flex justify-between items-center w-[100%]">
                      asdsad
                      <MdKeyboardArrowRight className="text-[#7500CF]" />
                    </button>
                  </li>
                  <li className='w-[100%] border border-b-[#7500CF] py-[1.2rem] px-[1.5rem]'>
                    <NavLink to="" className="text-[1.8rem]">asdsad</NavLink>
                  </li>
                </ul>
              </li>
              <li className='w-[100%] border border-b-[#7500CF] py-[1.2rem] px-[1.5rem]'>
                <NavLink to="" className="text-[1.8rem]">asdsad</NavLink>
              </li>
              {/* Other list items */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskCatelogry;
