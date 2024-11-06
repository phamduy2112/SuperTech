import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { getOrderDetail } from '../../../../redux/order/Order.slice';
import { getDetailOrder } from '../../../../service/order/order.service';
import { formatCurrencyVND } from '../../../../utils';

function OrderDetail() {
  const { id } = useParams(); // Lấy id từ URL
  const idOrder=Number(id)
  const columns = [
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      render: (text:string, record:any) => {
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
      dataIndex: 'product_price',
      render:(text:number)=>{
        return (
          <div className='text-customColor font-semibold text-center'>{formatCurrencyVND(text)}</div>
        )
      }
    },
    {
      title: 'Số lượng',
      dataIndex: 'quanlity',
      render:(text:string)=>{
        return (
          <div className=' font-semibold text-center'>{text}</div>
        )
      }

 
    
    },
    {
      title: 'Giảm giá',
      dataIndex: 'product_discount',
      render:(text:string)=>{
        return( <div className='text-red-600 font-semibold text-center'>
          {text}%

        </div>)
      }

 
    
    },
    {
      title: 'Tổng',
      dataIndex: 'total',
      render: (text:string, record:any) => {
        const donGia =+record.product_price;
        const soLuong = +record.quanlity;
        const giamGia = +record.product_discount;
        const tongTien =donGia-soLuong * (1 - +giamGia / 100);
       
        return (
          <div className='text-[#FF0000] font-semibold text-center'>
            {formatCurrencyVND(tongTien)}
          </div>
        );
      }

      

 
    
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const dispatch=useAppDispatch()
const [detailOrder,setDetailOrder]=useState([]); 
const [user,setUser]=useState({});

const [order,setOrder]=useState({})
const [listProduct,setListProduct]=useState([]);
  useEffect(()=>{
    const fetchApi=async ()=>{
      try {
        const resp = await getDetailOrder(idOrder);
        setDetailOrder(resp.data.content);
        setOrder(detailOrder[0]?.order)
        const products = resp.data.content.map(detail => ({
        quanlity:detail.detail_order_quality,
          name: detail.product.product_name,
          product_price: detail.product.product_price,
          product_star: detail.product.product_star,
          product_discount: detail.product.product_discount,
          product_hot: detail.product.product_hot,
          image_id: detail.product.image_id,
          category_id: 2
        }));
  
        setListProduct(products);
      } catch (e) {
        console.log(e);
      }
    }
    fetchApi()
  },[idOrder])
console.log(detailOrder);

 

  
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
          <p className='text-[1.4rem] font-semibold'>Tổng tiền: <span className='text-[red]'>{order?.order_total}</span></p>
        </div>
        <div className='flex justify-between'>
          <div className='w-[49%]'>
            <h4 className='font-semibold text-[1.7rem] mb-[1rem]'>Địa chỉ giao hàng</h4>
            <div className='h-[8rem] shadow-md p-[2rem]'>
            <p className='text-[1.5rem] font-semibold'>Địa chỉ: <span>{order?.address}</span></p>
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
        <Table columns={columns} dataSource={listProduct} onChange={onChange} className='' />;
        
        </div>
        <div className='rounded-lg mt-[1rem]'>
          <button className='bg-yellow-400 text-[1.5rem] p-[1rem] rounded-lg'>Huỷ đơn hàng</button>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail