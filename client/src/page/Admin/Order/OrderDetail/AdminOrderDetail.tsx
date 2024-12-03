import {  Table } from 'antd'
import  { useEffect, useState } from 'react'

import './OrderDetail.css';
import {  useParams } from 'react-router-dom'
import { useAppDispatch } from '../../../../redux/hooks'
import { getDetailOrder } from '../../../../service/order/order.service'
import { formatCurrencyVND } from '../../../../utils'
import ButtonOrder from './Componnent/ButtonOrder'
import { colorText } from '../../../../constants'

function AdminOrderDetail() {
  const { id } = useParams();

  
  
  const [order,setOrder]=useState({})
const [listProduct,setListProduct]=useState([]);
  // const detailOrderList=useAppSelector((state)=>state.listOrder.detailOrder)
  const dispatch=useAppDispatch()
  const [detailOrder,setDetailOrder]=useState([]); 
  const columns = [
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      render: (text:string, record:any) => {
        return ( 
        <div className='flex gap-[.2rem]'>
          <div className='w-[80px]'>
            <img src="https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg" alt="" />
          </div>
          <div>
           <div className='text-[1.5rem] font-semibold mb-[.2rem]'>{record.name}</div> 
           <div>256GB/Titan xanh</div>
           <div>Mã sản phẩm: ipmax-1s</div>
          </div>
          
        </div>
        ) 
       },

      width: '40%',
    },
    {
      title: 'Đơn giá',
      dataIndex: 'product_price',
      render:(text:number,value)=>{
        return (
          <div className='text-customColor font-semibold text-center'>
            
            {formatCurrencyVND(text )}

            
            </div>
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
      dataIndex: 'product_price',
      render: (text:number, record) => {
      console.log(record);
      
        return (
          <div className='text-[#FF0000] font-semibold text-center'>
            {formatCurrencyVND(text * (1 - Number(record?.product_discount / 100 ||0)))}

          </div>
        );
      }

      

 
    
    },
  ];
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const resp = await getDetailOrder(Number(id));
        const details = resp.data.content;
  
        setDetailOrder(details);
  
        if (details.length > 0) {
          setOrder(details[0]?.order); 
        }
  
        const products = details.map(detail => ({
          quanlity: detail.detail_order_quality,
          name: detail.product.product_name,
          product_price: detail.detail_order_price,
          product_discount: detail.discount_product,
          product_hot: detail.product.product_hot,
          image_id: detail.product.image_id,
          category_id: detail.product.category_id,
        }));
  
        setListProduct(products);
      } catch (e) {
        console.log(e);
      }
    };
  
    fetchApi();
  }, [id]);

 
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
const orderId = id; // The order ID from the URL params


  return (
    <div >
    {/* Header */}
    <header className="flex text-[1.6rem] justify-between items-center bg-purple-600 text-white p-4 rounded-lg">
      <div>
        <h1 className="font-bold">Đơn hàng: {id}</h1>
        <p className="">Ngày đặt: {order.order_date}</p>
        <p className="">Nhân viên tư vấn: Nguyễn Tấn Thịnh - thinhntan@gmail.com</p>
      </div>
      <span
    className="px-4 py-2 rounded-full text-[1.5rem]"
    style={{
      backgroundColor: colorText.find(c => c.status === order?.order_status)?.color || '#ccc',
      color: '#fff',
    }}
  >
    {colorText.find(c => c.status === order?.order_status)?.text || 'Không xác định'}
  </span>    </header>

    {/* Customer & Receiver Information */}
    <section className="grid grid-cols-2 gap-4 mt-4">
      {/* Customer */}
      <div className="bg-purple-100 p-4 rounded-lg">
        <h2 className="font-bold text-purple-800">Khách hàng</h2>
        <p>{order?.user?.user_name}</p>
        <p>{order?.phone_number}</p>
      </div>
      {/* Receiver */}
      <div className="bg-purple-100 p-4 rounded-lg">
        <h2 className="font-bold text-purple-800">Người nhận</h2>
        <p>Nguyễn Tấn Thịnh</p>
        <p>0355254984</p>
        <p>140/93 Vườn Lài, An Phú Đông</p>
      </div>
    </section>

    {/* Product List */}

    {/* Payment Information */}
    <section className="mt-6 grid grid-cols-3 gap-4">
      <div className="col-span-2 bg-purple-100 p-4 rounded-lg">
        <h2 className="font-bold text-purple-800">Phương thức thanh toán</h2>
        <p>Momo: 30.000.000đ</p>
        <p>Tiền mặt: 258.000đ</p>
      </div>
      <div className="bg-purple-100 p-4 rounded-lg">
        <h2 className="font-bold text-purple-800">Chi tiết thanh toán</h2>
        <p className='text-[1.7rem]  py-[1rem]'>Tổng tiền hàng: <span className='font-semibold'>{formatCurrencyVND(order?.order_total)}</span></p>
            <p className='text-[1.7rem]  py-[1rem]'>Tổng tiền ship: <span className='font-semibold'>30.000</span></p>
            <p className='text-[1.7rem]  py-[1rem]'>Giảm giá: <span className='font-semibold'>{order?.discount_discount?.discount_percent || 0}%</span></p>
            <p className='text-[1.7rem]  py-[1rem]'>Thành tiền: <span className='font-semibold'>{formatCurrencyVND(Number(order?.order_total) * (1 - Number(order?.discount_discount?.discount_percent / 100 ||0)) + 30000)}</span></p>
        <div className="mt-4 flex gap-2">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600">
            Hủy đơn
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700">
            In hóa đơn
          </button>
        </div>
      </div>
    </section>
    <section className="mt-6">
      <h2 className="font-bold text-[1.5rem] mt-[1rem]">Sản phẩm của khách hàng</h2>
      <div className="mt-2 rounded-lg table-detail-order">
    
 
        <Table columns={columns} dataSource={listProduct} onChange={onChange} className='' />

      </div>
      <div className='mt-[2rem] '>
      <ButtonOrder orderStatuses={detailOrder[0]?.order?.order_statuses} orderId={detailOrder[0]?.order?.order_id} />
      </div>
     
      
    </section>

  </div>
  );
}

export default AdminOrderDetail