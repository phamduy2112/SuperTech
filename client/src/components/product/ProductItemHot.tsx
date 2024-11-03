import React, { useState } from "react";
import image from '../../assets/new.png';
import oficie from '../../assets/oficie.png';
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";
import { FaTruck } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Tooltip } from "antd";
import { IoEyeOutline } from "react-icons/io5";
import { useSpring,animated } from "react-spring";
import './product.css'
import TaskEyes from "../../template/Component/Header/Component/Menu/Modal/TaskEyes";
function ProductItemHot() {
  const [isvisibleProduct, setisvisibleProduct] = useState(false);

  const slideInAnimationTaskProduct = useSpring({
    transform: isvisibleProduct ? 'translateX(0%)' : 'translateX(100%)',
    opacity: isvisibleProduct ? 1 : 0,
  });
  return (
<div className="mx-5 relative px-3 py-5 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border overflow-hidden">
  <div className="absolute top-4 right-4 flex flex-col gap-3">
    {/* Icon yêu thích */}
    <div className="bg-black p-2 rounded-full text-white cursor-pointer hover:bg-gray-800">
      <Tooltip title="Thêm yêu thích">
        <CiHeart className="text-3xl" />
      </Tooltip>
    </div>
    {/* Icon xem sản phẩm */}
    <div className="bg-black p-2 rounded-full text-white cursor-pointer hover:bg-gray-800">
      <Tooltip title="Xem tóm tắt sản phẩm">
        <IoEyeOutline onClick={() => setisvisibleProduct(!isvisibleProduct)} className="text-3xl" />
      </Tooltip>
    </div>
  </div>

  {/* Giảm giá */}
  <div className="absolute top-4 left-4 bg-[#7500CF] px-3 py-1 rounded-full text-white text-lg font-semibold">
    -23%
  </div>

  {/* Hình ảnh và logo thương hiệu */}
  <div className="flex justify-center my-4">
    <img
      className="w-full p-10  object-contain"
      src="https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg"
      alt="Sản phẩm"
    />
  </div>

  {/* Thông tin sản phẩm */}
  <div className="px-4">
    {/* Badge khuyến mãi */}
    <div className="flex items-center justify-start gap-2 mb-2">
      <div className="bg-gradient-to-r from-[#DD720B] to-[#EC6D11] text-white rounded-full px-3 py-1 text-base font-medium flex items-center">
        <img src={oficie} alt="" className="w-5 h-5 mr-1" />
        <span>TẶNG PHỤ KIỆN</span>
      </div>
    </div>

    <h3 className="text-xl font-bold">MacBook Air 13 inch M2 10GPU</h3>
    <div className="flex items-center gap-2 my-2">
      <PiCurrencyDollarSimpleFill className="text-gray-500 text-2xl" />
      <span className="text-gray-600 text-base">Online giá rẻ quá</span>
    </div>

    {/* Giá */}
    <div className="flex items-center gap-2 my-2">
      <span className="bg-gray-100 text-sm font-medium py-1 px-2 rounded">Trả góp 0%</span>
      <span className="line-through text-gray-400 text-lg">31.990.000đ</span>
    </div>
    <p className="text-red-600 font-semibold text-xl">30.000.000đ</p>

    {/* Đánh giá và tình trạng */}
    <div className="flex justify-between items-center mt-2">
      <div className="flex items-center gap-1 text-orange-500">
        <span className="font-semibold text-lg">4.6</span>
        <IoIosStar className="text-lg" />
        <span className="text-gray-400 text-base">(15)</span>
      </div>
      <div className="flex items-center text-green-600 font-semibold text-lg gap-1">
        <FaTruck />
        <span>Còn hàng</span>
      </div>
    </div>

    {/* Nút thêm giỏ hàng */}
    <button
      className="w-full mt-4 h-12 border border-[#7500CF] text-[#7500CF] text-lg font-semibold rounded-md hover:bg-[#7500CF] hover:text-white transition-all"
    >
      Thêm giỏ hàng
    </button>
  </div>

  {/* Popup khi xem tóm tắt sản phẩm
  {isvisibleProduct && (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
      <animated.div style={slideInAnimationTaskProduct}>
        <TaskEyes onClose={() => setisvisibleProduct(false)} />
      </animated.div>
    </div>
  )} */}
</div>


  );
}

export default ProductItemHot;
