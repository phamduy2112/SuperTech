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
    <div className="w-[80%] m-auto">
      <div className="flex flex-col h-full justify-center items-center p-10 gap-7">
        <span className="text-[32px] font-medium text-center p-5">
          Liên hệ cho chúng tôi
        </span>
        <span className="text-[16px] font-light text-[#727171]">
          đội ngũ chuyên nghiệp giàu kinh nghiệm phục vụ quý khách hàng{" "}
        </span>

        <div className="w-full h-[800px] relative flex items-start">
          <div className=" w-full h-[289px]">
            <div className="h-full relative flex items-center justify-center ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.2285676306672!2d106.62416199839477!3d10.852793500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a272ac90551%3A0xfdedca96b3ea5e15!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5nIC0gQ8O0bmcgVmnDqm4gUGjDosyAbiBNw6rMgG0gUXVhbmcgVHJ1bmcgLSBUw7QgS8O9!5e0!3m2!1sen!2s!4v1728981405828!5m2!1sen!2s"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
              <div className="text-[40px] bg-[#5766ee67] w-full h-full flex items-center justify-end absolute">
                <span>Kết nối với SuperTech</span>
              </div>
            </div>
          </div>
          <div className=" p-[30px] grid xl:grid-cols-2 w-full h-full absolute">
            <div className="p-6 bg-slate-200">
              <h1 className="text-[24px]">Biểu mẫu hỗ trợ</h1>

              <form className=" grid grid-cols-3 gap-2" action="">
                <div className=" col-span-2">
                  <label className="text-[13px] text-[#9854CC]" htmlFor="">
                    Email
                  </label>
                  <input type="text" className="w-full h-[45px]" />
                </div>
                <div className="">
                  <label className="text-[13px] text-[#9854CC]" htmlFor="">
                    Phone
                  </label>
                  <input type="text" className="w-full h-[45px]" />
                </div>
                <div>
                  <label className="text-[13px] text-[#9854CC]" htmlFor="">
                    Họ
                  </label>
                  <input type="text" className="w-full h-[45px]" />
                </div>
                <div className="col-span-2">
                  <label className="text-[13px] text-[#9854CC]" htmlFor="">
                    Tên
                  </label>
                  <input type="text" className="w-full h-[45px]" />
                </div>
                <div className="col-span-3">
                  <label className="text-[13px] text-[#9854CC]" htmlFor="">
                    Tiêu đề
                  </label>
                  <input type="text" className="w-full h-[45px]" />
                </div>

                <div className="col-span-3">
                  <label className="text-[13px] text-[#9854CC]" htmlFor="">
                    Nội dung
                  </label>
                  <textarea className="w-full h-[400px]" />
                  <div className="bg-[#9854CC] w-[689px] h-[51px] flex justify-center items-center ">
                    <span className="text-white flex justify-center items-center text-[16px] ">
                      {" "}
                      Gửi Mẫu
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className="bg-red-500 flex justify-end items-end text-[26px]   ">
              <div className=" flex-col item start b h-[full] ">
                <span>
                  {" "}
                  <span className="text-[#7500CF]">
                    <IoMail />
                  </span>{" "}
                  baochi@supertech.com
                </span>
              </div>
              <div>
                <span className="text-[#00A3FF]">
                  <FaPhone />
                </span>{" "}
                <span className="text-[#FC6E2E]">
                  {" "}
                  1900 321 123 - 180 012 334
                </span>
              </div>
              <span>
                {" "}
                <span className="text-[#FF0000]">
                  <FaLocationCrosshairs />
                </span>{" "}
                Tan Chanh Hiep, District 12, Ho Chi Minh City, Vietnam
              </span>
              <span>
                Siêu thị SuperTech chất lượng đứng đầu về công nghệ hân hạnh
                được phục vụ quý khách
              </span>
              <div className="text-[#FF0000]">
                <span>
                  {" "}
                  <span>
                    <MdPhoneInTalk />
                  </span>{" "}
                  HỖ TRỢ NGAY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center p-10">
          <span className="text-[32px] font-medium p-5">
            Chào Mừng đến với cộng đồng hỏi đáp của SuperTech
          </span>
          <span className="text-[16px] font-light text-[#727171] flex justify-center items-center">
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
                Cách bảo quản pin cho laptop và điện thoại tốt nhất là gì?
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
                Cách bảo quản pin cho laptop và điện thoại tốt nhất là gì?
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
          </div>
          <div className="grid gap-6 h-full w-full">
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
                Cách bảo quản pin cho laptop và điện thoại tốt nhất là gì?
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
                Cách bảo quản pin cho laptop và điện thoại tốt nhất là gì?
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
