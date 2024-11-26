

import { Button, Checkbox, Popover, Table } from 'antd';
import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { FiFilter } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { BiSolidEdit } from 'react-icons/bi';
import { CiBookmarkRemove } from 'react-icons/ci';
import { TbPlaylistAdd } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';

function AdminBlog() {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEdit = (key: any) => {
    Swal.fire({
      icon: 'info',
      text: `Đã mở trang sửa cho bài viết có ID: ${key}`,
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/admin/quản-lí-bài-viết/sửa-bài-viết/${key}`);
      }
    });;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDelete = (key: any) => {
    Swal.fire({
      icon: 'warning',
      showDenyButton: true,
      title: `Bạn Chọn Bài Viết Có ID ${key}`,
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
      title: 'Tiêu Đê Bài Viết',
      dataIndex: 'titlepost',
    },
    {
      title: 'Nội Dung Bài Viết',
      dataIndex: 'post',
    },
    {
      title: 'Url',
      dataIndex: 'url',
    },

    {
      title: 'Ngày đăng bài',
      dataIndex: 'uploadpost',
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
      key: 1,
      titlepost: 'Khám Phá AI',
      post: 'Trí tuệ nhân tạo đang thay đổi thế giới.',
      url: 'https://example.com/ai-exploration',
      status: 'Đã trả lời',
      uploadpost: '2024-10-11',
    },
    {
      key: 2,
      titlepost: 'An Ninh Mạng Cơ Bản',
      post: 'Các nguyên tắc cơ bản về an ninh mạng bạn cần biết.',
      url: 'https://example.com/cybersecurity-basics',
      status: 'Chưa trả lời',
      uploadpost: '2024-10-12',
    },
    {
      key: 3,
      titlepost: 'Học Máy',
      post: 'Khái niệm và ứng dụng của học máy trong thực tế.',
      url: 'https://example.com/machine-learning',
      status: 'Đã trả lời',
      uploadpost: '2024-10-13',
    },
    {
      key: 4,
      titlepost: 'Phát Triển Ứng Dụng Di Động',
      post: 'Hướng dẫn phát triển ứng dụng cho Android và iOS.',
      url: 'https://example.com/mobile-development',
      status: 'Chưa trả lời',
      uploadpost: '2024-10-14',
    },
    {
      key: 5,
      titlepost: 'Thiết Kế UX/UI',
      post: 'Các nguyên tắc thiết kế UX/UI cho website.',
      url: 'https://example.com/ux-ui-design',
      status: 'Đã trả lời',
      uploadpost: '2024-10-15',
    },
    {
      key: 6,
      titlepost: 'Cloud Computing',
      post: 'Khái niệm và lợi ích của điện toán đám mây.',
      url: 'https://example.com/cloud-computing',
      status: 'Chưa trả lời',
      uploadpost: '2024-10-16',
    },
    {
      key: 7,
      titlepost: 'Python cho Người Mới Bắt Đầu',
      post: 'Lập trình Python dành cho người mới.',
      url: 'https://example.com/python-beginners',
      status: 'Đã trả lời',
      uploadpost: '2024-10-17',
    },
    {
      key: 8,
      titlepost: 'Chạy Thử Phần Mềm',
      post: 'Tại sao kiểm thử phần mềm là cần thiết?',
      url: 'https://example.com/software-testing',
      status: 'Chưa trả lời',
      uploadpost: '2024-10-18',
    },
    {
      key: 9,
      titlepost: 'Blockchain và Tiền Điện Tử',
      post: 'Khái niệm về blockchain và ứng dụng của nó.',
      url: 'https://example.com/blockchain-cryptocurrency',
      status: 'Đã trả lời',
      uploadpost: '2024-10-19',
    },
    {
      key: 10,
      titlepost: 'Marketing Kỹ Thuật Số',
      post: 'Chiến lược marketing trong thời đại số.',
      url: 'https://example.com/digital-marketing',
      status: 'Chưa trả lời',
      uploadpost: '2024-10-20',
    },
  ];











  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedCheckbox, setSelectedCheckbox] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelectChange = (selectedRowKeys: any) => {
    setSelectedCheckbox(selectedRowKeys);
    if (selectedRowKeys.length > 0) {
      showModal(selectedRowKeys.length);
    }
  };
  const rowSelection = {
    onChange: onSelectChange,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const showModal = (count: any) => {
    Swal.fire({
      icon: "info",
      title: `Bạn Vừa Chọn ${count} Bài Viết`,
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
          title: `Bạn có chắc chắn muốn xóa ${count} Bài Viết này?`,
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
          text: `Đã mở trang sửa cho ${count} Bài Viết`,
          confirmButtonText: 'OK',
        });
      }
    });
  };





  return (
    <div className='flex  flex-col p-12 gap-5 bg-[#f2edf3]'>
      <div className='flex-1 gap-3 bg-white flex flex-col rounded-xl shadow-lg'>
        <div className='flex items-center justify-between box-border p-[24px]'>
          <span className='text-[30px] font-medium text-[#ffd700]'>Bài Viết</span>
          <div className='flex gap-3'>
            <Button className='p-10'>
              <IoCloudDownloadOutline className='text-[18px]' />
              Tải về PDF
            </Button>
            <Link to={'/admin/quản-lí-bài-viết/quản-lí-bình-luận-bài-viết'}>
              <Button className='p-10' color="danger" variant="solid">
                Xem Bình Luận Bài Viết
              </Button>
            </Link>
            <Link to={'/admin/quản-lí-bài-viết/thêm-bài-viết-mới'}>
              <Button className='p-10' type="primary">
                <TbPlaylistAdd className='text-[18px]' />
                Bài Viết Mới
              </Button>
            </Link>
          </div>
        </div>

        <div className='flex p-[24px] items-center justify-between gap-3'>
          <div className='flex-1 flex bg-[#00000008] focus:outline-dotted rounded-lg p-[16px]'>
            <input type="text" className='flex-1 text-[15px] outline-none bg-transparent' placeholder='Tìm kiếm bài viết...' />
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
        </div>
      </div>
    </div >
  );
}

export default AdminBlog;
