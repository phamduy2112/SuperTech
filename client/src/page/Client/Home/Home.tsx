
import React from 'react'
import Carousel from './Component/Carousel'
// import Catelogry from './Component/Catelogry'
import ProductSale from './Component/ProductSale'
import Catelory2 from './Component/Catelory2'
// import ProductHome from './Component/ProductHome'
// import ProductCategory from './Component/ProductCategory'
import banner1 from "../../../assets/banner7.png";
import banner3 from "../../../assets/banner3.png";
import banner4 from "../../../assets/banner4.png";
import Dis from './Component/Dis'
// import ProductsNew from './Component/ProductsNew'
// import GolenWeek from './Component/GolenWeek'
import ListProductSmall from './Component/ListProductSmall'
import LaptopComponent from './Component/Laptop'
import { Container } from '../../../components/Style/Container';
import ProductHome from './Component/ProductHome';
import ProductsNew from './Component/ProductsNew';
import UseSocket from '../../../socket/useSocket';

function Home() {
  UseSocket(); // Gọi custom hook useSocket trong component này

  return (
    <div>
  <Carousel></Carousel>
    <Container>
   
      {/* <Catelogry/> */}
      {/* <Category> */}
      
      <ProductSale/>
      {/* <ProductsNew/> */}


      <div className='mx-auto'>   
        <div className="flex gap-[1%]">
          <img src={banner3} alt="" className='w-[50%] rounded-3xl py-5'/>
          <img src={banner4} alt="" className='w-[50%] rounded-3xl py-5'/>
        </div>
      </div>
      <LaptopComponent/>

      <Catelory2></Catelory2>
      
      {/* <ProductHome/> */}
      <ProductHome/>
      <div className='mx-auto'>

        <img src={banner1} className='w-[100%] rounded-xl'/>
      </div>
      <div className='mx-auto'>   
        <div className="flex gap-[1%]">
          <img src={banner3} alt="" className='w-[50%] rounded-3xl py-5'/>
          <img src={banner4} alt="" className='w-[50%] rounded-3xl py-5'/>
        </div>
      </div>



      {/*Carousel Banner */}
      <div className="mx-auto">
          <h1 className="text-[2.5rem] font-semibold my-5">Banner 2</h1>
          
          <div className="flex gap-5 h-[40rem]">
            {/* Featured Item */}
            <div></div>
            <div className="w-[35%] p-10 bg-white rounded-2xl shadow-md flex flex-col items-center">
              <div className="top-0 left-0 w-full h-1.5 bg-gray-100 rounded-t-2xl">
                <div className="h-1.5 w-1/5 bg-customColor rounded-t-2xl"></div>
              </div>

              {/* Product Information */}
              <p className="mt-[3.5rem] text-2xl font-semibold">Macbook Air M3 13 2024 8CPU</p>
              <p className="text-lg">10GPU/16GB/256GB</p>
              <p className="text-3xl font-bold text-customColor mt-2">31.990.000 ₫</p>

              {/* Button */}
              <button className="mt-4 px-4 py-2 text-lg bg-black text-white rounded-full  hover:bg-customColor transition-colors duration-300">
                Xem chi tiết
              </button>

              {/* Product Image */}
              <img src='https://midatlanticconsulting.com/blog/wp-content/uploads/2023/10/MacBook-Pro-Space-Black-M3-Pro.png' alt="Macbook" className="w-[60%] mt-10" />
          </div>


            {/* Category Sections (làm carousel) */}
            <div className="w-[65%] flex gap-4">
              {/* Section 1 */}
              <div className="flex-1 bg-gray-100 p-5 rounded-2xl shadow-md">
                <h2 className="text-3xl font-medium p-3">Laptop đỉnh cao</h2>
                <p className="text-xl font-normal px-3">Khơi nguồn sáng tạo</p>
                <button className="my-4 mx-3 px-5 py-2.5 font-medium bg-black text-white text-lg rounded-full hover:bg-customColor transition-colors duration-300">
                  Khám phá ngay
                </button>
              </div>

              {/* Section 2 */}
              <div className="flex-1 bg-gray-100 p-5 rounded-2xl shadow-md">
                <h2 className="text-3xl font-medium p-3">Nâng tầm đẳng cấp bàn làm việc</h2>
                <p className="text-xl font-normal px-3">Khơi nguồn sáng tạo</p>
                <button className="my-4 mx-3 px-5 py-2.5 font-medium bg-black text-white text-lg rounded-full hover:bg-customColor transition-colors duration-300">
                  Khám phá ngay
                </button>
              </div>

              {/* Section 3 */}
              <div className="flex-1 bg-gray-100 p-5 rounded-2xl shadow-md">
                <h2 className="text-3xl font-medium p-3">Hỗ trợ công việc hiệu quả</h2>
                <p className="text-xl font-normal px-3">Khơi nguồn sáng tạo</p>
                <button className="my-4 mx-3 px-5 py-2.5 font-medium bg-black text-white text-lg rounded-full hover:bg-customColor transition-colors duration-300">
                  Khám phá ngay
                </button>
              </div>
            </div>
          </div>
        </div>





     {/* <ListProductSmall/> */}
   
      <Dis/>
    </Container>
    </div>
  
  )
}

export default Home
