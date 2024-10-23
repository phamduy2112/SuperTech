import { GetProp, message, Select, Upload, UploadFile, Button, Modal, } from 'antd';
import React, { useRef, useState } from 'react'
import { TbPlaylistAdd } from 'react-icons/tb';
import { UploadProps } from 'antd/lib';
import ImgCrop from 'antd-img-crop';
import { IoMdCloudUpload } from 'react-icons/io';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

function AdminAddCatelogry() {
  const uploadRef = useRef<HTMLDivElement>(null); // Sử dụng HTMLDivElement

  const [fileList, setFileList] = useState<UploadFile[]>([
  ]);

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const DataCategory = [
    { label: 'Danh Mục Thường', value: 'Danh Mục Thường' },
    { label: 'Danh Mục Nổi Bật', value: 'Danh Mục Nổi Bật' },
    { label: 'Danh Mục Khuyến Mãi', value: 'Danh Mục Khuyến Mãi' },
  ]
  const ShowModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button onClick={ShowModal} className='p-10' type="primary">
        <TbPlaylistAdd className='text-[18px]' />
        Danh Mục Sản Phẩm Mới
      </Button>
      <Modal title="Danh mục sản phẩm mới" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Thêm"
        cancelText="Hủy bỏ">
        <form action="">
          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Thêm Danh mục Sản Phẩm</label>
            <Select
              showSearch
              placeholder="Vui lòng chọn vai trò danh mục "
              optionFilterProp="label"
              options={DataCategory}
              className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px]  outline-none  '

            />
          </div>
          <div className='flex h-auto col-span-2 flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Tên danh mục sản phẩm</label>
            <input type='text' className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />

          </div>
          <div className='flex h-auto col-span-2 flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Catelogory_dad</label>
            <input type='text' className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />

          </div>
          <div className='flex w-full h-auto flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Hình</label>
            <ImgCrop rotationSlider>
              <Upload
                className='col-span-2'
                ref={uploadRef}
                action="" // Đặt URL phù hợp với server của bạn
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
                maxCount={1}
                beforeUpload={(file) => {
                  const isValidType = ['image/jpeg', 'image/png'].includes(file.type);
                  const isValidSize = file.size / 1024 / 1024 < 0.5; // 500kb
                  if (!isValidType) {
                    message.error('Bạn chỉ có thể tải lên định dạng JPG/PNG!');
                  }
                  if (!isValidSize) {
                    message.error('Kích thước file phải nhỏ hơn 500kb!');
                  }
                  return isValidType && isValidSize;
                }}
              >
                <div className={`flex flex-col w-[470px]  items-center text-gray-300 hover:text-[#8b1da7] hover:font-semibold cursor-pointer transition-all duration-300 justify-center p-6 border-2 border-dashed rounded-lg ${fileList.length > 0 ? 'hidden' : 'block'}`}>
                  <p className="text-4xl  " onClick={() => uploadRef.current?.querySelector('input[type="file"]')}>
                    <IoMdCloudUpload />
                  </p>
                  <p className="mt-2 text-lg text-center">Bấm hoặc kéo thả ảnh vào đây</p>
                </div>

                <div className={`flex w-full items-center  justify-center p-6 border-2 border-dashed rounded-lg ${fileList.length > 0 ? 'block' : 'hidden'}`}>
                  <img src={fileList[0]?.url} alt="Uploaded" className="rounded-lg w-[70rem] h-[35rem] object-cover   shadow-lg" />
                </div>

              </Upload>
            </ImgCrop>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default AdminAddCatelogry