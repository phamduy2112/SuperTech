// import { Container } from "../../../components/Style/Container";
// import { FaTrash } from "react-icons/fa";
// import { RiCoupon3Fill } from "react-icons/ri";

// export default function Cart() {
//   return (
//     <Container>
//       <div className=" py-6 text-[1.5rem]">
//         <div className="mx-auto">
//           <div className="my-[1.5rem] text-[1.5rem] text-gray-600">
//             <a href="/" className="text-customPurple hover:underline">
//               Trang chủ
//             </a>
//             <span className="mx-2">/</span>
//             <span>Giỏ hàng</span>
//           </div>

//           <div className="flex space-x-6">
//             <div className="flex-1 space-y-6">
//               <div className="bg-white py-5 rounded-lg shadow space-y-1">
//                 <div className="flex gap-[1rem] space-x-[6rem] items-center px-5 py-5">
//                   <div className=" leading-[3rem] w-[50%]">
//                     <h2 className="text-[1.7rem] font-semibold text-center">
//                       Sản phẩm
//                     </h2>
//                   </div>
//                   <div className="leading-[3rem] w-[20%] m-auto">
//                     <h2 className="text-[1.7rem] font-semibold">
//                       Số lượng
//                     </h2>
//                   </div>
//                   <div className="leading-[3rem] w-[20%] m-auto">
//                     <h2 className="text-[1.7rem] font-semibold">
//                       Tổng giá
//                     </h2>
//                   </div>
//                   <div className="leading-[3rem] w-[5%]" >
//                     <h2 className="text-[1.7rem] font-semibold">
                      
//                     </h2>
//                   </div>
//                 </div>
//               </div>

//               {[1, 2, 3].map((item) => (
//                 <div
//                   key={item}
//                   className="bg-white py-5 rounded-lg shadow space-y-1 "
//                 >
//                   <div className="flex space-x-[6rem] items-center px-5 py-5">
//                 <div className="flex gap-[1rem] w-[45%] items-center justify-center m-auto">
//                     <img
//                       src="https://th.bing.com/th/id/OIP.hZOYBxk1erwCHpTFUkIHygHaEa?rs=1&pid=ImgDetMain"
//                       alt="Product"
//                       className="w-[7rem h-[7rem] object-cover rounded-lg"
//                     />
//                     <div className="flex-1 leading-[3rem]">
//                       <h2 className="text-[1.7rem] font-semibold">
//                         Macbook Air 14 inch
//                       </h2>
//                       <p className="text-gray-500 text-[1.3rem]">Màu: Đen</p>
//                       <div className="flex flex-col leading-normal text-lg ">
//                         <span className="text-customPurple text-[1.6rem] font-medium">
//                           20.190.000 ₫
//                           <span className="text-gray-400 line-through text-[1.5rem] px-[1rem] font-normal">
//                             25.390.000 ₫
//                           </span>
//                         </span>
//                       </div>
//                     </div>
//                 </div>
//                     <div className="flex space-x-6 items-center w-[20%]">
//                       <button className="px-4 py-2 border border-gray-300 rounded-lg">
//                         -
//                       </button>
//                       <span className="font-semibold">1</span>
//                       <button className="px-4 py-2 border border-gray-300 rounded-lg">
//                         +
//                       </button>
//                     </div>
//                     <div className="flex flex-col leading-normal text-lg w-[20%]">
//                       <span className="text-customPurple text-[1.7rem] font-semibold">
//                         20.190.000 ₫
//                       </span>
//                     </div>
//                     <button className="text-gray-500 hover:text-red-600 mx-[10rem] w-[5%]">
//                       <i className="fas fa-trash-alt text-customPurple">
//                         <FaTrash />
//                       </i>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//               <div className="flex justify-between">
//                   <button className="px-10 py-5 rounded-2xl text-white bg-customPurple font-medium hover:bg-yellow-500 hover:shadow-md hover:text-black transition duration-300">
//                     Tiếp tục mua sắm
//                   </button>
//                   <button className="px-10 py-5 rounded-2xl text-white bg-customPurple font-medium hover:bg-red-500 hover:shadow-md hover:text-black transition duration-300">
//                     Xóa tất cả
//                   </button>
//               </div>
//             </div>
//             <div className="w-1/3 bg-white rounded-lg shadow-xl">
//               <div className="space-y-4 mb-10 px-7 leading-[3.7rem]">
//                 <div className="flex justify-between items-center ">
//                   <button className="justify-between flex items-center shadow-sm rounded-lg my-[1.2rem] px-5 py-2 w-1/2 hover:shadow-md transition-shadow">
//                     Chọn mã giảm giá
//                     <span className="text-customPurple">
//                       <RiCoupon3Fill />
//                     </span>
//                   </button>
//                   <span className="font-bold text-customPurple">
//                     UY8F8SD7F89SD7F
//                   </span>
//                 </div>
//                 <h2 className="text-[2rem] font-semibold">Thông tin đơn hàng</h2>
//                 <div className="space-y-2">
//                   <div className="flex justify-between mb-5 font-semibold text-[1.8rem]">
//                     <span>Tổng tiền</span>
//                     <span className="font-bold text-[2rem]">93.360.000 ₫</span>
//                   </div>
//                   <div className="border-t pt-5 flex justify-between">
//                     <span>Tổng số lượng</span>
//                     <span className="font-bold text-[1.8rem]">3</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Voucher đã áp dụng</span>
//                     <span className="font-bold text-[1.8rem]">1</span>
//                   </div>

