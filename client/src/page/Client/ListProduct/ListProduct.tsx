import React, { useEffect, useState } from 'react';
import ProductItem from '../../../components/product/ProductItem';
import { Breadcrumb, Checkbox, Form, Select } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getCatelogryThunkAll } from '../../../redux/catelogry/catelogry.slice';
import { getProductByCateloriesDad } from '../../../redux/product/product.slice';
import { useLocation } from 'react-router-dom';
import Filter from './Filter';

function ListProduct() {

  const location = useLocation();
  const AppDispatch = useAppDispatch();
  const Datafilter = useAppSelector((state) => state.product.Datafilter);
  const listProduct = useAppSelector((state) => state.product.listProduct);

  console.log('List Product', Datafilter);

  const [ShowProduct, setShowProduct] = useState([]);
  useEffect(() => {
    if (Datafilter.length > 0) {
      setShowProduct(Datafilter)
    }
    else {
      setShowProduct(listProduct)
    }
  }, [listProduct, Datafilter]);




  const catelogries = useAppSelector((state) => state.category.AlllistCatelories as []);

  const dispatch = useAppDispatch();

  const [dataCate, setDataCate] = useState({})
  useEffect(() => {
    try {
      dispatch(getCatelogryThunkAll());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category_dad = searchParams.get('category_dad');
    const category = searchParams.get('category');
    setDataCate({
      category_dad,
      category,
    });
  }, [location.search]);


  useEffect(() => {
    AppDispatch(getProductByCateloriesDad(dataCate));
  }, [AppDispatch, dataCate]);


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
        <h3 className='text-[2rem] mb-[1rem] font-semibold'>Sản Phẩm:</h3>
        <div className='flex gap-4'>
          <div className='cursor-pointer text-[1.8rem] justify-center items-center gap-[.3rem] h-[3.5rem] flex w-[9rem]'>
            <Filter data={{ catelogries: catelogries, listProduct: listProduct, dataCate: dataCate }} />
          </div>
          <div className='cursor-pointer text-[1.8rem] justify-center items-center gap-[.3rem] h-[3.5rem] flex border border-gray-600 w-[6rem]'>
            <span>Giá</span>
          </div>
        </div>
        <div className='mt-[.5rem] w-[100%]'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-[1rem]'>
              <h4 className='text-[1.8rem] mt-[.5rem] font-semibold'>10 Điện thoại iPhone (Apple)</h4>
              <div className='flex items-center justify-center'>
                <Form.Item className='name="isDiscounted" ' valuePropName="checked">
                  {/* <Checkbox onChange={handleCheckboxChangeSale}>
                    Giảm giá
                  </Checkbox> */}
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
        {ShowProduct?.map((item) => (
          <ProductItem key={item.id} product={item} /> // Đảm bảo sử dụng key cho mỗi sản phẩm
        ))}
      </div>
    </div>
  );
}

export default ListProduct;
