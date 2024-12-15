import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import ProductItem from '../../../components/product/ProductItem';
import { Breadcrumb, Button, Checkbox, Col, Form, Popover, Row, Select, Slider } from 'antd';
import './css/customCss.css';
import { CiFilter } from 'react-icons/ci';
import { IoAddOutline } from 'react-icons/io5';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useDispatch } from 'react-redux';
import { getSearchProductThunk } from '../../../redux/search/Search.slice';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('tukhoa');
  const getSearch=useAppSelector((state)=>state.search.listSearch)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getSearchProductThunk(query))
  },[dispatch,query])

  console.log(getSearch);
  


  function OptionSelected() {
    return (
      <div className="grid border-t grid-cols-3 gap-4 p-6 bg-white rounded-lg">
        {/* Các phần bộ lọc khác */}
      </div>
    );
  }

  return (
    <div className='w-[95%] md:w-[90%] lg:w-[80%] m-auto'>
      <Breadcrumb
        items={[
          { title: <a href=''>Trang chủ</a> },
          { title: "Tìm kiếm sản phẩm" }
        ]}
      />
      <div>
        <h3 className='text-[2rem] mb-[1rem] font-semibold'>
          Kết quả phù hợp với từ khóa: <span className='text-[#7500CF]'>{query}</span>
        </h3>
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
          {/* Thêm các filter buttons nếu cần */}
        </div>
        <div className='mt-[.5rem] w-[100%]'>
          <div className='flex flex-wrap items-center gap-4'>
            <div className='w-full min-[426px]:w-auto'>
              <h4 className='text-[1.6rem] font-semibold'>Kết quả tìm kiếm</h4>
            </div>
            <div className='flex items-center gap-4'>
              <Form.Item className='mb-0' valuePropName="checked">
                <Checkbox>Giảm giá</Checkbox>
              </Form.Item>
              <Form.Item className='mb-0' valuePropName="checked">
                <Checkbox>Mới</Checkbox>
              </Form.Item>
            </div>
            <div className='flex items-center gap-2 ml-auto'>
              <span className='text-[1.4rem]'>Sắp xếp theo:</span>
              <Select 
                defaultValue="newest" 
                className='w-[120px]'
                size="large"
              >
                <Select.Option value="newest">Mới nhất</Select.Option>
                <Select.Option value="priceLow">Giá thấp</Select.Option>
                <Select.Option value="priceHigh">Giá cao</Select.Option>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 min-[426px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {getSearch ? (
          getSearch.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <div className="leading-10 col-span-6 flex flex-col items-center justify-center text-center py-20">
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/417/132/original/ecommerce-icon-empty-yellow-shopping-cart-3d-illustration-free-png.png" 
              alt="Không tìm thấy sản phẩm"
              className="w-[15rem] h-[15rem] mb-4"
            />
            <h2 className="text-3xl font-semibold text-gray-800">Không có mặt hàng này</h2>
            <p className="text-gray-500 mt-2">
              Chúng tôi không tìm thấy sản phẩm nào phù hợp với tìm kiếm của bạn.
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

export default Search;