import React, { useRef } from 'react';
import ProductItem from '../../../../components/product/ProductItem';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';

function ProductHome() {
  const sliderRef:any = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Đảm bảo slidesToShow lớn hơn hoặc bằng 1
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className='w-[80%] m-auto pt-[2rem] pb-[1rem]'>
      <div className="flex justify-between items-center pb-5">
        <h3 className='text-[2.2rem] font-semibold text-[#FF0000]'>Ngày hội siêu sale</h3>
        <div className='flex gap-[0.5rem]'>
          <div
            onClick={() => sliderRef.current.slickPrev()}
            className='w-[3rem] h-[3rem] cursor-pointer rounded-[50%] bg-[#7500CF] flex justify-center items-center'
          >
            <IoIosArrowBack className="text-[2rem] text-white" />
          </div>
          <div
            onClick={() => sliderRef.current.slickNext()}
            className='w-[3rem] h-[3rem] cursor-pointer rounded-[50%] bg-[#7500CF] flex justify-center items-center'
          >
            <IoIosArrowForward className="text-[2rem] text-white" />
          </div>
        </div>
      </div>
      <div className='flex'>
        <Slider {...settings} ref={sliderRef} className="flex w-[100%] gap-2 justify-between slideProductHome">
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
        </Slider>
      </div>
    </div>
  );
}

export default ProductHome;