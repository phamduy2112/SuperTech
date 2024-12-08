import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductItem from '../../../../components/product/ProductItem';
import { getCatelogryDadById } from '../../../../service/catelogry/catelogry.service';
import { getProductsByIdCatelogry } from '../../../../service/product/product.service';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LaptopComponent() {
  const [catelogryLaptop, setCatelogryLaptop] = useState([]);
  const [productLaptop, setProductLaptop] = useState([]);
  const [idCatelogry, setIdCatelogry] = useState(2);
  const [activeTab, setActiveTab] = useState('Asus');
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    const fetchCatelogry = async () => {
      try {
        const data = await getCatelogryDadById(idCatelogry);
        setCatelogryLaptop(data.data.content.slice(0, 3));
      } catch (e) {
        console.error(e);
      }
    };
    fetchCatelogry();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const dataProduct = await getProductsByIdCatelogry(idCatelogry);
        setProductLaptop(dataProduct.data.content);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProducts();
  }, [idCatelogry]);

  const handleTabClick = (tab, id) => {
    setActiveTab(tab);
    setIdCatelogry(id);
  };

  const getTabClass = (tabName) =>
    `sm:px-[1rem] md:px-[2rem] py-[1rem] cursor-pointer ${
      activeTab === tabName ? 'text-[#7500CF] border-b-2 border-[#7500CF]' : ''
    }`;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: (
      <div className="absolute top-[45%] -left-16 transform z-10 translate-y-[-50%]">
        <div className="w-[3.2rem] h-[3.2rem] rounded-full bg-black flex justify-center items-center opacity-60 hover:opacity-100 cursor-pointer">
          <IoIosArrowBack className="text-[2rem] text-white" />
        </div>
      </div>
    ),
    nextArrow: (
      <div className="absolute top-[45%] -right-16 transform z-10 translate-y-[-50%]">
        <div className="w-[3.2rem] h-[3.2rem] rounded-full bg-black flex justify-center items-center opacity-60 hover:opacity-100 cursor-pointer">
          <IoIosArrowForward className="text-[2rem] text-white" />
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1600,
        settings: { 
          slidesToShow: 4, 
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: { 
          slidesToShow: 3, 
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: { 
          slidesToShow: 2, 
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: { 
          slidesToShow: 1, 
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full m-auto py-20">
      <div className="flex flex-col gap-6">
        <div className="w-full px-20">
          <div className="pb-5">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h4 className="text-[2rem] sm:text-[2.5rem] font-semibold">Laptop</h4>
              <div className="flex gap-4">
                {catelogryLaptop.map((tab) => (
                  <div
                    key={tab.category_id}
                    className={`${getTabClass(tab.category_name)} cursor-pointer`}
                    onClick={() => handleTabClick(tab.category_name, tab.category_id)}
                  >
                    <span className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem]">
                      {tab.category_name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <Slider {...settings}>
              {productLaptop.map((product) => (
                <div key={product.id} className="px-2">
                  <ProductItem product={product} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaptopComponent;
