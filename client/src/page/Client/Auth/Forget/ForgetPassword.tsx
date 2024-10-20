import { Button, Form, Input } from 'antd';
import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import dienThoai from '../asset/dienthoaisign.png'
import bgdienThoai from '../asset/dienthoai.png'
import { useFormik } from 'formik';
import * as Yup from "yup";
import CountdownTimer from './components/CountDown';
import CodeInput from './components/CodeInput';
import ChangePassword from './components/ChangePassword';

function ForgetPassword() {
  const navigate = useNavigate();
  const [number,setNumber]=useState(2);

  const formik = useFormik({
    initialValues: {
  
      email: "",
    
  
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  
   
    }),
    onSubmit:async (values) => {
      console.log("Form data", values);
     
    
     
      }


  });
  const targetTime = new Date().getTime() + 3900000;

    return (
<div className="">
  <div className="flex overflow-hidden relative h-[100vh]">
    {/* Left Section: Registration Form */}

 <div className="w-[60%] relative  overflow-hidden">
      {/* Diagonal Purple Background */}
   
      <div className="absolute inset-0 bg-purple-700 clip-diagonal-left" />
      <div className="bg-white shadow-lg w-[4rem] h-[4rem] rounded-[50%] absolute top-[2rem] left-[2rem] ">
        <NavLink to={"/"}>
          <FaArrowLeft  className="text-[2rem] text-[#7500CF] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
        </NavLink>
        
      </div>
   <div className="absolute bottom-[-20%] left-0 opacity-30">
        <img src={bgdienThoai} className="w-[800px]" alt="" />
      </div>
      <div className="relative top-[40%] left-[35%] translate-x-[-50%] translate-y-[-50%] z-10 text-white text-center p-8 flex flex-col items-center">
        <h1 className="text-[6rem] font-bold mb-3">SuperTech</h1>
        <p className="text-[1.8rem] w-[600px]">
          SuperTech là trang website mua sắm trực tuyến với nhiều ưu đãi và khuyến mãi. Hãy đăng nhập để có trải nghiệm tốt nhất và đồng hành cùng chúng tôi.
        </p>
      </div>
      {/* Image of iPhone */}
      <div className="absolute right-[0%] top-[20%] z-10">
        <img src={dienThoai} alt="iPhone" className="w-[500px] object-contain opacity-90" />
      </div>
    </div>
    {/* Right Section: Advertisement */}
   
    <div className="w-[40%] m-auto">
    <div className="w-[70%] p-8 flex flex-col justify-center z-10">
      <h2 className="text-[3rem] font-bold mb-4 text-center">Quên mật khẩu</h2>
      <p className="mb-4 text-gray-600 text-center text-[1.5rem]">

      Quên mật khẩu? Vui lòng nhập tên người dùng hoặc địa chỉ email của bạn. Bạn sẽ nhận được liên kết để tạo mật khẩu mới qua email.
      </p>
      {/* Social Buttons */}
   
      {/* Form */}
    {
      number == 1 ?(  <Form
        layout="vertical"
      className="sign-edit"
      onFinish={formik.handleSubmit}
  
    
      >
       
        <Form.Item 
  label="Email"
  validateStatus={formik.touched.email && formik.errors.email ? "error" : ""}
  help={formik.touched.email && formik.errors.email ? formik.errors.email : null}
        
        className="mb-[1rem]">
          <Input 
          id="email"
          name="email"
          type="email"
          placeholder="Nhập email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="py-[2.1rem] text-[1.5rem]"/>
        </Form.Item>
       
        <div className="button-edit">
          <Button type="primary" htmlType="submit" className="w-[100%] h-[4rem] text-[1.7rem]">Đăng nhập</Button>
        </div>
      </Form>) :
      number ==2 ? (
           <CodeInput/>
      ) :(
        <ChangePassword/>
      )
 
   
    }
    <p className="mt-4 text-gray-600 text-center text-[1.4rem]">
        Quay lại <NavLink to="/đăng-kí" className="text-purple-600 hover:text-purple-800">đăng nhập</NavLink>
      </p>
     
    </div>

    </div>
  </div>
</div>
  );
}

export default ForgetPassword