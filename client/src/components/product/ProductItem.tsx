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
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addItemToCart } from "../../redux/cart/cart.slice";
import { NavLink } from "react-router-dom";

function ProductItem(props) {
  const [isvisibleProduct, setisvisibleProduct] = useState(false);
  const dispatch = useAppDispatch();
  
  // Thêm sản phẩm vào giỏ hàng
  const handleAddItem = (product: any) => {
    dispatch(addItemToCart(product));
  };

  
  const slideInAnimationTaskProduct = useSpring({
    transform: isvisibleProduct ? 'translateX(0%)' : 'translateX(100%)',
    opacity: isvisibleProduct ? 1 : 0,
  });

  return (
<div className="relative py-5 px-2 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
  <div className="absolute top-4 right-4 flex flex-col gap-3">
    {/* Icon yêu thích */}
    <div className="bg-black p-2 rounded-full text-white cursor-pointer hover:bg-gray-800">
      <Tooltip title="Thêm yêu thích">
        <CiHeart className="text-3xl" />
      </Tooltip>
    </div>
  
  </div>

  {/* Giảm giá */}
  <div className="absolute top-4 left-4 bg-[#7500CF] px-3 py-2 rounded-full text-white text-[1.4rem] font-semibold">
    -23%
  </div>

  {/* Hình ảnh sản phẩm */}
  <NavLink to={`/san-pham-chi-tiet/${props.product.product_id}`} className="flex justify-center my-4">
    <img
      className="w-full p-10 object-contain"
      src="https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg"
      alt="Sản phẩm 1"
    />
  </NavLink>

  {/* Thông tin sản phẩm */}
  <div className="px-4">
    <NavLink to={`/san-pham-chi-tiet/${props.product.product_id}`}>
    <div className="flex items-center justify-start gap-2 mb-2">
      <div className="bg-gradient-to-r from-[#DD720B] to-[#EC6D11] text-white rounded-full px-3 py-1 text-lg font-medium flex items-center">
        <span>Tặng phụ kiện</span>
      </div>
    </div>

    <h3 className="text-[1.6rem] font-bold">{props.product.product_name}</h3>
    <div className="flex items-center gap-2 my-2">
      <PiCurrencyDollarSimpleFill className="text-gray-500 text-2xl" />
      <span className="text-gray-600 text-[1.2rem]">Online giá rẻ quá</span>
    </div>

    {/* Giá */}
    <div className="flex items-center gap-2 my-2 text-[1.4rem]">
      <span className="bg-gray-100 text-sm font-medium py-1 px-2 rounded">Trả góp 0%</span>
      <span className="line-through text-gray-400 ">31.990.000đ</span>
    </div>
    <p className="text-red-600 font-semibold text-[1.6rem]">30.000.000đ</p>

    {/* Đánh giá và tình trạng */}
    <div className="flex justify-between items-center mt-2 text-[1.4rem]">
      <div className="flex items-center gap-1 text-orange-500">
        <span className="font-semibold">4.6</span>
        <IoIosStar className="text-xl" />
        <span className="text-gray-400">(15)</span>
      </div>
      <div className="flex items-center text-green-600 font-semibold gap-1">
        <FaTruck />
        <span>Còn hàng</span>
      </div>
    </div>

    </NavLink>
    {/* Badge khuyến mãi */}
   
    {/* Nút thêm giỏ hàng */}
    <button
      className="w-full mt-4 py-3 border border-[#7500CF] text-[#7500CF]  text-[1.6rem] font-semibold rounded-md hover:bg-[#7500CF] hover:text-white transition-all"
    >
      Thêm giỏ hàng
    </button>
  </div>

  {/* Popup khi xem tóm tắt sản phẩm */}
  {isvisibleProduct && (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
      <animated.div style={slideInAnimationTaskProduct}>
        <TaskEyes onClose={() => setisvisibleProduct(false)} />
      </animated.div>
    </div>
  )}
</div>

  );
}

export default ProductItem;