//                   <div className="flex justify-between">
//                     <span>Giảm giá</span>
//                     <span className="font-bold text-[1.7rem] text-black-500">
//                       -17.200.000 ₫
//                     </span>
//                   </div>
//                   <div className="flex justify-between pb-5">
//                     <span>Phí vận chuyển</span>
//                     <span className="text-green-600 font-medium">Miễn phí</span>
//                   </div>
//                   <div className="border-t pt-5 flex justify-between font-semibold text-[2rem]">
//                     <span>Cần thanh toán</span>
//                     <span className="text-red-600 font-semibold text-[2.2rem]">
//                       76.160.000 ₫
//                     </span>
//                   </div>
//                   <div className="flex justify-end items-center text-gray-500 text-[1.4rem]">
//                     <span>Đã bao gồm khuyến mãi, phí vận chuyển và VAT</span>
//                   </div>
//                 </div>
//                 <div>
//                   <button className="w-full bg-customPurple text-white py-[0.4rem] text-[1.7rem] rounded-[1.7rem] font-medium">
//                     Thanh toán
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// }

import { Container } from "../../../components/Style/Container";
import { FaTrash } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, cartReducer, decreaseItemQuantity, clearCart } from '../../../redux/cart/cart.slide';
import { RootState } from '../../../redux/store';

