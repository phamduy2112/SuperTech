import React, { useState } from "react";
import { Container } from "../../../../components/Style/Container";
import  "../../../../components/Style/formEdit.css";
import { FaEdit } from "react-icons/fa";
import {  NavLink } from "react-router-dom";
import { CiHeart, CiUser } from "react-icons/ci";
import { IoMdExit } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { Breadcrumb, Form, Input, InputNumber, Radio, Select, Steps } from 'antd'


function UserDetail() {
    const [formData, setFormData] = useState({
        fullName: '',
        sdt: '',
        email: '',
        address: '',
        gender: '',
        date:'',
        level:0,
    
      });
    
      const handleFormChange = (changedValues, allValues) => {
        setFormData({ ...formData, ...changedValues });
      };
  
    
      const handleFormSubmit = () => {
        // Xử lý logic khi ấn nút Đặt hàng
        console.log('Form data:', formData);
        // Thực hiện các bước cần thiết sau khi lấy được dữ liệu
      };
  return (
    <div className="pt-[1rem]">
  
        <div className="">
          <div className="flex justify-between">
            <div>
              <h4 className="text-[2.2rem] font-semibold">Hồ sơ của tôi</h4>
              <p className="text-[1.8rem] pt-[.5rem]">
                Quản lí hồ sơ để bảo mật tài khoản
              </p>
            </div>
            <button className="text-[1.7rem] flex gap-[.5rem] bg-[#7500CF] h-[3.5rem] justify-center items-center px-[1.3rem] text-white">
              <FaEdit />
              Sửa
            </button>
          </div>
          <div className="border-t-[#7500CF] border border-transparent mt-[1.5rem] ">
            <div className="flex">
              <div className="border-r-[#7500CF] flex flex-col justify-between p-[1rem] pr-[3rem] border border-transparent">
                <div className="flex flex-col items-center">
                <div className="w-[15rem] h-[15rem] rounded-[50%] overflow-hidden">
                  <img
                    className="w-[100%] h-[auto] max-w-full max-h-full"
                    src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=9CcFrnLnE6wQ7kNvgHke2Pt&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AbpJIGgstBxHptFM7bYfLkD&oh=00_AYA9SViXIx4oPF-rUG3spVPwWBLPYWNmxeTdvon7GaKpyw&oe=670C7E74"
                    alt=""
                  />
                </div>
                <div className="mt-[.5rem] cursor-pointer">
                  <div className="flex text-[1.8rem] py-[.6rem] border border-[#7500CF] w-[10rem] items-center justify-center rounded-[4rem]">
                    Chỉnh sửa
                  </div>
                </div>    
                </div>
                <div className="text-[1.7rem]">
                Tham gia vào ngày:

                <p className="mt-[.3rem] font-semibold">10:43 10/03/2024
                    </p>
                </div>
                
              </div>
              <div className="p-[2rem] w-[100%] ">
              <Form autoComplete='off' className='formEdit w-[100%]' onValuesChange={handleFormChange}>
                <div className="w-[100%]">
                <Form.Item name="name" label="Họ và tên" >
          <Input />
        </Form.Item>
                </div>
    <div className="flex w-[100%] justify-between">
    <Form.Item name="sdt" className="w-[49%]" label="Số điện thoại">
       
  <Input 
         className='w-[100%]'
        />
     
      

        </Form.Item>
        <Form.Item className="w-[49%]" name="email" label="Email">
          <Input />
        </Form.Item>
      
    </div>
       <div>
       <Form.Item className="w-[100%]" name="address" label="Địa chỉ">
          <Input />
        </Form.Item>
      
       </div>
        <div>
        
        <Form.Item label='Giới tính' className="gender">
                  <Radio.Group onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
                    <Radio value='1'>Nam</Radio>
                    <Radio value='2'>Nữ</Radio>
                    <Radio value='3'>Khác</Radio>
                  </Radio.Group>
                </Form.Item>
        </div>
        <div>
       <Form.Item className="w-[100%]" name="address" label="Ngày sinh">
          <Input />
        </Form.Item>
      
       </div>
      </Form>
      <div className="flex justify-end gap-[1rem] mt-[1.5rem]">
        <button
        className="p-[1rem] border text-[1.5rem] border-[#7500CF] text-[#7500CF]"
        >Đổi mật khẩu</button>
        <button
                className="p-[1rem] border text-[1.5rem] border-[#7500CF] text-[#7500CF]"

        >Cập nhận</button>
      </div>
              </div>
            </div>
          </div>
        </div>
 
    </div>
  );
}

export default UserDetail;
