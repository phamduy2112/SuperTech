import React, { useRef } from 'react';
import ProductItem from '../../../../components/product/ProductItem';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';

function ProductHome() {


  return (
    <div className='w-[80%] m-auto pt-[2rem] pb-[1rem]'>
      <div className="flex justify-between items-center pb-5">
        <h3 className='text-[2.2rem] font-semibold text-[#FF0000]'>Những sản phẩm dành cho bạn</h3>
       
      </div>
      <div className='grid grid-cols-6 gap-[.5rem]'>
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
      <ProductItem/>

      
      </div>
    </div>
  );
}

export default ProductHome;