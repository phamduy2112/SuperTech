import React from "react";
import dienThoai from '../asset/dienthoaisign.png';
import bgdienThoai from '../asset/dienthoai.png';
import { Button, Form, Input } from "antd";
import { FaArrowLeft, FaGoogle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import '../css/formSign.css';
import Swal from 'sweetalert2';
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../../../service/auth/auth.service";
import { saveLocalStorage } from "../../../../utils";

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
      password: Yup.string().min(6, "Mật khẩu phải có ít nhất 6 kí tự").required("Mật khẩu là bắt buộc"),
    }),
    onSubmit: async (values) => {
      const res = await login(values);
      if (res.data.message === "Thành công!") {
        Swal.fire({
          position: "top-end",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        const token = res.data.content.token;
        saveLocalStorage("token", token);
        navigate("/");
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: res.data.message || "Đăng nhập thất bại",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
      }
    },
  });

  return (
    <div className="">
      <div className="flex overflow-hidden relative h-[100vh]">
        {/* Left Section */}
        <div className="w-[60%] relative overflow-hidden hidden lg:block">
          <div className="absolute inset-0 bg-purple-700 clip-diagonal-left" />
          <div className="bg-white shadow-lg w-[4rem] h-[4rem] rounded-full absolute top-8 left-8">
            <NavLink to="/">
              <FaArrowLeft className="text-4xl text-[#7500CF] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </NavLink>
          </div>
          <div className="absolute bottom-[-20%] left-0 opacity-30">
            <img src={bgdienThoai} className="w-[800px]" alt="" />
          </div>
          <div className="absolute top-[40%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center p-8 flex flex-col items-center">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-3 leading-tight">
              SuperTech
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl w-[90%] lg:w-[600px] leading-relaxed">
              SuperTech là trang website mua sắm trực tuyến với nhiều ưu đãi và khuyến mãi. Hãy đăng nhập để có trải nghiệm tốt nhất và đồng hành cùng chúng tôi.
            </p>
          </div>
          <div className="absolute right-0 top-[20%] z-10">
            <img src={dienThoai} alt="iPhone" className="w-[500px] object-contain opacity-90" />
          </div>
        </div>
        
        {/* Right Section */}
        <div className="w-full lg:w-[40%] m-auto px-4">
          <div className="w-full lg:w-[70%] p-8 flex flex-col justify-center z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">Đăng nhập</h2>
            <p className="mb-6 text-gray-600 text-center text-xl lg:text-2xl">Bạn có thể đăng nhập</p>

            {/* Social Buttons */}
            <div className="flex gap-4 mb-8 w-full lg:w-[70%] m-auto">
              <button className="w-1/2 py-4 text-lg lg:text-xl border border-[#7500CF] flex items-center justify-center rounded-lg text-[#7500CF]">
                <FaGoogle className="mr-2" />
                Google
              </button>
            </div>

            {/* Form */}
            <Form layout="vertical" className="sign-edit" onFinish={formik.handleSubmit}>
              <Form.Item
                label={<span className="text-lg lg:text-xl">Email</span>}
                validateStatus={formik.touched.email && formik.errors.email ? "error" : ""}
                help={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                className="mb-6"
              >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Nhập email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="py-4 text-lg lg:text-xl"
                />
              </Form.Item>
              <Form.Item
                label={<span className="text-lg lg:text-xl">Mật khẩu</span>}
                validateStatus={formik.touched.password && formik.errors.password ? "error" : ""}
                help={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                className="mb-6"
              >
                <Input.Password
                  id="password"
                  name="password"
                  placeholder="Nhập mật khẩu"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="py-4 text-lg lg:text-xl"
                />
              </Form.Item>
              <div className="flex justify-end mb-6">
                <NavLink to="/quen-mat-khau" className="text-lg lg:text-xl text-[#7500CF] font-semibold hover:text-purple-800">
                  Quên mật khẩu
                </NavLink>
              </div>
              <Button type="primary" htmlType="submit" className="w-full h-16 text-2xl lg:text-3xl mt-4">
                Đăng nhập
              </Button>
            </Form>
            <p className="mt-6 text-gray-600 text-center text-lg lg:text-xl">
              Bạn chưa có tài khoản? <NavLink to="/dang-ky" className="text-purple-600 hover:text-purple-800">Đăng kí ngay</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
