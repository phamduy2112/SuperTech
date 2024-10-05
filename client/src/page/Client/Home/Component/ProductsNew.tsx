import React from 'react'
import ProductItem from '../../../../components/product/ProductItem'
import ProductLimitOne from './ProductLimitOne'
import Slider from 'react-slick';

function ProductsNew() {
    
  return (
    <div className='xl:w-[80%]  xmd:w-[90%] sm:w-[95%] m-auto'>
        
        
        <div className='flex gap-[1.5rem] text-[2rem] items-center justify-center py-[1.5rem]'>
            <h4 className='text-red-600 font-semibold'>Sản phẩm mới nhất</h4>
            <h4>Sản phẩm bán chạy</h4>
            <h4>Sản phẩm giảm giá</h4>
        </div>
        <div className='sm:w-[85%] md:w-[90%] lg:w-[100%] m-auto grid sm:grid-cols-1 ssm:grid-cols-2 lg:grid-cols-3 mdl:grid-col-3 xl:grid-cols-4 2xl:grid-cols-6 gap-[1rem]'>
            <div className='col-span-2 row-span-2 sm:hidden 2xl:block'>
            <ProductLimitOne/>
            </div>
      
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

export default ProductsNew