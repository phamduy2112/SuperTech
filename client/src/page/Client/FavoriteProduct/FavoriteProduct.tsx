import { Breadcrumb, Checkbox, Form, Select } from 'antd'
import React from 'react'
import { MdFilterAlt } from 'react-icons/md'
import ProductItem from '../../../components/product/ProductItem'

function FavoriteProduct() {
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
    <h3 className='text-[2rem] mb-[1rem] font-semibold'>Sản Phẩm Yêu Thích <span className='text-[#7500CF]'>7</span></h3>
    <div className='flex gap-4'>
      <div className='cursor-pointer text-[1.8rem] justify-center items-center gap-[.3rem] h-[3.5rem] flex border border-gray-600 w-[9rem]'>
        <MdFilterAlt/>
        <span>Bộ lọc</span>
      </div>
      <div className='cursor-pointer text-[1.8rem] justify-center items-center gap-[.3rem] h-[3.5rem] flex border border-gray-600 w-[6rem]'>

        <span>Giá</span>
      </div>
    </div>
    <div className='mt-[.5rem] w-[100%]  '>
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
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
      </div>
    </div>
  )
}

export default FavoriteProduct