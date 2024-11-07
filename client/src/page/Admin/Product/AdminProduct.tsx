import { Button, Drawer, Select, Table } from 'antd';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { BiSolidEdit } from 'react-icons/bi';
import { CiBookmarkRemove } from 'react-icons/ci';
import { FiFilter } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { TbPlaylistAdd } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
function AdminProduct() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEdit = (key: any) => {
    Swal.fire({
      icon: 'info',
      text: `Đã mở trang sửa cho sản phẩm có ID: ${key}`,
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/admin/quản-lí-sản-phẩm/sửa-sản-phẩm/${key}`);
      }
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

  const Datasao = [
    {
      value: '1',
      label: '⭐',
    },
    {
      value: '2',
      label: '⭐⭐',
    },
    {
      value: '3',
      label: '⭐⭐⭐',
    },
  ]
  const Datamau = [
    {
      value: 'Xanh',
      label: 'Xanh',
    },
    {
      value: 'Vàng',
      label: 'Vàng',
    },

  ]

  const Dataloai = [
    {
      value: 'Iphone',
      label: 'Iphone',
    },
    {
      value: 'Máy tính',
      label: 'Máy tính',
    },
    {
      value: 'Chuột',
      label: 'Chuột',
    }, {
      value: 'Tai nghe',
      label: 'Tai nghe',
    },
  ]
  const Datahang = [
    {
      value: 'Iphone',
      label: 'Iphone',
    },
    {
      value: 'SamSung',
      label: 'SamSung',
    },
    {
      value: 'Xiaomi',
      label: 'Xiaomi',
    }, {
      value: 'Oppo',
      label: 'Oppo',
    },

  ]
  const Dataman = [

    {
      value: '19.9',
      label: 'Oppo',
    },

  ]
  const [priceRange, setPriceRange] = useState([0, 30000000]); // Set initial range values
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (value: any) => {
    setPriceRange(value);
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
            <Link to={`/admin/quản-lí-sản-phẩm/tạo-sản-phẩm-mới`}>
              <Button className='p-10' type="primary">
                <TbPlaylistAdd className='text-[18px]' />
                Thêm Sản Phẩm Mới
              </Button>
            </Link>

          </div>
        </div>

        <div className='flex p-[24px] items-center justify-between gap-3'>
          <div className='flex-1 flex bg-[#00000008] focus:outline-dotted rounded-lg p-[16px]'>
            <input type="text" className='flex-1 text-[15px] outline-none bg-transparent' placeholder='Tìm kiếm sản phẩm...' />
            <GoSearch className='text-[18px]' />
          </div>

          <Button onClick={() => showDrawer()} className='p-10'>
            <FiFilter className='text-[18px]' />
            Lọc
          </Button>
          <Drawer className='' title="Lọc chọn tìm sản phẩm" width={700} onClose={onClose} open={open}>
            <form className='grid grid-cols-3 gap-[20px]' action="">
              <div className='flex h-auto flex-col gap-4'>
                <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Tên sản phẩm</label>
                <input type='text' className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />

              </div>
              <div className='flex h-auto flex-col gap-4'>
                <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Số sao</label>
                <Select
                  showSearch
                  placeholder="Vui lòng chọn mức sao ban đầu "
                  optionFilterProp="label"
                  options={Datasao}
                  className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px]  outline-none  '

                />
              </div>
              <div className='flex h-full flex-col gap-4'>
                <label htmlFor='color' className='text-[13px] text-[#81818177] font-medium'>Màu sắc</label>
                <Select
                  showSearch
                  placeholder="Vui lòng chọn màu"
                  optionFilterProp="label"
                  options={Datamau}
                  className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] outline-none'
                />
              </div>
              <div className='flex h-full flex-col gap-4'>
                <label htmlFor='color' className='text-[13px] text-[#81818177] font-medium'>Loại</label>
                <Select
                  showSearch
                  placeholder="Vui lòng chọn loại"
                  optionFilterProp="label"
                  options={Dataloai}
                  className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] outline-none'
                />
              </div>
              <div className='flex h-full flex-col gap-4'>
                <label htmlFor='color' className='text-[13px] text-[#81818177] font-medium'>Hãng</label>
                <Select
                  showSearch
                  placeholder="Vui lòng chọn hãng"
                  optionFilterProp="label"
                  options={Datahang}
                  className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] outline-none'
                />
              </div>
              <div className='flex h-full flex-col gap-4'>
                <label htmlFor='color' className='text-[13px] text-[#81818177] font-medium'>Màn hình</label>
                <Select
                  showSearch
                  placeholder="Vui lòng chọn màn hình"
                  optionFilterProp="label"
                  options={Dataman}
                  className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] outline-none'
                />
              </div>
              <div className='flex h-full flex-col gap-4'>
                <label htmlFor='ram' className='text-[13px] text-[#81818177] font-medium'>RAM</label>
                <Select
                  showSearch
                  placeholder="Vui lòng chọn RAM"
                  optionFilterProp="label"
                  options={[
                    { label: '4GB', value: '4GB' },
                    { label: '6GB', value: '6GB' },
                    { label: '8GB', value: '8GB' },
                    { label: '12GB', value: '12GB' },
                    { label: '16GB', value: '16GB' },
                  ]}
                  className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] outline-none'
                />
              </div>

              <div className='flex h-full flex-col gap-4'>
                <label htmlFor='rom' className='text-[13px] text-[#81818177] font-medium'>ROM</label>
                <Select
                  showSearch
                  placeholder="Vui lòng chọn ROM"
                  optionFilterProp="label"
                  options={[
                    { label: '64GB', value: '64GB' },
                    { label: '128GB', value: '128GB' },
                    { label: '256GB', value: '256GB' },
                    { label: '512GB', value: '512GB' },
                  ]}
                  className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] outline-none'
                />
              </div>

              <div className='flex h-full flex-col gap-4'>
                <label htmlFor='pin' className='text-[13px] text-[#81818177] font-medium'>Dung lượng pin</label>
                <Select
                  showSearch
                  placeholder="Vui lòng chọn dung lượng pin"
                  optionFilterProp="label"
                  options={[
                    { label: '3000mAh', value: '3000mAh' },
                    { label: '4000mAh', value: '4000mAh' },
                    { label: '5000mAh', value: '5000mAh' },
                    { label: '6000mAh', value: '6000mAh' },
                  ]}
                  className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] outline-none'
                />
              </div>

              <div className='flex h-full flex-col gap-4'>
                <label htmlFor='tinh_nang' className='text-[13px] text-[#81818177] font-medium'>Tính năng</label>
                <Select
                  showSearch
                  placeholder="Vui lòng chọn tính năng"
                  optionFilterProp="label"
                  options={[
                    { label: 'Chống nước', value: 'Chống nước' },
                    { label: 'Camera tốt', value: 'Camera tốt' },
                    { label: 'Mặt kính cường lực', value: 'Mặt kính cường lực' },
                  ]}
                  className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] outline-none'
                />
              </div>

              <div className='flex h-full flex-col gap-4'>
                <label htmlFor='so_luong' className='text-[13px] text-[#81818177] font-medium'>Số lượng</label>
                <Select
                  showSearch
                  placeholder="Vui lòng chọn số lương"
                  optionFilterProp="label"
                  options={[
                    { label: 'Dưới 10 cái', value: 'Dưới 10 cái' },
                    { label: 'Từ 10 cái đến 50 cái', value: 'Từ 10 cái đến 50 cái' },
                    { label: 'Trên 50 cái', value: 'Trên 50 cái' },
                  ]}
                  className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] outline-none'
                />
              </div>
              <div className='flex h-full flex-col gap-4'>
                <label htmlFor='so_luong' className='text-[13px] text-[#81818177] font-medium'>Giảm giá</label>
                <Select
                  showSearch
                  placeholder="Vui lòng chọn số giảm giá"
                  optionFilterProp="label"
                  options={[
                    { label: '10%', value: '10%' },
                    { label: '30%', value: '30%' },
                    { label: '50%', value: '50%' },
                  ]}
                  className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] outline-none'
                />
              </div>
              <div className='flex col-span-3 h-full flex-col gap-4'>
                <label htmlFor='price' className='text-[13px] text-[#81818177] font-medium'>Giá (VNĐ)</label>
                <Slider
                  range
                  min={0}
                  max={30000000}
                  value={priceRange}
                  onChange={onChange}
                  className='bg-[#81818113]'
                />
                <div className='flex justify-between text-[13px] text-[#81818177]'>
                  <span>{priceRange[0].toLocaleString()} VNĐ</span>
                  <span>{priceRange[1].toLocaleString()} VNĐ</span>
                </div>
              </div>
              <div className='col-span-3 flex h-[350px] items-end justify-center pb-[20px] flex-row flex-1 gap-4'>
                <Button  className='w-[150px] bg-transparent h-[45px]' color="danger" variant="dashed">
                  Hủy bỏ
                </Button>
                <Button color="primary" className='w-[150px] h-[45px]'  variant="solid">
                  Tìm kiếm
                </Button>
              </div>



            </form>

          </Drawer>
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
