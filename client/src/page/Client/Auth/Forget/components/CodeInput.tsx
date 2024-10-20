import { Button, Form, Input } from 'antd';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import CountdownTimer from './CountDown';

const CodeInput: React.FC = () => {
    const navigate = useNavigate();
  const [isCodeSent, setIsCodeSent] = useState(false); // Trạng thái để hiển thị mã xác thực
  const [verificationCode, setVerificationCode] = useState<string[]>(Array(6).fill("")); // Mảng để lưu mã xác thực

  const formik = useFormik({
    initialValues: {      verificationCode: "", // Trường cho mã xác thực
    },
    validationSchema: Yup.object({
      verificationCode: isCodeSent ? Yup.string().required("Mã xác thực là bắt buộc") : Yup.string(),
    }),
    onSubmit: async (values) => {

    }
  });
  const handleChange = (index: number, value: string) => {
    const newCode = [...verificationCode];
    newCode[index] = value.replace(/[^0-9a-zA-Z]/g, '').slice(0, 1); // Chỉ cho phép 1 ký tự
    setVerificationCode(newCode);
    if (value.length === 1 && index < 5) {
        // Tự động chuyển đến ô tiếp theo nếu có ký tự
        const nextInput = document.getElementById(`code-input-${index + 1}`);
        nextInput?.focus();
    }
};
  return (
    <Form layout="vertical" className="sign-edit" onFinish={formik.handleSubmit}>
        

        <>
                  <CountdownTimer />
                  <Form.Item 
                    label="Mã xác thực"
                    validateStatus={formik.touched.verificationCode && formik.errors.verificationCode ? "error" : ""}
                    help={formik.touched.verificationCode && formik.errors.verificationCode ? formik.errors.verificationCode : null}
                    className="mb-[1rem]"
                  >
                {verificationCode.map((digit, index) => (
                                <Input
                                    key={index}
                                    id={`code-input-${index}`}
                                    name={`code-${index}`}
                                    placeholder=""
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    className="py-[1rem] text-[1.5rem] text-center w-[60px] h-[60px]"
                                    maxLength={1}
                                />
                            ))}
                  </Form.Item>
                </>
              <div className="button-edit">
                <Button type="primary" htmlType="submit" className="w-[100%] h-[4rem] text-[1.7rem]">
                    Gửi mã xác nhận
                </Button>
              </div>
            </Form>
  );
};

export default CodeInput;
