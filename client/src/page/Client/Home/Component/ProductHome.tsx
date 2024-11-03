import React, { useEffect, useRef, useState } from 'react';
import ProductItem from '../../../../components/product/ProductItem';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { getProductsThunk } from '../../../../redux/product/product.slice';

function ProductHome() {

  // const listProducts = useAppSelector((state) => state.product.listProducts);
  // const dispatch = useAppDispatch();
  // const [randomProducts, setRandomProducts] = useState([]);

  // useEffect(() => {
  //   dispatch(getProductsThunk());
  // }, [dispatch]);

  // // Xáo trộn và chọn ngẫu nhiên 12 sản phẩm
  // useEffect(() => {
  //   if (listProducts.length > 0) {
  //     const shuffledProducts = [...listProducts]
  //       .sort(() => 0.5 - Math.random()) // Xáo trộn danh sách
  //       .slice(0, 12); // Lấy 12 sản phẩm ngẫu nhiên

  //     setRandomProducts(shuffledProducts);
  //   }
  // }, [listProducts]);
  
  
  return (
    <div className='pt-[2rem] pb-[1rem]'>
      <div className="flex justify-between items-center pb-5">
        <h3 className='text-[2.2rem] font-semibold text-[#FF0000]'>Những sản phẩm dành cho bạn</h3>
       
      </div>
      <div className='grid grid-cols-6 gap-[.5rem]'>
     {/* {randomProducts.map((item)=>{
      return <ProductItem product={item}/>
     })} */}
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