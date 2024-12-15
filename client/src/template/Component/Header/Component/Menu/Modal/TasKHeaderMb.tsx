import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Search from "antd/es/input/Search";
import { FaRegUser } from "react-icons/fa";
import { Paths } from "../../../../../../router/component/RouterValues";
import { useAppSelector } from "../../../../../../redux/hooks";
import { setLogin, setToken } from "../../../../../../redux/user/user.slice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

interface TaskHeaderMbProps {
  onClose: () => void;
}

function TaskHeaderMb({ onClose }: TaskHeaderMbProps) {
  // Hàm để đóng modal khi tìm kiếm
  const handleSearch = (value: string) => {
    // Có thể thêm logic xử lý tìm kiếm ở đây, ví dụ gửi giá trị `value` đi.
    console.log("Searching for:", value);
    // Đóng modal khi người dùng tìm kiếm
    // onClose();
  };
  const login = useAppSelector((state) => state.user.login);
  const user = useAppSelector((state) => state.user.user);
  const dispatch=useDispatch()
    const navigate=useNavigate()
  
  const logout=()=>{
    dispatch(setToken(null))
    toast.success('Đăng xuất thành công!');
    navigate(`${Paths.Login}`)
    dispatch(setLogin(false))

  }
  return (
    <div className="w-[320px] h-[100vh] bg-white flex flex-col px-[2rem]">
      <div className="text-[2rem] cursor-pointer absolute" onClick={onClose}>
        <IoMdClose />
      </div>
      <div className="text-[3rem] text-center border-b border-gray-500 py-[1rem]">
        <h4 className="mb-[1rem]">SuperTech</h4>
        <form action="" className="w-full h-[38px]">
          <Search
            placeholder="Tìm kiếm sản phẩm"
            onSearch={handleSearch}  // Gọi hàm handleSearch khi người dùng nhấn tìm kiếm
            enterButton
            className="inputSearch"
          />
        </form>
      </div>
      <div className="flex-grow">
        <ul>
          <li className="text-[2rem]">
            <div className="border-b border-gray-500 py-[1rem]">
              <NavLink to="/" className="text-[2rem] text-black">
                Trang chủ
              </NavLink>
            </div>
            <div className="border-b border-gray-500 py-[1rem]">
              <NavLink to="/gioi-thieu" className="text-[2rem] text-black">
                Giới thiệu
              </NavLink>
            </div>
            <div className="border-b border-gray-500 py-[1rem]">
              <NavLink to="/san-pham" className="text-[2rem] text-black">
                Sản Phẩm
              </NavLink>
            </div>
            <div className="border-b border-gray-500 py-[1rem]">
              <NavLink to="/bai-viet" className="text-[2rem] text-black">
                Bài viết
              </NavLink>
            </div>
            <div className="border-b border-gray-500 py-[1rem]">
              <NavLink to="/lien-he" className="text-[2rem] text-black">
                Liên hệ
              </NavLink>
            </div>
            <div className="border-b border-gray-500 py-[1rem]">
              <NavLink to="/yeu-thich" className="text-[2rem] text-black">
                Yêu thích
              </NavLink>
            </div>
          </li>
        </ul>
        <div className="mt-6">
          <h4 className="text-[1.9rem] py-3">Bạn cần giúp?</h4>
          <div className="text-[1.6rem] py-2">Công Viên Phần Mềm Quang Trung, Tân Chánh Hiệp, Quận 12, Hồ ChÍ Minh, Việt Nam</div>
          <div className="text-[1.6rem] py-2">Email: <b>info@fashionshop.com</b></div>
          <div className="text-[1.6rem] py-2">Phone: <b>1900 6969</b></div>
        </div>
      </div>
      {/* Login button at the bottom */}
      <div className="border-t border-gray-500 w-full px-[1rem] py-[1rem] mt-auto">
       {
        login
        ? 
        <div className="text-[1.5rem]">
          Xin chào {user?.user_name} 
          <span className="mx-3">|</span>
          <button onClick={()=>{logout()}}> Đăng xuất</button>
        </div>
        
        : <NavLink to={Paths.Login} className="flex text-[1.7rem] gap-[1rem]">
          <FaRegUser />
          Login
        </NavLink>
       }
       
      </div>
    </div>
  );
}

export default TaskHeaderMb;
