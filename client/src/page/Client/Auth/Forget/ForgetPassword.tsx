import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import dienThoai from '../asset/dienthoaisign.png';
import bgdienThoai from '../asset/dienthoai.png';
import { useFormik } from 'formik';
import * as Yup from "yup";
import CountdownTimer from './components/CountDown';
import CodeInput from './components/CodeInput';
import ChangePassword from './components/ChangePassword';
import { checkEmail } from '../../../../service/user/user.service';

function ForgetPassword() {
  const navigate = useNavigate();
  const [number, setNumber] = useState(2);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
    }),
    onSubmit: async (values) => {
      console.log("Form data", values);
      const response = await checkEmail(values);
      console.log(response);
      if (response.data.message === "Code sent successfully") {
        setNumber(2);
      }
    },
  });

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      {/* Left Section - Only visible on large screens (lg and above) */}
      <div className="relative w-full lg:w-3/5 hidden lg:block">
        <div className="absolute inset-0 bg-purple-700 clip-diagonal-left" />
        <div className="bg-white shadow-lg w-16 h-16 rounded-full absolute top-8 left-8">
          <NavLink to="/">
            <FaArrowLeft className="text-4xl text-[#7500CF] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </NavLink>
        </div>
        <div className="absolute bottom-[-20%] left-0 opacity-30">
          <img src={bgdienThoai} className="w-[800px]" alt="" />
        </div>
        <div className="relative top-[40%] left-[35%] translate-x-[-50%] translate-y-[-50%] z-10 text-white text-center p-8 flex flex-col items-center">
          <h1 className="text-[4rem] lg:text-[6rem] font-bold mb-3">SuperTech</h1>
          <p className="text-[1.2rem] sm:text-[1.8rem] w-[300px] sm:w-[500px] md:w-[600px]">
            SuperTech là trang website mua sắm trực tuyến với nhiều ưu đãi và khuyến mãi. Hãy đăng nhập để có trải nghiệm tốt nhất và đồng hành cùng chúng tôi.
          </p>
        </div>
        <div className="absolute right-[5%] md:right-0 top-[15%] md:top-[20%] z-10">
          <img src={dienThoai} alt="iPhone" className="w-[200px] sm:w-[250px] md:w-[500px] object-contain opacity-90" />
        </div>
      </div>

      {/* Right Section - Form, always visible */}
      <div className="w-full lg:w-2/5 flex justify-center items-center p-4 sm:p-8 md:p-16">
        <div className="w-full sm:w-3/4 lg:w-[70%] p-4 sm:p-8 flex flex-col justify-center z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">Quên mật khẩu</h2>
          <p className="mb-4 text-gray-600 text-center text-sm sm:text-lg md:text-[1.2rem] lg:text-[1.5rem]">
            Quên mật khẩu? Vui lòng nhập tên người dùng hoặc địa chỉ email của bạn. Bạn sẽ nhận được liên kết để tạo mật khẩu mới qua email.
          </p>

          {/* Form */}
          {number === 1 ? (
            <Form layout="vertical" className="sign-edit" onFinish={formik.handleSubmit}>
              <Form.Item
                label="Email"
                validateStatus={formik.touched.email && formik.errors.email ? "error" : ""}
                help={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                className="mb-4"
              >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Nhập email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="py-2 sm:py-3 text-base sm:text-lg"
                />
              </Form.Item>
              <Button type="primary" htmlType="submit" className="w-full h-10 sm:h-12 text-base sm:text-lg">Đăng nhập</Button>
            </Form>
          ) : number === 2 ? (
            <CodeInput />
          ) : (
            <ChangePassword />
          )}

          <p className="mt-4 text-gray-600 text-center text-sm sm:text-base md:text-lg">
            Quay lại <NavLink to="/dang-ki" className="text-purple-600 hover:text-purple-800">đăng nhập</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
