import { Table } from 'antd';
import React from 'react'

function OrderDetail() {
  const columns = [
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      render: (text:string, record) => {
        return ( <div className='flex gap-[.2rem]'>
          <div className='w-[80px]'>
            <img src="https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg" alt="" />
          </div>
          <div>
           <div className='text-[1.5rem] font-semibold mb-[.2rem]'>{record.name}</div> 
           <div>256GB/Titan xanh</div>
           <div>Mã sản phẩm: ipmax-1s</div>
          </div>
          
        </div>) 
       },

      width: '40%',
    },
    {
      title: 'Đơn giá',
      dataIndex: 'donGia',
      render:(text:string)=>{
        return (
          <div className='text-[#7500CF] font-semibold'>{text}</div>
        )
      }
    },
    {
      title: 'Số lượng',
      dataIndex: 'soLuong',
      

 
    
    },
    {
      title: 'Giảm giá',
      dataIndex: 'giamGia',
      render:(text:string)=>{
        return( <div className='text-red-600 font-semibold'>
          {text}%

        </div>)
      }

 
    
    },
    {
      title: 'Tổng',
      dataIndex: 'total',
      render: (text:string, record) => {
       return ( <div className='text-[#FF0000] font-semibold'>
        {record.donGia * record.soLuong * (1 - record.giamGia / 100)}
      đ
       </div>) 
      }

      

 
    
    },
  ];
  const data = [
    {
      key: '1',
      name: 'MacBook Air 13 inch M2 10GPU',
      img:"https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg",
      color:'Trắng',
      donGia: 320000,
      soLuong: 1,
      giamGia: 20,
    },
   
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <div className='w-[100%] shadow-lg py-[4rem] px-[3rem]'>
      <div>
        <div className='flex justify-between items-center'>
          <h3 className='text-[2.2rem] font-semibold'>Chi tiết đơn hàng <span className='text-[#0084FF]'>#1306</span></h3>
          <p className='text-[1.7rem] font-semibold'>Trạng thái vận chuyển: <span className='text-red-500'>Chưa chuyển</span></p>
        </div>
        <div className='flex gap-[1rem] py-[1rem]'>
          <p className='text-[1.4rem] font-semibold'>Khuyến mãi: <span>0</span></p>
          <p className='text-[1.4rem] font-semibold'>Phí vận chuyển: <span>0</span></p>
          <p className='text-[1.4rem] font-semibold'>Tổng tiền: <span className='text-[red]'>0</span></p>
        </div>
        <div className='flex justify-between'>
          <div className='w-[49%]'>
            <h4 className='font-semibold text-[1.7rem] mb-[1rem]'>Địa chỉ giao hàng</h4>
            <div className='h-[8rem] shadow-md p-[2rem]'>
            <p className='text-[1.5rem] font-semibold'>Địa chỉ: <span>123, Huyện Đất Đỏ, Bà Rịa-Vũng Tàu</span></p>
            <p className='text-[1.5rem] mt-[1rem] font-semibold'>Số điện thoại: <span>0798961321</span></p>
            </div>
          </div>
          <div className='w-[49%]'>
            <h4 className='font-semibold text-[1.7rem] mb-[1rem]'>Phương thức thanh toán</h4>
            <div className='h-[8rem] shadow-md p-[2rem]'>
            <p className='text-[1.5rem] font-semibold'>Thanh toán: <span>Thanh toán qua MoMo</span></p>
            </div>
          </div>
        </div>
        <div className='mt-[3rem] table-detail-order'>
        <Table columns={columns} dataSource={data} onChange={onChange} className='' />;
        
        </div>
        <div className='rounded-lg mt-[1rem]'>
          <button className='bg-yellow-400 text-[1.5rem] p-[1rem] rounded-lg'>Huỷ đơn hàng</button>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail