import React, { useEffect, useState } from 'react';
import ProductItem from '../../../../components/product/ProductItem';
import banner8 from "../../../../assets/banner8.png";
import { IIFE } from '../../../../utils';
import { getCatelogryDadById } from '../../../../service/catelogry/catelogry.service';
import { getProductsByIdCatelogry } from '../../../../service/product/product.service';
import { useAppDispatch } from '../../../../redux/hooks';
import { addItemToCart } from '../../../../redux/cart/cart.slide';
import banner3 from "../../../../assets/banner3.png";

function LaptopComponent() {

  // Lấy state giỏ hàng từ Redux store

  const [catelogryLaptop, setCatelogryLaptop] = useState([]);
  const [productLaptop, setProductLaptop] = useState<any>([]);
  const [idCatelogry, setIdCatelogry] = useState(2); // Mặc định ID ban đầu là 4
  const [activeTab, setActiveTab] = useState('Asus'); // Tab mặc định

  // Gọi API để lấy danh mục và sản phẩm tương ứng

useEffect(() => {
  IIFE(async () => {
    try {
      const data = await getCatelogryDadById(idCatelogry); // Lấy toàn bộ danh mục
      setCatelogryLaptop(data.data.content.slice(0, 5)); // Lấy 5 danh mục đầu tiên
    } catch (e) {
      console.error(e);
    }
  });
}, []); // Chỉ chạy 1 lần khi component được mount

// Lấy sản phẩm theo danh mục
useEffect(() => {
  IIFE(async () => {
    try {
      const dataProduct = await getProductsByIdCatelogry(idCatelogry);
      setProductLaptop(dataProduct.data.content); // Lấy toàn bộ sản phẩm của danh mục hiện tại
    } catch (e) {
      console.error(e);
    }
  });
}, [idCatelogry]); // Chạy lại khi idCatelogry thay đổi
  // Xử lý khi bấm vào tab để thay đổi activeTab và idCatelogry
  const handleTabClick = (tab, id) => {
    setActiveTab(tab); // Cập nhật tab đang được chọn
    setIdCatelogry(id); // Cập nhật ID danh mục và tự động gọi lại API
  };

  const getTabClass = (tabName) =>
    `sm:px-[1rem] md:px-[2rem] py-[1rem] cursor-pointer ${
      activeTab === tabName ? 'text-[#7500CF] border-b-2 border-[#7500CF]' : ''
    }`;
    

  return (
    <div className='xl:w-[100%] xmd:w-[100%] sm:w-[105%] m-auto py-[5rem]'>
      <div className="flex gap-[1rem]">
        <div className='w-full'>
          <div className="pb-5">
            <div className="flex justify-between items-center">
              <h4 className='text-[2.5rem] font-semibold'>Laptop</h4>
              <div className='flex gap-[1.5rem]'>
                {catelogryLaptop.map((tab) => (
                  <div
                    key={tab.category_id} // Giả sử `tab.id` là ID danh mục
                    className={getTabClass(tab.category_name)}
                    onClick={() => handleTabClick(tab.category_name, tab.category_id)} // Bấm vào để cập nhật tab và id
                  >
                    <span className='sm:text-[1.3rem] md:text-[1.8rem]'>
                      {tab.category_name}
                    </span>
                  </div>
                ))}
              </div>
            </div>   
          </div>
      
          <div className="grid grid-cols-6 gap-4">
          {/* <img src={banner3} alt="" className='w-[100%] h-[100%] rounded-3xl py-5'/> */}

            {productLaptop.slice(0,6).map((product) => (
              <ProductItem product={product}/> // Hiển thị sản phẩm
            ))}
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaptopComponent;