import { GetProp, Select, Upload, UploadFile } from 'antd';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import ImgCrop from 'antd-img-crop';
import { UploadProps } from 'antd/lib';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];


function AdminAddProduct() {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://thanhnien.mediacdn.vn/Uploaded/hienth/2022_11_19/316091470-2471686993007760-1140655755716974663-n-1348.jpeg',
    },
  ]);

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
  const Datasao = [
    {
      value: '1',
      label: '⭐',
    },
    {
      value: '2',
      label: '⭐⭐',
    },
    {
      value: '3',
      label: '⭐⭐⭐',
    },
  ]
  const Datacpu = [
    {
      value: '1',
      label: 'CPU Level 1',
    },
    {
      value: '2',
      label: 'CPU Level 2',
    },
    {
      value: '3',
      label: 'CPU Level 3',
    },
  ];

  const Dataram = [
    {
      value: '1',
      label: 'RAM Level 1',
    },
    {
      value: '2',
      label: 'RAM Level 2',
    },
    {
      value: '3',
      label: 'RAM Level 3',
    },
  ];

  const Datahe = [
    {
      value: '1',
      label: 'HDD Level 1',
    },
    {
      value: '2',
      label: 'HDD Level 2',
    },
    {
      value: '3',
      label: 'HDD Level 3',
    },
  ];

  const Datakho = [
    {
      value: '1',
      label: 'Storage Level 1',
    },
    {
      value: '2',
      label: 'Storage Level 2',
    },
    {
      value: '3',
      label: 'Storage Level 3',
    },
  ];

  const Dataman = [
    {
      value: '1',
      label: 'Mainboard Level 1',
    },
    {
      value: '2',
      label: 'Mainboard Level 2',
    },
    {
      value: '3',
      label: 'Mainboard Level 3',
    },
  ];

  const Datapin = [
    {
      value: '1',
      label: 'Pin Level 1',
    },
    {
      value: '2',
      label: 'Pin Level 2',
    },
    {
      value: '3',
      label: 'Pin Level 3',
    },
  ];


  const Dataloai = [
    {
      value: 'Điện thoại',
      label: 'Điện',
    },
    {
      value: 'Máy tính',
      label: 'Máy tinh',
    },
    {
      value: 'Tai nghe',
      label: 'Tai nghe',
    },
  ]
  const Datagiamgia = [
    {
      value: '10%',
      label: '10%',
    },
    {
      value: '75%',
      label: '75%',
    },
    {
      value: '100%',
      label: '100%',
    },

  ]
  const Datamau = [
    {
      value: 'Xanh',
      label: 'Xanh',
    },
    {
      value: 'Vàng',
      label: 'Vàng',
    },

  ]
  const [value, setValue] = useState('')
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']
  ];



  return (
    <div className='flex-1 bg-[#f2edf3]  grid xl:grid-cols-2 gap-3 auto-rows-[minmax(50px,_auto)] p-[24px]'>
      <div className='bg-white shadow-lg rounded-xl row-span-2 p-[12px] gap-3 flex flex-col '>
        <span className='text-[20px] font-semibold'> Tạo Sản Phẩm Mới </span>
        <form action="" className=' flex-1 grid grid-cols-3 auto-rows-auto gap-4'>
          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Loại</label>
            <Select
              showSearch
              placeholder="Vui lòng chọn loại "
              optionFilterProp="label"
              options={Dataloai}
              className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px]  outline-none  '

            />
          </div>
          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Giá sản phẩm</label>
            <input type='text' className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />

          </div>
          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Giảm giá</label>
            <Select
              showSearch
              placeholder="Vui lòng chọn mức giảm giá "
              optionFilterProp="label"
              options={Datagiamgia}
              className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px]  outline-none  '

            />
          </div>
          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Số sao</label>
            <Select
              showSearch
              placeholder="Vui lòng chọn mức sao ban đầu "
              optionFilterProp="label"
              options={Datasao}
              className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px]  outline-none  '

            />
          </div>

          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Số Lượng</label>
            <input type='number' min={0} max={100} value={0} className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />
          </div>
          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Ngày</label>
            <input type='text' className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />
          </div>
          <div className='flex h-auto flex-col gap-4 col-span-3'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Tên sản phẩm</label>
            <input type='text' className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />
          </div>
          <div className=' col-span-3 flex h-[400px] overflow-y-hidden flex-col gap-4'>
            <label htmlFor='ten_sp' className=' text-[13px] text-[#81818177] font-medium'>Mô tả</label>
            <ReactQuill
              theme='snow'
              value={value}

              onChange={setValue}
              modules={{
                toolbar: toolbarOptions,
              }}
              className='h-[100%] bg-[#81818113] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-sm p-2'
            />
          </div>





        </form>
      </div>
      <div className='bg-white shadow-lg rounded-xl  p-[12px] gap-8 flex flex-col'>
        <span className='text-[20px] font-semibold'>Tải ảnh  </span>

        <div className='text-[14px] font-medium text-[#9696968e]'>
          <span>Chọn ảnh sản phẩm hoặc chỉ cần kéo và thả tối đa 6 ảnh tại đây.</span>

        </div>
        <div className='flex-1'>
          <ImgCrop rotationSlider>
            <Upload
              action=""
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 7 && '+ Upload'}
            </Upload>
          </ImgCrop>

        </div>
        <div className='text-[14px] text-[#9696968e] font-medium'>
          <span>Định dạng hình ảnh: .jpg, .jpeg, .png, kích thước ưa thích: 1:1, kích thước tệp bị giới hạn ở mức tối đa 500kb.</span>
        </div>

      </div>
      <div className='bg-white shadow-lg rounded-xl  p-[12px] gap-3 flex flex-col '>
        <span className='text-[20px] font-semibold'> Liên quan </span>
        <form action="" className='flex-1 grid grid-cols-3 auto-rows-[minmax(48px,_auto)] gap-4'>
          <div className='flex h-full flex-col gap-4'>
            <label htmlFor='color' className='text-[13px] text-[#81818177] font-medium'>Màu sắc</label>
            <Select
              showSearch
              placeholder="Vui lòng chọn màu"
              optionFilterProp="label"
              options={Datamau}
              className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] outline-none'
            />
          </div>
          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='quantity' className='text-[13px] text-[#81818177] font-medium'>Số lượng sản phẩm màu đó</label>
            <input type='number' min={0} max={100} value={0} className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none' id='quantity' name='quantity' required />
          </div>
          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='hot' className='text-[13px] text-[#81818177] font-medium'>Hot</label>
            <input type='text' className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none' id='hot' name='hot' required />
          </div>
          <div className='flex-1 flex flex-col gap-4 col-span-3'>
            <label htmlFor='favorite' className='text-[13px] text-[#81818177] font-medium'>Yêu Thích</label>
            <input type='text' className='flex-1 bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none' id='favorite' name='favorite' required />
          </div>
        </form>

      </div>
      <div className='bg-white shadow-lg rounded-xl row-span-2 p-[12px] gap-3 flex flex-col '>
        <span className='text-[20px] font-semibold'> Tạo thuộc tính </span>
        <form action="" className=' flex-1 grid grid-cols-3 auto-rows-auto gap-4'>
          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Màn</label>
            <Select
              showSearch
              placeholder="Vui lòng chọn mà "
              optionFilterProp="label"
              options={Dataman}
              className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px]  outline-none  '

            />
          </div>
          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Pin</label>
            <Select
              showSearch
              placeholder="Vui lòng chọn pin "
              optionFilterProp="label"
              options={Datapin}
              className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px]  outline-none  '

            />
          </div>
          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Cpu</label>
            <Select
              showSearch
              placeholder="Vui lòng chọn cpu "
              optionFilterProp="label"
              options={Datacpu}
              className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px]  outline-none  '

            />
          </div>
          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Số Ram</label>
            <Select
              showSearch
              placeholder="Vui lòng chọn mức ram "
              optionFilterProp="label"
              options={Dataram}
              className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px]  outline-none  '

            />
          </div>

          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Hệ điều hành</label>
            <Select
              showSearch
              placeholder="Vui lòng chọn hệ "
              optionFilterProp="label"
              options={Datahe}
              className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px]  outline-none  '

            />
          </div>
          <div className='flex h-auto flex-col gap-4'>
            <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Kho</label>
            <Select
              showSearch
              placeholder="Vui lòng chọn kho "
              optionFilterProp="label"
              options={Datakho}
              className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px]  outline-none  '

            />
          </div>
          <div className=' col-span-3 flex h-[450px] overflow-y-hidden flex-col gap-4'>
            <label htmlFor='ten_sp' className=' text-[13px] text-[#81818177] font-medium'>Mô tả nhiều hơn</label>
            <ReactQuill
              theme='snow'
              value={value}
              onChange={setValue}
              modules={{
                toolbar: toolbarOptions,
              }}
              className='h-[100%] bg-[#81818113] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-sm p-2'
            />
          </div>





        </form>
      </div>
      <div className='bg-white shadow-lg rounded-xl p-[12px] gap-3 flex flex-col '>
            <button type='submit' className='col-span-3 text-[16px] mt-4 h-[48px] linear-gradient text-white .box-shadow  rounded-lg'>Thêm Sản Phẩm</button>

      </div>

    </div >
  );
}

export default AdminAddProduct;
