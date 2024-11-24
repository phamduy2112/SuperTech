
import { Popover, Button, Checkbox, Table, } from 'antd';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { FiFilter } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { BiSolidEdit } from 'react-icons/bi';
import { CiBookmarkRemove } from 'react-icons/ci';
import AdminAddCatelogry from './Component/AdminAddCatelogry';
import AdminEditCatelogry from './Component/AdminEditCatelogry';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { deleteCategoryThunk, getCatelogryThunk } from '../../../redux/catelogry/catelogry.slice';


function AdminCatelogry() {

  const [selectedCheckbox, setSelectedCheckbox] = useState('');
  const [key, setKey] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEdit = (key: any) => {
    setKey(key)
  }
  const DataCategory = [
    { label: 'Điện thoại', value: 1 },
    { label: 'Laptop', value: 2 },
    { label: 'Table', value: 3 },
  ];
  // const dispatch=useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDelete = (key: any) => {
  dispatch(deleteCategoryThunk(key))

  
  };

  const columns = [
    {
      title: 'STT', // Serial Number
      render: (_, __, index:number) => index + 1, // Display the row index + 1 as STT
      key: 'stt', // Key for this column
    },
    // {
    //   title: 'Hình',
    //   dataIndex: 'image',
    //   key: 'image',
    //   render: (src: string) => (
    //     <img className='rounded-md object-cover' src={src} alt="" style={{ width: 50, height: 50 }} />
    //   ),
    // },
    {
      title: 'Tên Danh Mục',
      dataIndex: 'category_name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Ngày',
      dataIndex: 'category_date_task',
    },
    {
      title: 'Loại chung',
      dataIndex: 'category_dad',
      render: (value: number) => {
        const category = DataCategory.find((item) => item.value === value);
        return category ? category.label : 'Không xác định'; // Return the label or a fallback text
      },
    },
    {
      title: 'Vai Trò',
      dataIndex: 'category_task',
      render: (value) => value == 1 ? "true" : "false",
      
    },
    {
      title: 'Tác Vụ',
      key: 'key',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (_,record: any) => (
        <div className='flex text-[24px] box-border gap-1 items-center'>
          <AdminEditCatelogry category={record}
          />
          <CiBookmarkRemove
            className='cursor-pointer text-red-300 transition-all duration-700 hover:text-[red]'
            onClick={() => handleDelete(record.category_id)}
          />
        </div>
      ),
    },
  ];




  const dispatch=useAppDispatch()
  const dataCategories=useAppSelector(state=>state.category.listCatelories)
  useEffect(()=>{

    dispatch(getCatelogryThunk(""))
  },[dispatch])
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
            <input type="text" 
            className='flex-1 text-[15px] outline-none bg-transparent' placeholder='Tìm kiếm danh mục sản phẩm...' />
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
            dataSource={dataCategories}
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
