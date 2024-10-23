import { Button, Checkbox, Popover, Table } from 'antd';
import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { BiSolidEdit } from 'react-icons/bi';
import { CiBookmarkRemove } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';

function AdminStaff() {
    const [selectedCheckbox, setSelectedCheckbox] = useState('');
    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleEdit = (key: any) => {
        Swal.fire({
            icon: 'info',
            text: `Đã mở trang sửa cho tài khoản có ID: ${key}`, // Nội dung
            confirmButtonText: 'OK',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(`/admin/quản-lí-nhân-viên/sửa-nhân-viên/${key}`);
            }
        });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDelete = (key: any) => {
        Swal.fire({
            icon: 'warning',
            showDenyButton: true,
            title: `Bạn Chọn Người Dùng Có ID ${key}`,
            text: `Bạn có chắc muốn xóa ?`,
            confirmButtonText: 'Xóa',
            denyButtonText: 'Hủy',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Đã Xóa',
                    text: `Bạn đã Xóa ${key}`,
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Đã Hủy',
                    text: 'Bạn đã hủy thao tác xóa.',
                });
            }
        });
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Hình',
            dataIndex: 'image',
            key: 'image',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            render: (src: any) => (
                <img className='rounded-full object-cover' src={src} alt="" style={{ width: 50, height: 50 }} />
            ),
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: 'Tuổi',
            dataIndex: 'age',
        },
        {
            title: 'Đối Tượng',
            dataIndex: 'obj',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            render: (text: any) => (
                <div className="flex-1 flex items-center gap-3">
                    <div className={`w-[10px] rounded-full h-[10px] ${text === 'Người Dùng' ? 'bg-[#2af52a]' : ''} ${text === 'Nhân Viên' ? 'bg-[#ffd000]' : ''} ${text === 'Admin' ? 'bg-[red]' : ''}`}></div>
                    {text}
                </div>
            ),
        },
        {
            title: 'Điện Thoại',
            dataIndex: 'phone',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Địa Chỉ',
            dataIndex: 'address',
        },
        {
            title: 'Tác Vụ',
            key: 'key',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            render: (record: any) => (
                <div className='flex  text-[24px] box-border gap-1 items-center'>
                    <BiSolidEdit className='cursor-pointer text-[#9000ff67] transition-all duration-700 hover:text-[#9000ffcb]'
                        onClick={() => handleEdit(record.key)}
                    />
                    <CiBookmarkRemove
                        className='cursor-pointer text-red-300 transition-all duration-700  hover:text-[red]'
                        onClick={() => handleDelete(record.key)}
                    />


                </div>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            obj: 'Admin',
            phone: '0123 456 789',
            email: 'nguyen.van.a@example.com',
            address: 'New York No. 1 Lake Park',
            image: 'https://suckhoedoisong.qltns.mediacdn.vn/Images/phamquynh/2021/05/09/Ong%20hoang%20nhac%20Viet%20co%20suc%20hut%20khung%20khiep%20khi%20chuyen%20sang%20nghe%20ban%20hang%20online.jpg',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            obj: 'Nhân Viên',
            phone: '0123 456 789',
            email: 'nguyen.van.a@example.com',
            address: 'London No. 1 Lake Park',
            image: 'https://suckhoedoisong.qltns.mediacdn.vn/Images/phamquynh/2021/05/09/Ong%20hoang%20nhac%20Viet%20co%20suc%20hut%20khung%20khiep%20khi%20chuyen%20sang%20nghe%20ban%20hang%20online.jpg',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            obj: 'Nhân Viên',
            phone: '0123 456 789',
            email: 'nguyen.van.a@example.com',
            address: 'Sydney No. 1 Lake Park',
            image: 'https://suckhoedoisong.qltns.mediacdn.vn/Images/phamquynh/2021/05/09/Ong%20hoang%20nhac%20Viet%20co%20suc%20hut%20khung%20khiep%20khi%20chuyen%20sang%20nghe%20ban%20hang%20online.jpg',
        },
        {
            key: '4',
            name: 'Disabled User',
            age: 99,
            obj: 'Nhân Viên',
            phone: '0123 456 789',
            email: 'nguyen.van.a@example.com',
            address: 'Sydney No. 1 Lake Park',
            image: 'https://suckhoedoisong.qltns.mediacdn.vn/Images/phamquynh/2021/05/09/Ong%20hoang%20nhac%20Viet%20co%20suc%20hut%20khung%20khiep%20khi%20chuyen%20sang%20nghe%20ban%20hang%20online.jpg',
        },
        {
            key: '5',
            name: 'John Brown',
            age: 32,
            obj: 'Nhân Viên',
            phone: '0123 456 789',
            email: 'nguyen.van.a@example.com',
            address: 'New York No. 1 Lake Park',
            image: 'https://suckhoedoisong.qltns.mediacdn.vn/Images/phamquynh/2021/05/09/Ong%20hoang%20nhac%20Viet%20co%20suc%20hut%20khung%20khiep%20khi%20chuyen%20sang%20nghe%20ban%20hang%20online.jpg',
        },
        {
            key: '6',
            name: 'Jim Green',
            age: 42,
            obj: 'Nhân Viên',
            phone: '0123 456 789',
            email: 'nguyen.van.a@example.com',
            address: 'London No. 1 Lake Park',
            image: 'https://suckhoedoisong.qltns.mediacdn.vn/Images/phamquynh/2021/05/09/Ong%20hoang%20nhac%20Viet%20co%20suc%20hut%20khung%20khiep%20khi%20chuyen%20sang%20nghe%20ban%20hang%20online.jpg',
        },
        {
            key: '7',
            name: 'Joe Black',
            age: 32,
            obj: 'Nhân Viên',
            phone: '0123 456 789',
            email: 'nguyen.van.a@example.com',
            address: 'Sydney No. 1 Lake Park',
            image: 'https://suckhoedoisong.qltns.mediacdn.vn/Images/phamquynh/2021/05/09/Ong%20hoang%20nhac%20Viet%20co%20suc%20hut%20khung%20khiep%20khi%20chuyen%20sang%20nghe%20ban%20hang%20online.jpg',
        },
        {
            key: '8',
            name: 'Disabled User',
            age: 99,
            obj: 'Nhân Viên',
            phone: '0123 456 789',
            email: 'nguyen.van.a@example.com',
            address: 'Sydney No. 1 Lake Park',
            image: 'https://suckhoedoisong.qltns.mediacdn.vn/Images/phamquynh/2021/05/09/Ong%20hoang%20nhac%20Viet%20co%20suc%20hut%20khung%20khiep%20khi%20chuyen%20sang%20nghe%20ban%20hang%20online.jpg',
        },
        {
            key: '9',
            name: 'Joe Black',
            age: 32,
            obj: 'Nhân Viên',
            phone: '0123 456 789',
            email: 'nguyen.van.a@example.com',
            address: 'Sydney No. 1 Lake Park',
            image: 'https://suckhoedoisong.qltns.mediacdn.vn/Images/phamquynh/2021/05/09/Ong%20hoang%20nhac%20Viet%20co%20suc%20hut%20khung%20khiep%20khi%20chuyen%20sang%20nghe%20ban%20hang%20online.jpg',
        },
        {
            key: '10',
            name: 'Disabled User',
            age: 99,
            obj: 'Nhân Viên',
            phone: '0123 456 789',
            email: 'nguyen.van.a@example.com',
            address: 'Sydney No. 1 Lake Park',
            image: 'https://suckhoedoisong.qltns.mediacdn.vn/Images/phamquynh/2021/05/09/Ong%20hoang%20nhac%20Viet%20co%20suc%20hut%20khung%20khiep%20khi%20chuyen%20sang%20nghe%20ban%20hang%20online.jpg',
        },
    ];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSelectChange = (selectedRowKeys: any) => {
        setSelectedCheckbox(selectedRowKeys);
        if (selectedRowKeys.length > 0) {
            showModal(selectedRowKeys.length);
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const showModal = (count: any) => {
        Swal.fire({
            icon: "info",
            title: `Bạn Vừa Chọn ${count} tài khoản`,
            text: 'Bạn có muốn tiếp tục?',
            showDenyButton: true,
            denyButtonText: 'Xóa',
            confirmButtonText: 'Sửa',
            customClass: {
                confirmButton: 'bg-green-700 text-white',
                denyButton: 'bg-red-500 text-white',
            },
            backdrop: true,
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isDenied) {
                Swal.fire({
                    icon: "warning",
                    title: `Bạn có chắc chắn muốn xóa ${count} người này?`,
                    showCancelButton: true,
                    confirmButtonText: 'Xóa',
                    cancelButtonText: 'Hủy',
                    customClass: {
                        confirmButton: 'bg-red-500 text-white',
                        cancelButton: 'bg-gray-500 text-white',
                    },
                }).then((kq) => {
                    if (kq.isConfirmed) {
                        Swal.fire('Đã xóa!', '', 'success');
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Đã Hủy',
                            text: 'Bạn đã hủy thao tác xóa.',
                        });
                    }
                });
            } else if (result.isConfirmed) {
                Swal.fire({
                    icon: 'info',
                    text: `Đã mở trang sửa cho ${count} tài khoản`,
                    confirmButtonText: 'OK',
                });
            }
        });
    };




    const rowSelection = {
        onChange: onSelectChange,
    };

    return (
        <div className='flex flex-col p-12 gap-5 bg-[#f2edf3]'>
            <div className='flex-1 bg-white flex flex-col rounded-xl shadow-lg'>
                <div className='flex items-center justify-between box-border p-[24px]'>
                    <span className='text-[30px] font-medium text-[#ffd700]'>Nhân Viên</span>
                    <div className='flex gap-3'>
                        <Button className='p-10'>
                            <IoCloudDownloadOutline className='text-[18px]' />
                            Tải về PDF
                        </Button>
                        <Link to={`/admin/quản-lí-nhân-viên/tạo-nhân-viên-mới`}>
                            <Button className='p-10' type="primary">
                                <AiOutlineUserAdd className='text-[18px]' />
                                Thêm Người Mới
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className='flex p-[24px] items-center justify-between gap-3'>
                    <div className='flex-1 flex bg-[#00000008] focus:outline-dotted rounded-lg p-[16px]'>
                        <input type="text" className='flex-1 text-[15px] outline-none bg-transparent' placeholder='Tìm kiếm nhân viên hoặc quản trị...' />
                        <GoSearch className='text-[18px]' />
                    </div>


                    <Popover
                        content={<div className='flex flex-col'>
                            <div className='flex gap-2 justify-between p-[12px]'>
                                <label className='text-[14px]'>Admin</label>
                                <Checkbox checked={selectedCheckbox === 'admin'} onChange={() => setSelectedCheckbox('admin')}></Checkbox>
                            </div>
                            <div className='flex gap-2 justify-between p-[12px]'>
                                <label className='text-[14px]'>Nhân Viên</label>
                                <Checkbox checked={selectedCheckbox === 'staff'} onChange={() => setSelectedCheckbox('staff')}></Checkbox>
                            </div>

                            <div className='flex justify-between p-[12px] w-[200px] gap-2'>
                                <label className='text-[14px]'>Mới nhất</label>
                                <Checkbox checked={selectedCheckbox === 'new'} onChange={() => setSelectedCheckbox('new')}></Checkbox>
                            </div>
                            <div className='flex gap-2 justify-between p-[12px]'>
                                <label className='text-[14px]'>Cũ nhất</label>
                                <Checkbox checked={selectedCheckbox === 'old'} onChange={() => setSelectedCheckbox('old')}></Checkbox>
                            </div>

                        </div>}
                        title="Lọc"
                        trigger="click"
                        placement="bottomRight"
                    >
                        <Button className='p-10'>
                            <FiFilter className='text-[18px]' />
                            Lọc
                        </Button>
                    </Popover>
                </div>

                <div className='p-[24px] relative overflow-x-auto h-[1000px] flex flex-col'>
                    <Table
                        className='flex-1'
                        rowSelection={{
                            type: 'checkbox',
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                        size='large'
                        pagination={{ pageSize: 10 }}
                    />
                </div>
            </div>
        </div>
    );
}

export default AdminStaff;
