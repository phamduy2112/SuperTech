import ImgCrop from 'antd-img-crop';
import React, { useRef, useState } from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import { message, Select, Upload, UploadFile, Button, Modal, Switch } from 'antd';
import { UploadProps } from 'antd/lib';
import { Formik, Form, Field } from 'formik';
import { useAppDispatch } from '../../../../redux/hooks';
import { putCategoryThunk } from '../../../../redux/catelogry/catelogry.slice';
import toast from 'react-hot-toast';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

function AdminEditCatelogry(props: any) {

  const uploadRef = useRef<HTMLDivElement>(null);

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    const imgWindow = window.open(src);
    imgWindow?.document.write(`<img src="${src}" alt="Preview" />`);
  };

  const DataCategory = [
    { label: 'Điện thoại', value: 1 },
    { label: 'Laptop', value: 2 },
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
            values,
            id:props.category.category_id,
            category_date_task
            }
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

              <div className="bg-white shadow-lg rounded-xl p-[12px] gap-8 flex flex-col mt-4">
                <span className="text-[20px] font-semibold">Tải ảnh</span>
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                  beforeUpload={() => false}
                >
                  {fileList.length < 6 && '+ Upload'}
                </Upload>
                <div className="text-[14px] text-[#9696968e] font-medium">
                  Định dạng hình ảnh: .jpg, .jpeg, .png, kích thước tối đa 500kb.
                </div>
              </div>

              <div className="mt-4">
        <label htmlFor="category_task" className="text-[14px] font-medium text-[#4A4A4A] tracking-wide">Hoạt động</label>
        <Switch
          checked={values.category_task} // This is now a boolean value (true or false)
          onChange={(checked) => setFieldValue("category_task", checked)} // Directly update with the boolean value
        />
        {/* {props?.category?.category_task} */}
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
