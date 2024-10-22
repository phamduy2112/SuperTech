import { Button, Form, Input } from 'antd';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import CountdownTimer from './CountDown';
import { checkCode } from '../../../../../service/user/user.service';

const CodeInput: React.FC = () => {
    const navigate = useNavigate();
    const [isCodeSent, setIsCodeSent] = useState(false); // Trạng thái để hiển thị mã xác thực
    const [code, setcode] = useState<string[]>(Array(6).fill("")); // Mảng để lưu mã xác thực

    const formik = useFormik({
        initialValues: {
            code: "", // Trường cho mã xác thực
        },
        validationSchema: Yup.object({
            code: isCodeSent ? Yup.string().required("Mã xác thực là bắt buộc") : Yup.string(),
        }),
        onSubmit: async (values) => {
            console.log(values); // Đảm bảo rằng mã xác thực sẽ được in ra
            const response=await checkCode(code)
            if(response.data.message=="Code hợp lệ"){
              setNumber(3)
            }
        }
    });

    const handleChange = (index: number, value: string) => {
        const newCode = [...code];
        newCode[index] = value.replace(/[^0-9a-zA-Z]/g, '').slice(0, 1); // Chỉ cho phép 1 ký tự
        setcode(newCode);

        // Update the Formik value for code
        formik.setFieldValue('code', newCode.join(""));

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
                    validateStatus={formik.touched.code && formik.errors.code ? "error" : ""}
                    help={formik.touched.code && formik.errors.code ? formik.errors.code : null}
                    className="mb-[1rem]"
                >
                    {code.map((digit, index) => (
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
