import React from "react";
import sale from "../../../../assets/sansale.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import ProductItemHot from "../../../../components/product/ProductItemHot";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/customSlick.css'

function ProductSale() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,  
    slidesToScroll: 1,
    prevArrow: (
      <div className="absolute top-[45%] left-[0] transform translate-x-[50%] z-10 translate-y-[-50%]">
        <div className="w-[3.2rem] h-[3.2rem] rounded-full bg-black flex justify-center items-center opacity-60 hover:opacity-100 cursor-pointer">
          <IoIosArrowBack className="text-[2rem] text-white" />
        </div>
      </div>
    ),
    nextArrow: (
      <div className="absolute top-[45%] right-[0] transform translate-x-[-50%] z-10 translate-y-[-50%]">
        <div className="w-[3.2rem] h-[3.2rem] rounded-full bg-black flex justify-center items-center opacity-60 hover:opacity-100 cursor-pointer">
          <IoIosArrowForward className="text-[2rem] text-white" />
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1600,
        settings: { slidesToShow: 4, slidesToScroll: 1 }
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1 }
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <div className="w-full my-10 xl:w-[100%] xmd:w-[100%] sm:w-[95%] mx-auto">
      {/* Banner Sale */}
      {/* <div className="w-full">
        <img src={sale} alt="Sale Banner" className="w-full" />
      </div> */}

      {/* Product Slider Section */}
      <div className="bg-gradient-to-b from-[#fffccb] to-[#332600] pb-16 px-6">
        <h1 className="text-[5rem] text-brown-300 font-medium p-[3.5rem]">Flash Sale hôm nay</h1>
        <Slider className="mx-10" {...settings}>
          {[...Array(6)].map((_, index) => (
            <ProductItemHot key={index} ></ProductItemHot>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductSale;
