import React, { useEffect, useState } from 'react';
import ProductItem from '../../../../components/product/ProductItem';
import banner8 from "../../../../assets/banner8.png";
import { IIFE } from '../../../../utils';
import { getCatelogryDadById } from '../../../../service/catelogry/catelogry.service';
import { getProductsByIdCatelogry } from '../../../../service/product/product.service';

function LaptopComponent() {
  
  const [catelogryLaptop, setCatelogryLaptop] = useState([]);
  const [productLaptop, setProductLaptop] = useState<any>([]);
  const [idCatelogry, setIdCatelogry] = useState(4); // Mặc định ID ban đầu là 4
  const [activeTab, setActiveTab] = useState('HP'); // Tab mặc định

  // Gọi API để lấy danh mục và sản phẩm tương ứng
  useEffect(() => {
    IIFE(async () => {
      try {
        const data = await getCatelogryDadById("Laptop");
        setCatelogryLaptop(data.data.content);
        const dataProduct = await getProductsByIdCatelogry(idCatelogry);
        setProductLaptop(dataProduct.data.content);
      } catch (e) {
        console.error(e);
      }
    });
  }, [idCatelogry]); // Gọi lại mỗi khi idCatelogry thay đổi

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
    <div className='xl:w-[80%] xmd:w-[90%] sm:w-[95%] m-auto pt-[2rem] pb-[1rem]'>
      <div className="flex gap-[1rem]">

        <div className='w-[81.5%]'>
          <div className="pb-5">
            <div className="flex justify-between items-center">
              <h4 className='text-[2.5rem] font-semibold'>Laptop</h4>
          
              <div className='flex gap-[.5rem]'>
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

          <div className="grid grid-cols-5 gap-4">
            {productLaptop.slice(0, 5).map((product) => (
              <ProductItem key={product.id} product={product} /> // Hiển thị sản phẩm
            ))}
          </div>
        </div>

        <img src={banner8} className='w-[250px]' alt="" />
      </div>
    </div>
  );
}

export default LaptopComponent;