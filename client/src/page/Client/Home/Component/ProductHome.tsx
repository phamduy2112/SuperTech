import React, { useEffect, useState } from 'react';
import ProductItem from '../../../../components/product/ProductItem';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { getProductsThunk } from '../../../../redux/product/product.slice';

function ProductHome() {

  const listProducts = useAppSelector((state) => state.product.listProducts);
  const dispatch = useAppDispatch();
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  // Xáo trộn và chọn ngẫu nhiên 12 sản phẩm
  useEffect(() => {
    if (listProducts?.length > 0) {
      const shuffledProducts = [...listProducts]
        .sort(() => 0.5 - Math.random())
        .slice(0, 12);

      setRandomProducts(shuffledProducts);
    }
  }, [listProducts]);

  return (
    <div className="pt-8 pb-4">
      <div className="flex sm:justify-center md:justify-between items-center pb-5">
        <h3 className="text-[1.5rem] sm:text-center sm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] font-semibold text-[#FF0000] text-center">
          Những sản phẩm dành cho bạn
        </h3>
      </div>
      <div className="grid sm:w-[300px] grid-cols-1 ssm:w-[100%] min-[395px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4 justify-center mx-auto">
        {randomProducts.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductHome;
