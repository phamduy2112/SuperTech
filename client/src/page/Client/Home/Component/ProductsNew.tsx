import React from 'react'
import ProductItem from '../../../../components/product/ProductItem'
import ProductLimitOne from './ProductLimitOne'
import Slider from 'react-slick';

function ProductsNew() {
    
  return (
    <div className='w-[80%] mx-auto'>
        <div className='grid grid-cols-6'>
            <div className='col-span-2 row-span-2'>
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