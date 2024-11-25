import { Space, Table, Tag, Tooltip } from 'antd';
import Search from 'antd/es/input/Search'
import React, { useEffect, useRef, useState } from 'react'
import './css/TableEdit.css'
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { changeStatusOrderThunk, getOrderByIdProductThunk } from '../../../../redux/order/Order.slice';
import { formatCurrencyVND, truncateText } from '../../../../utils';
import CancelOrderModal from './component/ModalCancer';
function Order() {

  const colorText = [
    { color: '#DB363B', text: 'Đang chờ duyệt' },     
    { color: '#FFCC00', text: 'Đang chuẩn bị hàng' }, 
    { color: '#2277C6', text: 'Đang giao hàng' },    
    { color: '#2101B0', text: 'Đã huỷ hàng' },        
    { color: '#04C621', text: 'Thành công' },        
    { color: '#000000', text: 'Không nhận hàng' },    

  ];
  const [orderStatus, setOrderStatus] = useState(0); // Default status is 0

  const [data,setData]=useState([]);
  const dispatch=useAppDispatch()
  const listOrder=useAppSelector((state)=>state.listOrder.listOrder)

  
  const handleChangeStatus=(id:number,data:number)=>{
    const dataOrder={
      id,
      order_status:data,
      status_order:orderStatus
    }
    // console.log(dataOrder);
    dispatch(changeStatusOrderThunk(dataOrder))
    
  }
  const columns = [
    {
      title: 'Đơn hàng',
      dataIndex: 'order_id',
      key: 'order_id',
      render: (text) => <NavLink to={""} className="text-[#0084FF]">#{text}</NavLink>,
    },
    {
      title: 'Ngày mua',
      dataIndex: 'order_date',
      key: 'order_date',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
      render: (text) => <div className="text-[red] font-semibold">
        
        <Tooltip title={text}>
        {truncateText(text,30)}
        </Tooltip>
      </div>,

    },
    {
      title: 'Tổng tiền',
      key: 'order_total',
      dataIndex: 'order_total',
      render: (text,value) => 
      <NavLink to={""} className="text-[red] font-semibold">
        {formatCurrencyVND(text * (1 - Number(value?.discount_discount?.discount_percent / 100 ||0)))}
        </NavLink>,
// discount_discount
   
    },
  
    {
      title: 'Trạng thái',
      key: 'order_status',
      dataIndex: 'order_status',
      render: (statusIndex) => {
        const statusItem = colorText[statusIndex] || {};
        return (
          <div className='flex justify-center cursor-pointer'>
            <Tooltip title={statusItem.text}>
              <div style={{ backgroundColor: statusItem.color }} className='w-[1.5rem] h-[1.5rem] rounded-[50%]'></div>
            </Tooltip>
          </div>
        );

      }
    },
    {
      title: '',
      key: 'edit',
      render: (text, record) => {
        return (
          <div className='flex gap-[.5rem]'>
          <NavLink to={`/don-hang-chi-tiet-cua-ban/${record.order_id}`} className="py-[0.2rem] px-[.5rem] border text-[1.3rem]">Xem</NavLink>
          {record.order_status<=2 ?
          (     
             <CancelOrderModal orderId={record.order_id} />
             
          ) 
          : null}
            {
              record.order_status==4 ?(
                <button className='py-[0.2rem] px-[.5rem] border text-[1.3rem]'>
                  Bình luận ngay
                </button>
              ) :null
            }
      
        </div>
        )
     
      }
    },
  ];
 useEffect(()=>{
  dispatch(getOrderByIdProductThunk({ searchKey: '', order_status: orderStatus }));
},[dispatch,orderStatus])
  return (
    <div>
      <h3 className='text-[2.5rem] text-customColor font-semibold'>
      Quản lý Đơn hàng của bạn
      </h3>
      <div className='py-[1rem] flex gap-[1rem]'>
      <div className='flex gap-[1.5rem]'> {/* Adjust gap and layout as needed */}
      {/* {colorText.map(({ color, text },index) => (
        <button key={text}
        onClick={() => {
            console.log(`Button clicked: ${text} with index: ${index}`); // Debugging
            setOrderStatus(index); // Update the order status
          }}
        className='flex text-[1.5rem] items-center gap-2'> 
          <div className={`bg-[${color}] w-6 h-6 rounded-full`}></div>
          <div className={`text-[${color}] font-semibold`}>
            {text}
          </div>
        </button>
      ))} */}
       <button 
        onClick={() => {
            setOrderStatus(0); // Update the order status
          }}
        className='flex text-[1.5rem] items-center gap-2'> {/* Align items vertically */}
          <div className={`bg-[#DB363B] w-6 h-6 rounded-full`}></div>
          <div className={`text-[#DB363B] font-semibold`}>
          Đang chờ duyệt
          </div>
        </button>
       <button 
        onClick={() => {
            setOrderStatus(1); // Update the order status
          }}
        className='flex text-[1.5rem] items-center gap-2'> {/* Align items vertically */}
          <div className={`bg-[#FFCC00] w-6 h-6 rounded-full`}></div>
          <div className={`text-[#FFCC00] font-semibold`}>
          Đang chuẩn bị hàng
          </div>
        </button>
       <button 
        onClick={() => {
            setOrderStatus(2); // Update the order status
          }}
        className='flex text-[1.5rem] items-center gap-2'> {/* Align items vertically */}
          <div className={`bg-[#2277C6] w-6 h-6 rounded-full`}></div>
          <div className={`text-[#2277C6] font-semibold`}>
          Đang giao hàng
          </div>
        </button>
       <button 
        onClick={() => {
            setOrderStatus(3); // Update the order status
          }}
        className='flex text-[1.5rem] items-center gap-2'> {/* Align items vertically */}
          <div className={`bg-[#2101B0] w-6 h-6 rounded-full`}></div>
          <div className={`text-[#2101B0] font-semibold`}>
          Đã huỷ hàng
          </div>
        </button>
       <button 
        onClick={() => {
            setOrderStatus(4); // Update the order status
          }}
        className='flex text-[1.5rem] items-center gap-2'> {/* Align items vertically */}
          <div className={`bg-[#04C621] w-6 h-6 rounded-full`}></div>
          <div className={`text-[#04C621] font-semibold`}>
          Thành công
          </div>
        </button>
       <button 
        onClick={() => {
            setOrderStatus(5); // Update the order status
          }}
        className='flex text-[1.5rem] items-center gap-2'> {/* Align items vertically */}
          <div className={`bg-[#000000] w-6 h-6 rounded-full`}></div>
          <div className={`text-[#000000] font-semibold`}>
          Không nhận hàng
          </div>
        </button>
    </div>
       
       
        
      </div>
      <h4 className='text-[1.7rem] font-semibold'>
      Nếu không nhận hàng hoặc huỷ hàng quá 5 lần sẽ vô hiệu quá tài khoản !
      </h4>
      <form action="" className="w-[100%] h-[38px] py-[1rem] inputSearch">
      <Search
      placeholder="Tìm kiếm theo mã đơn hàng"
      allowClear
      onChange={async (e) => {
        if (userRef.current) {
          clearTimeout(userRef.current);
        }
        userRef.current = setTimeout(async () => {
          console.log(e.target.value);
          dispatch(getOrderByIdProductThunk({searchKey:e.target.value,order_status:orderStatus}));
        }, 400);
      }}
      className='w-[100%] '
    />
            </form>
            
      <div className='tableEdit'>
      <Table columns={columns} dataSource={listOrder} className='mt-[3rem]'/>
      
      </div>
    </div>
  )
}

export default Order