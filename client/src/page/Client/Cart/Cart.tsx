import { Container } from "../../../components/Style/Container";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Cart() {
  return (
    <Container>
        <div className="bg-gray-100 py-6 text-[1.5rem]">
          <div className="mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6 text-[2rem] text-gray-600">
              <a href="/" className="text-blue-600 hover:underline">Trang chủ</a>
              <span className="mx-2">/</span>
              <span>Giỏ hàng</span>
            </div>

            <div className="flex space-x-6">
              {/* Product List */}
              <div className="flex-1 space-y-6">
                {/* Select All and Delete */}
                <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-6 h-6" />
                    <span className="text-[1.4rem]">Chọn tất cả (3)</span>
                  </div>
                  <button className="text-gray-500 hover:text-red-600">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>

                {/* Product Item */}
                {[1, 2, 3].map((item) => (
                  <div
                  key={item}
                  className="bg-white p-4 rounded-lg shadow space-y-4"
                  >
                    <div className="flex space-x-4 items-center">
                      <input type="checkbox" className="w-6 h-6 items-center justify-center" />
                      <img
                        src="https://th.bing.com/th/id/OIP.hZOYBxk1erwCHpTFUkIHygHaEa?rs=1&pid=ImgDetMain"                                                                                                                 
                        alt="Product"
                        className="w-[10rem h-[10rem] object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h2 className="text-[1.7rem] font-semibold">
                          Macbook Air 14 inch
                        </h2>
                        <p className="text-gray-500 text-[1.3rem] my-[1.5rem]">Màu: Đen</p>
                      </div>
                      <div className="flex flex-col items-end leading-normal text-lg mt-4">
                        <span className="text-red-600 text-[1.7rem] font-semibold">
                          20.190.000 ₫
                        </span>
                        <span className="text-gray-400 line-through text">
                          25.390.000 ₫
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-4 items-center">
                      <button className="px-4 py-2 border border-gray-300 rounded-lg">
                        -
                      </button>
                      <span className="font-semibold">1</span>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg">
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="w-1/3 bg-white p-6 rounded-lg shadow space-y-4">
                <h2 className="text-[1.7rem] font-semibold">Thông tin đơn hàng</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Tổng tiền</span>
                    <span>93.360.000 ₫</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tổng khuyến mãi</span>
                    <span>-17.200.000 ₫</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phí vận chuyển</span>
                    <span>Miễn phí</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between">
                    <span>Cần thanh toán</span>
                    <span className="text-red-600 font-semibold">
                      76.160.000 ₫
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Điểm thưởng</span>
                    <span className="text-yellow-500">+19,040</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 rounded-[1.7rem] font-semibold">
                  Xác nhận đơn
                </button>
              </div>
            </div>
          </div>
        </div>
    </Container>
  );
}

