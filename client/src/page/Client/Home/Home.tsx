import React from 'react'
import Carousel from './Component/Carousel'
import Catelogry from './Component/Catelogry'
import ProductSale from './Component/ProductSale'
import ProductHome from './Component/ProductHome'
import ProductCategory from './Component/ProductCategory'
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";
import banner4 from "../../../assets/banner4.png";
import Dis from './Component/Dis'
import ProductsNew from './Component/ProductsNew'
import GolenWeek from './Component/GolenWeek'

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
      <ProductHome/>
      <div className='w-[80%] mx-auto'>
   
        <div className="flex gap-[1%]">
          <img src={banner3} alt="" className='w-[49%]'/>
          <img src={banner4} alt="" className='w-[49%]'/>
        </div>
      </div>
      <ProductCategory/>
      <div className='w-[100%]'>
        <img src={banner1} className='w-[100%]'/>
      </div>
      <div className='w-[80%] mx-auto'>
      <h4 className="text-[2rem] font-semibold mb-[2.5rem]">Tuần lễ vàng</h4>
      <div className="grid grid-cols-4 gap-[2rem]">
         <GolenWeek/>
         <GolenWeek/>
         <GolenWeek/>
         <GolenWeek/>
         <GolenWeek/>
         <GolenWeek/>
         <GolenWeek/>
      </div>
        
      </div>
     
      <Dis/>
    </div>
  )
}

export default Home