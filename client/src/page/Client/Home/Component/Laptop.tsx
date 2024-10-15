import React, { useState } from 'react'
import ProductItem from '../../../../components/product/ProductItem';
import banner8 from "../../../../assets/banner8.png";

function LaptopComponent() {
    const [activeTab, setActiveTab] = useState('HP');
    const getTabClass = (tabName:any) =>
      `sm:px-[1rem] md:px-[2rem] py-[1rem] cursor-pointer ${
        activeTab === tabName ? 'text-[#7500CF] border-b-2 border-[#7500CF]' : ''
      }`;
    return (
      <div className='xl:w-[80%] xmd:w-[90%] sm:w-[95%] m-auto pt-[2rem] pb-[1rem]'>
        <div className="flex gap-[1rem]">

        <div className='w-[81.5%]'>
        <div className="pb-5">
          <div className="flex justify-between items-center">
            <h4 className='text-[2.5rem] font-semibold '>Laptop</h4>
            <div className='flex gap-[.5rem]'>
        {['HP', 'SAMSUNG', 'XIAOMI', 'OPPO'].map((tab) => (
          <div
            key={tab}
            className={`${getTabClass(tab)} ${tab === 'OPPO' ? 'sm:hidden md:block' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            <span className='sm:text-[1.3rem] md:text-[1.4rem] md:font-medium sm:font-semibold'>
              {tab}
            </span>
          </div>
        ))}
      </div>
          </div>
   
      
          </div>
       
    <div className="grid grid-cols-5">
    
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
   
  
    </div>
   
        </div>
        
        <img src={banner8} className='w-[250px]' alt="" />
        </div>
        
      </div>
    )
}

export default LaptopComponent