import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { Badge, Button, Dropdown } from "antd";
import { FaBars, FaRegHeart, FaUserCircle } from "react-icons/fa";
import { MdLanguage, MdOutlineShoppingBag } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import Menu from "./Component/Menu/Menu";
import { CiLocationOn } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'
import { IoIosSearch } from "react-icons/io";
import TaskCart from "./Component/Menu/Modal/TaskCart";
import TaskCatelogry from "./Component/Menu/Modal/TaskCatelogry";
import TaskHeaderMb from "./Component/Menu/Modal/TasKHeaderMb";
import { useSpring,animated } from "react-spring";
import { getLocalStorage } from "../../../utils";
import DropdownUser from "./Component/DropdownUser";
import { useAppSelector } from "../../../redux/hooks";
import { getFavouriteProductThunk } from "../../../redux/favourite/Favourite.slice";
import { useDispatch } from "react-redux";
import './modalUserCustom.css'
import { getsetting, } from '../../../service/setting/setting.service';
function Header() {

  const navigate = useNavigate();

  const onSearch = (value: string) => {
    if(value!=""){
      navigate(`/tim-kiem?tukhoa=${value}`);
    }
    
  };

  const items = [
    {
      key: "1",
      label: <NavLink to={"auth/signin"}>Đăng Nhập</NavLink>,
    },
    {
      key: "2",
      label: <NavLink to={"auth/signin"}>Đăng Kí</NavLink>,
    },
  ];
  // cuộn xuống
  const [scrollY, setScrollY] = useState(true);
  
  // Theo dõi cuộn xuống
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollY(false); // Thanh điều hướng cuộn ra ngoài
      } else {
        setScrollY(true); // Thanh điều hướng cuộn lại vị trí ban đầu
      }
    };


    window.addEventListener("scroll", handleScroll);
    return () => {window.removeEventListener("scroll", handleScroll)};
  }, []);
  const dispatch=useDispatch();
  const listProductFavourites=useAppSelector((state)=>state.listProductFavorites.listFavourite)

  useEffect(()=>{
    dispatch(getFavouriteProductThunk())
  },[dispatch])
  // hieu ung 
  const [isvisibleHeaderMB, setisvisibleHeaderMB] = useState(false);
  const [isvisibleCart, setisvisibleCart] = useState(false);
  const slideDownAnimation = useSpring({
    transform: scrollY ? "translateY(-100%)" : "translateY(0%)",
    opacity: scrollY ? 0 : 1,
    config: { tension: 200, friction: 20,duration :500 },
  });

  const slideInAnimation = useSpring({
    transform: isvisibleHeaderMB ? 'translateX(0%)' : 'translateX(-100%)',
    opacity: isvisibleHeaderMB ? 1 : 0,
  });

  const slideInAnimationCart = useSpring({
    transform: isvisibleCart ? 'translateX(0%)' : 'translateX(100%)',
    opacity: isvisibleCart ? 1 : 0,
  });
// 
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
const [settings, setSettings] = useState({
  title: '',
  description: '',
  author: '',
  color: '#fff'
});
    const fetchSettings = async () => {
        try {
            const response = await getsetting();
            const settingsMap = {};
            response.data.content.forEach(setting => {
                settingsMap[setting.id] = setting.value;
            });
            setSettings({
              title: settingsMap[1],
              description: settingsMap[2],
              color: settingsMap[3],
              author: settingsMap[4],
              logo: settingsMap[5],
              favicon: settingsMap[6],
              noti_website: settingsMap[7],
              contentAutobank: settingsMap[8],
              token: settingsMap[9],
              rechargeNotice: settingsMap[10],
              tokenpass: settingsMap[11]
            });
            setOriginalSettings({
                ...settingsMap
            });
        } catch (error) {
            console.error('Failed to fetch settings:', error);
        }
    };

    useEffect(() => {
        fetchSettings();
    }, []);


