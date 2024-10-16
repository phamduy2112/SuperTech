import * as React from "react";
import dienThoai from '../asset/dienthoaisign.png'
import bgdienThoai from '../asset/dienthoai.png'
import './css/custom.css'
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Button, Form, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signup } from "../../../../service/auth/auth.service";
import Swal from 'sweetalert2'

function Resigter() {
  // Sử dụng hook useFormik để quản lý form
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Họ và tên là bắt buộc"),
      email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
      password: Yup.string()
        .min(6, "Mật khẩu phải có ít nhất 6 kí tự")
        .required("Mật khẩu là bắt buộc"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Mật khẩu xác nhận không khớp")
        .required("Xác nhận mật khẩu là bắt buộc"),
    }),
    onSubmit:async (values) => {
      console.log("Form data", values);
      const payload={
        user_name:values.fullName,
        user_email:values.email,
        user_password:values.password,

      }
      const res = await signup(payload);

      if (res.data.message === "Đăng kí thành công!") {
        Swal.fire({
          position: "top-end",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500, // Thời gian hiển thị
          timerProgressBar: true, // Kích hoạt thanh tiến trình
        });
        navigate("/đăng-nhập")
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error", // Thay đổi icon thành "error" khi thất bại
          title: res.data.message || "Đăng kí thất bại", // Đảm bảo có thông điệp fallback
          showConfirmButton: false,
          timer: 1500, // Thời gian hiển thị
          timerProgressBar: true, // Kích hoạt thanh tiến trình
        });
      }
console.log(res);

    },
  });

  return (
<div className="relative">

  <div className="flex overflow-hidden relative h-[100vh]">
  <div className="bg-white w-[4rem] shadow-md h-[4rem] rounded-[50%] absolute left-[12rem] top-[5%]">
        <NavLink to={"/"}>
          <FaArrowLeft  className="text-[2rem] text-[#7500CF] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
        </NavLink>
        
      </div>
    {/* Left Section: Registration Form */}
    <div className="w-[40%] m-auto relative">
 
    <div className="w-[70%] m-auto p-8 flex flex-col justify-center z-10">
      
      <h2 className="text-[3rem] font-bold mb-4 text-center">Đăng kí</h2>
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
  {/* Formik Form */}
  <Form
              layout="vertical"
              onFinish={formik.handleSubmit}
              className="sign-edit"
            >
              {/* Họ và tên */}
              <Form.Item
                label="Họ và tên"
                validateStatus={formik.touched.fullName && formik.errors.fullName ? "error" : ""}
                help={formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : null}
              >
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Nhập họ và tên"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Form.Item>

              {/* Email */}
              <Form.Item
                label="Email"
                validateStatus={formik.touched.email && formik.errors.email ? "error" : ""}
                help={formik.touched.email && formik.errors.email ? formik.errors.email : null}
              >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Nhập email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Form.Item>

              {/* Mật khẩu */}
              <Form.Item
                label="Mật khẩu"
                validateStatus={formik.touched.password && formik.errors.password ? "error" : ""}
                help={formik.touched.password && formik.errors.password ? formik.errors.password : null}
              >
                <Input.Password
                  id="password"
                  name="password"
                  placeholder="Nhập mật khẩu"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Form.Item>

              {/* Xác nhận Mật khẩu */}
              <Form.Item
                label="Xác nhận mật khẩu"
                validateStatus={formik.touched.confirmPassword && formik.errors.confirmPassword ? "error" : ""}
                help={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
              >
                <Input.Password
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Xác nhận mật khẩu"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Form.Item>

              {/* Quên mật khẩu */}
              <div className="flex justify-end mb-4">
                <NavLink to="#" className="text-[1.5rem] text-[#7500CF] font-semibold hover:text-purple-800">
                  Quên mật khẩu
                </NavLink>
              </div>

              {/* Nút Đăng kí */}
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full h-16 text-[1.7rem]">
                  Đăng kí
                </Button>
              </Form.Item>
            </Form>
 
      {/* Link to Sign In */}
      <p className="mt-4 text-gray-600 text-center text-[1.4rem]">
        Bạn đã có tài khoản? <NavLink to="/đăng-nhập" className="text-purple-600 hover:text-purple-800">Đăng kí ngay</NavLink>
      </p>
    </div>

    </div>
 <div className="w-[60%] relative  overflow-hidden">
      {/* Diagonal Purple Background */}
   
      <div className="absolute inset-0 bg-purple-700 clip-diagonal" />
     
   <div className="absolute bottom-[-20%] right-0 opacity-30">
        <img src={bgdienThoai} className="w-[800px]" alt="" />
      </div>
      <div className="relative top-[40%] left-[65%] translate-x-[-50%] translate-y-[-50%] z-10 text-white text-center p-8 flex flex-col items-center">
        <h1 className="text-[6rem] font-bold mb-3">SuperTech</h1>
        <p className="text-[1.8rem] w-[600px]">
          SuperTech là trang website mua sắm trực tuyến với nhiều ưu đãi và khuyến mãi. Hãy đăng nhập để có trải nghiệm tốt nhất và đồng hành cùng chúng tôi.
        </p>
      </div>
      {/* Image of iPhone */}
      <div className="absolute left-[0%] top-[20%] z-10 ">
        <img src={dienThoai} alt="iPhone" className="w-[500px] object-contain opacity-90" />
      </div>
    </div>
    {/* Right Section: Advertisement */}
   
    
  </div>
</div>


  );
}
export default Resigter;
