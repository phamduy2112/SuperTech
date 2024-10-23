
import { Popover, Button, Checkbox, Table, } from 'antd';
import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { FiFilter } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { BiSolidEdit } from 'react-icons/bi';
import { CiBookmarkRemove } from 'react-icons/ci';
import AdminAddCatelogry from './Component/AdminAddCatelogry';
import AdminEditCatelogry from './Component/AdminEditCatelogry';


function AdminCatelogry() {

  const [selectedCheckbox, setSelectedCheckbox] = useState('');
  const [key, setKey] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEdit = (key: any) => {
    setKey(key)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDelete = (key: any) => {
    Swal.fire({
      icon: 'warning',
      showDenyButton: true,
      title: `Bạn Chọn Danh Mục Sản Phẩm Có ID ${key}`,
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
      render: (src: string) => (
        <img className='rounded-md object-cover' src={src} alt="" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: 'Tên Danh Mục',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Ngày',
      dataIndex: 'date',
    },
    {
      title: 'Catelogory_dad',
      dataIndex: 'catelogory_dad',
    },
    {
      title: 'Vai Trò',
      dataIndex: 'role',
      render: (text: string) => (
        <div className="flex-1 flex items-center gap-3">
          <div className={`w-[10px] rounded-full h-[10px] ${text === 'Danh Mục Thường' ? 'bg-[#2af52a]' : ''} ${text === 'Danh Mục Khuyến Mãi' ? 'bg-[#ffd000]' : ''} ${text === 'Danh Mục Nổi Bật' ? 'bg-[red]' : ''}`}></div>
          {text}
        </div>
      ),
    },
    {
      title: 'Tác Vụ',
      key: 'key',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (record: any) => (
        <div className='flex text-[24px] box-border gap-1 items-center'>
          <BiSolidEdit className='cursor-pointer text-[#9000ff67] transition-all duration-700 hover:text-[#9000ffcb]'
            onClick={() => handleEdit(record.key)}
          />
          <CiBookmarkRemove
            className='cursor-pointer text-red-300 transition-all duration-700 hover:text-[red]'
            onClick={() => handleDelete(record.key)}
          />
        </div>
      ),
    },
  ];


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
      title: `Bạn Vừa Chọn ${count} Danh Mục Sản Phẩm`,
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
          title: `Bạn có chắc chắn muốn xóa ${count} danh mục sản phẩm này?`,
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
          text: `Đã mở trang sửa cho ${count} danh mục sản phẩm`,
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
          <span className='text-[30px] font-medium text-[#ffd700]'>Danh Mục Sản Phẩm</span>
          <div className='flex gap-3'>
            <Button className='p-10'>
              <IoCloudDownloadOutline className='text-[18px]' />
              Tải về PDF
            </Button>
            <AdminAddCatelogry />

          </div>
        </div>

        <div className='flex p-[24px] items-center justify-between gap-3'>
          <div className='flex-1 flex bg-[#00000008] focus:outline-dotted rounded-lg p-[16px]'>
            <input type="text" className='flex-1 text-[15px] outline-none bg-transparent' placeholder='Tìm kiếm danh mục sản phẩm...' />
            <GoSearch className='text-[18px]' />
          </div>

          <Popover
            content={<div className='flex flex-col'>

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
          {
            key != 0 ? <AdminEditCatelogry props={key} /> : ''
          }
        </div>
      </div>
    </div>
  );
}

export default AdminCatelogry;
