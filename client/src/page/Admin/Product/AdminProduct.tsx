import { Button, Checkbox, Popover, Table } from 'antd';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { BiSolidEdit } from 'react-icons/bi';
import { CiBookmarkRemove } from 'react-icons/ci';
import { FiFilter } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { TbPlaylistAdd } from 'react-icons/tb';

function AdminProduct() {
  const [selectedCheckbox, setSelectedCheckbox] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEdit = (key: any) => {
    Swal.fire({
      icon: 'info',
      text: `Đã mở trang sửa cho sản phẩm có ID: ${key}`,
      confirmButtonText: 'OK',
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDelete = (key: any) => {
    Swal.fire({
      icon: 'warning',
      showDenyButton: true,
      title: `Bạn Chọn Sản Phẩm Có ID ${key}`,
      text: `Bạn có chắc muốn xóa?`,
      confirmButtonText: 'Xóa',
      denyButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Đã Xóa',
          text: `Bạn đã xóa sản phẩm với ID ${key}`,
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
  const columns = [
    {
      title: 'ID',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Tên Sản Phẩm',
      dataIndex: 'productName',
    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'image',
      render: (src: string) => (
        <img className='rounded-md' src={src} alt="" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: 'Danh Mục',
      dataIndex: 'category',
    },
    {
      title: 'Giá Gốc',
      dataIndex: 'originalPrice',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (price: any) => (
        <span>{price.toLocaleString()} VNĐ</span>
      ),
    },
    {
      title: 'Giá Đã Giảm',
      key: 'discountedPrice',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (record: any) => {
        const discountedPrice = record.originalPrice * (1 - record.discountPercent / 100);
        return <span>{discountedPrice.toLocaleString()} VNĐ</span>;
      },
    },
    {
      title: 'Ngày Nhập',
      dataIndex: 'date',
    },
    {
      title: 'Số Sao',
      dataIndex: 'rating',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (rating: any) => (
        <div>
          {'⭐'.repeat(rating)}
        </div>
      ),
    },
    {
      title: 'Tác Vụ',
      key: 'action',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (record: any) => (
        <div className='flex text-[24px] gap-1'>
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
      productName: 'Tai Nghe Không Dây',
      image: 'https://zshop.vn/images/detailed/129/iphone-15-pro-finish__5__cjwb-3i.jpg',
      category: 'Tai Nghe',
      originalPrice: 1200000,
      discountPercent: 10,
      date: '2023-10-01',
      rating: 5,
    },
    {
      key: '2',
      productName: 'Cục Sạc Nhanh',
      image: 'https://zshop.vn/images/detailed/129/iphone-15-pro-finish__5__cjwb-3i.jpg',
      category: 'Phụ Kiện',
      originalPrice: 300000,
      discountPercent: 15,
      date: '2023-10-02',
      rating: 4,
    },
    {
      key: '3',
      productName: 'Laptop Gaming',
      image: 'https://zshop.vn/images/detailed/129/iphone-15-pro-finish__5__cjwb-3i.jpg',
      category: 'Laptop',
      originalPrice: 25000000,
      discountPercent: 5,
      date: '2023-10-03',
      rating: 5,
    },
    {
      key: '4',
      productName: 'Bàn Phím Cơ',
      image: 'https://zshop.vn/images/detailed/129/iphone-15-pro-finish__5__cjwb-3i.jpg',
      category: 'Phụ Kiện',
      originalPrice: 1500000,
      discountPercent: 20,
      date: '2023-10-04',
      rating: 4,
    },
    {
      key: '5',
      productName: 'Điện Thoại Thông Minh',
      image: 'https://zshop.vn/images/detailed/129/iphone-15-pro-finish__5__cjwb-3i.jpg',
      category: 'Điện Thoại',
      originalPrice: 18000000,
      discountPercent: 10,
      date: '2023-10-05',
      rating: 5,
    },
    {
      key: '6',
      productName: 'Tai Nghe Chụp Tai',
      image: 'https://zshop.vn/images/detailed/129/iphone-15-pro-finish__5__cjwb-3i.jpg',
      category: 'Tai Nghe',
      originalPrice: 2000000,
      discountPercent: 12,
      date: '2023-10-06',
      rating: 4,
    },
    {
      key: '7',
      productName: 'Cục Sạc Dự Phòng',
      image: 'https://zshop.vn/images/detailed/129/iphone-15-pro-finish__5__cjwb-3i.jpg',
      category: 'Phụ Kiện',
      originalPrice: 800000,
      discountPercent: 15,
      date: '2023-10-07',
      rating: 5,
    },
    {
      key: '8',
      productName: 'Máy Tính Bảng',
      image: 'https://zshop.vn/images/detailed/129/iphone-15-pro-finish__5__cjwb-3i.jpg',
      category: 'Máy Tính Bảng',
      originalPrice: 10000000,
      discountPercent: 10,
      date: '2023-10-08',
      rating: 4,
    },
    {
      key: '9',
      productName: 'Loa Bluetooth',
      image: 'https://zshop.vn/images/detailed/129/iphone-15-pro-finish__5__cjwb-3i.jpg',
      category: 'Phụ Kiện',
      originalPrice: 1500000,
      discountPercent: 5,
      date: '2023-10-09',
      rating: 3,
    },
    {
      key: '10',
      productName: 'Camera Hành Trình',
      image: 'https://zshop.vn/images/detailed/129/iphone-15-pro-finish__5__cjwb-3i.jpg',
      category: 'Máy Ảnh',
      originalPrice: 12000000,
      discountPercent: 15,
      date: '2023-10-10',
      rating: 4,
    },
  ];

  const rowSelection = {
    onChange: onSelectChange,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const showModal = (count: any) => {
    Swal.fire({
      icon: "info",
      title: `Bạn Vừa Chọn ${count} Sản Phẩm`,
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
          title: `Bạn có chắc chắn muốn xóa ${count} Sản Phẩm này?`,
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
          text: `Đã mở trang sửa cho ${count} Sản Phẩm`,
          confirmButtonText: 'OK',
        });
      }
    });
  };

  return (
    <div className='flex flex-col p-12 gap-5 bg-[#f2edf3]'>
      <div className='flex-1 bg-white flex flex-col rounded-xl shadow-lg'>
        <div className='flex items-center justify-between box-border p-[24px]'>
          <span className='text-[30px] font-medium text-[#ffd700]'>Sản Phẩm</span>
          <div className='flex gap-3'>
            <Button className='p-10'>
              <IoCloudDownloadOutline className='text-[18px]' />
              Tải về PDF
            </Button>
            <Button className='p-10' type="primary">
             <Link>
            </Button>
          </div>
        </div>

        <div className='flex p-[24px] items-center justify-between gap-3'>
          <div className='flex-1 flex bg-[#00000008] focus:outline-dotted rounded-lg p-[16px]'>
            <input type="text" className='flex-1 text-[15px] outline-none bg-transparent' placeholder='Tìm kiếm sản phẩm...' />
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
                <label className='text-[14px]'>Sản Phẩm Mắc Nhất</label>
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

export default AdminProduct;