const listCart=useAppSelector((state)=>state.cart.listCart)
const token=getLocalStorage('token')
console.log(token);

  return (
    <div className="bg-white">
<div className="flex flex-col relative">
    <div className='w-[100%] h-[35px] color-custom text-white flex justify-center items-center'>
      <div className='w-[80%] m-auto flex md:justify-between sm:justify-center items-center'>
            <h3 className='text-[1.5rem] font-medium sm:text-center'>{settings.noti_website || 'Chào mừng đến với cửa hàng SuperTech'}</h3>
            <div className="gap-[1.2rem] sm:hidden md:flex">
              <div className='flex justify-center items-center gap-[.5rem] text-[1.4rem]'>
              <CiLocationOn  className='text-[1.4rem]'/>
              <span>Địa điểm</span>
              </div>
              <div className='flex justify-center items-center gap-1 text-[1.4rem]'>
              <CiLocationOn  className='text-[1.4rem]'/>
              <span>Tra cứu hóa đơn</span>
              </div>
              <div className='flex justify-center items-center gap-1 text-[1.4rem]'>
              <CiLocationOn  className='text-[1.4rem]'/>
              <span>Cửa hàng</span>
              </div>
              <div className='flex justify-center items-center gap-1 text-[1.4rem]'>
              <FaRegUser   className='text-[1.4rem]'/>
              <span>Tài khoản</span>
              </div>
            </div>
      </div>
      </div>
      <div className="xl:w-[80%] xmd:w-[90%] sm:w-[95%] m-auto sm:hidden md:block" >
  
        <div className="flex justify-between items-center w-[100%] md:h-[5rem] lg:h-[75px]">
          <div className="md:text-[2.5rem] xl:text-[3.2rem] font-semibold">{settings.title || 'SuperTech'}


        
          </div>
          <div className="2xl:w-[70%] lg:w-[60%] md:w-[50%]">
          <form className="w-[100%] h-[38px]">
              <Search
                placeholder="Tìm kiếm sản phẩm"
                onSearch={onSearch}
                enterButton
                className="inputSearch"
              />
            </form>
          </div>
          <div className="flex gap-[1rem]">
            <div>

   
            </div>
            <div>
            <NavLink to={"/san-pham-yeu-thich"} >
              <Badge count={listProductFavourites?.length||0} showZero>
                <FaRegHeart className="xl:text-[2.4rem]  md:text-[2rem] text-[#7500CF]" />
              </Badge>
            </NavLink>
            </div>
            <div className="cursor-pointer">
              <Badge count={listCart?.length||0} showZero onClick={()=>setisvisibleCart(!isvisibleCart)}>
                <MdOutlineShoppingBag className="xl:text-[2.6rem]  md:text-[2rem] text-[#7500CF]" />
              </Badge>
              {isvisibleCart &&   <div className="fixed inset-0 z-30">
          <div 
            className="w-full h-full bg-[rgba(0,0,0,0.5)]" 
            onClick={() => setisvisibleCart(false)}
          > <animated.div style={slideInAnimationCart}>
          <TaskCart onClose={() => setisvisibleCart(false)}/>
        </animated.div></div>
         
        </div>}
            </div>
            <div>
              <MdLanguage className="xl:text-[2.5rem]  md:text-[2rem] text-[#7500CF]" />
            </div>
          </div>
        <DropdownUser/>
        </div>
      </div>
      {
        scrollY?     <div className="w-[100%] py-2  border border-t-purple-200 ">
        <div className="
      
      md:flex items-center lg:justify-start xl:justify-between md:justify-center w-[80%] m-auto sm:hidden">
   <TaskCatelogry/>
    
       <div className="flex justify-center items-center lg:ml-[5rem] xl:ml-0 md:py-5 xl:py-0">
        <Menu/>
       </div>
        <div className=" md:hidden xl:flex text-[1.6rem] text-[#FF0000] font-semibold">Miễn phí vận chuyển trên 25 triệu</div>
      </div>
      </div>
       :( 
        
            
            <div className="">
              {/* Overlay */}
              

              {/* Menu di động với hiệu ứng trượt */}
              <animated.div
                style={{...slideDownAnimation,
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 20,
                  backgroundColor: "#fff", // Thêm màu nền cho thanh điều hướng
                }}
             
              >
                 <div className="w-[100%] py-2  border border-t-purple-200 ">
        <div className="
      
      md:flex items-center lg:justify-start xl:justify-between md:justify-center w-[80%] m-auto sm:hidden">
<TaskCatelogry/>
    
       <div className="flex justify-center items-center lg:ml-[5rem] xl:ml-0 md:py-5 xl:py-0">
        <Menu/>
       </div>
                <div className="flex gap-[1rem] items-center">
                <div className="flex gap-[1rem]">
            <div>

                {/* <FaRegHeart className="xl:text-[2.5rem] md:text-[2rem] xl:block sm:hidden text-[#7500CF]" /> */}
   
            </div>
            <NavLink to={"/san-pham-yeu-thich"} >
              <Badge count={listProductFavourites?.length||0} showZero>
                <FaRegHeart className="xl:text-[2.4rem]  md:text-[2rem] text-[#7500CF]" />
              </Badge>
            </NavLink>
            <div className="cursor-pointer">
              <Badge count={listCart?.length||0} showZero onClick={()=>setisvisibleCart(!isvisibleCart)}>
                <MdOutlineShoppingBag className="xl:text-[2.6rem]  md:text-[2rem] text-[#7500CF]" />
              </Badge>
              {isvisibleCart &&   <div className="fixed inset-0 z-30">
          <div 
            className="w-full h-full bg-[rgba(0,0,0,0.5)]" 
            onClick={() => setisvisibleCart(false)}
          > <animated.div style={slideInAnimationCart}>
          <TaskCart onClose={() => setisvisibleCart(false)}/>
        </animated.div></div>
         
        </div>}
            </div>
            <div>
              <MdLanguage className="xl:text-[2.5rem]  md:text-[2rem] text-[#7500CF]" />
            </div>
          </div>
       <DropdownUser/>
                </div>
      </div>
      </div>
              </animated.div>
            </div>
      
        
      
      )
      }
      {/* fixed bg-white z-[1000] */}
   
      
      
      {/* mobile */}
      <div className="md:hidden sm:shadow-xl flex justify-center items-center ">
            <div className=" w-[95%] m-auto">
              <div className="flex items-center justify-between bg-white py-[1rem]">
                  <div className="text-[2rem]" onClick={()=>setisvisibleHeaderMB(!isvisibleHeaderMB)}>
                 <FaBars />
              </div>
              <h3 className="text-[2.5rem]">{settings.title || 'SuperTech'}</h3>
              <div className="text-[2.5rem] flex">
                <IoIosSearch />
                <Badge count={0} showZero onClick={()=>setisvisibleCart(!isvisibleCart)}>
                <MdOutlineShoppingBag className="text-[2.5rem] text-[#7500CF]" />
              </Badge>
              </div>
              </div>
            
              <div>

              </div>
            </div>
      </div>
      {isvisibleCart && (
  <div className="fixed inset-0 z-30">
    <div 
      className="w-full h-full bg-[rgba(0,0,0,0.5)]" 
      onClick={() => setisvisibleCart(false)} // Đóng khi nhấp vào nền
    >
      <animated.div 
        style={slideInAnimationCart}
        onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện click từ TaskCart
      >
        <TaskCart onClose={() => setisvisibleCart(false)} />
      </animated.div>
    </div>
  </div>
)}


 
    
      {isvisibleHeaderMB && (
        <div className="fixed inset-0 z-30">
          <div 
            className="w-full h-full bg-[rgba(0,0,0,0.5)]" 
            onClick={() => setisvisibleHeaderMB(false)}
          > <animated.div style={slideInAnimation}>
          <TaskHeaderMb onClose={() => setisvisibleHeaderMB(false)} />
        </animated.div></div>
         
        </div>
      )}
      
    </div>

    </div>
    
  );
}

export default Header;
