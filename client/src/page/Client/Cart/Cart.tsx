import { Container } from "../../../components/Style/Container";
import { FaTrash } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";

export default function Cart() {
  return (
    <Container>
        <div className=" py-6 text-[1.5rem]">
          <div className="mx-auto">
            <div className="my-[1.5rem] text-[1.5rem] text-gray-600">
              <a href="/" className="text-customPurple hover:underline">Trang chủ</a>
              <span className="mx-2">/</span>
              <span>Giỏ hàng</span>
            </div>

            <div className="flex space-x-6">
              <div className="flex-1 space-y-6">
                <div className="flex items-center justify-end bg-white p-5 rounded-lg shadow my-[3rem]">
                  <button className="text-gray-500 hover:text-red-600">
                    <i className="fas fa-trash-alt"> Xóa tất cả </i>
                  </button>
                </div>

                {[1, 2, 3].map((item) => (
                  <div
                  key={item}
                  className="bg-white py-5 rounded-lg shadow space-y-1">
                    <div className="flex space-x-[10rem] items-center px-10 py-5">
                      <img
                        src="https://th.bing.com/th/id/OIP.hZOYBxk1erwCHpTFUkIHygHaEa?rs=1&pid=ImgDetMain"                                                                                                                 
                        alt="Product"
                        className="w-[7rem h-[7rem] object-cover rounded-lg"
                      />
                      <div className="flex-1 leading-[3rem] ">
                        <h2 className="text-[1.7rem] font-semibold">
                          Macbook Air 14 inch
                        </h2>
                        <p className="text-gray-500 text-[1.3rem]">Màu: Đen</p>
                        <div className="flex flex-col leading-normal text-lg ">
                          <span className="text-customPurple text-[1.6rem] font-">
                            20.190.000 ₫
                          </span>
                          <span className="text-gray-400 line-through text-[1.4rem]">
                            25.390.000 ₫
                          </span>
                        </div>
                      </div>
                    <div className="flex space-x-4 items-center">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg">
                          -
                        </button>
                        <span className="font-semibold">1</span>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg">
                          +
                        </button>
                    </div>
                    <div className="flex flex-col leading-normal text-lg ">
                        <span className="text-customPurple text-[1.6rem] font-semibold">
                          20.190.000 ₫
                        </span>
                    </div>
                    <button className="text-gray-500 hover:text-red-600 mx-[10rem]">
                          <i className="fas fa-trash-alt">
                              <FaTrash />
                          </i>
                    </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-1/3 bg-white rounded-lg shadow space-y-4 my-[3rem] py-5 px-7 leading-[3rem]">
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
                    <div className="flex justify-between">
                      <span>Tổng tiền</span>
                      <span className="font-bold text-[1.8rem]">93.360.000 ₫</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between">
                      <span>Tổng số lượng</span>
                      <span className="font-bold text-[1.8rem]">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Voucher đã áp dụng</span>
                      <span className="font-bold text-[1.8rem]">1</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Giảm giá</span>
                      <span className="font-medium text-[1.5rem] text-gray-500">-17.200.000 ₫</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Phí vận chuyển</span>
                      <span className="text-green-600">Miễn phí</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between">
                      <span>Cần thanh toán</span>
                      <span className="text-red-600 font-semibold text-[2rem]">
                        76.160.000 ₫
                      </span>
                    </div>
                    <div className="flex justify-end items-center text-gray-500 text-[1.4rem]">
                      <span>Đã bao gồm khuyến mãi, phí vận chuyển và VAT</span>
                    </div>
                  </div>
                  <div>
                    <button className="w-full bg-customPurple text-white py-2 rounded-[1.7rem] font-semibold">
                      Thanh toán
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
  );
}

