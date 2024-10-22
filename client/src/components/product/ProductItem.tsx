import React, { useEffect, useState } from "react";
import image from '../../assets/new.png';
import oficie from '../../assets/oficie.png';
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";
import { FaTruck } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Tooltip } from "antd";
import { IoEyeOutline } from "react-icons/io5";
import './product.css';
import TaskEyes from "../../template/Component/Header/Component/Menu/Modal/TaskEyes";
import { useSpring, animated } from "react-spring";
import { useAppDispatch } from "../../redux/hooks";
import { addItemToCart } from "../../redux/cart/cart.slice";

function ProductItem(props) {
  const [isvisibleProduct, setisvisibleProduct] = useState(false);
  const dispatch = useAppDispatch();
  
  // Thêm sản phẩm vào giỏ hàng
  const handleAddToCart = (product) => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };

  const slideInAnimationTaskProduct = useSpring({
    transform: isvisibleProduct ? 'translateX(0%)' : 'translateX(100%)',
    opacity: isvisibleProduct ? 1 : 0,
  });

  return (
    <div className="relative">
      <div className="relative w-[100%] pb-[1rem] product bg-white overflow-hidden hover:scale-105 hover:translate-x-[0%]">
        <div className="product__icon flex flex-col gap-3">
          <div className="bg-black p-[.5rem] rounded-md">
            <div className="text-[2.6rem] cursor-pointer text-white flex items-center justify-center">
              <Tooltip title="Thêm yêu thích">
                <CiHeart className="font-semibold" />
              </Tooltip>
            </div>
          </div>
          <div className="bg-black p-[.5rem] rounded-md">
            <div onClick={() => setisvisibleProduct(!isvisibleProduct)} className="text-[2.6rem] cursor-pointer text-white flex items-center justify-center">
              <Tooltip title="Xem tóm tắt sản phẩm">
                <IoEyeOutline />
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <img src={image} alt="" className="w-[5.5rem]" />
          </div>
          <div className="bg-[#7500CF] w-[5rem] h-[3rem] text-center mr-[2rem] mt-[1rem]">
            <span className="text-white text-[1.6rem] leading-[2.8rem]">-23%</span>
          </div>
        </div>

        <div>
          <div className="w-[200px] m-auto">
            <img
              className="w-[100%]"
              src="https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg"
              alt=""
            />
          </div>

          <div className="mx-[2rem] mt-[1.2rem]">
            <div>
              <div className="bg-gradient-to-r from-[#DD720B] to-[#EC6D11] py-[.5rem] px-[1rem] rounded-[2rem] flex items-center text-center sm:w-[40%] lg:w-[55%] mb-[1.5rem]">
                <img src={oficie} alt="" />
                <span className="text-white text-[1.1rem] font-medium">Tặng phụ kiện</span>
              </div>
              <h3 className="text-[1.8rem] font-semibold">{props.product.product_name}</h3>
              <div className="flex items-center gap-1 my-3">
                <PiCurrencyDollarSimpleFill className="text-[1.7rem]" />
                <span className="text-gray-500 text-[1.5rem]">Online giá rẻ quá</span>
              </div>
            </div>

            <div className="flex items-center gap-[.5rem]">
              <div className="bg-[#F1F1F1] py-[.5rem] px-[1rem]">
                <span className="text-[1.2rem] font-medium">Trả góp 0%</span>
              </div>
              <span className="text-[1.5rem] text-gray-500" style={{ textDecoration: "line-through" }}>31.990.000đ</span>
            </div>
            <p className="text-[1.8rem] text-[#DB363B] font-semibold my-3">
              30.000.000đ
            </p>

            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center text-center">
                <p className="text-[#FC6E2E] text-[1.5rem] font-semibold">4.6</p>
                <IoIosStar className="text-[#FC6E2E] text-[1.4rem]" />
                <span className="text-[#CFCFCF] text-[1.4rem] font-medium">(15)</span>
              </div>
              <div className="flex gap-2 items-center text-center text-[1.4rem] text-[#01B019] font-semibold">
                <FaTruck />
                <span>Còn hàng</span>
              </div>
            </div>

            <div>
              <button 
                onClick={() => handleAddToCart(props.product)}  // Sửa đúng chỗ này
                className="w-[100%] h-[35px] border border-[#7500CF] text-[#7500CF] text-[1.6rem] font-semibold rounded-[0.5rem] mt-[1rem] transition-all
                hover:bg-[#7500CF] hover:text-white hover:font-medium"
              >
                Thêm giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>

      {isvisibleProduct && (
        <div className="fixed inset-0 z-30">
          <div className="w-full h-full bg-[rgba(0,0,0,0.5)]" onClick={() => setisvisibleProduct(false)}>
            <animated.div style={slideInAnimationTaskProduct}>
              <TaskEyes onClose={() => setisvisibleProduct(false)} />
            </animated.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
