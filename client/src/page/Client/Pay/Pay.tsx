import { Breadcrumb, Form, Input, InputNumber, Radio, Select, Steps } from 'antd'
import React, { useState } from 'react'
import './css/formEdit.css'
function Pay() {
  const description = 'This is a description.';
  const [formData, setFormData] = useState({
    name: '',
    sdt: '',
    email: '',
    diaChi: '',
    xuathoadon: '',
    tinhThanhPho: '', // Thêm state để lưu giá trị của Select
    paymentMethod: '', // State cho phương thức thanh toán

  });

  const handleFormChange = (changedValues, allValues) => {
    setFormData({ ...formData, ...changedValues });
  };
  const handlePaymentChange = (e) => {
    setFormData({ ...formData, paymentMethod: e.target.value }); // Cập nhật phương thức thanh toán
  };

  const handleFormSubmit = () => {
    // Xử lý logic khi ấn nút Đặt hàng
    console.log('Form data:', formData);
    // Thực hiện các bước cần thiết sau khi lấy được dữ liệu
  };
  return (
    <div className='xl:w-[80%] xmd:w-[90%] sm:w-[95%] m-auto mx-auto'>
    <Breadcrumb
    className='py-[1rem]'
    items={[
      {
        title: <a href=''>Trang chủ</a>,
      },
      {
        title: "Thanh toán",
      },
 
    ]}
  />

    <div className='xll:w-[40%] lg:w-[60%] m-auto pb-[1rem]'>
    <Steps
    current={0}
    percent={60}
    items={[
      {
        title: 'Đơn hàng',
  
      },
      {
        title: 'Thanh toán',
      
     
      },
      {
        title: 'Xuất hoá đơn',
      
      },
    ]}
  />
    </div>
    <div className='xll:w-[80%] md:w-[100%] justify-between md:flex m-auto flex-wrap'>
    <div className='lg:w-[50%] md:w-[53%] md:hidden'>
      <h3 className='sm:text-[1.8rem] sm:font-semibold lg:text-[2.5rem] md:text-[2.2rem] py-[1rem]'>Đơn đặt hàng</h3>
      <div>
          <div className='flex justify-between text-[1.5rem] py-[1rem] font-semibold border border-b-gray-500'>
            <p className='sm:w-[70%] xsm:w-[80%]'>Sản phẩm</p>
            <p className='xsm:w-[20%]'>Tạm tính</p>
          </div>
          <div className='flex  sm:text-[1.3rem] sxm:text-[1.4rem] py-[1rem] border border-b-gray-500'>
            <div className='w-[80%] flex'>
              <div className='xsm:w-[70px] sm:w-[60px]'>
              <img
                className="w-[100%]"
                src="https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg" alt="" />
              </div>
              <div>
            
              <h5 className='font-semibold sm:text-[1.3rem] sxm:text-[1.4rem] lg:hidden'>
                 IPhone 13 Pro max...  <span className='text-[#7500CF]'>(x1)</span>
              </h5>
              <p className='my-[.2rem]'>Màu sắc: Xanh</p>
              <p>Số lượng: <span className='text-[#7500CF] font-semibold '>1</span></p>
              <p className='text-red-600 font-semibold mt-[.2rem]'>
              30.000.000đ
              <span className="text-[1.4rem] text-gray-500 ml-[.5rem] font-medium" style={{textDecoration:"line-through"}}>31.990.000đ</span>
              </p>
              
              </div>
           
            </div>
            <div className='w-[20%] text-[#7500CF] font-semibold sm:text-[1.2rem] sxm:text-[1.4rem] ssm:text-[1.5rem]'>30.000.000đ</div>
          </div>
          <div className=' sm:text-[1.4rem] sxm:text-[1.5rem] py-[1rem] border border-b-gray-500'>
            <div className='flex w-[100%] mb-[.5rem]'>
            <p className='w-[80%]'>Tạm tính</p>
            <p className='w-[20%] font-semibold sm:text-[1.2rem] sxm:text-[1.4rem] ssm:text-[1.5rem]'>52.000.000đ</p>
            </div>
            <div className='flex w-[100%] justify-between'>
            <p className='w-[80%]'>Giao hàng</p>
            <p className='w-[20%] font-semibold sm:text-[1.2rem]  sxm:text-[1.4rem] ssm:text-[1.5rem]'>0</p>
            </div>
            
          </div>
          <div className=' text-[1.6rem] py-[1rem] font-semibold border border-b-gray-500'>
            <div className='flex w-[100%]'>
            <p className='w-[80%]'>Tổng tiền</p>
            <p className='w-[20%] text-red-600 sm:text-[1.2rem]  sxm:text-[1.4rem] ssm:text-[1.5rem]'>52.000.000đ</p>
            </div>
           
            
          </div>
          <div>
            <h3 className='lg:text-[2rem] text-[1.7rem] py-[1rem] font-semibold'>Phương thức thanh toán</h3>
            <div className='border-[#7500CF] border py-[1rem] px-[1.5rem] relative'>
              <input
                type="radio"
                name="paymentMethod"
                value="bank"
                onChange={handlePaymentChange}
                className="absolute top-5"
              />
              <div className='ml-[2rem]'>
                 <h4 className='text-[1.7rem] font-semibold'>Chuyển hướng qua ngân hàng</h4>
              <p className='text-[1.6rem] text-gray-500 mt-[.5rem]'>
                Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần phương thức thanh toán. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.
              </p>
              </div>
             
            </div>
            <div className='border-[#7500CF] border py-[1rem] px-[1.5rem] mt-[1rem] relative'>
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                onChange={handlePaymentChange}
                className="absolute top-5"

              />
              <div className='ml-[2rem]'>
 <h4  className='text-[1.7rem] font-semibold'>Trả tiền mặt</h4>
              <p className='text-[1.6rem] text-gray-500 mt-[.5rem]'>
                Trả tiền mặt sau khi giao hàng
              </p>
              </div>
             
            </div>
          </div>
          <div className='mt-[1.5rem] fixed bottom-0 left-0 w-[100%]  text-white bg-[#7500CF] z-20'>
          <button onClick={handleFormSubmit} className=' text-[1.8rem] w-[100%] py-[1rem]'>Đặt hàng</button>
          </div>
      </div>
      </div>
      <div className=' md:w-[45%]'>
        <h3 className='lg:text-[2.5rem] md:text-[2.2rem] py-[1rem] sm:text-[1.8rem] sm:font-semibold'>Thông tin thanh toán</h3>
        <div>
        <Form autoComplete='off' className='formEdit' onValuesChange={handleFormChange}>
        <Form.Item name="name" label="Họ và tên" >
          <Input />
        </Form.Item>
        <Form.Item name="sdt" label="Số điện thoại">
        <InputNumber 
         className='w-[100%]'
        />

        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item label='Tỉnh thành phố'>
                <Select onChange={(value) => setFormData({ ...formData, tinhThanhPho: value })}>
                  <Select.Option value='tp1'>Tỉnh/Thành phố 1</Select.Option>
                  <Select.Option value='tp2'>Tỉnh/Thành phố 2</Select.Option>
                  <Select.Option value='tp3'>Tỉnh/Thành phố 3</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label='Quận/huyện'>
                <Select>
                  <Select.Option value='qh1'>Quận/Huyện 1</Select.Option>
                  <Select.Option value='qh2'>Quận/Huyện 2</Select.Option>
                  <Select.Option value='qh3'>Quận/Huyện 3</Select.Option>
                </Select>
              </Form.Item>
        <Form.Item name="diaChi" label="Địa chỉ">
          <Input />
        </Form.Item>
        <div>
        
        <Form.Item label='Xuất hoá đơn VAT'>
                  <Radio.Group onChange={(e) => setFormData({ ...formData, xuathoadon: e.target.value })}>
                    <Radio value='apple'>Có</Radio>
                    <Radio value='pear'>Không</Radio>
                  </Radio.Group>
                </Form.Item>
        </div>
      </Form>
        </div>
      </div>
      <div className='lg:w-[50%] md:w-[53%] sm:hidden md:block sm:font-semibold'>
      <h3 className='lg:text-[2.5rem] md:text-[2.2rem] py-[1rem]'>Đơn đặt hàng</h3>
      <div>
          <div className='flex text-[1.8rem] py-[1rem] font-semibold border border-b-gray-500'>
            <p className='w-[80%]'>Sản phẩm</p>
            <p className='w-[20%]'>Tạm tính</p>
          </div>
          <div className='flex md:text-[1.5rem] lg:text-[1.6rem] py-[1rem] border border-b-gray-500'>
            <div className='w-[80%] flex'>
              <div className='w-[70px]'>
              <img
                className="w-[100%]"
                src="https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg" alt="" />
              </div>
              <div>
              <h5 className='font-semibold text-[1.7rem] md:hidden lg:block'>
                 IPhone 13 Pro max chính hãng ,256GB  <span className='text-[#7500CF]'>(x1)</span>
              </h5>
              <h5 className='font-semibold text-[1.6rem] lg:hidden'>
                 IPhone 13 Pro max...  <span className='text-[#7500CF]'>(x1)</span>
              </h5>
              <p className='my-[.2rem]'>Màu sắc: Xanh</p>
              <p>Số lượng: <span className='text-[#7500CF] font-semibold '>1</span></p>
              <p className='text-red-600 font-semibold mt-[.2rem]'>
              30.000.000đ
              <span className="text-[1.6rem] text-gray-500 ml-[.5rem] font-medium" style={{textDecoration:"line-through"}}>31.990.000đ</span>
              </p>
              
              </div>
           
            </div>
            <div className='w-[20%] text-[#7500CF] font-semibold'>30.000.000đ</div>
          </div>
          <div className=' text-[1.8rem] py-[1rem] border border-b-gray-500'>
            <div className='flex w-[100%] mb-[.5rem]'>
            <p className='w-[80%]'>Tạm tính</p>
            <p className='w-[20%] font-semibold md:text-[1.5rem] lg:text-[1.6rem]'>52.000.000đ</p>
            </div>
            <div className='flex w-[100%] justify-between'>
            <p className='w-[80%]'>Giao hàng</p>
            <p className='w-[20%] font-semibold md:text-[1.5rem] lg:text-[1.6rem]'>0</p>
            </div>
            
          </div>
          <div className=' text-[1.8rem] py-[1rem] font-semibold border border-b-gray-500'>
            <div className='flex w-[100%]'>
            <p className='w-[80%]'>Tổng tiền</p>
            <p className='w-[20%] text-red-600 md:text-[1.5rem] lg:text-[1.6rem]'>52.000.000đ</p>
            </div>
           
            
          </div>
          <div>
            <h3 className='lg:text-[2rem] md:text-[1.8rem] py-[1rem]'>Phương thức thanh toán</h3>
            <div className='border-[#7500CF] border py-[1rem] px-[1.5rem] relative'>
              <input
                type="radio"
                name="paymentMethod"
                value="bank"
                onChange={handlePaymentChange}
                className="absolute top-5"
              />
              <div className='ml-[2rem]'>
                 <h4 className='text-[1.8rem] font-semibold'>Chuyển hướng qua ngân hàng</h4>
              <p className='text-[1.7rem] text-gray-500 font-medium mt-[.5rem]'>
                Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần phương thức thanh toán. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.
              </p>
              </div>
             
            </div>
            <div className='border-[#7500CF] border py-[1rem] px-[1.5rem] mt-[1rem] relative'>
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                onChange={handlePaymentChange}
                className="absolute top-5"

              />
              <div className='ml-[2rem]'>
 <h4  className='text-[1.8rem] font-semibold'>Trả tiền mặt</h4>
              <p className='text-[1.7rem] font-medium text-gray-500 mt-[.5rem]'>
                Trả tiền mặt sau khi giao hàng
              </p>
              </div>
             
            </div>
          </div>
          <div className='mt-[1.5rem]'>
          <button onClick={handleFormSubmit} className='lg:text-[2rem] md:text-[1.8rem] text-white bg-[#7500CF] w-[100%] py-[1rem]'>Đặt hàng</button>
          </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Pay