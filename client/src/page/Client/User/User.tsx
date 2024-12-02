import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Container } from '../../../components/Style/Container';
import { FaEdit } from "react-icons/fa";
import { CiHeart, CiUser } from "react-icons/ci";
import { IoMdExit } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { useAppSelector } from '../../../redux/hooks';
import { IMG_BACKEND, IMG_BACKEND_USER } from '../../../constants';

function User() {
  const navigate = useNavigate();
  const location = useLocation();
  const user: any = useAppSelector((state:any) => state.user.user);

  // Điều hướng mặc định
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/người-dùng'); // Điều hướng đến Tài khoản
    }
  }, [location.pathname, navigate]);

  // Logic kiểm tra active
  const isActive = (path: string) => {
    console.log('Current Path:', location.pathname); // Debugging
    if (path === '/người-dùng' && (location.pathname === '/' || location.pathname === '/người-dùng')) {
      return true; // Mặc định active Tài khoản
    }
    return location.pathname === path;
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Container className="pt-[1rem]">
      <div className="flex justify-between">
        <div className="w-[25%] p-[2rem] bg-white h-[100%] shadow-md">
          <div className="flex gap-[1rem]">
            <div className="w-[7rem] h-[7rem] rounded-[50%] overflow-hidden">
              <div className="xl:text-[25px] md:text-[2rem]">
                <div
                  className={`flex text-[2.5rem] h-[7rem] w-full items-center justify-center rounded-full ${user?.user_image ? "bg-cover bg-center bg-no-repeat" : "bg-[#F62682] text-[16px] text-white "} `}
                  style={{
                    backgroundImage: user?.user_image ? `url(${IMG_BACKEND_USER}/${user.user_image})` : "none",
                  }}
                >
                  {(user?.user_image == null || user?.user_image == '' && user?.user_name) ? user?.user_name[0].toUpperCase() : null}
                </div>
              </div>
            </div>
            <div className="mt-[.5rem]">
              <h3 className="text-[2rem]">{user?.user_name}</h3>
              <div className="flex text-[1.8rem] py-[.6rem] text-customColor">
                <FaEdit />
                <p>Chỉnh sửa</p>
              </div>
            </div>
          </div>
          <ul className="mt-[3rem]">
            <div
              onClick={() => handleNavigation('/người-dùng')}
              className={`flex gap-[.5rem] text-[1.9rem] px-[1rem] py-[.9rem] cursor-pointer border ${isActive('/người-dùng') ? 'border-customColor bg-customColor text-white' : 'border-customColor'}`}
            >
              <CiUser className="font-medium" />
              <div>Tài khoản</div>
            </div>
            <div
              onClick={() => handleNavigation('/don-hang-cua-ban')}
              className={`flex gap-[.5rem] text-[1.9rem] px-[1rem] py-[.9rem] cursor-pointer border ${isActive('/don-hang-cua-ban') ? 'border-customColor bg-customColor text-white' : 'border-customColor'}`}
            >
              <FaEdit />
              <div>Đơn mua</div>
            </div>
            <div
              onClick={() => handleNavigation('/tin-nhan')}
              className={`flex gap-[.5rem] text-[1.9rem] px-[1rem] py-[.9rem] cursor-pointer border ${isActive('/tin-nhan') ? 'border-customColor bg-customColor text-white' : 'border-customColor'}`}
            >
              <FiMessageSquare />
              <div>Tin nhắn</div>
            </div>
            <div
              onClick={() => handleNavigation('/yeu-thich')}
              className={`flex gap-[.5rem] text-[1.9rem] px-[1rem] py-[.9rem] cursor-pointer border ${isActive('/yeu-thich') ? 'border-customColor bg-customColor text-white' : 'border-customColor'}`}
            >
              <CiHeart />
              <div>Yêu thích</div>
            </div>
            <div
              onClick={() => handleNavigation('/thoat')}
              className="flex gap-[.5rem] text-[1.9rem] px-[1rem] py-[.9rem] cursor-pointer border border-customColor"
            >
              <IoMdExit />
              <div>Thoát</div>
            </div>
          </ul>
        </div>
        <div className="w-[70%] p-[2rem] bg-white h-[100%] shadow-md">
          <Outlet />
        </div>
      </div>
    </Container>
  );
}

export default User;
