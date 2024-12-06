import { Container } from "../../../components/Style/Container";
import { FaTrash } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  removeItemFromCart,
  removeAllCart,
  decreaseItemQuantity,
  inCreaseItemQuantity,
} from "../../../redux/cart/cart.slice";
import { useNavigate } from "react-router-dom";
import { formatCurrencyVND, truncateText } from "../../../utils";
import { useState } from "react";
import ModalDiscount from "./Component/ModalDiscount";
import { message, Modal, Popconfirm } from "antd";
import toast from "react-hot-toast";

export default function Cart() {
  const dispatch = useAppDispatch();
  const listCart = useAppSelector((state) => state.cart.listCart);
  const totalItem = useAppSelector((state) => state.cart.totalItems);
  const getDiscount=useAppSelector(state=>state.vourher.discount);
  const getShip=useAppSelector(state=>state.cart.ship);

    
  const showModal = () => {
    Modal.info({
      title: "Bạn có chắc muốn xóa tất cả sản phẩm?",
      content: (
        <div>
          <p>Bạn sẽ không thể phục hồi lại các sản phẩm đã xóa.</p>
        </div>
      ),
      onOk: removeAllItem,
      okText: "Có",
      cancelText: "Không",
      maskClosable: true,  // Close modal when clicking outside
    });
  };
  const handleRemoveItem = (product_id: any) => {
    dispatch(removeItemFromCart({ product_id }));
  };
  const navigate = useNavigate();
  const handleDecrease = (productId: string, quantity: number) => {
    if (quantity > 1) {
      dispatch(decreaseItemQuantity({ product_id: productId })); // Decrease quantity if more than 1
    } else {
      // Show confirmation when quantity is 1
      Popconfirm.confirm({
        title: "Bạn có chắc muốn xóa sản phẩm này?",
        onConfirm: () => dispatch(removeItemFromCart({ product_id: productId })), // Remove item if confirmed
      });
    }
  };
  const inCreaseItem = (product_id: any) => {
    dispatch(inCreaseItemQuantity({ product_id }));
  };
  const removeAllItem = () => {
    dispatch(removeAllCart());
  };
    // Áp dụng mã giảm giá
  
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
    const getShipPrice = listCart.length > 0 ?  getShip: 0
  const totalPriceWithVoucher = totalPrice * (1 - getDiscount / 100) + getShipPrice;

  // 10000 - (10000 * 10 / 100); mã khuyết mãi
  
  return (
    <Container>
      <div className=" py-6 text-[1.5rem]">
        <div className="mx-auto">
          <div className="my-[1.5rem] text-[1.5rem] text-gray-600">
            <a href="/" className="text-customColor hover:underline">
              Trang chủ
            </a>
            <span className="mx-2">/</span>
            <span>Giỏ hàng</span>
          </div>

          <div className="flex space-x-6">
            <div className="flex-1 space-y-6">
              <div className="bg-white py-5 rounded-lg shadow space-y-1">
                <div className="flex gap-[1rem] space-x-[6rem] items-center px-5 py-5">
                  <div className=" leading-[3rem] w-[50%]">
                    <h2 className="text-[1.7rem] font-semibold text-center">
                      Sản phẩm
                    </h2>
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

              {listCart.map((item) => (
                <div
                  key={item.product_id}
                  className="bg-white py-5 rounded-lg shadow space-y-1 "
                >
                  <div className="flex space-x-[6rem] items-center px-5 py-5">
                    <div className="flex gap-[1rem] w-[45%] items-center justify-center m-auto">
                      <img
                        src="https://th.bing.com/th/id/OIP.hZOYBxk1erwCHpTFUkIHygHaEa?rs=1&pid=ImgDetMain"
                        alt="Product"
                        className="w-[7rem h-[7rem] object-cover rounded-lg"
                      />
                      <div className="flex-1 leading-[3rem]">
                        <h2 className="text-[1.7rem] font-semibold">
                        {truncateText(item?.product_name,25)}
                        </h2>
                        <p className="text-gray-500 text-[1.3rem]">
                        {item?.selectedStorage !=undefined? `${item?.selectedStorage?.storage_price} MB/` :''}
                        {item?.selectedColor !=undefined? `${item?.selectedColor?.color}` :''}
                        </p>
                        <div className="flex flex-col leading-normal text-lg ">
                          {item?.product_discount > 0 ? (
                            <span className="text-customColor text-[1.6rem] font-medium">
                              {formatCurrencyVND(
                               ( Number(item?.product_price)+Number(item?.selectedStorage?.storage_price || 0)) *
                                  (1 - Number(item?.product_discount / 100))
                          
                              )}
                              <span className="text-gray-400 line-through text-[1.5rem] px-[1rem] font-normal">
                                {formatCurrencyVND(item?.product_price + item?.selectedStorage?.storage_price ||0)}
                              </span>
                            </span>
                          ) : (
                            <span className="text-customColor text-[1.6rem] font-medium">
                              {formatCurrencyVND(item?.product_price + item?.selectedStorage?.storage_price ||0)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-6 items-center w-[20%]">
                    <div className="flex items-center">
  <Popconfirm
    title="Bạn có chắc muốn xóa sản phẩm này?"
    onConfirm={() => handleDecrease(item.product_id, item.quantity)}
    okText="Có"
    cancelText="Không"
  >
    <button
      onClick={() => handleDecrease(item.product_id, item.quantity)}
      className="px-4 py-2 border border-gray-300 rounded-lg"
    >
      -
    </button>
  </Popconfirm>
</div>
                      <span className="font-semibold"
                      
                      
                      >{item.quantity}</span>
                      <button
                        onClick={() => {
                          inCreaseItem(item.product_id);
                        }}
                        className="px-4 py-2 border border-gray-300 rounded-lg"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex flex-col leading-normal text-lg w-[20%]">
                      <span className="text-customColor text-[1.7rem] font-semibold">
                      {formatCurrencyVND(
                               ( Number(item?.product_price) + Number(item?.selectedStorage?.storage_price || 0)) *Number(item?.quantity)*
                                  (1 - Number(item?.product_discount / 100))
                              )}
                      </span>
                    </div>
                    <button className="text-gray-500 hover:text-red-600 mx-[10rem] w-[5%]">
  <Popconfirm
    title="Bạn có chắc muốn xóa sản phẩm này?"
    onConfirm={() => handleRemoveItem(item.product_id)}  // Call the remove function on confirmation
    okText="Có"
    cancelText="Không"
  >
    <i className="fas fa-trash-alt text-customColor">
      <FaTrash />
    </i>
  </Popconfirm>
</button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between">
                <button className="px-10 py-5 rounded-2xl text-white bg-customColor font-medium hover:bg-yellow-500 hover:shadow-md hover:text-black transition duration-300">
                  Tiếp tục mua sắm
                </button>
                <button
  onClick={showModal}
  className="px-10 py-5 rounded-2xl text-white bg-customColor font-medium hover:bg-red-500 hover:shadow-md hover:text-black transition duration-300"
>
  Xóa tất cả
  </button>
              </div>
            </div>
            <div className="w-1/3 h-[550px] sticky top-[10%] bg-white rounded-lg shadow-xl">
              <div className="space-y-4 mb-10 px-7 leading-[3.7rem]">
                <div className="flex justify-between items-center ">
                  <ModalDiscount/>
                  <span className="font-bold text-customColor">
                    {/* UY8F8SD7F89SD7F */}
                  </span>
              
                </div>
                <h2 className="text-[2rem] font-semibold">
                  Thông tin đơn hàng
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between mb-5 font-semibold text-[1.8rem]">
                    <span>Tổng tiền</span>
                    <span className="font-bold text-[2rem]">
                    {formatCurrencyVND(totalPrice)}

                    </span>
                  </div>
                  <div className="border-t pt-5 flex justify-between">
                    <span>Tổng số lượng</span>
                    <span className="font-bold text-[1.8rem]">{totalItem}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Voucher đã áp dụng</span>
                    <span className="font-bold text-[1.8rem]">0</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Giảm giá</span>
                    <span className="font-bold text-[1.7rem] text-black-500">
                    {getDiscount} %
                    </span>
                  </div>
                  <div className="flex justify-between pb-5">
                 
                    <span>Phí vận chuyển</span>
                    {
                      listCart.length > 0  ?  (<span className="text-green-600 font-medium">{formatCurrencyVND(getShip)}</span>)
                      : (                    <span className="text-green-600 font-medium">0</span>
                    )
                    }
                  </div>
                  <div className="border-t pt-5 flex justify-between font-semibold text-[2rem]">
                    <span>Cần thanh toán</span>
                    <span className="text-red-600 font-semibold text-[2.2rem]">
                      {formatCurrencyVND(totalPriceWithVoucher)}
                      
                    </span>
                  </div>
                  <div className="flex justify-end items-center text-gray-500 text-[1.4rem]">
                    <span>Đã bao gồm khuyến mãi, phí vận chuyển và VAT</span>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      if((listCart.length>0)){
      
                        navigate("/thanh-toan");
                     
                      }else{
                        toast.success("Bạn cần thêm sản phẩm")
                        navigate("/")

                      }
                    }}
                    className="w-full bg-customColor text-white py-[0.4rem] text-[1.7rem] rounded-[1.7rem] font-medium"
                  >
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

