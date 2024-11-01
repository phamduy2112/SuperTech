import { Container } from "../../../components/Style/Container";
import { FaTrash } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { removeItemFromCart, removeAllCart, decreaseItemQuantity, inCreaseItemQuantity } from "../../../redux/cart/cart.slice";

export default function Cart() {
  const dispatch = useAppDispatch();
  const listCart = useAppSelector((state) => state.cart.listCart);
  const totalItem = useAppSelector((state) => state.cart.totalQuantity);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  return (
    <Container>
      <div className="py-6 text-[1.5rem]">
        <div className="mx-auto">
          <div className="my-[1.5rem] text-[1.5rem] text-gray-600">
            <a href="/" className="text-customPurple hover:underline">Trang chủ</a>
            <span className="mx-2">/</span>
            <span>Giỏ hàng</span>
          </div>

          {/* Responsive container for cart and order summary */}
          <div className="flex flex-col-reverse lg:flex-row lg:space-x-6">
            {/* Cart items section */}
            <div className="flex-1 space-y-6 mt-6 lg:mt-0">
              <div className="bg-white py-4 rounded-lg shadow min-w-[320px] lg:min-w-[768px]">
                <div className="flex justify-between px-5 py-3">
                  <h2 className="text-[1.6rem] font-semibold text-center w-[50%]">Sản phẩm</h2>
                  <h2 className="text-[1.6rem] font-semibold text-center w-[20%]">Số lượng</h2>
                  <h2 className="text-[1.6rem] font-semibold text-center w-[20%]">Tổng giá</h2>
                  <div className="w-[5%]"></div>
                </div>
              </div>

              {/* Cart item details */}
              {listCart.map((item) => (
                <div key={item.id} className="bg-white py-4 rounded-lg shadow flex items-center min-w-[320px] lg:min-w-[768px]">
                  {/* Product details */}
                  <div className="flex items-center w-[50%] px-5">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-[5rem] h-[5rem] object-cover rounded-lg mr-4"
                    />
                    <div className="flex flex-col">
                      <h2 className="text-[1.5rem] font-semibold">{item.name}</h2>
                      <p className="text-gray-500 text-[1.2rem]">Màu: {item.color}</p>
                      <span className="text-customPurple text-[1.4rem] font-medium">
                        {item.price.toLocaleString()} ₫
                        {item.originalPrice && (
                          <span className="text-gray-400 line-through text-[1.3rem] ml-2">{item.originalPrice.toLocaleString()} ₫</span>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center w-[20%] justify-center space-x-2">
                    <button onClick={() => dispatch(decreaseItemQuantity(item.id))} className="px-3 py-1 border border-gray-300 rounded">-</button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button onClick={() => dispatch(inCreaseItemQuantity(item.id))} className="px-3 py-1 border border-gray-300 rounded">+</button>
                  </div>

                  {/* Price */}
                  <div className="text-center w-[20%]">
                    <span className="text-customPurple text-[1.5rem] font-semibold">
                      {(item.price * item.quantity).toLocaleString()} ₫
                    </span>
                  </div>

                  {/* Delete button */}
                  <button onClick={() => dispatch(removeItemFromCart(item.id))} className="text-gray-500 hover:text-red-600 w-[5%] flex justify-center">
                    <FaTrash className="text-customPurple text-[1.6rem]" />
                  </button>
                </div>
              ))}

              {/* Cart buttons */}
              <div className="flex justify-between mt-6">
                <button className="px-10 py-3 rounded-lg text-white bg-customPurple font-medium hover:bg-yellow-500 transition duration-300">
                  Tiếp tục mua sắm
                </button>
                <button onClick={() => dispatch(removeAllCart())} className="px-10 py-3 rounded-lg text-white bg-customPurple font-medium hover:bg-red-500 transition duration-300">
                  Xóa tất cả
                </button>
              </div>
            </div>

            {/* Thông tin đơn hàng */}
            <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-xl px-7 py-6">
              <div className="space-y-4 mb-10 leading-[3.7rem]">
                <div className="flex justify-between items-center">
                  <button className="flex items-center shadow-sm rounded-lg my-[1.2rem] px-5 py-2 w-1/2 hover:shadow-md transition-shadow">
                    Chọn mã giảm giá
                    <span className="text-customPurple ml-2">
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
                    <span className="font-bold text-[1.8rem]">{totalItem}</span>
                  </div>
                  {/* Payment button */}
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
      </div>
    </Container>
  );
}
