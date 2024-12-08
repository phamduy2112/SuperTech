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
      {/* Xóa toàn bộ phần banner 2 ở đây (đoạn code từ div có className="mx-auto" chứa "Banner 2") */}


    


     {/* <ListProductSmall/> */}
   
      <Dis/>
    </Container>
    </div>
  
  )
}

export default Home
