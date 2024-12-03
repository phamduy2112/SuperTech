// Bill.js
import React, { useEffect, useState } from "react";
import { Container } from "../../../components/Style/Container";
import { Steps } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getOrderDetail } from "../../../redux/order/Order.slice";
import { getDetailOrder } from "../../../service/order/order.service";
import StepOrderDetail from "../User/OrderDetail/component/StepOrderDetai";
import { formatCurrencyVND } from "../../../utils";

function Bill(props) {
  const orderId:any=useAppSelector((state)=>state.listOrder.orderId)
  const orderDetail=useAppSelector((state)=>state.listOrder.detailOrder)
  const [order,setOrder]=useState({})
  const [detailOrder,setDetailOrder]=useState([]); 

  const [listProduct,setListProduct]=useState([]);
  const dispatch=useAppDispatch();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const resp = await getDetailOrder(orderId);
        const details = resp.data.content;
  
        // Cập nhật detailOrder
        setDetailOrder(details);
  
        if (details.length > 0) {
          // Cập nhật order nếu có dữ liệu
          setOrder(details[0].order);
  
          // Cập nhật danh sách sản phẩm từ detailOrder
          const products = details.map(detail => ({
            quanlity: detail.detail_order_quality,
            name: detail.product.product_name,
            product_price: detail.detail_order_price,
            product_discount: detail.discount_product,
            product_hot: detail.product.product_hot,
            image_id: detail.product.image_id,
            category_id: 2,
          }));
  
          setListProduct(products);
        }
      } catch (e) {
        console.error(e);
      }
    };
  
    fetchApi();
  }, [orderId]);
  // console.log(order.discount_discount.discount_percent);
  
  console.log(orderDetail);
  const totalPrice = detailOrder.reduce((total:number, item) => {
    const discountAmount = +(item.detail_order_price * item.discount_product) / 100; // Tính giảm giá
    const priceAfterDiscount = + item.detail_order_price - discountAmount; // Tính giá sau giảm
    const itemTotalPrice = + item.detail_order_quality *  + priceAfterDiscount; // Tính tổng giá của item
    return itemTotalPrice; // Cộng dồn vào total
  }, 0);
  const getDiscount=+order?.discount_discount?.discount_percent || 0
  const totalPriceWithVoucher = totalPrice * (1 -  getDiscount / 100) + 300000;

  return (
    <Container>
         <div className=' py-6 text-[1.5rem]'>
            <div className="my-[1.5rem] text-[1.5rem] text-gray-600">
              <a href="/" className="text-customColor hover:underline">
                Trang chủ
              </a>
              <span className="mx-2">/</span>
              <span>Xuất hóa đơn</span>
            </div>
      
      <div className="py-10 text-[1.75rem] flex flex-col lg:flex-row gap-10">
        
        {/* Order Progress Tracker */}
        <div className="lg:w-1/3 bg-white shadow-md rounded-lg p-8">
          <h3 className="text-[1.8rem] font-semibold text-gray-800 mb-6">
            Trình trạng đơn hàng 
          </h3>
    
       <StepOrderDetail  order={detailOrder[0]?.order}/>
        </div>

        {/* Order Success Message & Summary */}
        <div className="lg:w-2/3 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col items-start px-8 py-8 rounded-t-3xl bg-green-50 shadow-lg">
            {/* Success Message Section */}
            <div className="flex justify-between w-full items-center mb-6">
              <div className="flex items-center gap-5">
                <div className="bg-green-100 p-5 rounded-full">
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.94 14.94l5.66-5.66a1 1 0 00-1.41-1.41l-5.25 5.25L8.34 11.7a1 1 0 10-1.41 1.41l3 3a1 1 0 001.41-.17z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-[2rem] font-bold text-green-600">
                    Đặt hàng thành công
                  </h2>
                  <p className="text-[1.5rem] text-gray-700 mt-1">
                   {detailOrder[0]?.order?.order_pay==0 ? 'Thanh toán tại nhà' :'Đã thanh toán'}
                  </p>
                </div>
              </div>
              <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-4 rounded-full text-[1.4rem]">
                Tiếp tục mua sắm
              </button>
            </div>
          </div>

          {/* Order Details */}
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-[1.8rem] font-semibold text-gray-800">
                Mã đơn hàng: #{orderId}
                </h3>
                <p className="text-[1.5rem] text-gray-500 mt-[.5rem]">Thời gian đặt: 19:00 15/11/2023</p>
              </div>
              <div className="text-right">
                <h4 className="text-[1.8rem] font-semibold text-gray-800">Giao hàng đến</h4>
                <p className="text-[1.5rem] text-gray-500 mt-[.5rem]">
                  197 Nguyễn Thị Thập, Phường Bình Thuận, Quận 7
                </p>
                <p className="text-[1.5rem] text-gray-500">Dự kiến giao hàng: 19:45</p>
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-[1.8rem] font-semibold text-gray-800 mb-3">Tổng trị giá (tạm tính)</h4>
              <div className="flex justify-between text-[1.6rem] text-gray-600 mb-1">
                <span>Phí giao hàng:</span>
                <span>30,000₫</span>
              </div>
              <div className="flex justify-between text-[1.6rem] text-gray-600 mb-1">
                <span>Giá sản phẩm:</span>
                <span>{totalPrice}</span>
              </div>
            
              <div className="flex justify-between text-[1.6rem] font-semibold text-gray-800 mt-3">
                <span>Giảm giá:</span>
                <span>{getDiscount || 0}%</span>
              </div>
              <div className="flex justify-between text-[1.8rem] font-bold text-green-600 mt-4">
                <span>Tổng cộng:</span>
                <span>{totalPriceWithVoucher}</span>
              </div>
            </div>

            {/* Order Items */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="border-b bg-gray-100 text-gray-600 text-[1.8rem]">
                    <th className="py-4 px-6 text-left">Sản phẩm</th>
                    <th className="py-4 px-6 text-left">Đơn giá</th>
                    <th className="py-4 px-6 text-center">Số Lượng</th>
                    <th className="py-4 px-6 text-right">Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example Order Item */}
                  {
                    listProduct?.map((item)=>{
                      return (
                        <tr className="border-b">
                    
                        <td className="py-6 px-6 text-gray-800 flex items-center gap-4">
                          <img
                            src="https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg"
                            alt="Điện thoại"
                            className="w-20 h-20 rounded-md object-cover"
                          />
                          <span className="text-roboto">{item.name}</span>
                        </td>
                        <td className="py-6 px-6 text-customColor font-semibold">  
                        {item?.product_discount > 0 ? (
                            <span className="text-customColor font-semibold text-[1.6rem] ">
                              {formatCurrencyVND(
                                Number(item?.product_price) *
                                  (1 - Number(item?.product_discount / 100))
                              )}
                              
                            </span>
                          ) : (
                            <span className="text-customColor font-semibold  text-[1.6rem] ">
                              {formatCurrencyVND(item?.product_price)}
                            </span>
                          )}
                        </td>
                        <td className="py-6 px-6 text-center text-gray-800 font-semibold">{item.quanlity}</td>
                        <td className="py-6 px-6 text-right text-red-600 font-semibold">{
                    formatCurrencyVND(

                      +item?.product_price * +item?.quanlity * (1 - +item?.product_discount / 100)

                    )
                    }</td>
                      </tr>
                      )
                    })
                  }
             
                  {/* Add more items here as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Container>
  );
}

export default Bill;