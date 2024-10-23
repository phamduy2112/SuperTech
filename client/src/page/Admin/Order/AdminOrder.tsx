

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

function AdminOrder() {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEdit = (event:any,key: any) => {
    event.stopPropagation();
    Swal.fire({
      icon: 'info',
      text: `Đã mở trang sửa cho đơn hàng có ID: ${key}`,
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/admin/quản-lí-đơn-hàng/sửa-đơn-hàng/${key}`);
      }
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDelete = (event:any,key: any) => {
    event.stopPropagation();

    Swal.fire({
      icon: 'warning',
      showDenyButton: true,
      title: `Bạn Chọn Đơn Hàng Có ID ${key}`,
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
      title: 'Người Mua',
      dataIndex: 'userName',
    }, {
      title: 'Hình Người Dùng',
      dataIndex: 'image',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (src: any) => (
        <img className='rounded-full object-cover' src={src} alt="" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: 'Số Điện Thoại',
      dataIndex: 'phone',
    },
    {
      title: 'Số Lượng',
      dataIndex: 'quantity',
    },
    {
      title: 'Giá Gốc',
      dataIndex: 'originalAmount',
      render: (text: string) => `${Number(text).toLocaleString('vi') + ' VNĐ'}`,
    },
    {
      title: 'Giá Đã Giảm',
      dataIndex: 'finalAmount',
      render: (text: string) => `${Number(text).toLocaleString('vi') + ' VNĐ'}`,

    },
    {
      title: 'Trạng Thái',
      dataIndex: 'status',
      render: (text: string) => (
        <div className="flex-1 flex items-center gap-3">
          <div className={`w-[10px] rounded-full h-[10px] ${text === 'Giao thành công' ? 'bg-[#2af52a]' : ''} ${text === 'Đang chuẩn bị' ? 'bg-[#0022ff]' : ''} ${text === 'Đang giao' ? 'bg-[#ffd000]' : ''} ${text === 'Hủy hàng' ? 'bg-[red]' : ''} ${text === 'Trả hàng' ? 'bg-[#ff5e00]' : ''}`}></div>
          {text}
        </div>
      ),
    },
    {
      title: 'Phương Thức Thanh Toán',
      dataIndex: 'paymentMethod',
    }, {
      title: 'Ngày Đặt Hàng',
      dataIndex: 'orderDate',
    },

    {
      title: 'Tác Vụ',
      key: 'key',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (record: any) => (
        <div className='flex z-[100] text-[24px] box-border gap-1 items-center'>
          <BiSolidEdit
            className='cursor-pointer text-[#9000ff67] transition-all duration-700 hover:text-[#9000ffcb]'
            onClick={(event) => handleEdit(event, record.key)} // Thêm event
          />
          <CiBookmarkRemove
            className='cursor-pointer text-red-300 transition-all duration-700 hover:text-[red]'
            onClick={(event) => handleDelete(event, record.key)} // Thêm event
          />
        </div>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      userName: "Nguyễn Văn A",
      image: "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/453068612_1282693249770446_8857638388273159168_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=cCIG9aV3AIwQ7kNvgFigUOr&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AjlyvImNP64V1NkKg5IDSko&oh=00_AYAMYl-AwpJcDvCm85N38tvg59OoAnyuEvwnRmcJWnYl_Q&oe=67108E07",
      phone: "0123456789",
      quantity: 3,
      originalAmount: 300000,
      finalAmount: 250000,
      status: "Đang chuẩn bị",
      paymentMethod: "Ngân hàng",
      orderDate: "2024-10-10",
    },
    {
      key: 2,
      userName: "Trần Thị B",
      image: "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/370806166_3341899006026926_5652140347426452061_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=embvYq2tvJ8Q7kNvgHF58xf&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AM1Hb6zNzWNwLtyZWEnsZq4&oh=00_AYAcT9Hy7JPRQGzftaGfh2hRj8QBh7F-JJFHmzQyCUTolw&oe=6710988D",
      phone: "0987654321",
      quantity: 1,
      originalAmount: 100000,
      finalAmount: 80000,
      status: "Đang giao",
      paymentMethod: "Tiền mặt",
      orderDate: "2024-10-09",
    },
    {
      key: 3,
      userName: "Lê Văn C",
      image: "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/461523694_1978401279342494_2569881068674230068_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=6yl3jiHm3JIQ7kNvgFbFTlH&_nc_ht=scontent.fhan20-1.fna&_nc_gid=At7WjN43i-8Dv6oeLTpA-jU&oh=00_AYCI80AQpBo04K_BLuOF3IqtNH0RLwn5A5Z71-dqSAr8NA&oe=671091A3",
      phone: "0912345678",
      quantity: 2,
      originalAmount: 200000,
      finalAmount: 180000,
      status: "Giao thành công",
      paymentMethod: "Ngân hàng",
      orderDate: "2024-10-08",
    },
    {
      key: 4,
      userName: "Phạm Thị D",
      image: "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/453068612_1282693249770446_8857638388273159168_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=cCIG9aV3AIwQ7kNvgFigUOr&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AjlyvImNP64V1NkKg5IDSko&oh=00_AYAMYl-AwpJcDvCm85N38tvg59OoAnyuEvwnRmcJWnYl_Q&oe=67108E07",
      phone: "0934567890",
      quantity: 5,
      originalAmount: 500000,
      finalAmount: 450000,
      status: "Hủy hàng",
      paymentMethod: "Tiền mặt",
      orderDate: "2024-10-07",
    },
    {
      key: 5,
      userName: "Trần Văn E",
      image: "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/370806166_3341899006026926_5652140347426452061_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=embvYq2tvJ8Q7kNvgHF58xf&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AM1Hb6zNzWNwLtyZWEnsZq4&oh=00_AYAcT9Hy7JPRQGzftaGfh2hRj8QBh7F-JJFHmzQyCUTolw&oe=6710988D",
      phone: "0901234567",
      quantity: 4,
      originalAmount: 400000,
      finalAmount: 360000,
      status: "Trả hàng",
      paymentMethod: "Ngân hàng",
      orderDate: "2024-10-06",
    },
    {
      key: 6,
      userName: "Nguyễn Thị F",
      image: "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/461523694_1978401279342494_2569881068674230068_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=6yl3jiHm3JIQ7kNvgFbFTlH&_nc_ht=scontent.fhan20-1.fna&_nc_gid=At7WjN43i-8Dv6oeLTpA-jU&oh=00_AYCI80AQpBo04K_BLuOF3IqtNH0RLwn5A5Z71-dqSAr8NA&oe=671091A3",
      phone: "0987654321",
      quantity: 1,
      originalAmount: 150000,
      finalAmount: 150000,
      status: "Đang chuẩn bị",
      paymentMethod: "Tiền mặt",
      orderDate: "2024-10-05",
    },
    {
      key: 7,
      userName: "Lê Văn G",
      image: "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/453068612_1282693249770446_8857638388273159168_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=cCIG9aV3AIwQ7kNvgFigUOr&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AjlyvImNP64V1NkKg5IDSko&oh=00_AYAMYl-AwpJcDvCm85N38tvg59OoAnyuEvwnRmcJWnYl_Q&oe=67108E07",
      phone: "0912345678",
      quantity: 3,
      originalAmount: 300000,
      finalAmount: 250000,
      status: "Đang giao",
      paymentMethod: "Ngân hàng",
      orderDate: "2024-10-04",
    },
    {
      key: 8,
      userName: "Phạm Thị H",
      image: "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/370806166_3341899006026926_5652140347426452061_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=embvYq2tvJ8Q7kNvgHF58xf&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AM1Hb6zNzWNwLtyZWEnsZq4&oh=00_AYAcT9Hy7JPRQGzftaGfh2hRj8QBh7F-JJFHmzQyCUTolw&oe=6710988D",
      phone: "0934567890",
      quantity: 2,
      originalAmount: 200000,
      finalAmount: 180000,
      status: "Giao thành công",
      paymentMethod: "Tiền mặt",
      orderDate: "2024-10-03",
    },
    {
      key: 9,
      userName: "Trần Văn I",
      image: "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/461523694_1978401279342494_2569881068674230068_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=6yl3jiHm3JIQ7kNvgFbFTlH&_nc_ht=scontent.fhan20-1.fna&_nc_gid=At7WjN43i-8Dv6oeLTpA-jU&oh=00_AYCI80AQpBo04K_BLuOF3IqtNH0RLwn5A5Z71-dqSAr8NA&oe=671091A3",
      phone: "0901234567",
      quantity: 4,
      originalAmount: 400000,
      finalAmount: 360000,
      status: "Hủy hàng",
      paymentMethod: "Ngân hàng",
      orderDate: "2024-10-02",
    },
    {
      key: 10,
      userName: "Nguyễn Thị J",
      image: "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/453068612_1282693249770446_8857638388273159168_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=cCIG9aV3AIwQ7kNvgFigUOr&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AjlyvImNP64V1NkKg5IDSko&oh=00_AYAMYl-AwpJcDvCm85N38tvg59OoAnyuEvwnRmcJWnYl_Q&oe=67108E07",
      phone: "0987654321",
      quantity: 1,
      originalAmount: 100000,
      finalAmount: 100000,
      status: "Đang chuẩn bị",
      paymentMethod: "Tiền mặt",
      orderDate: "2024-10-01",
    },
  ];


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleRowClick(record: any) {
    Swal.fire({
      icon: 'success',
      text: `Đã mở trang đơn hàng chi tiết: ${record.key}`,
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/admin/quản-lí-đơn-hàng/quản-lí-đơn-hàng-chi-tiết/${record.key}`);
      }
    });



  }



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
      title: `Bạn Vừa Chọn ${count} Đơn Hàng`,
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
          title: `Bạn có chắc chắn muốn xóa ${count} Đơn Hàng này?`,
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
          text: `Đã mở trang sửa cho ${count} Đơn Hàng`,
          confirmButtonText: 'OK',
        });
      }
    });
  };





  return (
    <div className='flex  flex-col p-12 gap-5 bg-[#f2edf3]'>
      <div className='flex-1 gap-3 bg-white flex flex-col rounded-xl shadow-lg'>
        <div className='flex items-center justify-between box-border p-[24px]'>
          <span className='text-[30px] font-medium text-[#ffd700]'>Đơn Hàng</span>
          <div className='flex gap-3'>
            <Button className='p-10'>
              <IoCloudDownloadOutline className='text-[18px]' />
              Tải về PDF
            </Button>
            <Link to={'/admin/quản-lí-đơn-hàng/tạo-đơn-hàng'}>
              <Button className='p-10' type="primary">
                <TbPlaylistAdd className='text-[18px]' />
                Đơn Hàng Mới

              </Button>
            </Link>

          </div>
        </div>

        <div className='flex p-[24px] items-center justify-between gap-3'>
          <div className='flex-1 flex bg-[#00000008] focus:outline-dotted rounded-lg p-[16px]'>
            <input type="text" className='flex-1 text-[15px] outline-none bg-transparent' placeholder='Tìm kiếm đơn hàng...' />
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
                <label className='text-[14px]'>Đơn Cao Nhất</label>
                <Checkbox checked={selectedCheckbox === 'ordermax'} onChange={() => setSelectedCheckbox('ordermax')}></Checkbox>
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
            onRow={(record) => ({
              onClick: () => handleRowClick(record), // Gọi hàm khi click vào hàng
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminOrder;
