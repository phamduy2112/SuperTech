import { GetProp, message, Modal, Select, Upload, UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop';
import { UploadFile } from 'antd/lib';
import React, { useEffect, useRef, useState } from 'react'
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AdminEditCatelogry(props: any) {
  const data = [
    {
      key: '1',
      name: 'Sản Phẩm A',
      date: '2023-01-01',
      catelogory_dad: 'Chưa nhập',
      role: 'Danh Mục Thường',
      image: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
    },
    {
      key: '2',
      name: 'Sản Phẩm B',
      date: '2023-02-01',
      catelogory_dad: 'Chưa nhập',
      role: 'Danh Mục Khuyến Mãi',
      image: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
    },
    {
      key: '3',
      name: 'Sản Phẩm C',
      date: '2023-03-01',
      catelogory_dad: 'Chưa nhập',
      role: 'Danh Mục Nổi Bật',
      image: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
    },
    {
      key: '4',
      name: 'Sản Phẩm D',
      date: '2023-04-01',
      catelogory_dad: 'Chưa nhập',
      role: 'Danh Mục Thường',
      image: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
    },
    {
      key: '5',
      name: 'Sản Phẩm E',
      date: '2023-05-01',
      catelogory_dad: 'Chưa nhập',
      role: 'Danh Mục Khuyến Mãi',
      image: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
    },
    {
      key: '6',
      name: 'Sản Phẩm F',
      date: '2023-06-01',
      catelogory_dad: 'Chưa nhập',
      role: 'Danh Mục Nổi Bật',
      image: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
    },
    {
      key: '7',
      name: 'Sản Phẩm G',
      date: '2023-07-01',
      catelogory_dad: 'Chưa nhập',
      role: 'Danh Mục Thường',
      image: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
    },
    {
      key: '8',
      name: 'Sản Phẩm H',
      date: '2023-08-01',
      catelogory_dad: 'Chưa nhập',
      role: 'Danh Mục Khuyến Mãi',
      image: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
    },
    {
      key: '9',
      name: 'Sản Phẩm I',
      date: '2023-09-01',
      catelogory_dad: 'Chưa nhập',
      role: 'Danh Mục Nổi Bật',
      image: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
    },
    {
      key: '10',
      name: 'Sản Phẩm J',
      date: '2023-10-01',
      catelogory_dad: 'Chưa nhập',
      role: 'Danh Mục Thường',
      image: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
    },
  ];


  const filterData = data.find((item) => parseInt(props.props) == parseInt(item.key))
  const uploadRef = useRef<HTMLDivElement>(null); // Sử dụng HTMLDivElement

  const [fileList, setFileList] = useState<UploadFile[]>([]);


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
  const [isModalOpen, setIsModalOpen] = useState(true);
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

  useEffect(() => {
    ShowModal();
  }, [props.props])

  return (
    <>
      <Modal title={`Sửa danh mục sản phẩm mới ${filterData?.key}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Thêm"
        cancelText="Hủy bỏ">
        <form action="">
          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Thêm Danh mục Sản Phẩm</label>
            <Select
              showSearch
              placeholder={filterData?.role}
              optionFilterProp="label"
              options={DataCategory}
              className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px]  outline-none  '

            />
          </div>
          <div className='flex h-auto col-span-2 flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Tên danh mục sản phẩm</label>
            <input type='text' placeholder={`${filterData?.name}`} className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />

          </div>
          <div className='flex h-auto col-span-2 flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Catelogory_dad</label>
            <input type='text' placeholder={`${filterData?.catelogory_dad}`} className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />

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
                  <p className="mt-2 text-lg text-center">Bấm hoặc kéo thả ảnh vào đây</p>
                  <img onClick={() => uploadRef.current?.querySelector('input[type="file"]')} src={filterData?.image} alt="Uploaded" className="rounded-lg w-[70rem] h-[35rem] object-cover   shadow-lg" />

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

export default AdminEditCatelogry