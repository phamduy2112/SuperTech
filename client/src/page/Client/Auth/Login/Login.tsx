import React, { useEffect } from "react";
import dienThoai from '../asset/dienthoaisign.png'
import bgdienThoai from '../asset/dienthoai.png'
import { Button, Form, Input } from "antd";
import { FaArrowLeft, FaFacebookF, FaGoogle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import '../css/formSign.css'
import Swal from 'sweetalert2'
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../../../service/auth/auth.service";
import { saveLocalStorage } from "../../../../utils";
import FacebookLogin from 'react-facebook-login';

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {

      email: "",
      password: "",

    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
      password: Yup.string()
        .min(6, "Mật khẩu phải có ít nhất 6 kí tự")
        .required("Mật khẩu là bắt buộc"),

    }),
    onSubmit: async (values) => {
      console.log("Form data", values);


      const res = await login(values);

      if (res.data.message === "Thành công!") {
        Swal.fire({
          position: "top-end",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500, // Thời gian hiển thị
          timerProgressBar: true, // Kích hoạt thanh tiến trình
        });
        // navigate("/")
        const token = res.data.content.token;
        saveLocalStorage("token", token)

        console.log(res);

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


    },
  });
  return (
    <div className="">
      <div className="min-h-screen flex flex-col lg:flex-row items-center bg-gray-100">
        {/* Left Section: Registration Form */}

        <div className="w-full lg:w-[60%] relative overflow-hidden">
          {/* Diagonal Purple Background */}

          <div className="absolute inset-0 bg-purple-700 clip-diagonal-left" />
          <div className="bg-white shadow-lg w-[4rem] h-[4rem] rounded-full absolute top-[2rem] left-[2rem]">
            <NavLink to={"/"}>
              <FaArrowLeft className="text-[2rem] text-[#7500CF] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </NavLink>

          </div>
          <div className="absolute bottom-[-20%] left-0 opacity-30">
            <img src={bgdienThoai} className="w-[300px] sm:w-[400px] lg:w-[600px] xl:w-[800px]" alt="bg-dien-thoai" />
          </div>
          <div className="relative top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center p-8 flex flex-col items-center">
            <h1 className="text-[3rem] sm:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-bold mb-3">SuperTech</h1>
            <p className="text-[1rem] sm:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] w-full sm:w-[400px] lg:w-[500px] xl:w-[600px]">
              SuperTech là trang website mua sắm trực tuyến với nhiều ưu đãi và khuyến mãi. Hãy đăng nhập để có trải nghiệm tốt nhất và đồng hành cùng chúng tôi.
            </p>
          </div>
          {/* Image of iPhone */}
          <div className="absolute right-[0%] top-[20%] z-10">
            <img src={dienThoai} alt="dien-thoai" className="w-[250px] sm:w-[350px] lg:w-[450px] xl:w-[500px] object-contain opacity-90" />
          </div>
        </div>
        {/* Right Section: Advertisement */}

        <div className="w-full lg:w-[40%] flex justify-center lg:m-auto">
          <div className="w-full sm:w-[80%] lg:w-[70%] p-8 flex flex-col justify-center z-10">
            <h2 className="text-[2.5rem] sm:text-[3rem] font-bold mb-4 text-center">Đăng nhập</h2>
            <p className="mb-4 text-gray-600 text-center text-[1.2rem] sm:text-[1.5rem]">Bạn có thể đăng nhập</p>
            {/* Social Buttons */}
            <div className="flex gap-4 mb-6 w-full sm:w-[70%] m-auto">
              {/* <button className="w-1/2 py-5  border text-[1.6rem] border-[#7500CF] text-[#7500CF] flex items-center justify-center rounded-lg ">
    <FaFacebookF className="mr-[.5rem]"/>
    asd
        </button> */}
              {/* <FacebookLogin /> */}
              {/* <FacebookLogin
    appId="476126624973243"
   
    callback={(resp:any)=>{
      let newUser={
        ...resp,
        face_app_id:resp.id
      }
      console.log(newUser);
      
    
    }} /> */}
              <button className="w-1/2 py-5 border text-[1.4rem] sm:text-[1.6rem] border-[#7500CF] flex items-center justify-center rounded-lg text-[#7500CF]">
                <FaGoogle className="mr-[.5rem]" />
                Google
              </button>
            </div>
            {/* Form */}
            <Form
              layout="vertical"
              className="sign-edit"
              onFinish={formik.handleSubmit}

            // initialValues={{
            //   // layout: formLayout,
            // }}
            // onValuesChange={onFormLayoutChange}
            // style={{
            //   maxWidth: formLayout === 'inline' ? 'none' : 600,
            // }}
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
                  className="py-[2.1rem] text-[1.3rem] sm:text-[1.5rem]" />
              </Form.Item>
              <Form.Item
                label="Mật khẩu"
                validateStatus={formik.touched.password && formik.errors.password ? "error" : ""}
                help={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                className="mb-[.5rem]">
                <Input.Password
                  id="password"
                  name="password"
                  placeholder="Nhập mật khẩu"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />      </Form.Item>
              <div className="flex justify-end">
                <NavLink to="/quen-mat-khau" className="text-[1.2rem] sm:text-[1.5rem] text-[#7500CF] font-semibold hover:text-purple-800">Quên mật khẩu</NavLink>
              </div>
              <div className="button-edit">
                <Button type="primary" htmlType="submit" className="w-[100%] h-[4rem] text-[1.5rem] sm:text-[1.7rem]">Đăng nhập</Button>
              </div>
            </Form>

            {/* Link to Sign In */}
            <p className="mt-4 text-gray-600 text-center text-[1.2rem] sm:text-[1.4rem]">
              Bạn chưa có tài khoản? <NavLink to="/đăng-kí" className="text-purple-600 hover:text-purple-800">Đăng kí ngay</NavLink>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
