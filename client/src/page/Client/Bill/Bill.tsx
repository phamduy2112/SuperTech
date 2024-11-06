// Bill.js
import React from "react";
import { Container } from "../../../components/Style/Container";
import { Steps } from "antd";

function Bill() {
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
          <Steps
  direction="vertical"
  size="large"
  current={3}
  items={[
    { title: "Đơn hàng đã được nhận", description: "19:00 15/11/2023" },
    { title: "Shipper đã nhận đơn", description: "19:15 15/11/2023" },
    { title: "Shipper đang đến nhận hàng", description: "19:30 15/11/2023" },
    { title: "Shipper đã đến nhận hàng", description: "19:45 15/11/2023" },
    { title: "Shipper đang giao hàng", description: "20:00 15/11/2023" },
    { title: "Đơn hàng hoàn tất", description: "20:30 15/11/2023" },
  ]}
/>
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
                    Đơn hàng đã thiết lập thành công. Chúng tôi sẽ liên lạc trực
                    tiếp với quý khách để xác nhận.
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
                Mã đơn hàng: W199883
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
                <span>16,000₫</span>
              </div>
              <div className="flex justify-between text-[1.6rem] text-gray-600 mb-1">
                <span>Giá sản phẩm:</span>
                <span>148,000₫</span>
              </div>
              <div className="flex justify-between text-[1.6rem] text-gray-600 mb-1">
                <span>Phụ phí dịch vụ:</span>
                <span>10,000₫</span>
              </div>
              <div className="flex justify-between text-[1.6rem] font-semibold text-gray-800 mt-3">
                <span>Giảm giá:</span>
                <span>-10,000₫</span>
              </div>
              <div className="flex justify-between text-[1.8rem] font-bold text-green-600 mt-4">
                <span>Tổng cộng:</span>
                <span>164,000₫</span>
              </div>
            </div>

            {/* Order Items */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="border-b bg-gray-100 text-gray-600 text-lg">
                    <th className="py-4 px-6 text-left">Hàng</th>
                    <th className="py-4 px-6 text-left">Đơn giá</th>
                    <th className="py-4 px-6 text-center">Số Lượng</th>
                    <th className="py-4 px-6 text-right">Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example Order Item */}
                  <tr className="border-b">
                    <td className="py-6 px-6 text-gray-800 flex items-center gap-4">
                      <img
                        src=""
                        alt="Điện thoại"
                        className="w-20 h-20 rounded-md object-cover"
                      />
                      <span className="text-roboto">IphoneX</span>
                    </td>
                    <td className="py-6 px-6 text-gray-800 text-roboto">17,000₫</td>
                    <td className="py-6 px-6 text-center text-gray-800 text">2</td>
                    <td className="py-6 px-6 text-right text-gray-800 text">34,000₫</td>
                  </tr>
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