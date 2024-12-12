import { Input, Button, Steps, Modal } from "antd";
import React, { useEffect, useState } from 'react';
import { TbPlaylistAdd } from 'react-icons/tb';
import ImgCrop from 'antd-img-crop';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../../../../redux/hooks';
import { verifyPassword } from "../../../../../service/user/user.service";
import CodeInputUser from "./CodeInputUser";

function ModalChangePassword() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(3); // Quản lý các bước trong quy trình
  const [resetTimer, setResetTimer] = useState(false); // State for resetting the timer
  const dispatch = useAppDispatch();

  // Handle submit for the old password step
  const handleSubmitOldPassword = async (values: { oldPassword: string }) => {
    try {
      const response = await verifyPassword(values);
      if (response.data.message === "Thành công!") {
        setPage(2);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  // Handle modal opening and reset the timer and email sending
  const showModal = () => {
    setIsModalOpen(true);
    setResetTimer(true); // Trigger the reset for the timer

    // Simulate sending an email (replace with actual logic if needed)
    console.log('Sending email...'); // This should call the actual email sending function
  };

  // Handle modal close
  const handleCancel = () => {
    setIsModalOpen(false);
    setResetTimer(true); // Trigger timer reset when modal closes
  };

  // Handle page update during the process (steps navigation)
  const updateNumber = (newNumber: number) => {
    setPage(newNumber);
  };

  // Reset the timer once when `resetTimer` state changes
  useEffect(() => {
    if (resetTimer) {
      setResetTimer(false); // Reset the timer only once
    }
  }, [resetTimer]);

  return (
    <>
      <button onClick={showModal} className="p-[1rem] border text-[1.6rem] border-[#7500CF] text-[#7500CF]">
        Đổi mật khẩu
      </button>
      
      <Modal
        title="Danh mục sản phẩm mới"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {page === 1 && (
          <div>
            <Steps
              current={page - 1}
              labelPlacement="vertical"
              items={[
                { title: "Mật khẩu cũ" },
                { title: "Mật khẩu mới" },
              ]}
            />
            <Formik
              initialValues={{ oldPassword: "" }}
              onSubmit={async (values) => {
                const data = { ...values };
                await handleSubmitOldPassword(data);
              }}
            >
              <Form>
                <div className="form-group">
                  <label>Mật khẩu cũ:</label>
                  <Field name="oldPassword" as={Input.Password} placeholder="Nhập mật khẩu cũ" />
                  <ErrorMessage name="oldPassword" component="div" className="text-red-500" />
                </div>
                <div className="flex gap-4">
                  <Button type="primary" htmlType="submit">Tiếp tục</Button>
                  <Button type="default" onClick={() => setPage(3)}>Quên mật khẩu</Button>
                </div>
              </Form>
            </Formik>   
          </div>
        )}

        {page === 2 && (
          <div>
            <Steps
              current={page - 1}
              labelPlacement="vertical"
              items={[
                { title: "Mật khẩu cũ" },
                { title: "Mật khẩu mới" },
              ]}
            />
            <Formik
              initialValues={{ newPassword: "", confirmNewPassword: "" }}
              onSubmit={async (values) => {
                const data = { ...values };
                console.log(data);
              }}
            >
              <Form>
                <div className="form-group">
                  <label>Mật khẩu mới:</label>
                  <Field name="newPassword" as={Input.Password} placeholder="Nhập mật khẩu mới" />
                  <ErrorMessage name="newPassword" component="div" className="text-red-500" />
                </div>
                <div className="form-group">
                  <label>Nhập lại mật khẩu:</label>
                  <Field name="confirmNewPassword" as={Input.Password} placeholder="Nhập lại mật khẩu" />
                  <ErrorMessage name="confirmNewPassword" component="div" className="text-red-500" />
                </div>
                <Button type="primary" htmlType="submit">Đổi mật khẩu</Button>
              </Form>
            </Formik>
          </div>
        )}

        {page === 3 && (
          <div>
            <Steps
              current={0}
              labelPlacement="vertical"
              items={[
                { title: "Nhập mã otp" },
                { title: "Mật khẩu mới" },
              ]}
            />
            <CodeInputUser updateNumber={updateNumber} />
          </div>
        )}

        {page === 4 && (
          <div>
            <Steps
              current={1}
              labelPlacement="vertical"
              items={[
                { title: "Nhập mã otp" },
                { title: "Mật khẩu mới" },
              ]}
            />
            <Formik
              initialValues={{ email: "" }}
              onSubmit={async (values) => {
                const data = { ...values };
                console.log(data);
              }}
            >
              <Form>
                <div className="form-group">
                  <label>Email:</label>
                  <Field name="email" as={Input} placeholder="Nhập email" />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
                <Button type="primary" htmlType="submit">Gửi OTP</Button>
              </Form>
            </Formik>
          </div>
        )}
      </Modal>
    </>
  );
}

export default ModalChangePassword;
