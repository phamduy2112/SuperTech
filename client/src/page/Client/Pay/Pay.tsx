import { Breadcrumb, Form, Input, InputNumber, Radio, Select, Steps } from 'antd'
import React, { useEffect, useState } from 'react'
import './css/formEdit.css'
import { Container } from '../../../components/Style/Container';
import axios from 'axios';
import { getUserThunk } from '../../../redux/user/user.slice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { createDetailOrder, createOrder } from '../../../service/order/order.service';
import { removeAllCart } from '../../../redux/cart/cart.slice';
import { useNavigate } from 'react-router-dom';
import { formatCurrencyVND } from '../../../utils';
import { setOrderId } from '../../../redux/order/Order.slice';
function Pay() {
  const dispatch = useAppDispatch();
  const navigate=useNavigate();
  const user: any = useAppSelector((state) => state.user.user);
  const listCart:any=useAppSelector((state)=>state.cart.listCart)
  const totalItem=useAppSelector((state)=>state.cart.totalItems)
  console.log(totalItem);
  
  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);
  const totalPrice = listCart.reduce((total:number, item) => {
    const discountAmount = (item.product_price * item.product_discount) / 100; // Tính giảm giá
    const priceAfterDiscount = item.product_price - discountAmount; // Tính giá sau giảm
    const itemTotalPrice = item.quantity * priceAfterDiscount; // Tính tổng giá của item
    return total + itemTotalPrice; // Cộng dồn vào total
  }, 0);

  const [formData, setFormData] = useState({
    name: user?.user_name || '', // Gán giá trị ban đầu cho name
    sdt:user?.user_phone||'',
    email: user?.user_email||'',
    diaChi: user?.user_address||'',
    xuathoadon: '',
    district:'',
    huyen:"",
    tinhThanhPho: '', // Thêm state để lưu giá trị của Select
    paymentMethod: '', // State cho phương thức thanh toán
    totalItem

  });
  const [city,setCity]=useState([])
  const [districts,setDistricts]=useState([]);
  const [districtsCity,setDistrictsCity]=useState([])
  
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        // Gọi API bằng async/await
        const response = await axios.get('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1');
        
        // Kiểm tra và cập nhật dữ liệu vào state
        if (response.data && response.data.data) {
          setCity(response.data.data.data);
        }
      } catch (err) {
        // setError(err.message);
      }
    };

    fetchProvinces();
  }, []);
  const fetchDistricts = async (cityCode) => {
    try {
      const response = await axios.get(`https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${cityCode}&limit=-1`);
      if (response.data && response.data.data) {
        setDistricts(response.data.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const fetchDistrictsCity = async (cityCode) => {
    try {
      const response = await axios.get(`https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${cityCode}&limit=-1`);
      if (response.data && response.data.data) {
        setDistrictsCity(response.data.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleCityChange = (value, option) => {
    setFormData({ ...formData, tinhThanhPho: value });
    setCity(option.key); // Lưu mã tỉnh đã chọn
    fetchDistricts(option.key); // Gọi API để lấy quận
  };
  const handleDistrictsChange = (value, option) => {
    setFormData({ ...formData, district: value });
    setDistricts(option.key); // Lưu mã tỉnh đã chọn
    fetchDistrictsCity(option.key); // Gọi API để lấy quận
  };

  const handleFormChange = (changedValues, allValues) => {
    setFormData({ ...formData, ...changedValues });
  };
  const handlePaymentChange = (e) => {
    setFormData({ ...formData, paymentMethod: e.target.value }); // Cập nhật phương thức thanh toán
  };

  const handleFormSubmit = async() => {
    // Xử lý logic khi ấn nút Đặt hàng

    const dataOrder={
      order_total:totalPrice,
      order_total_quatity:+totalItem,
      order_status:0,
      user_id:user.user_id,
      phone_number:formData.sdt,
      address: formData.diaChi + ' ' + formData.huyen+ " " + formData.district +" "+ formData.tinhThanhPho
    }

  
    const resp=await createOrder(dataOrder)
    // console.log(resp);
    
    // Thực hiện các bước cần thiết sau khi lấy được dữ liệu
    // create detail order

    const detailOrders = listCart.map(item => ({
      product_id: item.product_id,
      order_id:resp.data.content.order_id,
      detail_order_quality:item.quantity,
      detail_order_price:item.product_price,
      discount_product:item.product_discount,

    }));

    const responve=await createDetailOrder(detailOrders)
    if(responve){
    
      dispatch(setOrderId(resp.data.content.order_id))
      navigate("/xuất-hóa-đơn")
      // dispatch(removeAllCart())
    }
  };
  return (
    <Container>
    <div className=' py-6 text-[1.5rem]'>
          <div className="my-[1.5rem] text-[1.5rem] text-gray-600">
            <a href="/" className="text-customColor hover:underline">
              Trang chủ
            </a>
            <span className="mx-2">/</span>
            <span>Giỏ hàng</span>
          </div>

    <div className='xll:w-[40%] lg:w-[60%] mx-auto my-[2rem] p-[2rem]'>
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
    <div className='xll:w-[100%] md:w-[100%] justify-between md:flex flex-wrap m-auto leading-10'>
    <div className='lg:w-[50%] md:w-[53%] md:hidden '>
      <h3 className='sm:text-[1.8rem] sm:font-semibold lg:text-[2.5rem] md:text-[2.2rem] py-[1rem]'>Đơn đặt hàng</h3>
      <div>
          <div className='flex justify-between text-[1.5rem] py-[1rem] font-semibold border border-b-[#969696] border-transparent'>
            <p className='sm:w-[70%] xsm:w-[80%]'>Sản phẩm</p>
            <p className='xsm:w-[20%]'>Tạm tính</p>
          </div>      
          <div className='flex  sm:text-[1.3rem] sxm:text-[1.4rem] py-[1rem] border border-b-[#969696] border-transparent'>
            <div className='w-[80%] flex'>
              <div className='xsm:w-[70px] sm:w-[60px]'>
              <img
                className="w-[100%]"
                src="https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg" alt="" />
              </div>
              <div>
            
              <h5 className='font-semibold sm:text-[1.3rem] sxm:text-[1.4rem] lg:hidden'>
                 IPhone 13 Pro max...  <span className='text-customColor'>(x1)</span>
              </h5>
              <p className='my-[.2rem]'>Màu sắc: Xanh</p>
              <p>Số lượng: <span className='text-[#7500CF] font-semibold '>1</span></p>
              <p className='text-red-600 font-semibold mt-[.2rem]'>
              30.000.000đ
              <span className="text-[1.4rem] text-[#969696] ml-[.5rem] font-medium" style={{textDecoration:"line-through"}}>31.990.000đ</span>
              </p>
              
              </div>
           
            </div>
            <div className='w-[20%] text-customColor font-semibold sm:text-[1.2rem] sxm:text-[1.4rem] ssm:text-[1.5rem]'>30.000.000đ</div>
          </div>
          <div className=' sm:text-[1.4rem] sxm:text-[1.5rem] py-[1rem] border border-b-[#969696]'>
            <div className='flex w-[100%] mb-[.5rem]'>
            <p className='w-[80%]'>Tạm tính</p>
            <p className='w-[20%] font-semibold sm:text-[1.2rem] sxm:text-[1.4rem] ssm:text-[1.5rem]'>52.000.000đ</p>
            </div>
            <div className='flex w-[100%] justify-between'>
            <p className='w-[80%]'>Giao hàng</p>
            <p className='w-[20%] font-semibold sm:text-[1.2rem]  sxm:text-[1.4rem] ssm:text-[1.5rem]'>0</p>
            </div>
            
          </div>
          <div className=' text-[1.6rem] py-[1rem] font-semibold border border-b-[#969696]'>
            <div className='flex w-[100%]'>
            <p className='w-[80%]'>Tổng tiền</p>
            <p className='w-[20%] text-red-600 sm:text-[1.2rem]  sxm:text-[1.4rem] ssm:text-[1.5rem]'>52.000.000đ</p>
            </div>
           
            
          </div>
          <div>
            <h3 className='lg:text-[2rem] text-[1.7rem] py-[1rem] font-semibold'>Phương thức thanh toán</h3>
            <div className='border-customColor border py-[1rem] px-[1.5rem] relative'>
              <input
                type="radio"
                name="paymentMethod"
                value="bank"
                onChange={handlePaymentChange}
                className="absolute top-5"
              />
              <div className='ml-[2rem]'>
                 <h4 className='text-[1.7rem] font-semibold'>Chuyển hướng qua ngân hàng</h4>
              <p className='text-[1.6rem] text-[#969696] mt-[.5rem]'>
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
                <p className='text-[1.6rem] text-[#969696] mt-[.5rem]'>
                  Trả tiền mặt sau khi giao hàng
                </p>
              </div>
             
            </div>
          </div>
          <div className='mt-[1.5rem] fixed bottom-0 left-0 w-[100%]  text-white bg-customColor z-20'>
          <button onClick={handleFormSubmit} className=' text-[1.8rem] w-[100%] py-[1rem]'>Đặt hàng</button>
          </div>
      </div>
      </div>
      <div className=' md:w-[50%] px-10 py-5 bg-white rounded-lg shadow-xl space-y-1'>
        <h3 className='lg:text-[2.5rem] md:text-[2.2rem] py-[1rem] sm:text-[1.8rem] sm:font-semibold'>Thông tin thanh toán</h3>
        <div>
        <Form autoComplete='off' className='formEdit' onValuesChange={handleFormChange}>
        <Form.Item name="name" label="Họ và tên" initialValue={user?.user_name}>
  <Input
             className='w-[100%] '

  />
</Form.Item>
        <Form.Item name="sdt" label="Số điện thoại"   initialValue={user?.user_phone||''}>
        <Input
         className='w-[100%] '
         placeholder="Nhập số điện thoại của bạn" // Placeholder hiển thị trong ô input

        />

        </Form.Item>
        <Form.Item name="email" label="Email" initialValue={user?.user_email||''}>
          <Input 
                   className='w-[100%] '

           placeholder="Nhập email của bạn" // Placeholder hiển thị trong ô input
          />
        </Form.Item>
        <Form.Item label='Tỉnh thành phố'>
                <Select 
                defaultValue="Mời bạn chọn thành phố"
                onChange={handleCityChange}
                
               >
         {Array.isArray(city) && city.length > 0 && (
      city.map((item) => (
        <Select.Option key={item.code} value={item.name}
        
        >
          {item.name}
        </Select.Option>
      ))
    ) }
               
             
                </Select>
              </Form.Item>
              <Form.Item label='Quận'>
              <Select 
                  defaultValue="Mời bạn chọn thành phố"
              onChange={handleDistrictsChange}>
              {Array.isArray(districts) && districts.length > 0 ? (
      districts.map((item) => (
        <Select.Option key={item.code} value={item.name}>
          {item.name}
        </Select.Option>
      ))
    ) : (
      <Select.Option disabled>Không có dữ liệu</Select.Option>
    )}
                </Select>
              </Form.Item>
              <Form.Item label='Huyện'>
              <Select
                  defaultValue="Mời bạn chọn thành phố"
              onChange={(e) => setFormData({ ...formData, huyen: e})}>
              {Array.isArray(districtsCity) && districtsCity.length > 0 ? (
      districtsCity.map((item) => (
        <Select.Option key={item.code} value={item.name}>
          {item.name}
        </Select.Option>
      ))
    ) : (
      <Select.Option disabled>Không có dữ liệu</Select.Option>
    )}
                </Select>
              </Form.Item>
        <Form.Item name="diaChi" label="Địa chỉ" initialValue={user?.user_address||''}>
          <Input placeholder='Mời bạn nhập địa chỉ'/>
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

            <div className="lg:w-[45%] bg-white h-[100%] rounded-lg shadow-xl py-9">
              <div className="space-y-4 mb-10 px-7 pb-4">
                <h3 className="text-[2rem] font-semibold">Đơn đặt hàng</h3>
        <div className={`${listCart.length >2 ? "h-[25rem] custom-scrollbar" :""} overflow-y-auto custom-scrollbar`}>
        {
          listCart.map((item)=>{
            return (
              <div className="flex justify-between items-center border-b pb-5">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-[8rem] h-[8rem] object-cover"
                    src="https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg"
                    alt="Iphone"
                  />
                  <div>
                    <h5 className="font-semibold text-[1.7rem]">{item.product_name}</h5>
                    <p className="text-[1.6rem]">Màu sắc: Xanh</p>
                    {item?.product_discount > 0 ? (
                                          <p className="text-red-600 font-semibold">
                                             {formatCurrencyVND(
                                Number(item?.product_price) *
                                  (1 - Number(item?.product_discount / 100))
                              )}
                                             <span className="text-[#969696] line-through ml-2">
                                             {formatCurrencyVND(item?.product_price)}
                                             </span></p>

          ):(
            <p className="text-red-600 font-semibold"> {formatCurrencyVND(item?.product_price)} </p>


          )}
                  </div>
                </div>
                <div className="text-[1.8rem] font-semibold text-customColor">       {formatCurrencyVND(
                                Number(item?.product_price) *
                                  (1 - Number(item?.product_discount / 100))
                              )}đ</div>
              </div>
            )
          })
        }
        </div>
              {/* Product Information */}
           

              {/* Order Summary */}
              <div className="space-y-4 text-[1.6rem] ">
                <div className="flex justify-between ">
                  <span className="font-medium">Tạm tính</span>
                  <span className="font-semibold text-[1.8rem]">
                    
                  {formatCurrencyVND(totalPrice)}
                    
                    
                    </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Giao hàng</span>
                  <span className="font-semibold text-[1.8rem]">0</span>
                </div>
                <div className="flex justify-between border-t pt-5 font-semibold">
                  <span>Tổng tiền</span>
                  <span className="text-red-600 text-[2.2rem]">   {formatCurrencyVND(totalPrice)}</span>
                </div>
              </div>

              <h3 className="text-[1.8rem] py-4">Phương thức thanh toán</h3>
              <div className="space-y-10">
                {/* Payment method 1 */}
                <div className="p-4 rounded-lg relative flex items-center bg-white py-5 shadow space-y-1">
                  <div className="flex-shrink-0">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      onChange={handlePaymentChange}
                      className="w-10 h-6 text-customColor]" // Adjust size if needed
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-[1.8rem] font-semibold">Thanh toán ngân hàng</h4>
                    <p className="text-[1.7rem] text-[#969696] font-medium mt-2">
                      Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi...
                    </p>
                  </div>
                </div>

                {/* Payment method 2 */}
                <div className="p-4 rounded-lg relative flex items-center bg-white py-5 shadow space-y-1">
                  <div className="flex-shrink-0">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      onChange={handlePaymentChange}
                      className="w-10 h-6 text-customColor]" // Adjust size if needed
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-[1.8rem] font-semibold">Trả tiền mặt</h4>
                    <p className="text-[1.7rem] text-[#969696] font-medium mt-2">
                      Trả tiền mặt sau khi giao hàng
                    </p>
                  </div>
                </div>
              </div>


              {/* Submit Button */}
              <div className="mt-5">
                <button
                  onClick={handleFormSubmit}
                  className="w-full my-[1rem] py-3 bg-customColor text-white text-[2rem] rounded-lg font-medium">
                    Đặt hàng
                </button>
              </div>
            </div>
          </div>

    </div>
    </div>
  </Container>
  )
}

export default Pay