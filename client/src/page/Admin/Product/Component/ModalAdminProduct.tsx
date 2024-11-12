import { Button, Checkbox, Modal, Upload, UploadFile } from 'antd';
import ImgCrop from 'antd-img-crop';
import { GetProp, UploadProps } from 'antd/lib';
import React, { useState } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../../../../redux/hooks';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { setProductColors } from '../../../../redux/product/product.slice';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const validationSchema = Yup.object().shape({
  color: Yup.string().required('Màu sắc không được để trống'),
  quantity: Yup.number().min(0, 'Số lượng không hợp lệ').required('Số lượng không được để trống'),
//   capacity: Yup.string().when('showDetails', {
//     is: true,
//     then: Yup.string().required('Dung lượng không được để trống')
//   }),
//   additionalPrice: Yup.number().when('showDetails', {
//     is: true,
//     then: Yup.number().min(0, 'Giá không hợp lệ').required('Giá cộng thêm không được để trống')
//   }),
});

function ModalAdminProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useAppDispatch();

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleSubmit = async (values: any) => {
    const formData = new FormData();

    // Append each file to FormData
    fileList.forEach((file) => {
      if (file.originFileObj) {
        formData.append('images', file.originFileObj);
      }
    });

    // Append form values to FormData
    formData.append('color', values.color);
    formData.append('quantity', values.quantity.toString());
    if (showDetails) {
      formData.append('capacity', values.capacity);
      formData.append('additionalPrice', values.additionalPrice.toString());
    }

    try {
      console.log(fileList);
      console.log(values);
      dispatch(setProductColors({
        color:values.color,
        quantity:values.quantity,
        productStorage:[
            {
                storage:values.capacity,
                storage_price:values.additionalPrice,
                
            }
            
        ]
      }))

    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowDetails(e.target.checked);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Thêm màu sắc
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Formik
          initialValues={{
            color: '',
            quantity: 0,
            capacity: '',
            additionalPrice: 0,
            showDetails: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, setFieldValue }) => (
            <Form>
              <div className="flex gap-[1%]">
                <div className="flex h-auto w-[49%] flex-col gap-4">
                  <label
                    htmlFor="color"
                    className="text-[13px] text-[#81818177] font-medium"
                  >
                    Màu sắc
                  </label>
                  <Field
                    type="text"
                    name="color"
                    className="h-[48px] bg-[#f7f7f7] focus:bg-white focus:shadow-md border border-[#ddd] rounded-lg text-[14px] p-3 outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-[#4A90E2]"
                  />
                  {errors.color && touched.color && <div>{errors.color}</div>}
                </div>

                <div className="flex w-[49%] h-auto flex-col gap-4">
                  <label
                    htmlFor="quantity"
                    className="text-[13px] text-[#81818177] font-medium"
                  >
                    Số Lượng
                  </label>
                  <Field
                    type="number"
                    name="quantity"
                    min={0}
                    className="h-[48px] bg-[#f7f7f7] focus:bg-white focus:shadow-md border border-[#ddd] rounded-lg text-[14px] p-3 outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-[#4A90E2]"
                  />
                  {errors.quantity && touched.quantity && <div>{errors.quantity}</div>}
                </div>
              </div>

              <Checkbox onChange={(e) => {
                handleCheckboxChange(e);
                setFieldValue('showDetails', e.target.checked);
              }}>Hiển thị dung lượng và giá cộng thêm</Checkbox>

              {showDetails && (
                <div className='flex gap-[1%]'>
                  <div className="flex h-auto w-[49%] flex-col gap-4">
                    <label
                      htmlFor="capacity"
                      className="text-[13px] text-[#81818177] font-medium"
                    >
                      Dung lượng
                    </label>
                    <Field
                      type="text"
                      name="capacity"
                      className="h-[48px] bg-[#f7f7f7] focus:bg-white focus:shadow-md border border-[#ddd] rounded-lg text-[14px] p-3 outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-[#4A90E2]"
                    />
                    {errors.capacity && touched.capacity && <div>{errors.capacity}</div>}
                  </div>
                  <div className="flex w-[49%] h-auto flex-col gap-4">
                    <label
                      htmlFor="additionalPrice"
                      className="text-[13px] text-[#81818177] font-medium"
                    >
                      Giá cộng thêm
                    </label>
                    <Field
                      type="number"
                      name="additionalPrice"
                      min={0}
                      className="h-[48px] bg-[#f7f7f7] focus:bg-white focus:shadow-md border border-[#ddd] rounded-lg text-[14px] p-3 outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-[#4A90E2]"
                    />
                    {errors.additionalPrice && touched.additionalPrice && <div>{errors.additionalPrice}</div>}
                  </div>
                </div>
              )}

              <div className="bg-white shadow-lg rounded-xl p-[12px] gap-8 flex flex-col">
                <span className="text-[20px] font-semibold">Tải ảnh</span>
                <div className="text-[14px] font-medium text-[#9696968e]">
                  <span>Chọn ảnh sản phẩm hoặc chỉ cần kéo và thả tối đa 6 ảnh tại đây.</span>
                </div>
                <div className="flex-1">
                  <ImgCrop rotationSlider>
                    <Upload
                      listType="picture-card"
                      fileList={fileList}
                      onChange={onChange}
                      onPreview={onPreview}
                      beforeUpload={() => false}
                    >
                      {fileList.length < 7 && '+ Upload'}
                    </Upload>
                  </ImgCrop>
                </div>
                <div className="text-[14px] text-[#9696968e] font-medium">
                  <span>Định dạng hình ảnh: .jpg, .jpeg, .png, kích thước ưa thích: 1:1, kích thước tệp bị giới hạn ở mức tối đa 500kb.</span>
                </div>
              </div>

              <Button type="primary" htmlType="submit">Lưu sản phẩm</Button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default ModalAdminProduct;