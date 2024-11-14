import { Calendar, ConfigProvider, Empty, GetProp, message, Popover, Select, Upload, UploadFile } from 'antd';
import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import ImgCrop from 'antd-img-crop';
import { UploadProps } from 'antd/lib';
import './AdminCreateAccout.css'
import { IoMdCloudUpload } from 'react-icons/io';
import { datanganhang } from './Databank';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];


function AdminCustomerEdit() {

    const uploadRef = useRef<HTMLDivElement>(null); 

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

    const options = datanganhang.map(item => ({
        value: item.code,
        label: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={item?.logo}
                    alt={item?.label}
                    style={{ width: '50px', marginRight: '8px' }}
                />
                {item.label}
            </div>

        ),

    }));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [bank, setBank] = useState<any | null>(null); // Thay đổi từ {} thành null

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleBankChange = (value: any) => {
        const codebank = datanganhang.find(data => data.code === value);
        if (codebank) {
            setBank(codebank);
        }


    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [Joindate, setJoinDate] = useState<any | null>(null); // Thay đổi từ {} thành null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [birthdate, setBirthDate] = useState<any | null>(null); // Thay đổi từ {} thành null

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const valueBirthDate = (value: any) => {

        setBirthDate(value.format('YYYY-MM-DD HH:mm:ss'));
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const valueJoinDate = (value: any) => {

        setJoinDate(value.format('YYYY-MM-DD HH:mm:ss'));
    };

    const DataGender = [
        { label: 'Nam', value: 'Nam' },
        { label: 'Nữ', value: 'Nữ' },
        { label: 'Khác', value: 'Khác' },
    ]

    const DataRole = [
        { label: 'Admin', value: 'Admin' },
        { label: 'Nhân viên', value: 'Nhân viên' },
        { label: 'Khách hàng', value: 'Khác hàng' },
    ]










    return (
        <div className='flex-1 bg-[#bg-[#f2edf3]] grid grid-cols-1 xl:grid-cols-2 gap-3 auto-rows-[minmax(50px,_auto)] p-[24px]'>

            <div className='bg-white shadow-lg rounded-xl  p-[12px] gap-8 flex flex-col'>
                <span className='text-[20px] font-semibold'>Tải ảnh  </span>

                <div className='text-[14px] font-medium text-[#9696968e]'>
                    <span>Chọn ảnh sản phẩm hoặc chỉ cần kéo và thả tối đa 6 ảnh tại đây.</span>

                </div>
                <div className='flex- items-center flex justify-center'>
                    <ImgCrop rotationSlider>
                        <Upload
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
                            <div className={`flex flex-col w-[70rem] h-[40rem] items-center text-gray-300 hover:text-[#8b1da7] hover:font-semibold cursor-pointer transition-all duration-300 justify-center p-6 border-2 border-dashed rounded-lg ${fileList.length > 0 ? 'hidden' : 'block'}`}>
                                <p className="text-4xl  " onClick={() => uploadRef.current?.querySelector('input[type="file"]')}>
                                    <IoMdCloudUpload />
                                </p>
                                <p className="mt-2 text-lg text-center">Bấm hoặc kéo thả ảnh vào đây</p>
                            </div>

                            <div className={`flex w-[70rem] h-[40rem] items-center  justify-center p-6 border-2 border-dashed rounded-lg ${fileList.length > 0 ? 'block' : 'hidden'}`}>
                                <img src={fileList[0]?.url} alt="Uploaded" className="rounded-lg w-[70rem] h-[35rem] object-cover   shadow-lg" />
                            </div>

                        </Upload>
                    </ImgCrop>



                </div>
                <div className='text-[14px] text-[#9696968e]  font-medium'>
                    <span>Định dạng hình ảnh: .jpg, .jpeg, .png, kích thước ưa thích: 1:1, kích thước tệp bị giới hạn ở mức tối đa 500kb.</span>
                </div>

            </div>
            <div className='bg-white shadow-lg rounded-xl p-[12px] gap-3 flex flex-col '>
                <span className='text-[20px] font-semibold'>Sửa Tài Khoản </span>
                <form action="" className=' flex-1 grid grid-cols-3 auto-rows-auto gap-4'>
                    <div className='flex h-auto col-span-2 flex-col gap-4'>
                        <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Tên tài khoản</label>
                        <input type='text' className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />

                    </div>
                    <div className='flex h-auto flex-col gap-4'>
                        <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Email</label>
                        <input type='text' className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />

                    </div>
                    <div className='flex h-auto flex-col gap-4'>
                        <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Mật khẩu</label>
                        <input type='text' className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />

                    </div>


                    <div className='flex h-auto flex-col gap-4'>
                        <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Điện thoại</label>
                        <input type='number' min={0} max={100} value={0} className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />
                    </div>
                    <div className='flex h-auto flex-col gap-4'>
                        <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Giới tính</label>
                        <Select
                            showSearch
                            placeholder="Vui lòng chọn giới tính "
                            optionFilterProp="label"
                            options={DataGender}
                            className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px]  outline-none  '

                        />
                    </div>
                    <div className='flex h-auto flex-col gap-4'>
                        <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Vai trò</label>
                        <Select
                            showSearch
                            placeholder="Vui lòng chọn vai trò "
                            optionFilterProp="label"
                            options={DataRole}
                            className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px]  outline-none  '

                        />                    </div>

                    <div className='flex h-auto flex-col gap-4 '>
                        <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Ngày sinh</label>
                        <Popover placement="bottomRight" trigger={'click'} title={'Lịch'} content={
                            <div className='w-[400px]'>
                                <ConfigProvider>
                                    <Calendar
                                        fullscreen={false}
                                        onChange={valueBirthDate}

                                    />
                                </ConfigProvider>
                            </div>
                        }>
                            <input type='text' placeholder={birthdate} autoComplete='off' className='h-[48px]  bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />
                        </Popover>
                    </div>
                    <div className='flex h-auto flex-col gap-4 '>
                        <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Ngày tham gia</label>
                        <Popover placement="bottomRight" trigger={'click'} title={'Lịch'} content={
                            <div className='w-[400px]'>
                                <ConfigProvider>
                                    <Calendar
                                        fullscreen={false}
                                        onChange={valueJoinDate}

                                    />
                                </ConfigProvider>
                            </div>
                        }>
                            <input type='text' placeholder={Joindate} autoComplete='off' className='h-[48px]  bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />
                        </Popover>

                    </div>

                    <div className=' col-span-3 flex h-[450px] overflow-y-hidden flex-col gap-4'>
                        <label htmlFor='ten_sp' className=' text-[13px] text-[#81818177] font-medium'>Địa chỉ</label>
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
            <div className='bg-white shadow-lg rounded-xl xl:col-span-3  p-[12px] gap-3 flex flex-col '>
                <span className='text-[20px] font-semibold'> Thẻ </span>
                <form action="" className='flex-1 grid grid-cols-3 auto-rows-[minmax(48px,_auto)] gap-4'>
                    <div className='flex h-full flex-col gap-4'>
                        <label htmlFor='color' className='text-[13px] text-[#81818177] font-medium'>Mã thẻ</label>
                        <input type='number' min={0} max={100} value={0} className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none' id='quantity' name='quantity' required />

                    </div>
                    <div className='flex h-auto flex-col gap-4'>
                        <label htmlFor='quantity' className='text-[13px] text-[#81818177] font-medium'>Ngày hết hạn</label>
                        <input type='text' min={0} value={0} className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none' id='quantity' name='quantity' required />
                    </div>
                    <div className='flex h-auto flex-col gap-4'>
                        <label htmlFor='hot' className='text-[13px] text-[#81818177] font-medium'>CVV</label>
                        <input type='text' className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none' id='hot' name='hot' required />
                    </div>
                    <div className='flex-1 flex flex-col gap-4 col-span-1'>
                        <label htmlFor='favorite' className='text-[13px] text-[#81818177] font-medium'>Ngân hàng</label>
                        <Select
                            showSearch
                            placeholder="Vui lòng chọn ngân hàng"
                            optionFilterProp="label"
                            onChange={handleBankChange}
                            options={
                                options
                            }
                            className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] outline-none'
                        />                    </div>
                    <div className='flex-1 flex flex-col gap-4 col-span-2'>
                        <label htmlFor='favorite' className='text-[13px] text-[#81818177] font-medium'>Tên chủ thẻ</label>
                        <input type='text' className='flex-1 bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none' id='favorite' name='favorite' required />
                    </div>
                    <div className='flex-1 justify-center items-center p-[60px] flex flex-col gap-4 col-span-3'>
                        <div className='w-[40%] h-full rounded-xl '>
                            {
                                bank?.logo ? <img
                                    src={bank?.logo}
                                    alt="Logo ngân hàng"
                                    className={` object-contain transition-all duration-700 h-[350px] ${bank?.logo ? 'mt-[0px] opacity-100 ' : ' mt-[-30px] opacity-0'}`}
                                /> : <Empty />
                            }
                        </div>

                    </div>
                </form>

            </div>

            <div className='bg-white shadow-lg xl:col-span-3 rounded-xl p-[12px] gap-3 flex flex-col '>
                <button type='submit' className=' text-[16px] mt-4 h-[48px] rounded-lg linear-gradient text-white .box-shadow '>Sửa Tài Khoản</button>

            </div>

        </div >
    );
}

export default AdminCustomerEdit;
