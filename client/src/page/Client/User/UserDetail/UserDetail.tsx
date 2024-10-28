import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Breadcrumb, Form as AntForm, Input, Radio } from "antd";
import ModalChangePassword from "./Component/ModalChangePassword";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  getUserThunk,
  updateUserDetailThunk,
} from "../../../../redux/user/user.slice";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ImageUploader from "./Component/ChangeImage";

// Yup schema validation
const validationSchema = Yup.object().shape({
  user_name: Yup.string().required("Vui lòng nhập họ và tên"),
  user_phone: Yup.string().required("Vui lòng nhập số điện thoại"),
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  user_address: Yup.string().required("Vui lòng nhập địa chỉ"),
  gender: Yup.string().required("Vui lòng chọn giới tính"),
  date: Yup.string().required("Vui lòng nhập ngày sinh"),
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
      console.log("File details:", {
        name: file.name,
        size: file.size,
        type: file.type,
      });
    }
  };

  const handleClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    if (fileInput) fileInput.click();
  };
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);
  console.log(imageSrc);

  const handleSubmit = (values: object) => {
    console.log("Form values:", values);
    dispatch(getUserThunk());
  };

  return (
    <div className="pt-4 px-4 md:px-8">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h4 className="text-2xl md:text-3xl font-semibold">Hồ sơ của tôi</h4>
            <p className="text-lg md:text-xl pt-2">Quản lí hồ sơ để bảo mật tài khoản</p>
          </div>
          <button className="text-lg md:text-xl flex gap-2 bg-[#7500CF] h-14 justify-center items-center px-6 text-white mt-4 md:mt-0">
            <FaEdit />
            Sửa
          </button>
        </div>

        <div className="border-t-[#7500CF] border-t mt-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:border-r-[#7500CF] md:border-r flex flex-col justify-between p-4 md:pr-12">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <img
                    className="w-full h-auto"
                    src={imageSrc}
                    alt="User Avatar"
                  />
                </div>
                <div
                  className="mt-2 cursor-pointer text-[#7500CF] text-lg flex justify-center items-center py-2 px-4 border border-[#7500CF] rounded-full"
                  onClick={handleClick}
                >
                  Chỉnh sửa
                </div>
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
              <div className="text-lg text-center md:text-left mt-4">
                Tham gia vào ngày:
                <p className="mt-1 font-semibold">10:43 10/03/2024</p>
              </div>
            </div>

            <div className="p-4 md:p-8 w-full">
              <Formik
                initialValues={{
                  user_name: user?.user_name || "",
                  user_phone: user?.user_phone || "Chưa cập nhận",
                  email: user?.user_email || "",
                  user_address: user?.user_address || "Chưa cập nhận",
                  gender: user?.gender || "",
                  date: user?.date || "Chưa cập nhận",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form className="formEdit">
                    <div className="w-full">
                      <AntForm.Item label="Họ và tên">
                        <Field name="user_name" as={Input} />
                        {errors.user_name && touched.user_name && (
                          <div className="text-red-600 text-sm">{errors.user_name}</div>
                        )}
                      </AntForm.Item>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <AntForm.Item className="w-full md:w-1/2" label="Số điện thoại">
                        <Field name="user_phone" as={Input} />
                        {errors.user_phone && touched.user_phone && (
                          <div className="text-red-600 text-sm">{errors.user_phone}</div>
                        )}
                      </AntForm.Item>
                      <AntForm.Item className="w-full md:w-1/2" label="Email">
                        <Field name="email" as={Input} />
                        {errors.email && touched.email && (
                          <div className="text-red-600 text-sm">{errors.email}</div>
                        )}
                      </AntForm.Item>
                    </div>
                    <AntForm.Item label="Địa chỉ">
                      <Field name="user_address" as={Input} />
                      {errors.user_address && touched.user_address && (
                        <div className="text-red-600 text-sm">{errors.user_address}</div>
                      )}
                    </AntForm.Item>
                    <AntForm.Item label="Giới tính">
                      <Field name="gender" as={Radio.Group}>
                        <Radio value="1">Nam</Radio>
                        <Radio value="2">Nữ</Radio>
                        <Radio value="3">Khác</Radio>
                      </Field>
                      {errors.gender && touched.gender && (
                        <div className="text-red-600 text-sm">{errors.gender}</div>
                      )}
                    </AntForm.Item>
                    <AntForm.Item label="Ngày sinh">
                      <Field name="date" as={Input} />
                      {errors.date && touched.date && (
                        <div className="text-red-600 text-sm">{errors.date}</div>
                      )}
                    </AntForm.Item>
                    <div className="flex justify-end gap-4 mt-6">
                      <ModalChangePassword />
                      <button type="submit" className="px-4 py-2 border border-[#7500CF] text-[#7500CF] text-lg rounded">
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
