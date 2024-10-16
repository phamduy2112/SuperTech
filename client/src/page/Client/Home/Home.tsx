import React from 'react'
import Carousel from './Component/Carousel'
import Catelogry from './Component/Catelogry'
import ProductSale from './Component/ProductSale'
import ProductHome from './Component/ProductHome'
import ProductCategory from './Component/ProductCategory'
import banner1 from "../../../assets/banner7.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";
import banner4 from "../../../assets/banner4.png";
import Dis from './Component/Dis'
import ProductsNew from './Component/ProductsNew'
import GolenWeek from './Component/GolenWeek'
import LaptopComponent from './Component/Laptop'

function Home() {
  return (
    <div>
      <Carousel></Carousel>
      <Catelogry/>
      <ProductSale/>

      <ProductsNew/>
      <div className='w-[80%] mx-auto'>
        <img src={banner2} alt="" className='w-[100%]'/>
        <div className="flex gap-[1%]">
          <img src={banner3} alt="" className='w-[49%]'/>
          <img src={banner4} alt="" className='w-[49%]'/>
        </div>
      </div>
      <LaptopComponent/>
      <div className='w-[80%] mx-auto'>
   
        <div className="flex gap-[1%]">
          <img src={banner3} alt="" className='w-[49%]'/>
          <img src={banner4} alt="" className='w-[49%]'/>
        </div>
      </div>
      <ProductCategory/>
      <div className='w-[80%] mx-auto'>
   
   <div className="flex gap-[1%]">
     <img src={banner3} alt="" className='w-[49%]'/>
     <img src={banner4} alt="" className='w-[49%]'/>
   </div>
 </div>
      <ProductHome/>
      <div className='w-[80%] mx-auto'>
        <img src={banner1} className='w-[100%]'/>
      </div>
      <div className='w-[80%] mx-auto'>
      <div className="grid 2xl:grid-cols-4 gap-[2rem] lg:grid-cols-3 md:grid-cols-2">
       <div>
        <h3 className='text-[2.2rem] font-semibold mt-[2rem]'>Dành riêng cho bạn</h3>
        <GolenWeek/>
         <GolenWeek/>
         <GolenWeek/>
      
       </div>
       <div>
        <h3 className='text-[2.2rem] font-semibold mt-[2rem]'>Khuyến mãi</h3>
        <GolenWeek/>
         <GolenWeek/>
         <GolenWeek/>
      
       </div>
       <div>
        <h3 className='text-[2.2rem] font-semibold mt-[2rem]'>Top bán chạy</h3>
        <GolenWeek/>
         <GolenWeek/>
         <GolenWeek/>
      
       </div>
       <div>
        <h3 className='text-[2.2rem] font-semibold mt-[2rem]'>Sản phẩm mới</h3>
        <GolenWeek/>
         <GolenWeek/>
         <GolenWeek/>
      
       </div>

      </div>
        
      </div>
     
      <Dis/>
    </div>
  )
}

export default Home