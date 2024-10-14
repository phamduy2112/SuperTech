import React, { useRef } from "react";
import sale from "../../../../assets/sansale.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductItemHot from "../../../../components/product/ProductItemHot";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/customSlick.css'
function ProductSale() {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:  <div className="absolute top-[45%] left-[0] transform translate-x-[50%] z-10 translate-y-[50%]">
    <div className="w-[3.2rem] h-[3.2rem] rounded-[50%] bg-black  flex justify-center items-center opacity-40 hover:opacity-100 cursor-pointer">
      <IoIosArrowBack className="text-[2rem] text-white" />
    </div>
    </div>,
    nextArrow: (
      <div className="absolute top-[45%] right-[10%] transform translate-x-[50%] z-10 translate-y-[50%]">
      <div className="w-[3.5rem] h-[3.5rem] rounded-[50%] bg-black  flex justify-center opacity-40 hover:opacity-100 items-center cursor-pointer">
        <IoIosArrowForward  className="text-[2rem] text-white" />
      </div>
    </div> 
    ),
    responsive: [
    {
      breakpoint: 1600, // For screens larger than 1200px
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    
    {
      breakpoint: 1200, // For screens larger than 1200px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992, // For screens larger than 992px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768, // For screens larger than 768px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576, // For screens larger than 576px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
    

  };

  return (
    <div className="xl:w-[80%] xmd:w-[90%] sm:w-[95%] m-auto">
      <div className="w-[100%]">
        <img src={sale} alt="" className="w-[100%]" />
      </div>
      <div className="bg-gradient-to-b from-[#261414] to-[#B2A0A0] relative w-[100%] pt-[3rem] pb-[4rem]">
        <div className="flex justify-between">
        
        <div className="flex w-[100%] gap-2 px-[3rem] justify-between">
       
    <Slider {...settings}  className="flex w-[100%] gap-2 justify-between slideShow">
   <div>

        <ProductItemHot/>
   </div>
   <div>

        <ProductItemHot/>
   </div>
   <div>

        <ProductItemHot/>
   </div>
   <div>

        <ProductItemHot/>
   </div>
   <div>

        <ProductItemHot/>
   </div>
   <div>

        <ProductItemHot/>
   </div>
    

        </Slider>
          {/* <ProductItemHot/> */}
        </div>
        </div>
     
     
      </div>
      
    </div>
  );
}

export default ProductSale;
