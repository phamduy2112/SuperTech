import React, { useEffect, useState } from 'react'
import { FaHeart, FaTruck } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import { formatCurrencyVND } from '../../utils';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'antd';
import { PiCurrencyDollarSimpleFill } from 'react-icons/pi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { IMG_BACKEND } from '../../constants';
import toast from 'react-hot-toast';
import { addItemToCart } from '../../redux/cart/cart.slice';
import { CiHeart } from 'react-icons/ci';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProductItem({ product }: { product: any }) {
  const dispatch = useAppDispatch();

  const Images = useAppSelector((state) => state.product.listProductImage);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddItem = (product: any) => {
    console.log(product);

  };


  const ShowImage = (id: number, image: number) => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const NewArray: any = Images.find((item: any) => item.image_id == image);
    if (NewArray != null || NewArray != undefined) {
      return (
        <NavLink to={`/san-pham-chi-tiet/${id}`} className="flex justify-center my-4">
          <img
            className="w-full p-10 object-contain"
            src={IMG_BACKEND + NewArray.image_one}
            alt="Sản phẩm 1"
          />
        </NavLink>
      )
    }






  }

  return (
    <div className="relative py-5 px-2 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <div className="absolute top-4 right-4 flex flex-col gap-3">
        {/* Icon yêu thích */}
        <div className="bg-black p-2 text-[1.5rem] rounded-full text-white cursor-pointer hover:bg-gray-800">
          <Tooltip title="Thêm yêu thích">
            <FaHeart />
            <CiHeart />

          </Tooltip>
        </div>

      </div>
      {product?.product_discount > 0 ?
        <div className="absolute top-4 left-4 bg-[#7500CF] px-3 py-2 rounded-full text-white text-[1.4rem] font-semibold">
          -{product?.product_discount}%
        </div>
        : null}


      {/* Hình ảnh sản phẩm */}
      {
        ShowImage(product.product_id, product.image_id)
      }

      {/* Thông tin sản phẩm */}
      <div className="px-4">
        <NavLink to={`/san-pham-chi-tiet/${product.product_id}`}>
          <div className="flex items-center justify-start gap-2 mb-2">
            <div className="bg-gradient-to-r from-[#DD720B] to-[#EC6D11] text-white rounded-full px-3 py-1 text-lg font-medium flex items-center">
              <span>Tặng phụ kiện</span>
            </div>
          </div>

          <h3 className="text-[1.7rem] font-bold">{product.product_name}</h3>
          <div className="flex items-center gap-2 my-2">
            <PiCurrencyDollarSimpleFill className="text-gray-500 text-2xl" />
            <span className="text-gray-600 text-[1.2rem]">Online giá rẻ quá</span>
          </div>

          {/* Giá */}

          <div className="flex items-center gap-2 my-2 text-[1.4rem]">
            <span className="bg-gray-100 text-sm font-medium py-1 px-2 rounded">Trả góp 0%</span>
            {
              product?.product_discount > 0 ? (
                <>
                  <span className="line-through text-gray-400">
                    {formatCurrencyVND(Number(product.product_price))}
                  </span>
                </>
              ) : null
            }



          </div>
          <p className="text-red-600 font-semibold text-[1.7rem]">{
            formatCurrencyVND(Number(product.product_price) * (1 - Number(product.product_discount / 100)))
          }</p>

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

        <button
          className="w-full mt-4 py-3 border border-[#7500CF] text-[#7500CF]  text-[1.6rem] font-semibold rounded-md hover:bg-[#7500CF] hover:text-white transition-all"
          onClick={() => { handleAddItem(product) }}

        >
          Thêm giỏ hàng
        </button>
      </div >


    </div >
  )
}

export default ProductItem