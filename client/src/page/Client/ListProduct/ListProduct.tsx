import React, { useEffect, useState } from 'react';
import ProductItem from '../../../components/product/ProductItem';
import { Breadcrumb, Checkbox, Form, Select } from 'antd';
import { MdFilterAlt } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getCatelogryDadThunk } from '../../../redux/catelogry/catelogry.slice';
import { getProductByCateloriesDad } from '../../../redux/product/product.slice';
import { useLocation } from 'react-router-dom';
import Filter from './Filter';

function ListProduct() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const category_dad = Number(searchParams.get('category_dad'));  // Get 'category_dad' directly
  const category = Number(searchParams.get('category'));
  // Get 'category' directly

  const listProduct = useAppSelector((state) => state.product.listProduct);
  const dispatch = useAppDispatch();

  const [isDiscounted, setIsDiscounted] = useState(false); // State cho checkbox giảm giá
  const [dataCate, setDataCate] = useState({})


  useEffect(() => {
    // Lấy category_dad và category từ URL mới
    const searchParams = new URLSearchParams(location.search);
    const category_dad = searchParams.get('category_dad');
    const category = searchParams.get('category');

    // Cập nhật `dataCate` dựa vào URL mới
    setDataCate({
      category_dad,
      category,
    });

    // Gọi API hoặc các thao tác khác cần thiết khi `dataCate` thay đổi
    // dispatch(getProductByCategories(dataCate));  // Ví dụ gọi hàm dispatch
  }, [location]);  // Lắng nghe thay đổi của `location`
  useEffect(() => {
    dispatch(getProductByCateloriesDad(dataCate))
  }, [dataCate, dispatch])
  // Lọc sản phẩm theo trạng thái checkbox
  const filteredProducts = isDiscounted
    ? listProduct.filter(item => item.product_discount > 0) // Giả định rằng sản phẩm có thuộc tính 'isDiscounted'
    : listProduct;
  return (
    <div className='w-[80%] m-auto'>
      <Breadcrumb
        items={[
          {
            title: <a href=''>Trang chủ</a>,
          },
          {
            title: "Danh sách sản phẩm",
          },
        ]}
      />
      <div>
        <h3 className='text-[2rem] mb-[1rem] font-semibold'>Sản Phẩm: {category_dad}</h3>
        <div className='flex gap-4'>
          <Filter data={category} />
          <div className='cursor-pointer text-[1.8rem] justify-center items-center gap-[.3rem] h-[3.5rem] flex border border-gray-600 w-[6rem]'>
            <span>Giá</span>
          </div>
        </div>
        <div className='mt-[.5rem] w-[100%]'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-[1rem]'>
              <h4 className='text-[1.8rem] mt-[.5rem] font-semibold'>10 Điện thoại iPhone (Apple)</h4>
              <div className='flex items-center justify-center'>
                <Form.Item valuePropName="checked">
                  <Checkbox
                    onChange={(e) => setIsDiscounted(e.target.checked)} // Cập nhật trạng thái checkbox
                  >
                    Giảm giá
                  </Checkbox>
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
        {filteredProducts.map((item) => (
          <ProductItem key={item.id} product={item} /> // Đảm bảo sử dụng key cho mỗi sản phẩm
        ))}
      </div>
    </div>
  );
}

export default ListProduct;
