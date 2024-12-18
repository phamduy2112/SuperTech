import { message, Select, Upload, UploadFile, Button, Modal, Switch, GetProp } from 'antd';
import React, { useState } from 'react';
import { TbPlaylistAdd } from 'react-icons/tb';
import { UploadProps } from 'antd/lib';
import ImgCrop from 'antd-img-crop';
import { Formik, Form, Field } from 'formik';
import { useAppDispatch } from '../../../../redux/hooks';
import { createCategoryThunk } from '../../../../redux/catelogry/catelogry.slice';
import toast from 'react-hot-toast';


function AdminAddCategory() {
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

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);


const dispatch=useAppDispatch()
  return (
    <>
      <Button onClick={showModal} className="p-10" type="primary">
        <TbPlaylistAdd className="text-[18px]" /> Danh Mục Sản Phẩm Mới
      </Button>
      
      <Modal
        title="Danh mục sản phẩm mới"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Formik
          initialValues={{
            category_name: '',
            category_dad: 0,
            category_task: 1, // Default value for Switch, set as 1 (true)
          }}
          onSubmit={(values) => {
            const  category_date_task=new Date()
            const data={
              ...values,
              category_date_task:category_date_task
            }
            setIsModalOpen(false);
            dispatch(createCategoryThunk(data))
            toast.success("Thêm loại thành công")
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="flex gap-4">
                <div className="flex w-full flex-col gap-4">
                  <label
                    htmlFor="category_name"
                    className="text-[13px] text-[#81818177] font-medium"
                  >
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

                    defaultValue={"Mời bạn nhập"}
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

export default AdminAddCategory;
