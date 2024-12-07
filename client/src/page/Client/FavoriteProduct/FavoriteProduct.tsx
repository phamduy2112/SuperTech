import { Breadcrumb, Checkbox, Form, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { MdFilterAlt } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import ProductItem from '../../../components/product/ProductItem';
import { useDispatch } from 'react-redux';
import { getFavouriteProductThunk } from '../../../redux/favourite/Favourite.slice';

function FavoriteProduct() {

  const listProductFavourites=useAppSelector((state)=>state.listProductFavorites.listFavourite)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getFavouriteProductThunk())
  },[dispatch])
  return (
    <div className='w-[80%] m-auto'>
      <Breadcrumb
        items={[
          {
            title: <a href=''>Trang chủ</a>,
          },
          {
            title: "Sản phẩm yêu thích",
          },
        ]}
      />
      <div>
        <h3 className='text-[2rem] mb-[1rem] font-semibold'>
          Sản Phẩm Yêu Thích <span className='text-[#7500CF]'>7</span>
        </h3>
        <div className='flex gap-4'>
          <div className='cursor-pointer text-[1.8rem] justify-center items-center gap-[.3rem] h-[3.5rem] flex border border-gray-600 w-[9rem]'>
            <MdFilterAlt />
            <span>Bộ lọc</span>
          </div>
          <div className='cursor-pointer text-[1.8rem] justify-center items-center gap-[.3rem] h-[3.5rem] flex border border-gray-600 w-[6rem]'>
            <span>Giá</span>
          </div>
        </div>
        <div className='mt-[.5rem] w-[100%] '>
          <div className='flex justify-between items-center'>
            <div className='flex gap-[1rem]'>
              <h4 className='text-[1.8rem] mt-[.5rem] font-semibold'>10 Điện thoại iPhone (Apple)</h4>
              <div className='flex items-center justify-center'>
                <Form.Item valuePropName="checked">
                  <Checkbox>Giảm giá</Checkbox>
                </Form.Item>
                <Form.Item valuePropName="checked">
                  <Checkbox>Mới</Checkbox>
                </Form.Item>
              </div>
            </div>
            <div className='w-[200px]'>
              <Form.Item label="Sắp xếp theo">
                <Select defaultValue="demo">
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-6 gap-y-3'>
        {listProductFavourites.length > 0 ? (
          listProductFavourites.map((item) => {
            console.log(item);
            return <ProductItem key={item.product_id} product={item.product} />;
          })
        ) : (
          <div className="leading-10 col-span-6 flex flex-col items-center justify-center text-center py-20">
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/417/132/original/ecommerce-icon-empty-yellow-shopping-cart-3d-illustration-free-png.png" 
            alt="Không tìm thấy sản phẩm"
            className="w-[15rem] h-[15rem] mb-4"
          />
          <h2 className="text-3xl font-semibold text-gray-800">          <p>Không có sản phẩm yêu thích</p>
          </h2>
          <p className="text-gray-500 mt-2">
          <p>Không có sản phẩm yêu thích</p>
          </p>
          <button
            onClick={() => window.location.href = '/'} // Đổi thành URL bạn muốn
            className="mt-6 px-10 py-3 font-medium bg-customColor text-white rounded-xl hover:bg-indigo-800"
          >
            Trở về trang chủ
          </button>
        </div>
        )}
      </div>
    </div>
  );
}

export default FavoriteProduct;
