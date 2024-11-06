import { Button, Checkbox, Popover, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { BiSolidEdit } from 'react-icons/bi';
import { CiBookmarkRemove } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getAllUserThunk } from '../../../redux/user/user.slice';

function AdminStaff() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Allstaffs: any = useAppSelector((state) => state.user.Alluser);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [DataAllstaffs, setDataAllstaffs] = useState<any[]>([]);
    const AppDispatch = useAppDispatch();
    const [staffKeys, setStaffKeys] = useState<string[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [columns, setColumns] = useState<any[]>([]);
    const [valueInputSearch, setvalueInputSearch] = useState(``);



    useEffect(() => {
        AppDispatch(getAllUserThunk());
        setDataAllstaffs(Allstaffs);

    }, [AppDispatch]);

    useEffect(() => {
        if (Allstaffs && Allstaffs.length > 0) {
            const keys = Allstaffs.map((staff: string) => Object.keys(staff));
            keys.push('tacvu');

            setStaffKeys([...new Set(keys.flat())] as string[]);
        }
    }, [Allstaffs])


    useEffect(() => {


        console.log(staffKeys);

        const ColumnStaffs = staffKeys.map((staff) => {

            switch (staff) {
                case 'user_id':
                    return {
                        title: 'ID',
                        dataIndex: staff,
                        key: staff,
                    };

                case 'user_image':
                    return {
                        title: 'Hình',
                        dataIndex: staff,
                        key: staff,
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        render: (src: any) => (
                            <>
                                {
                                    src == '' || src == null || src == undefined ?
                                        <img className='rounded-full object-cover' src='https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg' alt="" style={{ width: 50, height: 50 }} />
                                        : <img className='rounded-full object-cover' src={src} alt="" style={{ width: 50, height: 50 }} />

                                }

                            </>
                        ),


                    };
                case 'user_name':
                    return {
                        title: 'Tên',
                        dataIndex: staff,
                        key: staff,

                    };

                case 'user_birth':
                    return {
                        title: 'Tuổi',
                        dataIndex: staff,
                        key: staff,
                    }
                case 'user_phone':
                    return {
                        title: 'Số điện thoại',
                        dataIndex: staff,
                        key: staff,
                    }

                case 'user_email':
                    return {
                        title: 'Email',
                        dataIndex: staff,
                        key: staff,
                    }

                case 'user_address':
                    return {
                        title: 'Địa Chỉ',
                        dataIndex: staff,
                        key: staff,


                    }
                case 'user_role':
                    return {
                        title: 'Vai trò',
                        dataIndex: staff,
                        key: staff,
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        render: (text: any) => (
                            <div className="flex-1 flex items-center gap-3">
                                <div className={`w-[10px] rounded-full h-[10px] ${text == 2 ? 'bg-[#2af52a]' : ''} ${text == 1 ? 'bg-[#ffd000]' : ''} ${text == 0 ? 'bg-[red]' : ''}`}></div>
                            </div>
                        ),
                    }
                case 'level':
                    return {
                        title: 'Thăng hạng',
                        dataIndex: staff,
                        key: staff,
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        render: (text: any) => (
                            <div className="flex-1 flex items-center gap-3">
                                {text == 4 ? 'Đồng' : ''} {text == 3 ? 'Bạc' : ''} {text == 2 ? 'Vàng' : ''} {text == 1 ? 'Kim Cương' : ''} {text == 0 ? 'Tối Thượng' : ''}
                            </div>
                        ),
                    }


                case 'tacvu': {
                    return {
                        title: 'Tác Vụ',
                        key: 'tacvu',
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        render: (record: any) => (
                            <div className='flex text-[24px] box-border gap-1 items-center'>
                                <BiSolidEdit
                                    className='cursor-pointer text-[#9000ff67] transition-all duration-700 hover:text-[#9000ffcb]'
                                    onClick={() => handleEdit(record.user_id)}
                                />
                                <CiBookmarkRemove
                                    className='cursor-pointer text-red-300 transition-all duration-700 hover:text-[red]'
                                    onClick={() => handleDelete(record.user_id)}
                                />
                            </div>
                        ),
                    };
                }





                default:
                    return null;
            }

        }).filter(col => col !== null);
        setColumns(ColumnStaffs);
    }, [staffKeys]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setvalueInputSearch(e.target.value);
    }

    useEffect(() => {
        if (valueInputSearch.trim() === "") {
            setDataAllstaffs(Allstaffs);
        } else {
            const filteredData = Allstaffs.filter((item: any) => {
                const userId = item?.user_id;
                const userName = item?.user_name;
                const userEmail = item?.user_email;
                const userPhone = item?.user_phone;

                const userIdString = (typeof userId === 'string' || userId instanceof String) ? userId : String(userId || '');
                const userNameString = (typeof userName === 'string' || userName instanceof String) ? userName : String(userName || '');
                const userEmailString = (typeof userEmail === 'string' || userEmail instanceof String) ? userEmail : String(userEmail || '');
                const userPhoneString = (typeof userPhone === 'string' || userPhone instanceof String) ? userPhone : String(userPhone || '');

                return userIdString.toLowerCase().includes(valueInputSearch.toLowerCase()) ||
                    userNameString.toLowerCase().includes(valueInputSearch.toLowerCase()) ||
                    userEmailString.toLowerCase().includes(valueInputSearch.toLowerCase()) ||
                    userPhoneString.toLowerCase().includes(valueInputSearch.toLowerCase());
            });

            setDataAllstaffs(filteredData);

        }
    }, [valueInputSearch, Allstaffs]);








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
                        <input type="text" className='flex-1 text-[15px] outline-none bg-transparent' onChange={handleSearch} placeholder='Tìm kiếm nhân viên hoặc quản trị...' />
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
                        columns={columns || []}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        dataSource={Array.isArray(DataAllstaffs) ? DataAllstaffs.filter((staff: any) => staff.user_role != 2) : []}
                        size='large'
                        pagination={{ pageSize: 10 }}
                    />
                </div>
            </div>
        </div>
    );
}

export default AdminStaff;
