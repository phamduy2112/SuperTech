

import { Button, Checkbox, Popover, Table } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { FiFilter } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { BiSolidEdit } from 'react-icons/bi';
import { CiBookmarkRemove } from 'react-icons/ci';
import AdminCommentProductEdit from './AdminCommentProductEdit';
import AdminCommentProductAdd from './AdminCommentProductAdd';
import { useAppDispatch } from '../../../../redux/hooks';
import { useSelector } from 'react-redux';
import { deleteCommentProductThunk, getCommentAllProductThunk } from '../../../../redux/comment/comment.slice';
import { getProductsThunk } from '../../../../redux/product/product.slice';
import { IMG_BACKEND, IMG_USER_BACKEND } from '../../../../constants';
import { getAllUserThunk } from '../../../../redux/user/user.slice';

function AdminCommentProduct() {
  const AppDispatch = useAppDispatch();
  const AllListComment_Product = useSelector((state: any) => state.listComment.listAllCommnetAdmin);
  const AllProduct = useSelector((state: any) => state.product.listProducts);
  const Alluser = useSelector((state: any) => state.user.Alluser);
  const Token = useSelector((state: any) => state.user.token);

  const [selectedCheckbox, setSelectedCheckbox] = useState('');
  const [key, setKey] = useState(0);

  const handleEdit = (key: any) => {
    setKey(key);
  };

  useEffect(() => {
    AppDispatch(getCommentAllProductThunk());
    AppDispatch(getProductsThunk());
    AppDispatch(getAllUserThunk());
    AppDispatch(getAllUserThunk())
  }, [AppDispatch]);

  const [DataCommentAll, setDataCommentAll] = useState([]);
  const isFetched = useRef(false);

  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const newData = [];

        if (isFetched.current) return;

        for (const commentProduct of AllListComment_Product) {
          for (const product of AllProduct) {
            for (const user of Alluser) {
              if (commentProduct.product_id === product.product_id && commentProduct.user_id === user.user_id) {
                newData.push({
                  commentProduct,
                  product,
                  user,
                });
              }
            }
          }
        }

        if (newData.length > 0) {
          setDataCommentAll(newData);
          isFetched.current = true;
        }
      } catch (error) {
        console.error('Lỗi khi lấy trả lời:', error);
      }
    };

    fetchReplies();
  }, [AllListComment_Product, AllProduct, Alluser]);





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
        const dataThunk = {
          key: key,
          token: Token
        }
        AppDispatch(deleteCommentProductThunk(dataThunk));
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
        <img className='rounded-md object-cover' src={IMG_BACKEND + src} alt="" style={{ width: 50, height: 50 }} />
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
        <img className='rounded-full object-cover' src={
          src == null || src == "" ? `https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg` : IMG_USER_BACKEND + src
        } alt="" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: 'Tên Người Dùng',
      dataIndex: 'userName',
    },
    {
      title: 'Vai Trò',
      dataIndex: 'role',
      render: (text: any) => (
        <div className={`w-[200px] text-white font-medium rounded-md p-2 flex items-center ${text == 11 ? 'bg-[#3aff2085]' : ''} ${text == 10 ? 'bg-[#77757575]' : ''} ${text == 9 ? 'bg-[#1a1c9685]' : ''} ${text == 8 ? 'bg-[#00000093]' : ''} ${text == 7 ? 'bg-[#7c164685]' : ''} ${text == 6 ? 'bg-[#dd741285]' : ''} ${text == 5 ? 'bg-[#ab2af585]' : ''} ${text == 4 ? 'bg-[#f52ac285]' : ''} ${text == 3 ? 'bg-[#3963f085]' : ''} ${text == 2 ? 'bg-[#0eb397d2]' : ''} ${text == 1 ? 'bg-[#b6b30eb7]' : ''} ${text == 0 ? 'bg-[#ff000085]' : ''} gap-4`}>
          <div className={`w-[10px] ml-4 rounded-full h-[10px] ${text == 11 ? 'bg-[#3aff20]' : ''} ${text == 10 ? 'bg-[#77777798]' : ''} ${text == 9 ? 'bg-[#1a1c96]' : ''} ${text == 8 ? 'bg-[#000000]' : ''} ${text == 7 ? 'bg-[#7c1646]' : ''} ${text == 6 ? 'bg-[#dd7412]' : ''} ${text == 5 ? 'bg-[#ab2af5]' : ''} ${text == 4 ? 'bg-[#f52ac2]' : ''} ${text == 3 ? 'bg-[#3963f0b2]' : ''} ${text == 2 ? 'bg-[#2af5d3]' : ''} ${text == 1 ? 'bg-[#ffd000]' : ''} ${text == 0 ? 'bg-[red]' : ''}`}></div>
          {text == 11 ? 'Người Dùng' : ''} {text == 10 ? 'Nhân Viên Thử Việc' : ''} {text == 9 ? 'Nhân Viên Bảo Vệ' : ''}
          {text == 8 ? 'Nhân Viên Kho' : ''}{text == 7 ? 'Nhân Viên Hỗ Trợ' : ''} {text == 6 ? 'Nhân Viên Pháp Lý' : ''}
          {text == 5 ? 'Nhân Viên Kế Toán' : ''} {text == 4 ? 'Nhân Viên Tiếp Thị' : ''} {text == 3 ? 'Nhân Viên IT' : ''}
          {text == 2 ? 'Nhân Viên Bán Hàng' : ''} {text == 1 ? 'Nhân Viên Quản Lí' : ''} {text == 0 ? 'Chủ cửa hàng' : ''}
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

  const convertData = (data) => {
    return data.map((item, index) => {
      const userImage = item.user ? item.user.user_image : 'default_image_url';
      return {
        key: item.commentProduct.comment_id,
        date: new Date(item.commentProduct.comment_date).toLocaleDateString(),
        content: item.commentProduct.comment_content,
        productId: item.product.product_id,
        productImage: item.product.product_colors[0].image.image_one,
        productName: item.product.product_name,
        userImage: userImage,
        userName: item.user ? item.user.user_name : 'Unknown User',
        role: item.user ? item.user.user_role : null,

        rating: item.commentProduct.comment_star,
      };
    });
  };

  const data = convertData(DataCommentAll);

  const findItemByKey = (key: number) => {
    return data.find(item => item.key === key);
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
            <AdminCommentProductAdd />

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
          {
            key != 0 ? <AdminCommentProductEdit props={findItemByKey(key)} /> : ''
          }
        </div>
      </div>
    </div>
  );
}

export default AdminCommentProduct;
