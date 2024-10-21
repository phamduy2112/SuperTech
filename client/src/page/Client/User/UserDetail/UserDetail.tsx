import React, { useEffect, useState } from "react";
import { Container } from "../../../../components/Style/Container";
import "../../../../components/Style/formEdit.css";
import { FaEdit } from "react-icons/fa";
import { Breadcrumb, Form as AntForm, Input, Radio } from 'antd';
import ModalChangePassword from "./Component/ModalChangePassword";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getUserThunk, updateUserDetailThunk } from "../../../../redux/user/user.slice";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Yup schema validation
const validationSchema = Yup.object().shape({
  user_name: Yup.string().required('Vui lòng nhập họ và tên'),
  user_phone: Yup.string().required('Vui lòng nhập số điện thoại'),
  email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  user_address: Yup.string().required('Vui lòng nhập địa chỉ'),
  gender: Yup.string().required('Vui lòng chọn giới tính'),
  date: Yup.string().required('Vui lòng nhập ngày sinh'),
});

function UserDetail() {
  const [imageSrc, setImageSrc] = useState(
    "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/370806166_3341899006026926_5652140347426452061_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4i6dDZbqfbYQ7kNvgGZHvZ5&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AmExBHwWxLWKVX32vfdTf1X&oh=00_AYCVaez-jcz7zKirXcISZeZZZS4kx8ScIcQqvQrq8pCpPg&oe=671B818F"
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  const handleClick = () => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) fileInput.click();
  };
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserThunk());
   
  }, [dispatch]);

  const handleSubmit = (values:object) => {
    console.log('Form values:', values);
    dispatch(updateUserDetailThunk(values))
    dispatch(getUserThunk())
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
          src={imageSrc}
          alt="Profile"
        />
      </div>
      <div className="mt-[.5rem] cursor-pointer">
        <div
          className="flex text-[1.8rem] py-[.6rem] border border-[#7500CF] w-[10rem] items-center justify-center rounded-[4rem]"
          onClick={handleClick}
        >
          Chỉnh sửa
        </div>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
              <div className="text-[1.7rem]">
                Tham gia vào ngày:
                <p className="mt-[.3rem] font-semibold">10:43 10/03/2024</p>
              </div>
            </div>

            <div className="p-[2rem] w-[100%] ">
              <Formik
                initialValues={{
                  user_name: user?.user_name || '',
                  user_phone: user?.user_phone || 'Chưa cập nhận',
                  email: user?.user_email || '',
                  user_address: user?.user_user_address || 'Chưa cập nhận',
                  gender: user?.gender || '',
                  date: user?.date || 'Chưa cập nhận',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form className="formEdit w-[100%]">
                    <div className="w-[100%]">
                      <AntForm.Item label="Họ và tên">
                        <Field name="user_name" as={Input} />
                        {errors.user_name && touched.user_name ? (
                          <div className="error">{errors.user_name}</div>
                        ) : null}
                      </AntForm.Item>
                    </div>
                    <div className="flex w-[100%] justify-between">
                      <AntForm.Item className="w-[49%]" label="Số điện thoại">
                        <Field name="user_phone" as={Input} />
                        {errors.user_phone && touched.user_phone ? (
                          <div className="error">{errors.user_phone}</div>
                        ) : null}
                      </AntForm.Item>

                      <AntForm.Item className="w-[49%]" label="Email">
                        <Field name="email" as={Input} />
                        {errors.email && touched.email ? (
                          <div className="error">{errors.email}</div>
                        ) : null}
                      </AntForm.Item>
                    </div>

                    <AntForm.Item label="Địa chỉ">
                      <Field name="user_address" as={Input} />
                      {errors.user_address && touched.user_address ? (
                        <div className="error">{errors.user_address}</div>
                      ) : null}
                    </AntForm.Item>

                    <AntForm.Item label="Giới tính">
                      <Field name="gender" as={Radio.Group}>
                        <Radio value="1">Nam</Radio>
                        <Radio value="2">Nữ</Radio>
                        <Radio value="3">Khác</Radio>
                      </Field>
                      {errors.gender && touched.gender ? (
                        <div className="error">{errors.gender}</div>
                      ) : null}
                    </AntForm.Item>

                    <AntForm.Item label="Ngày sinh">
                      <Field name="date" as={Input} />
                      {errors.date && touched.date ? (
                        <div className="error">{errors.date}</div>
                      ) : null}
                    </AntForm.Item>

                    <div className="flex justify-end gap-[1rem] mt-[1.5rem]">
                      <ModalChangePassword />
                      <button type="submit" className="p-[1rem] border text-[1.6rem] border-[#7500CF] text-[#7500CF]">
                        Cập nhật
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
