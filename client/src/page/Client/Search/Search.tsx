import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import ProductItem from '../../../components/product/ProductItem';
import { Breadcrumb, Button, Checkbox, Col, Form, Popover, Row, Select, Slider } from 'antd';
import './css/customCss.css';
import { CiFilter } from 'react-icons/ci';
import { IoAddOutline } from 'react-icons/io5';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { operatingSystems, priceList, refreshRates, screenSizes, trademark, ramOptions, romOptions, frontCameras, rearCameras, performanceSpecs, batterySpecs, specialFeatures } from './DataFilter';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useDispatch } from 'react-redux';
import { getSearchProductThunk } from '../../../redux/search/Search.slice';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('tukhoa');
  const getSearch=useAppSelector((state)=>state.search.listSearch)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getSearchProductThunk(query))
  },[dispatch,query])
  // const location = useLocation();
  // // const [query, setQuery] = useState('');
  // const [filteredProducts, setFilteredProducts] = useState([]);
 
  // console.log(query);


  // const dispatch=useAppDispatch();
  // const listSearch=useAppSelector((state)=>state.listSearch.listSearch)
  // useEffect(() => {


  //   // Dữ liệu sản phẩm mẫu
  //   const allProducts = [
  //     { id: 1, name: 'iPhone 12', price: 15000000 },
  //     { id: 2, name: 'iPhone 13', price: 20000000 },
  //     { id: 3, name: 'iPhone 14 Pro', price: 30000000 },
  //     // Thêm các sản phẩm khác nếu cần
  //   ];

  //   const results = allProducts.filter(product =>
  //     product.name.toLowerCase().includes(searchQuery?.toLowerCase() || '')
  //   );
  //   setFilteredProducts(results);
  // }, [location.search]);

    const [filter, setFilter] = useState([
      { id: 1, value: 'iOS' },
      { id: 2, value: '2G' },
      { id: 3, value: 'Dưới 3 triệu' }
    ]);

  function Deletefilter(id) {
    const newFilter = filter.filter(item => item.id !== id);
    setFilter(newFilter);
  }

  function Selected() {
    return (
      <div className='flex gap-2 text-lg justify-start items-center'>
        <span>Đã Chọn:</span>
        {filter.map(item => (
          <Button key={item.id} className='min-w-16 h-10 flex justify-center items-center' variant="outlined">
            <span>{item.value}</span>
            <IoAddOutline onClick={() => Deletefilter(item.id)} className='hover:text-red-500 text-xl rotate-45' />
          </Button>
        ))}
      </div>
    );
  }

  function OptionSelected() {
    const [priceclick, setPriceClick] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 70000000]);

    const handleChange = (value) => {
      setPriceRange(value);
    };

    return (
      <div className="grid border-t grid-cols-3 gap-4 p-6 bg-white rounded-lg">
        {/* Các phần bộ lọc khác */}
      </div>
    );
  }

  return (
    <div className='w-4/5 m-auto'>
      <Breadcrumb
        items={[
          { title: <a href=''>Trang chủ</a> },
          { title: "Tìm kiếm sản phẩm" }
        ]}
      />
      <div>
        <h3 className='text-2xl mb-4'>
          {/* Kết quả phù hợp với từ khóa: <span className='text-purple-700 font-semibold'>{query}</span> */}
        </h3>
        <div className='flex gap-4'>
          <Popover placement="bottomLeft" trigger='click' title={<Selected />} content={<OptionSelected />}>
            <Button className='text-lg font-bold'>
              <CiFilter />
              <span>Lọc</span>
            </Button>
          </Popover>
        </div>
        <div className='mt-2 w-full'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-4'>
              <h4 className='text-2xl font-semibold'>Kết quả tìm kiếm</h4>
              <div className='flex items-center'>
                <Form.Item valuePropName="checked">
                  <Checkbox>Giảm giá</Checkbox>
                </Form.Item>
                <Form.Item valuePropName="checked">
                  <Checkbox>Mới</Checkbox>
                </Form.Item>
              </div>
            </div>
            <div className='w-52'>
              <Form.Item label="Sắp xếp theo">
                <Select defaultValue="Mới nhất">
                  <Select.Option value="newest">Mới nhất</Select.Option>
                  <Select.Option value="priceLow">Giá thấp</Select.Option>
                  <Select.Option value="priceHigh">Giá cao</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-y-4 text-[1.6rem]">
        {getSearch.length > 0 ? (
          getSearch.map(product => (
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
              Chúng tôi không tìm thấy sản phẩm nào phù hợp với tìm kiếm của bạn.
            </p>
            <button
              onClick={() => window.location.href = '/'} // Đổi thành URL bạn muốn
              className="mt-6 px-10 py-3 font-medium bg-customColor text-white rounded-xl hover:bg-indigo-800"
            >
              Trở về trang chủ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;