import React from "react";
import dienThoai from '../asset/dienthoaisign.png'
import bgdienThoai from '../asset/dienthoai.png'
import { Button, Form, Input } from "antd";
import { FaArrowLeft, FaFacebookF, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import '../css/formSign.css'
function Login() {
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
        <img src={dienThoai} alt="iPhone" className="w-[500px] object-contain" />
      </div>
    </div>
    {/* Right Section: Advertisement */}
   
    <div className="w-[40%] m-auto">
    <div className="w-[70%] p-8 flex flex-col justify-center z-10">
      <h2 className="text-[3rem] font-bold mb-4 text-center">Đăng nhập</h2>
      <p className="mb-4 text-gray-600 text-center text-[1.5rem]">Bạn có thể đăng nhập</p>
      {/* Social Buttons */}
      <div className="flex gap-4 mb-6 w-[70%] m-auto">
        <button className="w-1/2 py-5  border text-[1.6rem] border-[#7500CF] text-[#7500CF] flex items-center justify-center rounded-lg ">
    <FaFacebookF className="mr-[.5rem]"/>
          Facebook
        </button>
        <button className="w-1/2 py-5 border text-[1.6rem] border-[#7500CF] flex items-center justify-center rounded-lg text-[#7500CF]">
<FaGoogle className="mr-[.5rem]" />
          Google
        </button>
      </div>
      {/* Form */}
      <Form
      layout="vertical"
    className="sign-edit"
      // initialValues={{
      //   // layout: formLayout,
      // }}
      // onValuesChange={onFormLayoutChange}
      // style={{
      //   maxWidth: formLayout === 'inline' ? 'none' : 600,
      // }}
    >
     
      <Form.Item label="Tài khoản" className="mb-[1rem]">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Mật khẩu" className="mb-[.5rem]">
        <Input placeholder="input placeholder"  />
      </Form.Item>
      <div className="flex justify-end">
      <NavLink to="" className="text-[1.5rem] mb-[.5rem] text-[#7500CF] font-semibold hover:text-purple-800">Quên mật khẩu</NavLink>
    </div>
      <div className="button-edit">
        <Button type="primary" className="w-[100%] h-[4rem] text-[1.7rem]">Đăng nhập</Button>
      </div>
    </Form>
 
      {/* Link to Sign In */}
      <p className="mt-4 text-gray-600 text-center text-[1.4rem]">
        Bạn chưa có tài khoản? <NavLink to="/đăng-kí" className="text-purple-600 hover:text-purple-800">Đăng kí ngay</NavLink>
      </p>
    </div>

    </div>
  </div>
</div>
  );
}

export default Login;
