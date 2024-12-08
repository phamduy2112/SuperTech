import { Breadcrumb, Form, Input, InputNumber, Radio, Select, Steps } from 'antd'
import React, { useEffect, useState } from 'react'
import './css/formEdit.css'
import { Container } from '../../../components/Style/Container';
import axios from 'axios';
import { getUserThunk } from '../../../redux/user/user.slice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { createDetailOrder, createOrder, getOrderById, getSuccessEmailOrder } from '../../../service/order/order.service';
import { removeAllCart } from '../../../redux/cart/cart.slice';
import { useNavigate } from 'react-router-dom';
import { formatCurrencyVND, truncateText } from '../../../utils';
import { setOrderId } from '../../../redux/order/Order.slice';
import toast from 'react-hot-toast';
import { getAllCityThunk, getDistrictsCityThunk } from '../../../redux/order/City.slice';
import ModalPay from './component/ModalPay';
import CountdownTimer from './component/CountimePay';
function Pay() {
  const dispatch = useAppDispatch();
  const navigate=useNavigate();
  const user: any = useAppSelector((state) => state.user.user);
  const listCart:any=useAppSelector((state)=>state.cart.listCart)
  const totalItem=useAppSelector((state)=>state.cart.totalItems)
  const socket = useAppSelector((state:any) => state.socket.socket); // Get socket from Redux store
  // const orderList=useAppDispatch((state)=>state)
  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);
  // useEffect(() => {
  //   // Lắng nghe sự kiện "order_updates" từ server
  //   socket.on("order_updates", (allUpdates) => {
    

  //     const { newOrders, updatedOrder } = allUpdates;

  //     // Xử lý dữ liệu newOrders và updatedOrder
  //     console.log("Đơn hàng mới:", newOrders);
  //     console.log("Đơn hàng đã cập nhật:", updatedOrder);

  //     // Cập nhật UI hoặc state của bạn ở đây
      
  //     const orderList=[post,...commentList]
  //     // dispatch(setCommentReducer(commentListNew))
  //   });

  //   return () => {
  //     // Đảm bảo hủy lắng nghe khi component bị unmount
  //     socket.off("order_updates");
  //   };
  // }, [dispatch]);
  const totalPrice = listCart.reduce((total: number, item) => {
    // Tính giá sản phẩm ban đầu cộng thêm giá storage
    const basePriceWithStorage = item.product_price + Number(item?.selectedStorage?.storage_price || 0);
  
    // Tính giảm giá
    const discountAmount = (basePriceWithStorage * item.product_discount) / 100;
  
    // Giá sau khi giảm
    const priceAfterDiscount = basePriceWithStorage - discountAmount;
  
    // Tính tổng giá của sản phẩm (giá sau giảm x số lượng)
    const itemTotalPrice = item.quantity * priceAfterDiscount;
  
    // Cộng dồn vào tổng giá
    return total + itemTotalPrice;
  }, 0);
  const getShip=useAppSelector(state=>state.cart.ship);
  const getDiscount=useAppSelector(state=>state.vourher.discount);

  const totalPriceWithVoucher = totalPrice * (1 - getDiscount / 100) + getShip;

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
    if(!(listCart.length>0)){
      
      navigate("/")
      toast.success("Bạn cần thêm sản phẩm")
    }
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
  const listAllCity=useAppSelector((state:any)=>state.city.listAllCity);
  const listDataCity=useAppSelector((state:any)=>state.city.listDataCity);
 
  const [selectedPayment, setSelectedPayment] = useState('');
 
  useEffect(()=>{
    dispatch(getAllCityThunk())
  },[])
  const fetchDistricts = async (cityCode:string) => {
    try {
      dispatch(getDistrictsCityThunk(cityCode))
     
    } catch (err) {
      console.error(err);
    }
  };
  const fetchDistrictsCity = async (cityCode:string) => {
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
  const [dataOrder,setDataOrder]=useState(null);

  const handleDistrictsChange = (value, option) => {
    setFormData({ ...formData, district: value });
    setDistricts(option.key); // Lưu mã tỉnh đã chọn
    fetchDistrictsCity(option.key); // Gọi API để lấy quận
  };
  const [paymentMethod, setPaymentMethod] = useState('');  // Lưu trữ phương thức thanh toán đã chọn

  // Hàm xử lý khi click vào div
  const handleDivClick = (method) => {
    setPaymentMethod(method);  // Cập nhật phương thức thanh toán khi click vào div
  };
  const handleFormChange = (changedValues, allValues) => {
    setFormData({ ...formData, ...changedValues });
  };
  const handlePaymentChange = (e) => {
    setFormData({ ...formData, paymentMethod: e.target.value }); // Cập nhật phương thức thanh toán
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async () => {
    try {
      // Chuẩn bị dữ liệu đơn hàng
      const dataOrder = {
        ...formData,
        order_total: totalPrice,
        order_total_quatity: totalItem,
      };
  
      // Gọi API tạo đơn hàng
      const resp = await createOrder(dataOrder);
  
      // Chuẩn bị danh sách chi tiết đơn hàng
      const detailOrders = listCart.map(item => ({
        product_name: item.product_name,
        product_id: item.product_id,
        order_id: resp.data.content.order_id,
        detail_order_quality: item.quantity,
        product_color: item?.selectedColor?.color,
        product_storage: item?.selectedStorage?.storage,
        detail_order_price: item.product_price + Number(item?.selectedStorage?.storage_price || 0),
        discount_product: item.product_discount,
      }));
  
      if (formData.paymentMethod === 'bank') {
        setIsModalOpen(true);
        setDataOrder({
          order_id: resp.data.content.order_id,
          user_id: user.user_id,
          order_total:dataOrder.order_total
        });
  
        // Gọi API kiểm tra trạng thái thanh toán
        const responseDt = await getOrderById(resp.data.content.order_id);
  
        if (responseDt.data.content.order_pay == 1) {
          // Thanh toán thành công, chuyển trang ngay lập tức
          const response = await createDetailOrder(detailOrders);
          if (response) {
            navigate("/xuất-hóa-đơn");
            dispatch(setOrderId(resp.data.content.order_id));
            dispatch(removeAllCart());
          }
        } else {
          // Đợi 5 phút trước khi chuyển trang
          setTimeout(async () => {
            const response = await createDetailOrder(detailOrders);
            if (response) {
              navigate("/xuất-hóa-đơn");
              dispatch(setOrderId(resp.data.content.order_id));
              dispatch(removeAllCart());
            }
          }, 300000);
        }
      } else {
        // Thanh toán không qua ngân hàng, xử lý thông thường
        const dataEmail = {
          email: formData.email,
          orderDetails: detailOrders,
        };
  
        // Gọi API tạo chi tiết đơn hàng
        const response = await createDetailOrder(detailOrders);
  
        if (response) {
          await getSuccessEmailOrder(dataEmail);
          // navigate("/xuất-hóa-đơn");
          // dispatch(setOrderId(resp.data.content.order_id));
          // dispatch(removeAllCart());
        }
      }
    } catch (error) {
      console.error("Lỗi khi tạo đơn hàng:", error);
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

    <div className='w-full md:w-[80%] lg:w-[40%] mx-auto my-[2rem] p-[2rem]'>
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
    <div className='flex flex-col lg:flex-row justify-between gap-6'>
    <div className='w-full lg:w-[50%] px-4 lg:px-10 py-5 bg-white rounded-lg shadow-xl space-y-1'>
      <h3 className='text-[2rem] lg:text-[2.5rem] py-[1rem]'>Thông tin thanh toán</h3>
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
         {Array.isArray(listAllCity) && listAllCity.length > 0 && (
      listAllCity.map((item) => (
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
              {Array.isArray(listDataCity) && listDataCity.length > 0 ? (
      listDataCity.map((item) => (
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

            <div className="w-full lg:w-[45%] bg-white rounded-lg shadow-xl py-9">
              <div className="space-y-4 mb-10 px-4 lg:px-7 pb-4">
                <h3 className="text-[1.8rem] lg:text-[2rem] font-semibold">Đơn đặt hàng</h3>
        <div className={`${listCart.length >2 ? "max-h-[25rem]" :""} overflow-y-auto custom-scrollbar`}>
        {
          listCart.map((item)=>{
            return (
              <div className="flex justify-between items-center border-b">
                <div className="flex items-center space-x-4 py-[1rem]">
                  <img
                    className="w-[8rem] h-[8rem] object-cover"
                    src="https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg"
                    alt="Iphone"
                  />
                  <div>
                    <h5 className="font-semibold tex
                    t-[1.7rem]">{truncateText(item?.product_name,25)}</h5>
                    <p className="text-[1.6rem]">    
                      {item?.selectedStorage !=undefined? `${item?.selectedStorage?.storage} MB/` :''}
                    {item?.selectedColor !=undefined? `${item?.selectedColor?.color}` :''}
                    {` (x${item.quantity})`}
                    </p>
                    {item?.product_discount > 0 ? (
                                          <p className="text-red-600 font-semibold">
                                           {formatCurrencyVND(
                               ( Number(item?.product_price)+Number(item?.selectedStorage?.storage_price || 0)) *
                                  (1 - Number(item?.product_discount / 100))
                          
                              )}
                                             <span className="text-[#969696] line-through ml-2">
                                             {formatCurrencyVND(item?.product_price + item?.selectedStorage?.storage_price ||0)}
                                             </span></p>

          ):(
            <p className="text-red-600 font-semibold"> 
                                        {formatCurrencyVND(item?.product_price + item?.selectedStorage?.storage_price ||0)}

            </p>


          )}
                  </div>
                </div>
                <div className="text-[1.8rem] font-semibold text-customColor">      
                {formatCurrencyVND(
                               ( Number(item?.product_price) + Number(item?.selectedStorage?.storage_price || 0)) *Number(item?.quantity)*
                                  (1 - Number(item?.product_discount / 100))
                              )}
                            
                            </div>
              </div>
            )
          })
        }
        </div>
              {/* Product Information */}
           

              {/* Order Summary */}
              <div className="space-y-4 text-[1.4rem] lg:text-[1.6rem]">
                <div className="flex justify-between ">
                  <span className="font-medium">Tạm tính</span>
                  <span className="font-semibold text-[1.8rem]">
                    
                  {formatCurrencyVND(totalPrice)}
                    
                    
                    </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Giảm giá</span>
                  <span className="font-semibold text-[1.8rem]">{getDiscount}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Giao hàng</span>
                  <span className="font-semibold text-[1.8rem]">{formatCurrencyVND(getShip)}</span>
                </div>
        
                <div className="flex justify-between border-t pt-5 font-semibold">
                  <span>Tổng tiền</span>
                  <span className="text-red-600 text-[2.2rem]">   {formatCurrencyVND(totalPriceWithVoucher)}</span>
                </div>
              </div>

              <h3 className="text-[1.6rem] lg:text-[1.8rem] py-4">Phương thức thanh toán</h3>
              <div className="space-y-6 lg:space-y-10">
                {/* Payment method 1 */}
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
              {formData.paymentMethod === 'bank' && (
      <ModalPay 
      isModalOpen={isModalOpen}
       showModal={setIsModalOpen} 
       handleOk={handleOk} 
       handleCancel={handleCancel}
       data={dataOrder}

        />
    )}
    

              {/* Submit Button */}
              <div className="mt-5">
                <button
                  onClick={handleFormSubmit}
                  className="w-full my-[1rem] py-2 lg:py-3 bg-customColor text-white text-[1.8rem] lg:text-[2rem] rounded-lg font-medium">
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