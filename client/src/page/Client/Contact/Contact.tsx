import { Dropdown } from "antd";
import React from "react";
import { GoDotFill } from "react-icons/go";
const items1 = [
  {
    key: "1",
    label: (
      <div
      >
        1st menu itemnascjacajksciajsbcaihsbchaikjbsckaskacaac
      </div>
    ),
  },
];

const items2= [
  {
    key: "1",
    label: (
      <div
      >
        1st menu itemnascjacajkssssssciajsbcaihsbchaikjbsckaskacaac
      </div>
    ),
  },
];
const items3= [
  {
    key: "1",
    label: (
      <div
      >
        1st menu itemnascjacajkssssssciajsbcaihsbchaikjbsckaskacaac
      </div>
    ),
  },
];
const items4= [
  {
    key: "1",
    label: (
      <div
      >
        1st menu itemnascjacajkssssssciajsbcaihsbchaikjbsckaskacaac
      </div>
    ),
  },
];
const items5= [
  {
    key: "1",
    label: (
      <div
      >
        1st menu itemnascjacajkssssssciajsbcaihsbchaikjbsckaskacaac
      </div>
    ),
  },
];
const items6= [
  {
    key: "1",
    label: (
      <div
      >
        1st menu itemnascjacajkssssssciajsbcaihsbchaikjbsckaskacaac
      </div>
    ),
  },
];
const items7= [
  {
    key: "1",
    label: (
      <div
      >
        1st menu itemnascjacajkssssssciajsbcaihsbchaikjbsckaskacaac
      </div>
    ),
  },
];
const items8= [
  {
    key: "1",
    label: (
      <div
      >
        1st menu itemnascjacajkssssssciajsbcaihsbchaikjbsckaskacaac
      </div>
    ),
  },
];
const items9= [
  {
    key: "1",
    label: (
      <div
      >
        1st menu itemnascjacajkssssssciajsbcaihsbchaikjbsckaskacaac
      </div>
    ),
  },
];



function Contact() {
  return (
    <div className="w-[80%] m-auto">
      <div className="flex flex-col h-full justify-center items-center p-10">
        <span className="text-[32px] font-medium text-center p-5">
          Liên hệ cho chúng tôi
        </span>
        <span className="text-[16px] font-light text-[#727171]">
          đội ngũ chuyên nghiệp giàu kinh nghiệm phục vụ quý khách hàng{" "}
        </span>
        <div></div>
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

        <div >

        <div className=" bg-[#f3f0f0] w-[664px] h-[279px] p-10 text-[16px] font-light text-[#7500CF] grid gap-10">
          <span className="flex "> <span className="text-[8px]"><GoDotFill /></span>  Để bảo quản pin cho laptop và điện thoại, bạn nên sạc khi dung lượng pin còn khoảng 20-30% và không để pin cạn kiệt thường xuyên. Tránh sử dụng thiết bị khi đang sạc và hạn chế sử dụng sạc dự phòng kém chất lượng.</span>
          <span className="flex"> <span className="text-[8px]"><GoDotFill /></span>Sạc khi pin còn khoảng 20-30%: Không nên để pin cạn kiệt hoàn toàn trước khi sạc lại, vì điều này có thể gây hại cho pin về lâu dài. Sạc khi pin còn 20-30% sẽ giúp kéo dài tuổi thọ pin.</span>
          <span className="flex"> <span className="text-[8px]"><GoDotFill /></span>Không sử dụng thiết bị trong khi sạc: Việc sử dụng laptop hay điện thoại khi đang sạc có thể khiến thiết bị nóng lên, gây ảnh hưởng xấu đến hiệu suất và tuổi thọ của pin. Nếu cần sử dụng trong khi sạc, hãy đảm bảo rằng thiết bị không bị quá nóng.</span>
        </div>


        <div className="">
          <Dropdown menu={{ items:items1 }} trigger={["click"]} placement="bottomLeft">
            <div className="bg-red-400 bw-[100px] h-[100px] text-[18px] font-medium p-8 flex gap-10">Cách bảo quản pin cho laptop và điện thoại tốt nhất là gì?</div>
          </Dropdown>
          
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Dropdown menu={{ items:items2 }} trigger={["click"]} placement="bottomLeft">
            <div className="bg-red-400 bw-[100px] h-[100px]">sssss</div>
          </Dropdown>
          
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Dropdown menu={{ items:items3 }} trigger={["click"]} placement="bottomLeft">
            <div className="bg-red-400 bw-[100px] h-[100px]">sssss</div>
          </Dropdown>
          
        </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Dropdown menu={{ items:items4 }} trigger={["click"]} placement="bottomLeft">
            <div className="bg-red-400 bw-[100px] h-[100px]">sssss</div>
          </Dropdown>
          
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Dropdown menu={{ items:items5 }} trigger={["click"]} placement="bottomLeft">
            <div className="bg-red-400 bw-[100px] h-[100px]">sssss</div>
          </Dropdown>
          
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Dropdown menu={{ items:items6 }} trigger={["click"]} placement="bottomLeft">
            <div className="bg-red-400 bw-[100px] h-[100px]">sssss</div>
          </Dropdown>
          
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Dropdown menu={{ items:items7 }} trigger={["click"]} placement="bottomLeft">
            <div className="bg-red-400 bw-[100px] h-[100px]">sssss</div>
          </Dropdown>
          
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Dropdown menu={{ items:items8 }} trigger={["click"]} placement="bottomLeft">
            <div className="bg-red-400 bw-[100px] h-[100px]">sssss</div>
          </Dropdown>
          
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Dropdown menu={{ items:items9 }} trigger={["click"]} placement="bottomLeft">
            <div className="bg-red-400 bw-[100px] h-[100px]">sssss</div>
          </Dropdown>
          
        </div>

        </div>
      </div>

  );
}

export default Contact;
