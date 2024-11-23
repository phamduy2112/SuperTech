import { message, Select, Upload, UploadFile, Button, Modal, Switch, GetProp } from 'antd';
import React, { useState } from 'react';
import { TbPlaylistAdd } from 'react-icons/tb';
import { UploadProps } from 'antd/lib';
import ImgCrop from 'antd-img-crop';
import { Formik, Form, Field } from 'formik';
import { useAppDispatch } from '../../../../redux/hooks';
import { createCategoryThunk } from '../../../../redux/catelogry/catelogry.slice';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

function AdminAddCategory() {
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
            console.log(values); // 'category_task' will be 1 for true and 0 for false
            setIsModalOpen(false);
            dispatch(createCategoryThunk(values))
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

              <div className="bg-white shadow-lg rounded-xl p-[12px] gap-8 flex flex-col mt-4">
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
                      {fileList.length < 6 && '+ Upload'}
                    </Upload>
                  </ImgCrop>
                </div>
                <div className="text-[14px] text-[#9696968e] font-medium">
                  <span>Định dạng hình ảnh: .jpg, .jpeg, .png, kích thước ưa thích: 1:1, kích thước tệp bị giới hạn ở mức tối đa 500kb.</span>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="category_task" className="text-[14px] font-medium text-[#4A4A4A] tracking-wide">Hoạt động</label>
                <Switch
                  checked={values.category_task === 1}
                  onChange={(checked) => setFieldValue("category_task", checked ? 1 : 0)}
                />
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
