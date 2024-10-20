import { Button, Form, Input } from 'antd';
import { Field, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import CountdownTimer from './CountDown';

const ChangePassword: React.FC = () => {
    const formik = useFormik({
        initialValues: {
      
          newPassword: "",
          confirmNewPassword: "",
      
        },
        validationSchema: Yup.object({
            newPassword: Yup.string()
            .required('Vui lòng nhập mật khẩu mới')
            .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
            .matches(/[A-Z]/, 'Mật khẩu phải có ít nhất một chữ hoa')
            .matches(/[a-z]/, 'Mật khẩu phải có ít nhất một chữ thường')
            .matches(/\d/, 'Mật khẩu phải có ít nhất một số'),
          confirmNewPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Mật khẩu không khớp')
            .required('Vui lòng nhập lại mật khẩu'),
       
        }),
        onSubmit:async (values) => {
          console.log("Form data", values);
         
        
 
  
        
    
    
        },
      });
  return (
    <Form
    layout="vertical"
  className="sign-edit"
  onFinish={formik.handleSubmit}


  >
   
   <Form.Item 
     label="Mật khẩu"
     validateStatus={formik.touched.newPassword && formik.errors.newPassword ? "error" : ""}
     help={formik.touched.newPassword && formik.errors.newPassword ? formik.errors.newPassword : null}
    className="mb-[.5rem]">
              <Input.Password
                id="newPassword"
                name="newPassword"
                placeholder="Nhập mật khẩu"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />      </Form.Item>
   
    <Form.Item 
     label="Mật khẩu"
     validateStatus={formik.touched.confirmNewPassword && formik.errors.confirmNewPassword ? "error" : ""}
     help={formik.touched.confirmNewPassword && formik.errors.confirmNewPassword ? formik.errors.confirmNewPassword : null}
    className="mb-[.5rem]">
              <Input.Password
                id="confirmNewPassword"
                name="confirmNewPassword"
                placeholder="Nhập mật khẩu"
                value={formik.values.confirmNewPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />      </Form.Item>
   
    <div className="button-edit">
      <Button type="primary" htmlType="submit" className="w-[100%] h-[4rem] text-[1.7rem]">Đăng nhập</Button>
    </div>
  </Form>
  );
};

export default ChangePassword;
