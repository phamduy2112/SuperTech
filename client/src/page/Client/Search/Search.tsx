import React from 'react';
import ProductItem from '../../../components/product/ProductItem';
import { Breadcrumb, Checkbox, Form, Select } from 'antd';
import './css/customCss.css';
import { MdFilterAlt } from 'react-icons/md';

function Search() {
  return (
    <div className="w-full lg:w-[80%] m-auto px-4">
      <Breadcrumb
        items={[
          {
            title: <a href="">Trang chủ</a>,
          },
          {
            title: 'Tìm kiếm sản phẩm',
          },
        ]}
      />
      <div>
      <h3 className="text-xl md:text-2xl mb-4 font-semibold">
          Kết quả phù hợp với từ khóa: <span className="text-[#7500CF] font-semibold">Iphone</span>
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="cursor-pointer text-lg md:text-xl flex justify-center items-center gap-2 h-14 border border-gray-600 w-full md:w-[9rem]">
            <MdFilterAlt />
            <span>Bộ lọc</span>
          </div>
          <div className="cursor-pointer text-lg md:text-xl flex justify-center items-center gap-2 h-14 border border-gray-600 w-full md:w-[6rem]">
            <span>Giá</span>
          </div>
        </div>
        <div className="mt-2 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-4 items-center">
            <h4 className="text-lg md:text-xl mt-2 md:mt-0 font-semibold">
                10 Điện thoại iPhone (Apple)
              </h4>
              <div className="flex items-center">
                <Form.Item valuePropName="checked">
                  <Checkbox>Giảm giá</Checkbox>
                </Form.Item>
                <Form.Item valuePropName="checked">
                  <Checkbox>Mới</Checkbox>
                </Form.Item>
              </div>
            </div>
            <div className="w-full md:w-[200px] mt-2 md:mt-0">
              <Form.Item label="Sắp xếp theo">
                <Select defaultValue="demo">
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-4">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

export default Search;
