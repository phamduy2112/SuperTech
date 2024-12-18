import ImgCrop from 'antd-img-crop';
import React, { useRef, useState } from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import { message, Select, Upload, UploadFile, Button, Modal, Switch } from 'antd';
import { UploadProps } from 'antd/lib';
import { Formik, Form, Field } from 'formik';
import { useAppDispatch } from '../../../../redux/hooks';
import { putCategoryThunk } from '../../../../redux/catelogry/catelogry.slice';
import toast from 'react-hot-toast';


function AdminEditCatelogry(props: any) {


  const [isModalOpen, setIsModalOpen] = useState(false);


  const DataCategory = [
    { label: 'Điện thoại', value: 1 },
    { label: 'Laptop', value: 2 },
    { label: 'Sạc dự phòng ', value: 3 },
    { label: 'Sạc cáp hub cáp chuyển đổi', value: 4 },
    { label: 'Ốp lưng', value: 5 },
    { label: 'Tai nghe dây bluetooth', value: 6 },
    
    // Add more categories as needed
  ];
  const ShowModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
const dispatch=useAppDispatch();
  return (
    <>
      <BiSolidEdit
        className='cursor-pointer text-[#9000ff67] transition-all duration-700 hover:text-[#9000ffcb]'
        onClick={ShowModal}
      />

      <Modal
        title="Sửa Danh mục sản phẩm mới"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Formik
          enableReinitialize
          initialValues={{
            category_name: props?.category?.category_name || '', // If undefined, default to an empty string
            category_dad: props?.category?.category_dad || 0, // Set default value if necessary
            category_task: props?.category?.category_task || 1,
            
          }}
          onSubmit={(values) => {
            const  category_date_task=new Date()
            setIsModalOpen(false);
           const data={
            ...values,
            id:props.category.category_id,
            category_date_task:category_date_task
          }
          console.log(data);
          
           dispatch(putCategoryThunk(
            data
           ))
           toast.success("Sửa loại thành công")

          }}

        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="flex gap-4">
                <div className="flex w-full flex-col gap-4">
                  <label htmlFor="category_name" className="text-[13px] text-[#81818177] font-medium">
                    Tên Loại
                  </label>
                  <Field
                    type="text"
                    name="category_name"
                    className="h-[48px] bg-[#f7f7f7] border border-[#ddd] rounded-lg text-[14px] p-3 outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-[#4A90E2]"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="flex w-full flex-col gap-4">
                  <label htmlFor="category_dad" className="text-[14px] font-medium text-[#4A4A4A] tracking-wide">Loại sản phẩm</label>
                  <Select
                    value={values.category_dad} // Set value from Formik
                    onChange={(value) => setFieldValue("category_dad", value)}
                    options={DataCategory}
                    className="h-[48px] bg-[#81818113] rounded-lg text-[13px] outline-none"
                  />
                </div>
              </div>

       


              <Button type="primary" htmlType="submit" className="mt-4">Lưu sản phẩm</Button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default AdminEditCatelogry;
