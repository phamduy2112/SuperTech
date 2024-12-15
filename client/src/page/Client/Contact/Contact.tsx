import { Dropdown, Form } from "antd";
import React, { useState } from "react";
import { FaChevronRight, FaPhone } from "react-icons/fa";
import { Input } from "../../../template/Component/Input/Input";
import TextArea from "antd/es/input/TextArea";
import { IoMail } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";

function Contact() {
  const [width, setwidth] = useState(null);
  
  function checkWidth() {
    const width: number = window.innerWidth;
    setwidth(width);
  }
  console.log(width);

  const items1 = [
    {
      key: "1",
      label: (
        <div
          className={`bg-[#f3f0f0] w-[90%] xl:w-[730px] p-10 text-[16px] font-light text-[#7500CF] grid gap-10`}
        >
          <div>
            Để bảo quản pin cho laptop và điện thoại, bạn nên sạc khi dung lượng
            pin còn khoảng 20-30% và không để pin cạn kiệt thường xuyên. Tránh
            sử dụng thiết bị khi đang sạc và hạn chế sử dụng sạc dự phòng kém
            chất lượng.
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full md:w-[80%] m-auto">
      <div className="flex flex-col h-full justify-center items-center p-4 md:p-10 gap-5 md:gap-7">
        <span className="text-[24px] md:text-[32px] font-medium text-center p-2 md:p-5">
          Liên hệ cho chúng tôi
        </span>
        <span className="text-[14px] md:text-[16px] font-light text-[#727171]">
          đội ngũ chuyên nghiệp giàu kinh nghiệm phục vụ quý khách hàng
        </span>

        <div className="w-full h-full md:h-[800px] relative flex flex-col md:flex-row items-start">
          {/* Map Section */}
          <div className="w-full h-[289px]">
            <div className="h-full relative flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.2285676306672!2d106.62416199839477!3d10.852793500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a272ac90551%3A0xfdedca96b3ea5e15!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5nIC0gQ8O0bmcgVmnDqm4gUGjDosyAbiBNw6rMgG0gUXVhbmcgVHJ1bmcgLSBUw7QgS8O9!5e0!3m2!1sen!2s!4v1728981405828!5m2!1sen!2s"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
              <div className="text-[24px] md:text-[40px] bg-[#8187be67] w-full h-full flex items-center justify-end absolute px-2">
                <span className="text-white text-[28px] md:text-[50px] font-light">
                  Kết nối với{" "}
                  <span className="font-medium text-[36px] md:text-[65px] text-[#9103FF]">
                    SuperTech
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Form and Contact Container */}
          <div className="p-3 sm:p-5 md:p-[30px] grid grid-cols-1 md:grid-cols-2 w-full h-full md:absolute">
            {/* Form Section */}
            <div className="p-3 sm:p-4 md:p-10 bg-slate-200">
              <h1 className="text-[18px] sm:text-[20px] md:text-[24px] mb-4">Biểu mẫu hỗ trợ</h1>
              <form className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3" action="">
                <div className="col-span-1 md:col-span-2">
                  <label className="text-[11px] sm:text-[12px] md:text-[13px] text-[#9854CC]">
                    Email
                  </label>
                  <input type="text" className="w-full h-[35px] sm:h-[40px] md:h-[45px] px-2 rounded-sm" />
                </div>
                <div>
                  <label className="text-[11px] sm:text-[12px] md:text-[13px] text-[#9854CC]">
                    Phone
                  </label>
                  <input type="text" className="w-full h-[35px] sm:h-[40px] md:h-[45px] px-2 rounded-sm" />
                </div>
                <div>
                  <label className="text-[11px] sm:text-[12px] md:text-[13px] text-[#9854CC]">
                    Họ
                  </label>
                  <input type="text" className="w-full h-[35px] sm:h-[40px] md:h-[45px] px-2 rounded-sm" />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="text-[11px] sm:text-[12px] md:text-[13px] text-[#9854CC]">
                    Tên
                  </label>
                  <input type="text" className="w-full h-[35px] sm:h-[40px] md:h-[45px] px-2 rounded-sm" />
                </div>
                <div className="col-span-1 md:col-span-3">
                  <label className="text-[11px] sm:text-[12px] md:text-[13px] text-[#9854CC]">
                    Tiêu đề
                  </label>
                  <input type="text" className="w-full h-[35px] sm:h-[40px] md:h-[45px] px-2 rounded-sm" />
                </div>
                <div className="col-span-1 md:col-span-3">
                  <label className="text-[11px] sm:text-[12px] md:text-[13px] text-[#9854CC]">
                    Nội dung
                  </label>
                  <textarea className="w-full h-[150px] sm:h-[200px] md:h-[400px] p-2 rounded-sm resize-none" />
                  <div className="bg-[#9854CC] w-full h-[40px] sm:h-[45px] md:h-[51px] flex justify-center items-center mt-2 rounded-sm hover:bg-[#8347b1] transition-colors">
                    <span className="text-white text-[12px] sm:text-[14px] md:text-[16px]">
                      Gửi Mẫu
                    </span>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-end items-start text-[18px] md:text-[26px] gap-4 md:gap-6 p-4 md:p-10 text-gray-800">
              <div className="flex items-center gap-3">
                <span className="text-[#7500CF]">
                  <IoMail />
                </span>
                <span>baochi@supertech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#00A3FF]">
                  <FaPhone />
                </span>
                <span className="text-[#FC6E2E]">1900 321 123 - 180 012 334</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#FF0000]">
                  <FaLocationCrosshairs />
                </span>
                <span>Tan Chanh Hiep, District 12, Ho Chi Minh City, Vietnam</span>
              </div>
              <span className="text-center md:text-left text-gray-600">
                Siêu thị SuperTech chất lượng đứng đầu về công nghệ hân hạnh được phục vụ quý khách
              </span>
              <div className="text-[#FF0000] flex items-center gap-2 justify-center md:justify-end cursor-pointer">
                <MdPhoneInTalk />
                <span>HỖ TRỢ NGAY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-center items-center p-6 md:p-10">
          <span className="text-[24px] sm:text-[28px] md:text-[32px] font-medium p-3 md:p-5 text-center">
            Chào Mừng đến với cộng đồng hỏi đáp của SuperTech
          </span>
          <span className="text-[14px] sm:text-[16px] font-light text-[#727171] text-center">
            Nơi giải đáp mọi thắc mắc của quý khách hàng
          </span>
        </div>

        <div className=" gap-3 w-full  grid xl:grid-cols-2 auto-rows-[minmax(60px,auto)]">
          <div className="grid gap-6 h-full w-full">
            <Dropdown
              menu={{ items: items1 }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <div className="bg-[#7500CF] text-white rounded-[3px] w-full h-full text-[20px] p-8">
                Cách bảo quản pin cho laptop và điện thoại tốt nhất là gì?{" "}
              </div>
            </Dropdown>
            <Dropdown
              menu={{ items: items1 }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <div className="bg-[#7500CF] text-white rounded-[3px] w-full h-full text-[20px] p-8">
                Tôi có thể đổi trả sản phẩm trong bao lâu?
              </div>
            </Dropdown>
            <Dropdown
              menu={{ items: items1 }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <div className="bg-[#7500CF] text-white rounded-[3px] w-full h-full text-[20px] p-8">
                Tai nghe này có tương thích với điện thoại của tôi không?
              </div>
            </Dropdown>
            <Dropdown
              menu={{ items: items1 }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <div className="bg-[#7500CF] text-white rounded-[3px] w-full h-full text-[20px] p-8">
                Tôi có thể mua hàng trực tuyến và nhận tại cửa hàng không?
              </div>
            </Dropdown>
            <Dropdown
              menu={{ items: items1 }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <div className="bg-[#7500CF] text-white rounded-[3px] w-full h-full text-[20px] p-8">
                Chính sách bảo hành cho các sản phẩm điện tử là gì?
              </div>
            </Dropdown>
          </div>
          <div className="grid gap-6 h-full w-full">
            <Dropdown
              menu={{ items: items1 }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <div className="bg-[#7500CF] text-white rounded-[3px] w-full h-full text-[20px] p-8">
                Làm thế nào để kiểm tra tình trạng đơn hàng của tôi?
              </div>
            </Dropdown>
            <Dropdown
              menu={{ items: items1 }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <div className="bg-[#7500CF] text-white rounded-[3px] w-full h-full text-[20px] p-8">
                Sản phẩm có hỗ trợ trả góp không?
              </div>
            </Dropdown>
            <Dropdown
              menu={{ items: items1 }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <div className="bg-[#7500CF] text-white rounded-[3px] w-full h-full text-[20px] p-8">
                Làm thế nào để chọn dung lượng sạc dự phòng phù hợp?
              </div>
            </Dropdown>
            <Dropdown
              menu={{ items: items1 }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <div className="bg-[#7500CF] text-white rounded-[3px] w-full h-full text-[20px] p-8">
                Cách bảo quản pin cho laptop và điện thoại tốt nhất là gì?
              </div>
            </Dropdown>
            <Dropdown
              menu={{ items: items1 }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <div className="bg-[#7500CF] text-white rounded-[3px] w-full h-full text-[20px] p-8">
                Cửa hàng có bán những loại điện thoại nào?
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;