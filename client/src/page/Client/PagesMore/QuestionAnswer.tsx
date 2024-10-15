import React from "react";
import { MdHome } from "react-icons/md";
function QuestionAnswer() {
  return (
    <div className="w-[80%] m-auto">
      <div className="text-[19px] flex">
        <span className="text-[#A0A0A0] flex">
          {" "}
          <MdHome /> Trang chủ/
        </span>{" "}
        <span className="text-[#7500CF]">Hỏi đáp</span>
      </div>

      <div className=" grid grid-cols-[30%_1fr] p-10">
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
          <span className=" text-[32px] font-medium text-[#7500CF]">
            {" "}
            Khi gặp vấn đề vấn đề thắc mắc,khiếu nại Shop liên hệ ở đâu
          </span>
          <div className="text-[16px] grid gap-5 font-light ">
            <span className="text-[#7500CF] font-medium">Cách 1: Hotline</span>
            <span className="">
              Gọi điện đến Hotline{" "}
              <span className="text-[#7500CF]">0313728397</span> từ 8h đến 20h
              tất cả các ngày trong tuần. Nhân viên bán hàng sẽ ghi nhận thông
              tin đặt hàng của bạn
            </span>
            <span className="text-[#7500CF] font-medium py-[10px]">
              Cách 2: Mạng xã hội
            </span>
            <span className="px-[20px]">
              Truy cập vào trang Facebook hoặc Instagram chính thức của Shop
              Chọn mục “Nhắn tin” để được nhân viên trực chat tư vấn về các loại
              sản phẩm và nhận đơn đặt hàng
            </span>
            <span className="text-[#7500CF] font-medium py-[10px]">
              Cách 3: Website:
            </span>
            <span className="px-[20px]">
              Truy cập vào website Tìm kiếm sản phẩm:
            </span>
            <span className="px-[20px]">
              + Nhập loại sản phẩm bạn mong muốn vào ô tìm kiếm, bạn sẽ có kết
              quả ngay sau khi hoàn thành.
            </span>
            <span className="px-[20px]">
              + Click vào từng danh mục sản phẩm để tìm kiếm
            </span>
            <span className="px-[20px] text-2xl">
              Với mỗi sản phẩm ưng ý, bạn bấm nút{" "}
              <span className="font-medium">CHỌN MUA</span>, sản phẩm sẽ tự động
              được thêm vào <span className="font-medium">GIỎ HÀNG</span>
              Tại giỏ hàng, bạn có thể bấm nút “Xoá” nếu muốn huỷ sản phẩm đã
              chọn để mua sản phẩm khác Sau khi đã chọn được các loại trái cây
              cần mua, bấm vào <span className="font-medium">THANH TOÁN</span>,
              và điền đầy đủ, chính xác thông tin cá nhân trong bảng thông tin
              Chọn hình thức thanh toán
            </span>
            <span className="px-[20px]"> + Thanh toán khi nhận hàng</span>
            <span className="px-[20px]">
              + Thanh toán qua cổng Napas bằng thẻ ATM nội địa
            </span>
            <span className="px-[20px]"> + Thanh toán qua Momo</span>
            <span className="px-[20px]">
              {" "}
              Sau khi điền đầy đủ thông tin và kiểm tra đơn hàng, giá tiền, bạn
              bấm vào nút{" "}
              <span className=" font-medium">HOÀN TẤT ĐƠN HÀNG</span>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionAnswer;