export default function Cart() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector((state: RootState) => state.cart);
  const shippingFee = 0; 
  const voucherDiscount = 17200000; 
  const totalPayment = totalPrice - voucherDiscount + shippingFee;

  if (totalQuantity === 0) {
    return (
      <Container>
        <div className="py-6 text-[1.5rem]">
          <div className="text-center">
            <h2 className="text-[2rem] font-semibold">Giỏ hàng của bạn đang trống</h2>
            <a href="/" className="text-customPurple hover:underline">
              Quay lại trang chủ để mua sắm
            </a>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-6 text-[1.5rem]">
        <div className="mx-auto">
          <div className="my-[1.5rem] text-[1.5rem] text-gray-600">
            <a href="/" className="text-customPurple hover:underline">
              Trang chủ
            </a>
            <span className="mx-2">/</span>
            <span>Giỏ hàng</span>
          </div>

          <div className="flex space-x-6">
            <div className="flex-1 space-y-6">
              <div className="bg-white py-5 rounded-lg shadow space-y-1">
                <div className="flex gap-[1rem] space-x-[6rem] items-center px-5 py-5">
                  <div className="leading-[3rem] w-[50%]">
                    <h2 className="text-[1.7rem] font-semibold text-center">Sản phẩm</h2>
                  </div>
                  <div className="leading-[3rem] w-[20%] m-auto">
                    <h2 className="text-[1.7rem] font-semibold">Số lượng</h2>
                  </div>
                  <div className="leading-[3rem] w-[20%] m-auto">
                    <h2 className="text-[1.7rem] font-semibold">Tổng giá</h2>
                  </div>
                  <div className="leading-[3rem] w-[5%]">
                    <h2 className="text-[1.7rem] font-semibold"></h2>
                  </div>
                </div>
              </div>

              {items.map((item) => (
                <div key={item.product_id} className="bg-white py-5 rounded-lg shadow space-y-1">
                  <div className="flex space-x-[6rem] items-center px-5 py-5">
                    <div className="flex gap-[1rem] w-[45%] items-center justify-center m-auto">
                      <img
                        src={item.imageUrl}
                        alt="Product"
                        className="w-[7rem] h-[7rem] object-cover rounded-lg"
                      />
                      <div className="flex-1 leading-[3rem]">
                        <h2 className="text-[1.7rem] font-semibold">{item.name}</h2>
                        <p className="text-gray-500 text-[1.3rem]">Màu: {item.color}</p>
                        <div className="flex flex-col leading-normal text-lg">
                          <span className="text-customPurple text-[1.6rem] font-medium">
                            {item.price.toLocaleString()} ₫
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-6 items-center w-[20%]">
                      <button
                        className="px-4 py-2 border border-gray-300 rounded-lg"
                        onClick={() => dispatch(decreaseItemQuantity(item.product_id))}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button
                        className="px-4 py-2 border border-gray-300 rounded-lg"
                        onClick={() => dispatch(addItemToCart(item))}
                      >
                        +
                      </button>
                    </div>
                    <div className="flex flex-col leading-normal text-lg w-[20%]">
                      <span className="text-customPurple text-[1.7rem] font-semibold">
                          {(item.price * item.quantity).toLocaleString()} ₫
                      </span>
                    </div>
                    <button
                      className="text-gray-500 hover:text-red-600 mx-[10rem] w-[5%]"
                      onClick={() => dispatch(cartReducer(item.product_id))}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between">
                <button
                  className="px-10 py-5 rounded-2xl text-white bg-customPurple font-medium hover:bg-yellow-500 hover:shadow-md hover:text-black transition duration-300"
                  onClick={() => window.location.href = '/'}
                >
                  Tiếp tục mua sắm
                </button>
                <button
                  className="px-10 py-5 rounded-2xl text-white bg-customPurple font-medium hover:bg-red-500 hover:shadow-md hover:text-black transition duration-300"
                  onClick={() => dispatch(clearCart())}
                >
                  Xóa tất cả
                </button>
              </div>
            </div>
            <div className="w-1/3 bg-white rounded-lg shadow-xl">
              <div className="space-y-4 mb-10 px-7 leading-[3.7rem]">
                <div className="flex justify-between items-center">
                  <button className="justify-between flex items-center shadow-sm rounded-lg my-[1.2rem] px-5 py-2 w-1/2 hover:shadow-md transition-shadow">
                    Chọn mã giảm giá
                    <span className="text-customPurple">
                      <RiCoupon3Fill />
                    </span>
                  </button>
                  <span className="font-bold text-customPurple">UY8F8SD7F89SD7F</span>
                </div>
                <h2 className="text-[2rem] font-semibold">Thông tin đơn hàng</h2>
                <div className="space-y-2">
                  <div className="flex justify-between mb-5 font-semibold text-[1.8rem]">
                    <span>Tổng tiền</span>
                    <span className="font-bold text-[2rem]">{totalPrice.toLocaleString()} ₫</span>
                  </div>
                  <div className="border-t pt-5 flex justify-between">
                    <span>Tổng số lượng</span>
                    <span className="font-bold text-[1.8rem]">{totalQuantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Voucher đã áp dụng</span>
                    <span className="font-bold text-[1.8rem]">1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Giảm giá</span>
                    <span className="font-bold text-[1.7rem] text-black-500">
                      -{voucherDiscount.toLocaleString()} ₫
                    </span>
                  </div>
                  <div className="flex justify-between pb-5">
                    <span>Phí vận chuyển</span>
                    <span className="text-green-600 font-medium">{shippingFee === 0 ? 'Miễn phí' : `${shippingFee.toLocaleString("vi")} ₫`}</span>
                  </div>
                  <div className="border-t pt-5 flex justify-between font-semibold text-[2rem]">
                    <span>Cần thanh toán</span>
                    <span className="text-red-600 font-semibold text-[2.2rem]">
                      {totalPayment.toLocaleString()} ₫
                    </span>
                  </div>
                  <div className="flex justify-end items-center text-gray-500 text-[1.4rem]">
                    <span>Đã bao gồm khuyến mãi, phí vận chuyển và VAT</span>
                  </div>
                </div>
                <div>
                  <button className="w-full bg-customPurple text-white py-[0.4rem] text-[1.7rem] rounded-[1.7rem] font-medium">
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
