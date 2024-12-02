import React, { useEffect, useState, useRef } from 'react';
import ProductItem from '../../../../components/product/ProductItem';
import { IIFE } from '../../../../utils';
import { getCatelogryDadById } from '../../../../service/catelogry/catelogry.service';
import { getProductsByIdCatelogry } from '../../../../service/product/product.service';

function LaptopComponent() {
  const [catelogryLaptop, setCatelogryLaptop] = useState([]);
  const [productLaptop, setProductLaptop] = useState([]);
  const [idCatelogry, setIdCatelogry] = useState(2); // ID danh mục mặc định
  const [activeTab, setActiveTab] = useState('Asus'); // Tab mặc định
  const cacheRef = useRef({}); // Bộ nhớ đệm sản phẩm (idCatelogry -> dữ liệu)

  // Lấy danh mục Laptop
  useEffect(() => {
    IIFE(async () => {
      try {
        const data = await getCatelogryDadById(idCatelogry);
        // const dataLength=data.data.content.filter((item)=>item?.products?.length>0)
        setCatelogryLaptop(data.data.content.slice(0, 3)); // Lấy 5 danh mục đầu tiên
      } catch (e) {
        console.error(e);
      }
    });
  }, []); // Chỉ chạy 1 lần khi component mount

  // Lấy sản phẩm theo danh mục
  useEffect(() => {
    if (cacheRef.current[idCatelogry]) {
      // Nếu đã có dữ liệu trong cache, lấy từ cache
      setProductLaptop(cacheRef.current[idCatelogry]);
    } else {
      // Nếu chưa có, gọi API và lưu vào cache
      IIFE(async () => {
        try {
          const dataProduct = await getProductsByIdCatelogry(idCatelogry);
          cacheRef.current[idCatelogry] = dataProduct.data.content; // Lưu vào cache
          setProductLaptop(dataProduct.data.content); // Cập nhật state
        } catch (e) {
          console.error(e);
        }
      });
    }
  }, [idCatelogry]); // Chạy lại khi idCatelogry thay đổi

  // Xử lý khi bấm vào tab
  const handleTabClick = (tab, id) => {
    setActiveTab(tab); // Cập nhật tab đang chọn
    setIdCatelogry(id); // Cập nhật ID danh mục
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
                    key={tab.category_id}
                    className={getTabClass(tab.category_name)}
                    onClick={() => handleTabClick(tab.category_name, tab.category_id)}
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
            {productLaptop.slice(0, 6).map((product) => (
              <ProductItem key={product.id} product={product} /> // Hiển thị sản phẩm
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaptopComponent;
