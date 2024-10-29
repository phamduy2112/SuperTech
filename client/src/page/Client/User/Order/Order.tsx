import { Space, Table, Tag, Tooltip } from 'antd';
import Search from 'antd/es/input/Search'
import React from 'react'
import './css/TableEdit.css'
import { NavLink } from 'react-router-dom';
function Order() {
  const colorText=[
    {
      color:'#DB363B',
      text:"Đang chờ duyệt"
    },
    {
      color:'#FFCC00',
      text:"Đang chuẩn bị hàng"
    },
    {
      color:'#2277C6',
      text:"Đang giao hàng"
    },
    {
      color:'#2101B0',
      text:"Đã huỷ hàng"
    },
    {
      color:'#04C621',
      text:"Thành công"
    },
    {
      color:'#000000',
      text:"Không nhận hàng"
    },
  ]
  const columns = [
    {
      title: 'Đơn hàng',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <NavLink to={""} className="text-[#0084FF]">{text}</NavLink>,
    },
    {
      title: 'Ngày mua',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tổng tiền',
      key: 'tags',
      dataIndex: 'tags',
      render: (text) => <NavLink to={""} className="text-[red] font-semibold">{text}</NavLink>,

   
    },
    {
      title: 'Trạng thái',
      key: 'trangThai',
      dataIndex: 'trangThai',
      render:(text)=>{
        return (
          <div className='flex justify-center cursor-pointer'>
              <Tooltip title="Đang chờ duyệt">
              <div className={`bg-[#DB363B] w-[1.5rem] h-[1.5rem] rounded-[50%]`}></div>
              </Tooltip>
          
                 </div>
        )

       

      }
    },
    {
      title: '',
      key: 'edit',
      render:()=>{
        return (
          <div className='flex gap-[.5rem]'>
          <NavLink to="" className="py-[0.2rem] px-[.5rem] border text-[1.3rem]">Xem</NavLink>
          <button className='py-[0.2rem] px-[.5rem] border text-[1.3rem]'>Huỷ hàng</button>
        </div>
        )
     
      }
    },
  ];
  const data = [
    {
      key: '1',
      name: '#3054',
      age: "2024-05-21 10:15",
      address: 'New York No. 1 Lake Park',
      tags: "5.000.000đ",
      TrangThai:1
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: "ASdasdasd",
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: "ASdasd",
    },
  ];
  return (
    <div>
      <h3 className='text-[2.5rem] text-customColor font-semibold'>
      Quản lý Đơn hàng của bạn
      </h3>
      <div className='py-[1rem] flex gap-[1rem]'>
  
        <div className='flex gap-[.5rem]'>
            <div className={`bg-[#DB363B] w-[1.5rem] h-[1.5rem] rounded-[50%]`}></div>
            <div className={`text-[#DB363B] text-[1.5rem] font-semibold`}>Đang chờ duyệt</div>
          </div>
       
        <div className='flex gap-[.5rem]'>
            <div className={`bg-[#FFCC00] w-[1.5rem] h-[1.5rem] rounded-[50%]`}></div>
            <div className={`text-[#FFCC00] text-[1.5rem] font-semibold`}>Đang chuẩn bị hàng</div>
          </div>
       
        <div className='flex gap-[.5rem]'>
            <div className={`bg-[#2277C6] w-[1.5rem] h-[1.5rem] rounded-[50%]`}></div>
            <div className={`text-[#2277C6] text-[1.5rem] font-semibold`}>Đang giao hàng</div>
          </div>
       
        <div className='flex gap-[.5rem]'>
            <div className={`bg-[#2101B0] w-[1.5rem] h-[1.5rem] rounded-[50%]`}></div>
            <div className={`text-[#2101B0] text-[1.5rem] font-semibold`}>Đã huỷ hàng</div>
          </div>
       
        <div className='flex gap-[.5rem]'>
            <div className={`bg-[#04C621] w-[1.5rem] h-[1.5rem] rounded-[50%]`}></div>
            <div className={`text-[#04C621] text-[1.5rem] font-semibold`}>Thành công</div>
          </div>
       
        <div className='flex gap-[.5rem]'>
            <div className={`bg-[#000000] w-[1.5rem] h-[1.5rem] rounded-[50%]`}></div>
            <div className={`text-[#000000] text-[1.5rem] font-semibold`}>Không nhận hàng</div>
          </div>
       
        
      </div>
      <h4 className='text-[1.7rem] font-semibold'>
      Nếu không nhận hàng hoặc huỷ hàng quá 5 lần sẽ vô hiệu quá tài khoản !
      </h4>
      <form action="" className="w-[100%] h-[38px] py-[1rem] formEdit">
      <Search
      placeholder="Tìm kiếm theo mã đơn hàng"
      allowClear
      // onSearch={onSearch}
      className='w-[100%] inputSearch'
    />
            </form>
            
      <div className='tableEdit'>
      <Table columns={columns} dataSource={data} className='mt-[3rem]'/>
      </div>
    </div>
  )
}

export default Order