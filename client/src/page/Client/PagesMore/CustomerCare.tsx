import React from "react";
import { MdHome } from "react-icons/md";
function CustomerCare() {
  return (
    <div>
      <div className="w-[80%] m-auto flex ">
        <span className="text-[19px] text-[#A0A0A0] flex">
          {" "}
          <MdHome /> Trang chủ/
        </span>
        <span className="text-[19px] text-[#7500CF]">Chăm sóc khách hàng</span>
      </div>

      <div className="w-[80%] m-auto grid grid-cols-[30%_1fr] p-10">
        <div>
          <div className="grid text-[16px] font-medium gap-5 ">
            <span className="text-[#FFFF] bg-[#7500CF] w-[296px] h-[50px] p-6 rounded-[5px]">
              {" "}
              Hướng dẫn mua hàng Online
            </span>
            <span className="border p-4 rounded-[5px] w-[296px] h-[50px] p-6">
              {" "}
              Chính sách thanh toán
            </span>
            <span className="border p-4 rounded-[5px] w-[296px] h-[50px] p-6">
              {" "}
              Chính sách giao hàng
            </span>
          </div>
        </div>
        <div className="grid gap-8">
          <span className="text-[32px] font-medium text-[#7500CF] ">
            {" "}
            Hướng dẫn mua hàng Online
          </span>
          <span className="text-[#7500CF] text-[16px] font-medium">
            {" "}
            Cách 1:Hotline
          </span>
          <span className="text-[16px] font-light">
            {" "}
            Gọi điện đến Hotline{" "}
            <span className="text-[#7500CF]"> 0313728397</span> từ 8h đến 20h
            tất cả các ngày trong tuần. Nhân viên bán hàng sẽ ghi nhận thông tin
            đặt hàng của bạn
          </span>
          <span className="text-[#7500CF] text-[16px] font-medium">
            {" "}
            Cách 2: Mạng xã hội
          </span>
          <span className="text-[16px] font-light px-[20px]">
            {" "}
            Truy cập vào trang Facebook hoặc Instagram chính thức của Shop Chọn
            mục “Nhắn tin” để được nhân viên trực chat tư vấn về các loại sản
            phẩm và nhận đơn đặt hàng
          </span>
          <span className="text-[#7500CF] text-[16px] font-medium">
            {" "}
            Cách 3: Website:
          </span>

          <div className="text-[16px] font-light grid flex gap-3">
            <span className="px-[20px]"> Truy cập vào website</span>
            <span className="px-[20px] "> Tìm kiếm sản phẩm:</span>
            <span className="py-[10px]">
              + Nhập loại sản phẩm bạn mong muốn vào ô tìm kiếm, bạn sẽ có kết
              quả ngay sau khi hoàn thành.
            </span>
            <span>+ Click vào từng danh mục sản phẩm để tìm kiếm</span>
            <span className="px-[20px] text-2xl">
              {" "}
              Với mỗi sản phẩm ưng ý, bạn bấm nút{" "}
              <span className="font-medium">CHỌN MUA</span>, sản phẩm sẽ tự động
              được thêm vào <span className="font-medium">GIỎ HÀNG</span> Tại
              giỏ hàng, bạn có thể bấm nút “Xoá” nếu muốn huỷ sản phẩm đã chọn
              để mua sản phẩm khác Sau khi đã chọn được các loại trái cây cần
              mua, bấm vào <span className="font-medium">THANH TOÁN</span>, và
              điền đầy đủ, chính xác thông tin cá nhân trong bảng thông tin Chọn
              hình thức thanh toán
            </span>
            <span className="py-[10px]"> + Thanh toán khi nhận hàng</span>
            <span> + Thanh toán qua cổng Napas bằng thẻ ATM nội địa</span>
            <span> + Thanh toán qua Momo</span>
            <span className="px-[20px] py-[10px] text-2xl">
              {" "}
              Sau khi điền đầy đủ thông tin và kiểm tra đơn hàng, giá tiền, bạn
              bấm vào nút <span className="font-medium">
                HOÀN TẤT ĐƠN HÀNG
              </span>{" "}
              Shop sẽ gửi cho bạn email hoặc gọi điện xác nhận đơn hàng.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCare;
