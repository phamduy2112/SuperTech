import React, { useEffect, useState } from 'react';
import ProductItem from '../../../components/product/ProductItem';
import { Breadcrumb, Checkbox, Form, Select } from 'antd';
import { MdFilterAlt } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getCatelogryDadThunk } from '../../../redux/catelogry/catelogry.slice';
import { getProductByCateloriesDad } from '../../../redux/product/product.slice';
import { useLocation } from 'react-router-dom';

function ListProduct() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const category_dad = Number(searchParams.get('category_dad'));  // Get 'category_dad' directly
  const category = Number(searchParams.get('category'));          // Get 'category' directly

  const listProduct = useAppSelector((state) => state.product.listProduct);
  const dispatch = useAppDispatch();

  const [isDiscounted, setIsDiscounted] = useState(false); // State cho checkbox giảm giá
  const [dataCate,setDataCate]=useState({})


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
  useEffect(()=>{
    dispatch(getProductByCateloriesDad(dataCate))
  },[dataCate,dispatch])
  // Lọc sản phẩm theo trạng thái checkbox
  const filteredProducts = isDiscounted
    ? listProduct.filter(item => item.product_discount>0) // Giả định rằng sản phẩm có thuộc tính 'isDiscounted'
    : listProduct;
    console.log(dataCate);
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
          <div className='cursor-pointer text-[1.8rem] justify-center items-center gap-[.3rem] h-[3.5rem] flex border border-gray-600 w-[9rem]'>
            <MdFilterAlt />
            <span>Bộ lọc</span>
          </div>
          <div className='cursor-pointer text-[1.8rem] justify-center items-center gap-[.3rem] h-[3.5rem] flex border border-gray-600 w-[6rem]'>
            <span>Giá</span>
          </div>
        </div>
        <div className='mt-[.5rem] w-[100%]'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {/* Cột 1: Tiêu đề và Checkbox */}
            <div className='space-y-4'>
              <h4 className='text-[1.8rem] sm:text-[1.5rem] font-semibold'>
                10 Điện thoại iPhone (Apple)
              </h4>
              <div className='flex flex-wrap gap-4'>
                <Form.Item valuePropName="checked" className='mb-0'>
                  <Checkbox 
                    onChange={(e) => setIsDiscounted(e.target.checked)}
                  >
                    Giảm giá
                  </Checkbox>
                </Form.Item>
                <Form.Item valuePropName="checked" className='mb-0'>
                  <Checkbox>Mới</Checkbox>
                </Form.Item>
              </div>
            </div>

            {/* Cột 2: Select Box */}
            <div className='lg:justify-self-end'>
              <Form.Item label="Sắp xếp theo" className='mb-0'>
                <Select defaultValue="demo" style={{ width: '200px' }}>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-6">
        {filteredProducts.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default ListProduct;
