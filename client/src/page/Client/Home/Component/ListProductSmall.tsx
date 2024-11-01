import React, { useEffect, useState } from 'react'
import GolenWeek from './GolenWeek'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { getProductsThunk } from '../../../../redux/product/product.slice';

function ListProductSmall() {
  //   const [productDiscount,setProductDiscount]=useState([]);
  // const [productNew,setProductNew]=useState([]);
  // const [productHot,setProductHot]=useState([]);
  // const listProducts = useAppSelector((state) => state.product.listProducts);
  // const [randomProducts, setRandomProducts] = useState([]);

  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getProductsThunk());
  // }, [dispatch]);
  // useEffect(() => {
  //   const sortedDiscountedProducts = listProducts
  //     .filter((product) => product.product_discount > 0) // Lọc sản phẩm có mã giảm giá
  //     .sort((a, b) => b.product_discount - a.product_discount) // Sắp xếp giảm giá từ cao đến thấp
  //     .slice(0, 3); // Lấy 4 sản phẩm đầu tiên
  //     if (listProducts.length > 0) {
  //       const sortedByDate = [...listProducts]
  //         .sort((a, b) => new Date(b.product_date) - new Date(a.product_date)) // Sắp xếp theo ngày giảm dần
  //       .slice(0,3)
  //         setProductNew(sortedByDate);
  //     }
  //   const sortedHotProducts = listProducts
  //     .filter((product) => product.product_hot == 1) // Lọc sản phẩm có mã giảm giá
  //     .slice(0, 3); // Lấy 4 sản phẩm đầu tiên

  //   setProductDiscount(sortedDiscountedProducts); // Cập nhật state với danh sách sản phẩm giảm giá
  //   setProductHot(sortedHotProducts)
  //   if (listProducts.length > 0) {
  //       const shuffledProducts = [...listProducts]
  //         .sort(() => 0.5 - Math.random()) // Xáo trộn danh sách
  //         .slice(0, 3); // Lấy 12 sản phẩm ngẫu nhiên
  
  //       setRandomProducts(shuffledProducts);
  //     }
  // }, [listProducts]);
  return (
    <div className='w-[80%] mx-auto'>
    <div className="grid 2xl:grid-cols-4 gap-[3rem] lg:grid-cols-3 md:grid-cols-2">
     <div>
      <h3 className='text-[2.2rem] font-semibold mt-[2rem]'>Dành riêng cho bạn</h3>
      <div className='w-[100%] h-[3px] bg-gray-400 rounded-lg relative mt-[1rem]'>
        <div className='w-[30%] h-[3px] bg-[#7500CF] rounded-lg'></div>
      </div>
<GolenWeek/>

    
     </div>
     <div>
      <h3 className='text-[2.2rem] font-semibold mt-[2rem]'>Khuyến mãi</h3>
      <div className='w-[100%] h-[3px] bg-gray-400 rounded-lg relative mt-[1rem]'>
        <div className='w-[30%] h-[3px] bg-[#7500CF] rounded-lg'></div>
      </div>
 
     </div>
     <div>
      <h3 className='text-[2.2rem] font-semibold mt-[2rem]'>Top bán chạy</h3>
      <div className='w-[100%] h-[3px] bg-gray-400 rounded-lg relative mt-[1rem]'>
        <div className='w-[30%] h-[3px] bg-[#7500CF] rounded-lg'></div>
      </div>
   
     </div>
     <div>
      <h3 className='text-[2.2rem] font-semibold mt-[2rem]'>Sản phẩm mới</h3>
      <div className='w-[100%] h-[3px] bg-gray-400 rounded-lg relative mt-[1rem]'>
        <div className='w-[30%] h-[3px] bg-[#7500CF] rounded-lg'></div>
      </div>
   
     </div>

    </div>
      
    </div>
  )
}

export default ListProductSmall