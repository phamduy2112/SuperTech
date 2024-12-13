import { message, Select, Upload, UploadFile, Button, Modal, Switch, GetProp } from 'antd';
import React, { useState } from 'react';
import { TbPlaylistAdd } from 'react-icons/tb';
import { UploadProps } from 'antd/lib';
import ImgCrop from 'antd-img-crop';
import { Formik, Form, Field } from 'formik';
import { useAppDispatch } from '../../../../redux/hooks';
import { createCategoryThunk } from '../../../../redux/catelogry/catelogry.slice';
import toast from 'react-hot-toast';
import { AiOutlineNumber } from 'react-icons/ai';
import { updateQualityProductAdminThunk } from '../../../../redux/product/product.slice';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

function AdminModalUpdateQualityProduct(props) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const DataCategory = [
    { label: 'Điện thoại', value: 1 },
    { label: 'Laptop', value: 2 },
    // Add more categories as needed
  ];

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    const updatedFileList = newFileList.map(file => {
      if (file.originFileObj) {
        file.url = URL.createObjectURL(file.originFileObj);
      }
      return file;
    });
    setFileList(updatedFileList);
  };

//   updateQualityColors
const dispatch=useAppDispatch()
console.log(props.product.product_colors[0].color_id);

  return (
    <>
      <AiOutlineNumber onClick={showModal} 
              style={{ marginRight: "5px", color: "blue", fontSize: "18px" }}
            />
          
      
      <Modal
        title="Cập nhận số lượng"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Formik
          initialValues={{
            quality_product:0,
          
          }}
          onSubmit={(values) => {
            const data={
            ...values,
              color_id:props.product.product_colors[0].color_id,
            }
            // setIsModalOpen(false);
           
            dispatch(updateQualityProductAdminThunk(data))
            toast.success("Thêm loại thành công")
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="flex gap-4">
                <div className="flex w-full flex-col gap-4">
                  <label
                    htmlFor="quality_product"
                    className="text-[13px] text-[#81818177] font-medium"
                  >
    Số lượng
                      </label>
                  <Field
                    type="number"
                    name="quality_product"
                    className="h-[48px] bg-[#f7f7f7] border border-[#ddd] rounded-lg text-[14px] p-3 outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-[#4A90E2]"
                  />
                </div>
              </div>


              <Button type="primary" htmlType="submit" className="mt-4">Cập nhận</Button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default AdminModalUpdateQualityProduct;
