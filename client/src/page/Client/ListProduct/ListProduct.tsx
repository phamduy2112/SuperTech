import React, { useEffect, useState } from 'react';
import ProductItem from '../../../components/product/ProductItem';
import { Breadcrumb, Checkbox, Empty, Form, Select } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { GetAllImgThunk, ProductByIdCatelogryThunk } from '../../../redux/product/product.slice';
import { useLocation } from 'react-router-dom';
import Filter from './Filter';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ListProduct() {

  const [Products, setProducts] = useState([]);
  const location = useLocation();
  const [category, setcategory] = useState<number>();
  const [categoryDad, setcategoryDad] = useState<number>();

  const ProductsByIdComponent = useAppSelector((state) => state.product.listProductByIdCategory);
  const AppDispatch = useAppDispatch();

  const listImages = useAppSelector((state) => state.product.listProductImage);

  useEffect(() => {
    AppDispatch(GetAllImgThunk())
  }, [AppDispatch]);


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const Idcategory = searchParams.get('category');
    const Idcategorydad = searchParams.get('category_dad')
    if (Idcategory != null) {
      setcategory(parseInt(Idcategory));
    }
    if (Idcategorydad != null) {
      setcategoryDad(parseInt(Idcategorydad));

    }
  }, [location.search]);

  useEffect(() => {
    if (category != null) {
      AppDispatch(ProductByIdCatelogryThunk(category))
    }
  }, [AppDispatch, category])

  useEffect(() => {
    setProducts(ProductsByIdComponent)
  }, [ProductsByIdComponent])


  const handleCheckboxChangeSale = (e: { target: { checked: boolean; }; }) => {
    if (e.target.checked === true) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sortedProducts = [...Products].sort((a: any, b: any) => b.product_discount - a.product_discount);
      setProducts(sortedProducts)
    } else {
      setProducts(ProductsByIdComponent)
    }
  }




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
        <h3 className='text-[2rem] mb-[1rem] font-semibold'>Loại sản phẩm {categoryDad}</h3>
        <div className='flex gap-4'>
          <Filter data={category} />
        </div>
        <div className='mt-[.5rem] w-[100%]'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-[1rem]'>

              <h4 className='text-[1.8rem] mt-[.5rem] font-semibold'>Tìm Thấy {Products?.length} Điện thoại</h4>
              <div className='flex items-center justify-center'>
                <Form.Item className='name="isDiscounted" ' valuePropName="checked">
                  <Checkbox onChange={handleCheckboxChangeSale}>
                    Giảm giá
                  </Checkbox>
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
      <div className='w-full grid grid-cols-6 gap-y-3'>
        {
          Products.length > 0 ? (
            Products?.map((item, index) => (
              <ProductItem key={index} product={item} />
            ))
          ) : (
            <div className='col-span-6 w-[100%]'>
              <Empty description={'Không có dữ liệu để hiener thị'} />
            </div>
          )
        }

      </div>
    </div>
  );
}

export default ListProduct;
