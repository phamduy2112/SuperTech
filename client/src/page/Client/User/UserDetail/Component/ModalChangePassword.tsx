import { Button, Modal, Steps } from 'antd';
import React, { useState } from 'react';
import '../css/ModalEdit.css';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { changePasswordDetail, verifyPasswordDetail } from '../../../../../redux/user/user.slice';

// Schema validation bằng Yup
const validationSchemaStep1 = Yup.object().shape({
  oldPassword: Yup.string().required('Vui lòng nhập mật khẩu cũ'),
});

const validationSchemaStep2 = Yup.object().shape({
  newPassword: Yup.string()
    .required('Vui lòng nhập mật khẩu mới')
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    .matches(/[A-Z]/, 'Mật khẩu phải có ít nhất một chữ hoa')
    .matches(/[a-z]/, 'Mật khẩu phải có ít nhất một chữ thường')
    .matches(/\d/, 'Mật khẩu phải có ít nhất một số'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Mật khẩu không khớp')
    .required('Vui lòng nhập lại mật khẩu'),
});

function ModalChangePassword() {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    setPage(1);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setPage(1);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setPage(1);
  };

  return (
    <div className="">
      <button onClick={showModal} className="p-[1rem] border text-[1.6rem] border-[#7500CF] text-[#7500CF]">
        Đổi mật khẩu
      </button>

      <Modal title="Đổi mật khẩu" className="modal-edit" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {page === 1 ? (
          <div>
            <Steps current={0} percent={60} labelPlacement="vertical" items={[{ title: 'Mật khẩu' }, { title: 'Đổi mật khẩu' }]} />
            <Formik
              initialValues={{ oldPassword: '' }}
              validationSchema={validationSchemaStep1}
              onSubmit={async (values) => {
                const payload:object={
                  oldPassword:values.oldPassword
                }
                const response = await dispatch(verifyPasswordDetail(payload)).unwrap(); // unwrap helps get the actual result
               
                if(response.message=="Thành công!"){
                  setPage(2)
                }
                
                // setPage(2);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="form-group">
                    <label>Mật khẩu cũ</label>
                    <Field name="oldPassword" type="password" className="ant-input" />
                    {errors.oldPassword && touched.oldPassword ? (
                      <div className="error">{errors.oldPassword}</div>
                    ) : null}
                  </div>
                  <div className="flex gap-[1rem] justify-end button-edit">
                    <Button type="default" onClick={handleCancel}>
                      Hủy
                    </Button>
                    <Button type="primary" htmlType="submit">
                      Tiếp tục
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        ) : (
          <div>
            <Steps current={1} percent={60} labelPlacement="vertical" items={[{ title: 'Mật khẩu' }, { title: 'Đổi mật khẩu' }]} />
            <p className="text-[1.3rem]">
              Cập nhật mật khẩu của bạn thành mật khẩu an toàn hơn. Mật khẩu mới của bạn phải dài ít nhất 8 ký tự, chứa ít nhất một chữ hoa, một chữ thường và một số.
            </p>
            <Formik
              initialValues={{ newPassword: '', confirmNewPassword: '' }}
              validationSchema={validationSchemaStep2}
              onSubmit={async(values) => {

               const payload={
                newPassword:values.newPassword,
                confirmNewPassword:values.confirmNewPassword,
               }
               const response = await dispatch(changePasswordDetail(payload)).unwrap(); // unwrap helps get the actual result
               
               if(response.message=="Thành công!"){
                handleOk();
               }
               
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="form-group">
                    <label>Mật khẩu mới</label>
                    <Field name="newPassword" type="password" className="ant-input" />
                    {errors.newPassword && touched.newPassword ? (
                      <div className="error">{errors.newPassword}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>Nhập lại mật khẩu</label>
                    <Field name="confirmNewPassword" type="password" className="ant-input" />
                    {errors.confirmNewPassword && touched.confirmNewPassword ? (
                      <div className="error">{errors.confirmNewPassword}</div>
                    ) : null}
                  </div>
                  <div className="flex gap-[1rem] justify-end button-edit">
                    <Button type="default" onClick={handleCancel}>
                      Hủy
                    </Button>
                    <Button type="primary" htmlType="submit">
                      Đổi mật khẩu
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default ModalChangePassword;
