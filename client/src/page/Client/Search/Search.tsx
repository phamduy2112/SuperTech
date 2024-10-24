import React, { useState } from 'react'
import ProductItem from '../../../components/product/ProductItem'
import { Breadcrumb, Button, Checkbox, Col, Form, InputNumber, Popover, Row, Select, Slider } from 'antd'
import './css/customCss.css'
import { CiFilter } from 'react-icons/ci'
import { IoAddOutline } from 'react-icons/io5'
import { HiAdjustmentsHorizontal } from 'react-icons/hi2'
import { operatingSystems, priceList, refreshRates, screenSizes, trademark, ramOptions, romOptions, frontCameras, rearCameras, performanceSpecs, batterySpecs, specialFeatures } from './DataFilter';


function Search() {


  const [filter, setfilter] = useState([
    {
      id: 1,
      value: 'iOS'
    },
    {
      id: 2,
      value: '2G'
    },
    {
      id: 3,
      value: 'Dưới 3 triệu'
    }

  ]);
  function Deletefilter(id: number) {
    // const newFilter = filter.filter((item) => item.id!== id);
    const newfilter = filter.filter((item) => item.id != id);
    setfilter(newfilter);

  }

  function Selected() {
    return (
      <>
        <div className='flex gap-[10px] text-[17px] justify-start items-center'>
          <span>Đã Chọn :</span>
          {filter.map((item, index) => (
            <Button key={index} className='min-w-[70px] h-[40px]  flex justify-center items-center' variant="outlined">
              <span>{item.value}</span>
              <IoAddOutline onClick={() => Deletefilter(item.id)} className='transform transition-all duration-500 hover:text-[red] text-[25px] rotate-[45deg]' />
            </Button>
          ))}

        </div>
      </>
    );
  }
  function OptionSelected() {
    const [priceclick, setPriceClick] = useState(false)
    function orPrice() {
      setPriceClick(!priceclick);
    }

    const [priceRange, setPriceRange] = useState([0, 70000000]);


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (value: any) => {
      setPriceRange(value);
    };

    return (
      <>
        <div className="grid border-t-[1px] grid-cols-3 box-border gap-[15px] text-[14px] p-6  bg-white rounded-lg ">
          <div className="flex flex-col col-span-3">
            <span className="font-bold mb-1 ">Hãng</span>
            <div className="flex flex-wrap gap-3">
              {
                trademark.map((item, index) => (
                  <Button key={index} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                    <img className='w-full h-full object-cover' src={item.url} alt="" />
                  </Button>
                ))
              }
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold mb-1 ">Hệ điều hành</span>
            <div className="grid grid-cols-3 gap-3">
              {
                operatingSystems.map((item, index) => (
                  <Button key={index} className="min-w-[50px] h-[35px] flex justify-center items-center" variant="outlined">
                    <span>{item.name}</span>
                  </Button>
                ))
              }

            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-bold mb-1">Giá</span>
            <div className="grid grid-cols-3 gap-3">
              {
                priceList.map((item, index) => (
                  <Button key={index} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                    <span>{item.price}</span>
                  </Button>
                ))
              }
              <Button onClick={orPrice} className="col-span-3 min-w-[60px] text-[14px] border-0 bg-transparent h-[35px] flex justify-center items-center text-blue-500">
                <HiAdjustmentsHorizontal />
                <span>Hoặc chọn mức giá</span>
              </Button>
              <div className={`${priceclick != false ? 'block' :'hidden'} col-span-3`}>
                <Slider
                  range
                  min={0}
                  max={70000000}
                  onChange={handleChange}
                  value={priceRange}
                />
                <div>
                  Giá: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} VNĐ
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-bold mb-1">Kích thước màn hình</span>
            <div className="grid grid-cols-3 gap-3">
              {
                screenSizes.map((item, index) => (
                  <Button key={index} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                    <span>{item.size}</span>
                  </Button>
                ))
              }

            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-bold mb-1">Tần số quét</span>
            <div className="grid grid-cols-3 gap-3">
              {
                refreshRates.map((item, index) => (
                  <Button key={index} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                    <span>{item.rate}</span>
                  </Button>
                ))
              }

            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-bold mb-1">RAM</span>
            <div className="grid grid-cols-4 gap-3">
              {
                ramOptions.map((item, index) => (
                  <Button key={index} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                    <span>{item.capacity}</span>
                  </Button>
                ))
              }

            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-bold mb-1">Bộ nhớ trong</span>
            <div className="grid grid-cols-3 gap-3">
              <Button className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                <span>16 GB</span>
              </Button>
              {
                romOptions.map((item, index) => (
                  <Button key={index} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                    <span>{item.capacity}</span>
                  </Button>
                ))
              }

            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-bold mb-1">Camera trước</span>
            <div className="grid grid-cols-3 gap-3">
              {
                frontCameras.map((item, index) => (
                  <Button key={index} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                    <span>{item.resolution}</span>
                  </Button>
                ))
              }

            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-bold mb-1">Camera sau</span>
            <div className="grid grid-cols-3  gap-3">
              {
                rearCameras.map((item, index) => (
                  <Button key={index} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                    <span>{item.resolution}</span>
                  </Button>

                ))
              }

            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-bold mb-1">Hiệu năng & Pin</span>
            <div className='grid grid-cols-3 gap-3'>
              {
                performanceSpecs.map((item, index) => (
                  <Button key={index} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                    <span>{item.cpu}</span>
                  </Button>
                ))
              }
              {
                batterySpecs.map((item, index) => (
                  <Button key={index} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                    <span>{item.capacity} & {item.fastCharging}</span>
                  </Button>
                ))
              }

            </div>
          </div>

          <div className="flex flex-col ">
            <span className="font-bold mb-1 text-[14px]">Tính năng đặc biệt</span>
            <div className="grid grid-cols-2 gap-3">
              {
                specialFeatures.map((item, index) => (
                  <Button key={index} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                    <span>{item.feature}</span>
                  </Button>
                ))

              }

            </div>
          </div>
          <div className="flex border-t-[1px] pt-6 flex-row justify-center items-center gap-[5px] col-span-3 mt-4">
            <Button color='danger' className="min-w-[200px] h-[50px] flex justify-center items-center" variant="outlined">
              <span>Bỏ chọn</span>
            </Button>
            <Button color='primary' className="min-w-[200px] h-[50px] flex justify-center items-center" variant="solid">
              <span>Xem 19 kết quả</span>
            </Button>
          </div>
        </div >


      </>
    );

  }


  return (
    <div className='w-[80%] m-auto'>
      <Breadcrumb
        items={[
          {
            title: <a href=''>Trang chủ</a>,
          },
          {
            title: "Tìm kiếm sản phẩm",
          },

        ]}
      />
      <div>
        <h3 className='text-[2rem] mb-[1rem]'>Kết quả phù hợp với từ khóa: <span className='text-[#7500CF] font-semibold'>Iphone</span></h3>
        <div className='flex gap-4'>
          <Popover placement="bottomLeft" trigger={'click'} title={<Selected />} content={<OptionSelected />}>
            <Button className='text-[17px] font-bold'>
              <CiFilter />
              <span>Lọc</span>
            </Button>
          </Popover>
        </div>
        <div className='mt-[.5rem] w-[100%]  '>
          <div className='flex justify-between items-center'>
            <div className='flex gap-[1rem]'>
              <h4 className='text-[1.8rem] mt-[.5rem] font-semibold'>10 Điện thoại iPhone (Apple)</h4>
              <div className='flex items-center justify-center'>

                <Form.Item valuePropName="checked">
                  <Checkbox>Giảm giá</Checkbox>
                </Form.Item>
                <Form.Item valuePropName="checked">
                  <Checkbox>Mới</Checkbox>
                </Form.Item>


              </div>
            </div>
            <div className='w-[200px]'>
              <Form.Item label="Sắp xếp theo">
                <Select defaultValue="demo">
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-6 gap-y-3'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  )
}

export default Search