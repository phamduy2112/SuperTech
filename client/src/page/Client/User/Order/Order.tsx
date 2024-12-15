import { Button, Space, Table, Tag, Tooltip } from 'antd';
import Search from 'antd/es/input/Search'
import React, { useEffect, useRef, useState } from 'react'
import './css/TableEdit.css'
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { changeStatusOrderThunk, getOrderByIdProductThunk } from '../../../../redux/order/Order.slice';
import { formatCurrencyVND, truncateText } from '../../../../utils';
import CancelOrderModal from './component/ModalCancer';
import { colorText } from '../../../../constants';
import dayjs from 'dayjs';
function Order() {

  
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
      title: <div className="whitespace-nowrap">Đơn hàng</div>,
      dataIndex: 'order_id',
      key: 'order_id',
      render: (text) => <NavLink to={""} className="text-[#0084FF]">#{text}</NavLink>,
    },
    {
      title: <div className="whitespace-nowrap">Ngày mua</div>,
      dataIndex: 'order_date',
      key: 'order_date',
      render:(text)=> <div>{ dayjs(text).format('YYYY-MM-DD HH:mm:ss')}</div>
    },
    {
      title: <div className="whitespace-nowrap">Địa chỉ</div>,
      dataIndex: 'address',
      key: 'address',
      render: (text) => <div className="text-[red] font-semibold">
        <Tooltip title={text}>
          {truncateText(text,30)}
        </Tooltip>
      </div>,
    },
    {
      title: <div className="whitespace-nowrap">Tổng tiền</div>,
      key: 'order_total',
      dataIndex: 'order_total',
      render: (text,value) => 
        <NavLink to={""} className="text-[red] font-semibold">
          {formatCurrencyVND(text * (1 - Number(value?.discount_discount?.discount_percent / 100 ||0)))}
        </NavLink>,
    },
    {
      title: <div className="whitespace-nowrap">Trạng thái</div>,
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
<Button 
  type="primary"

>
  <NavLink to={`/don-hang-chi-tiet-cua-ban/${record.order_id}`}>
    Xem
  </NavLink>
</Button>          {record.order_status<=2 ?
          (     
             <CancelOrderModal orderId={record.order_id} />
             
          ) 
          : null}
            
      
        </div>
        )
     
      }
    },
  ];
 useEffect(()=>{
  dispatch(getOrderByIdProductThunk({ searchKey: '', order_status: orderStatus }));
},[dispatch,orderStatus])
  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      <h3 className='text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] text-customColor font-semibold'>
      Quản lý Đơn hàng của bạn
      </h3>
      <div className='py-[1rem] flex flex-col md:flex-row gap-[1rem] overflow-x-auto'>
      <div className='flex flex-wrap gap-[1rem] md:gap-[1.5rem]'> {/* Adjust gap and layout as needed */}

       <button 
        onClick={() => {
            setOrderStatus(0); // Update the order status
          }}
        className='flex text-[1.2rem] md:text-[1.5rem] items-center gap-2 whitespace-nowrap'> {/* Align items vertically */}
          <div className={`bg-[#D32F2F] w-4 md:w-6 h-4 md:h-6 rounded-full`}></div>
          <div className={`text-[#D32F2F] font-semibold`}>
          Đang chờ duyệt
          </div>
        </button>
       <button 
        onClick={() => {
            setOrderStatus(1); // Update the order status
          }}
        className='flex text-[1.2rem] md:text-[1.5rem] items-center gap-2 whitespace-nowrap'> {/* Align items vertically */}
          <div className={`bg-[#FF9800] w-4 md:w-6 h-4 md:h-6 rounded-full`}></div>
          <div className={`text-[#FF9800] font-semibold`}>
          Đang chuẩn bị hàng
          </div>
        </button>
       <button 
        onClick={() => {
            setOrderStatus(2); // Update the order status
          }}
        className='flex text-[1.2rem] md:text-[1.5rem] items-center gap-2 whitespace-nowrap'> {/* Align items vertically */}
          <div className={`bg-[#0288D1] w-4 md:w-6 h-4 md:h-6 rounded-full`}></div>
          <div className={`text-[#0288D1] font-semibold`}>
          Đã chuẩn bị hàng
          </div>
        </button>
        <button 
        onClick={() => {
            setOrderStatus(3); // Update the order status
          }}
        className='flex text-[1.2rem] md:text-[1.5rem] items-center gap-2 whitespace-nowrap'> {/* Align items vertically */}
          <div className={`bg-[#388E3C] w-4 md:w-6 h-4 md:h-6 rounded-full`}></div>
          <div className={`text-[#388E3C] font-semibold`}>
          Đang giao hàng
          </div>
        </button>
       <button 
        onClick={() => {
            setOrderStatus(4); // Update the order status
          }}
        className='flex text-[1.2rem] md:text-[1.5rem] items-center gap-2 whitespace-nowrap'> {/* Align items vertically */}
          <div className={`bg-[#7B1FA2] w-4 md:w-6 h-4 md:h-6 rounded-full`}></div>
          <div className={`text-[#7B1FA2] font-semibold`}>
          Thành công
          </div>
        </button>
        <button 
        onClick={() => {
            setOrderStatus(5); // Update the order status
          }}
        className='flex text-[1.2rem] md:text-[1.5rem] items-center gap-2 whitespace-nowrap'> {/* Align items vertically */}
          <div className={`bg-[#616161] w-4 md:w-6 h-4 md:h-6 rounded-full`}></div>
          <div className={`text-[#616161] font-semibold`}>
          Không nhận hàng
          </div>
        </button>
       
      
       <button 
        onClick={() => {
            setOrderStatus(6); // Update the order status
          }}
        className='flex text-[1.2rem] md:text-[1.5rem] items-center gap-2 whitespace-nowrap'> {/* Align items vertically */}
          <div className={`bg-[#212121] w-4 md:w-6 h-4 md:h-6 rounded-full`}></div>
          <div className={`text-[#212121] font-semibold`}>
          Hủy hàng
          </div>
        </button>
   
    </div>
       
       
        
      </div>
      <h4 className='text-[1.4rem] md:text-[1.7rem] font-semibold'>
      Nếu không nhận hàng hoặc huỷ hàng quá 5 lần sẽ vô hiệu quá tài khoản !
      </h4>
      <form action="" className="w-full h-[38px] py-[1rem] inputSearch">
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
      className='w-full'
    />
            </form>
            
            <div className='tableEdit w-full overflow-x-auto whitespace-nowrap scrollbar-custom'>
            <Table 
        columns={columns} 
        dataSource={listOrder} 
        className='mt-[3rem]'
        
      />
      
      </div>
    </div>
  )
}

export default Order  