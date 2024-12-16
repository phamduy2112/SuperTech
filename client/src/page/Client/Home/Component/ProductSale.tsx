import React, { useEffect, useState } from "react";
import sale from "../../../../assets/sansale.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import ProductItemHot from "../../../../components/product/ProductItemHot";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/customSlick.css'
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getProductsThunk } from "../../../../redux/product/product.slice";

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
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Hiển thị 1 slide
          slidesToScroll: 1,
        },
      },
      
    ]
  };
const listProducts = useAppSelector((state) => state.product.listProducts);
  const dispatch = useAppDispatch();
  const [listProductHot, setListProductHot] = useState([]);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  // Xáo trộn và chọn ngẫu nhiên 12 sản phẩm
  useEffect(() => {
    if (listProducts?.length > 0) {
      const shuffledProducts = [...listProducts]
      .sort((a, b) => b.product_hot - a.product_hot) // Sắp xếp giảm dần theo hot
      .slice(0, 10); // Lấy 10 sản phẩm đầu tiên

        setListProductHot(shuffledProducts);
    }
  }, [listProducts]);
  console.log(listProductHot);
  
  return (
    <div className="w-full my-10 xl:w-[100%] xmd:w-[100%] sm:w-[95%] mx-auto">
      {/* Banner Sale */}
      {/* <div className="w-full">
        <img src={sale} alt="Sale Banner" className="w-full" />
      </div> */}

      {/* Product Slider Section */}
      <div className="bg-gradient-to-b from-[#fffccb] to-[#332600] pb-8 md:pb-12 lg:pb-16 px-3 sm:px-4 md:px-5 lg:px-6">
      <h1 className="text-[5rem] sm:text-[3rem] md:text-[2rem] lg:text-[3rem] text-brown-300 font-medium p-4 sm:p-6 md:p-8 lg:p-[2.5rem]">Sản Phẩm nổi bật</h1>
        <Slider className="mx-10" {...settings}>
          {listProductHot.map((item, index) => (
            <ProductItemHot key={index} product={item} ></ProductItemHot>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductSale;
