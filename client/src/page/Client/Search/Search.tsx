import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Pagination } from 'antd'; // Import Pagination từ Ant Design
import ProductItem from '../../../components/product/ProductItem';
import { Breadcrumb, Checkbox, Form, Select } from 'antd';
import './css/customCss.css';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useDispatch } from 'react-redux';
import { getSearchProductThunk } from '../../../redux/search/Search.slice';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('tukhoa');
  const dispatch = useDispatch();

  // Trạng thái phân trang
  const [currentPage, setCurrentPage] = useState(1);  // Trang hiện tại
  const [pageSize] = useState(12);  // Số sản phẩm trên mỗi trang

  // Dữ liệu tìm kiếm và tổng số kết quả
  const { listSearch } = useAppSelector((state) => state.search);

  // Hàm thay đổi trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Hàm lấy dữ liệu cho trang hiện tại
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return listSearch.slice(startIndex, endIndex);  // Trả về sản phẩm của trang hiện tại
  };

  useEffect(() => {
    dispatch(getSearchProductThunk(query));
  }, [dispatch, query]);

  return (
    <div className='w-[95%] md:w-[90%] lg:w-[80%] m-auto'>
      <Breadcrumb
        items={[
          { title: <a href=''>Trang chủ</a> },
          { title: "Tìm kiếm sản phẩm" }
        ]}
      />
      <div>
        <h3 className='text-[2rem] mb-[1rem] font-semibold py-4'>
          Kết quả phù hợp với từ khóa: <span className='text-[#7500CF]'>{query}</span>
        </h3>

        <div className='grid grid-cols-1 min-[426px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6 gap-4 '>
          {getCurrentPageData().length ? (
            getCurrentPageData().map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <div className="leading-10 col-span-6 flex flex-col items-center justify-center text-center py-20">
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/417/132/original/ecommerce-icon-empty-yellow-shopping-cart-3d-illustration-free-png.png"
                alt="Không tìm thấy sản phẩm"
                className="w-[15rem] h-[15rem] mb-4"
              />
              <h2 className="text-3xl font-semibold text-gray-800">Không có mặt hàng này</h2>
              <p className="text-gray-500 mt-2">
                <p className='text-2xl text-gray-800'>
                  Chúng tôi không tìm thấy sản phẩm nào phù hợp với tìm kiếm của bạn.
                </p>
              </p>
              <button
                onClick={() => window.location.href = '/'}
                className="text-2xl mt-6 px-10 py-3 font-medium bg-customColor text-white rounded-xl hover:bg-indigo-800"
              >
                Trở về trang chủ
              </button>
            </div>
          )}
        </div>

        {/* Thêm phân trang */}
        <div className="flex justify-center mt-6">
          <Pagination
            current={currentPage}
            total={listSearch.length}  // Tổng số sản phẩm
            pageSize={pageSize}
            onChange={handlePageChange}
            showSizeChanger={false}  // Tắt thay đổi số lượng sản phẩm mỗi trang
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
