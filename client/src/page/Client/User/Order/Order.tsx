import { Space, Table, Tag } from 'antd';
import Search from 'antd/es/input/Search'
import React from 'react'
import './css/TableEdit.css'
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
      render: (text) => <a>{text}</a>,
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
   
    },
    {
      title: 'Trạng thái đơn hàng',
      key: 'action',
   
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: "asdasdasd",
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
      <h3 className='text-[2.5rem] text-[#7500CF] font-semibold'>
      Quản lý Đơn hàng của bạn
      </h3>
      <div className='py-[1rem] flex gap-[1rem]'>
        {
          colorText.map((item)=>{
            return  <div className='flex gap-[.5rem]'>
            <div className={`bg-[${item.color}] w-[1.5rem] h-[1.5rem] rounded-[50%]`}></div>
            <div className={`text-[${item.color}] text-[1.5rem] font-semibold`}>{item.text}</div>
          </div>
          })
        }
       
        
      </div>
      <h4 className='text-[1.7rem] font-semibold'>
      Nếu không nhận hàng hoặc huỷ hàng quá 5 lần sẽ vô hiệu quá tài khoản !
      </h4>
      <form action="" className="w-[100%] h-[38px] py-[1rem]">
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