import React, { useState, useEffect } from 'react';
import { Button, Drawer, Select, Slider } from 'antd';
import { FiFilter } from 'react-icons/fi';

function AdminFilterProduct({ product, onFilter }) {
  const [open, setOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(product);

  // Filter states
  const [productName, setProductName] = useState('');
  const [rating, setRating] = useState(null);
  const [color, setColor] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 30000000]);

  // Options for select inputs
  const Datasao = [{ value: '1', label: '⭐' }, { value: '2', label: '⭐⭐' }, { value: '3', label: '⭐⭐⭐' }];
  const Datamau = [{ value: 'Xanh', label: 'Xanh' }, { value: 'Vàng', label: 'Vàng' }];
  const Dataloai = [{ value: 'Iphone', label: 'Iphone' }, { value: 'Máy tính', label: 'Máy tính' }];
  const Datahang = [{ value: 'Iphone', label: 'Iphone' }, { value: 'SamSung', label: 'SamSung' }];

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const handleClick = () => {
    const filtered = product.filter((item) => {
      const meetsName = productName ? item.name.includes(productName) : true;
      const meetsRating = rating ? item.rating === parseInt(rating) : true;
      const meetsColor = color ? item.color === color : true;
      const meetsCategory = category ? item.category === category : true;
      const meetsBrand = brand ? item.brand === brand : true;
      const meetsPrice = item.product_price >= priceRange[0] && item.product_price <= priceRange[1];

      return meetsName && meetsRating && meetsColor && meetsCategory && meetsBrand && meetsPrice;
    });
    onFilter(filtered); // Trả kết quả lọc về cho component cha
    setOpen(false); // Đóng drawer khi lọc xong
  };

  return (
    <div>
      <Button onClick={showDrawer} className='p-10'>
        <FiFilter className='text-[18px]' />
        Lọc
      </Button>
      <Drawer title="Lọc chọn tìm sản phẩm" width={700} onClose={onClose} open={open}>
        <form className='grid grid-cols-3 gap-[20px]'>
          <div className='flex flex-col gap-4'>
            <label htmlFor='productName'>Tên sản phẩm</label>
            <input
              type='text'
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className='h-[48px] rounded-lg text-[13px] p-[12px] outline-none'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='rating'>Số sao</label>
            <Select
              placeholder="Chọn mức sao"
              options={Datasao}
              onChange={setRating}
              className='h-[48px] rounded-lg'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='color'>Màu sắc</label>
            <Select
              placeholder="Chọn màu"
              options={Datamau}
              onChange={setColor}
              className='h-[48px] rounded-lg'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='category'>Loại</label>
            <Select
              placeholder="Chọn loại"
              options={Dataloai}
              onChange={setCategory}
              className='h-[48px] rounded-lg'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='brand'>Hãng</label>
            <Select
              placeholder="Chọn hãng"
              options={Datahang}
              onChange={setBrand}
              className='h-[48px] rounded-lg'
            />
          </div>
          <div className='flex flex-col col-span-3 gap-4'>
            <label htmlFor='price'>Giá (VNĐ)</label>
            <Slider
              range
              min={0}
              max={30000000}
              value={priceRange}
              onChange={setPriceRange}
              className='bg-[#81818113]'
            />
            <div className='flex justify-between text-[13px]'>
              <span>{priceRange[0].toLocaleString()} VNĐ</span>
              <span>{priceRange[1].toLocaleString()} VNĐ</span>
            </div>
          </div>
          <div className='col-span-3 flex justify-center gap-4'>
            <Button onClick={onClose} className='w-[150px] h-[45px]'>Hủy bỏ</Button>
            <Button className='w-[150px] h-[45px]' type="primary" onClick={handleClick}>
              Tìm kiếm
            </Button>
          </div>
        </form>
      </Drawer>
    </div>
  );
}

export default AdminFilterProduct;
