

import { Button, Checkbox, Popover, Table } from 'antd';
import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { FiFilter } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { BiSolidEdit } from 'react-icons/bi';
import { CiBookmarkRemove } from 'react-icons/ci';
import { TbPlaylistAdd } from 'react-icons/tb';

function AdminCommentProduct() {
  const [selectedCheckbox, setSelectedCheckbox] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEdit = (key: any) => {
    Swal.fire({
      icon: 'info',
      text: `Đã mở trang sửa cho bình luận có ID: ${key}`,
      confirmButtonText: 'OK',
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDelete = (key: any) => {
    Swal.fire({
      icon: 'warning',
      showDenyButton: true,
      title: `Bạn Chọn Bình Luận Có ID ${key}`,
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
      title: 'Ngày',
      dataIndex: 'date',
    },
    {
      title: 'Nội Dung',
      dataIndex: 'content',
    },
    {
      title: 'Hình Sản Phẩm',
      dataIndex: 'productImage',
      render: (src: string) => (
        <img className='rounded-md object-cover' src={src} alt="" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: 'Tên Sản Phẩm',
      dataIndex: 'productName',
    },
    {
      title: 'Hình Người Dùng',
      dataIndex: 'userImage',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (src: any) => (
        <img className='rounded-full object-cover' src={src} alt="" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: 'Tên Người Dùng',
      dataIndex: 'userName',
    },
    {
      title: 'Vai Trò',
      dataIndex: 'role',
      render: (text: string) => (
        <div className="flex-1 flex items-center gap-3">
          <div className={`w-[10px] rounded-full h-[10px] ${text === 'Khách Hàng' ? 'bg-[#2af52a]' : ''} ${text === 'Nhân Viên' ? 'bg-[#ffd000]' : ''} ${text === 'Admin' ? 'bg-[red]' : ''}`}></div>
          {text}
        </div>
      ),
    },
    {
      title: 'Số Sao',
      dataIndex: 'rating',
      render: (rating: number) => (
        <div>
          {'⭐'.repeat(rating)} {/* Hiển thị số sao */}
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
      date: '2023-10-01',
      content: 'Sản phẩm rất tốt, tôi rất hài lòng!',
      productImage: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
      productName: 'Sản Phẩm A',
      userImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      userName: 'Nguyễn Văn A',
      role: 'Khách Hàng',
      rating: 5,
    },
    {
      key: '2',
      date: '2023-10-02',
      content: 'Chất lượng vượt xa mong đợi!',
      productImage: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
      productName: 'Sản Phẩm B',
      userImage: 'https://randomuser.me/api/portraits/men/2.jpg',
      userName: 'Trần Văn B',
      role: 'Admin',
      rating: 4,
    },
    {
      key: '3',
      date: '2023-10-03',
      content: 'Tôi không thích sản phẩm này.',
      productImage: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
      productName: 'Sản Phẩm C',
      userImage: 'https://randomuser.me/api/portraits/women/1.jpg',
      userName: 'Lê Thị C',
      role: 'Nhân Viên',
      rating: 2,
    },
    {
      key: '4',
      date: '2023-10-04',
      content: 'Dịch vụ khách hàng rất tốt!',
      productImage: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
      productName: 'Sản Phẩm D',
      userImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      userName: 'Nguyễn Văn D',
      role: 'Khách Hàng',
      rating: 5,
    },
    {
      key: '5',
      date: '2023-10-05',
      content: 'Tôi sẽ mua lại!',
      productImage: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
      productName: 'Sản Phẩm E',
      userImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      userName: 'Trần Thị E',
      role: 'Khách Hàng',
      rating: 4,
    },
    {
      key: '6',
      date: '2023-10-06',
      content: 'Giá cả hợp lý cho chất lượng!',
      productImage: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
      productName: 'Sản Phẩm F',
      userImage: 'https://randomuser.me/api/portraits/men/4.jpg',
      userName: 'Lê Văn F',
      role: 'Nhân Viên',
      rating: 5,
    },
    {
      key: '7',
      date: '2023-10-07',
      content: 'Không đúng như quảng cáo.',
      productImage: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
      productName: 'Sản Phẩm G',
      userImage: 'https://randomuser.me/api/portraits/women/3.jpg',
      userName: 'Nguyễn Thị G',
      role: 'Khách Hàng',
      rating: 2,
    },
    {
      key: '8',
      date: '2023-10-08',
      content: 'Rất đáng giá!',
      productImage: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
      productName: 'Sản Phẩm H',
      userImage: 'https://randomuser.me/api/portraits/men/5.jpg',
      userName: 'Trần Văn H',
      role: 'Nhân Viên',
      rating: 5,
    },
    {
      key: '9',
      date: '2023-10-09',
      content: 'Không thể hài lòng hơn.',
      productImage: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
      productName: 'Sản Phẩm I',
      userImage: 'https://randomuser.me/api/portraits/women/4.jpg',
      userName: 'Lê Thị I',
      role: 'Nhân Viên',
      rating: 4,
    },
    {
      key: '10',
      date: '2023-10-10',
      content: 'Sản phẩm tuyệt vời!',
      productImage: 'https://product.hstatic.net/1000406564/product/iphone11-tr_3064909d9a634a548fb3657c570f5c80_master.jpg',
      productName: 'Sản Phẩm J',
      userImage: 'https://randomuser.me/api/portraits/men/6.jpg',
      userName: 'Nguyễn Văn J',
      role: 'Khách Hàng',
      rating: 5,
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
      title: `Bạn Vừa Chọn ${count} Bình Luận`,
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
          title: `Bạn có chắc chắn muốn xóa ${count} Bình Luận này?`,
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
          text: `Đã mở trang sửa cho ${count} Bình Luận`,
          confirmButtonText: 'OK',
        });
      }
    });
  };




  const rowSelection = {
    onChange: onSelectChange,
  };

  return (
    <div className='flex  flex-col p-12 gap-5 bg-[#f2edf3]'>
      <div className='flex-1 bg-white flex flex-col rounded-xl shadow-lg'>
        <div className='flex items-center justify-between box-border p-[24px]'>
          <span className='text-[30px] font-medium text-[#ffd700]'>Bình Luận Sản Phẩm</span>
          <div className='flex gap-3'>
            <Button className='p-10'>
              <IoCloudDownloadOutline className='text-[18px]' />
              Tải về PDF
            </Button>
            <Button className='p-10' type="primary">
              <TbPlaylistAdd className='text-[18px]' />
              Bình Luận Sản Phẩm Mới
            </Button>
          </div>
        </div>

        <div className='flex p-[24px] items-center justify-between gap-3'>
          <div className='flex-1 flex bg-[#00000008] focus:outline-dotted rounded-lg p-[16px]'>
            <input type="text" className='flex-1 text-[15px] outline-none bg-transparent' placeholder='Tìm kiếm bình luận sản phẩm...' />
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
              <div className='flex justify-between p-[12px] w-[200px] gap-2'>
                <label className='text-[14px]'>Sản Phẩm Bình Luận Nhiều Nhất</label>
                <Checkbox checked={selectedCheckbox === 'productmax'} onChange={() => setSelectedCheckbox('productmax')}></Checkbox>
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

export default AdminCommentProduct;
