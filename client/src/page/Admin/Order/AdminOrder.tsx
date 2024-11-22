

import { Button, Checkbox, Popover, Table, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2

import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getOrderAllThunk } from '../../../redux/order/Order.slice';

function AdminOrder() {
  const colorText = [
    { status: 0, color: '#FF0000', text: 'Đang chờ duyệt' },       // Màu đỏ
    { status: 1, color: '#FFA500', text: 'Đang chuẩn bị hàng' },  // Màu cam
    { status: 2, color: '#FFFF00', text: 'Đã chuẩn bị hàng' },  
    { status: 3, color: '#0000FF', text: 'Đã huỷ hàng' },         // Màu xanh dương
    { status: 4, color: '#008000', text: 'Đang giao hàng' },      // Màu xanh lá
    { status: 6, color: '#800080', text: 'Thành công' },          // Màu tím
    { status: 5, color: '#000000', text: 'Không nhận hàng' },          // Màu tím
  ];
  
  const navigate = useNavigate();
  const [activeOrder, setActiveOrder] = useState(null); // Lưu trữ ID đơn hàng được active

  const handleActive = (orderId) => {
    setActiveOrder(orderId); // Cập nhật đơn hàng được chọn
    navigate(`/admin/quản-lí-đơn-hàng/quản-lí-đơn-hàng-chi-tiết/${orderId}`);

  };
  

  const [detailOrder,setDetailOrder]=useState([]); 

  const dispatch=useAppDispatch();
  const getOrderAll=useAppSelector((state)=>state.listOrder.listOrder);
  useEffect(()=>{
    dispatch(getOrderAllThunk())
  },[dispatch])
  
  // Trạng thái đang được lọc
  const [filteredOrders, setFilteredOrders] = useState(getOrderAll);



  useEffect(() => {
    setFilteredOrders(getOrderAll); // Cập nhật filteredOrders khi getOrderAll thay đổi
  }, [getOrderAll]);

  // Hàm lọc đơn hàng theo trạng thái
  const handleFilterByStatus = (status) => {
    if (status === "all") {
      setFilteredOrders(getOrderAll); // Hiển thị tất cả đơn hàng nếu chọn "Tất cả"
    } else {
      const filtered = getOrderAll.filter(
        (order) =>
          order?.order_statuses?.some(
            (statusObj) => statusObj.order_status === status
          )
      );
      setFilteredOrders(filtered); // Cập nhật các đơn hàng đã lọc
    }
  };

  
  return (
    <div className="p-12  text-[2rem] bg-gray-100 h-[100vh] flex">
      <div className='w-[95%] m-auto flex'>
      <div className="flex  gap-[2rem] w-[70%] justify-center items-center">
        <div className="w-[100%] mx-auto">
          <div className="bg-white w-[100%] h-[4rem] px-4 flex justify-center items-center">
            <div className="flex justify-center items-center gap-6">
              {colorText.map((item, index) => (
                <div key={index}             onClick={() => handleFilterByStatus(item.status)}
                className="flex items-center gap-3 cursor-pointer">
                  <Tooltip title={item.text}>
                    <div
                      className="w-[1.5rem] h-[1.5rem] rounded-[50%] flex items-center justify-center"
                      style={{
                        backgroundColor: item.color,
                      }}
                    ></div>
                  </Tooltip>
                  <p className="text-[1.5rem] font-semibold leading-none">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white mt-[2rem] p-6 rounded-lg shadow-lg">
           
            <Outlet />
          </div>
        </div>
      </div>

      <div className="w-[30%] rounded-sm h-[92vh] overflow-y-auto bg-gray-100 flex flex-col">
  <div className="p-3 rounded-lg flex-grow">
    {/* Header */}
    <div className="flex text-[1.7rem] text-center justify-between bg-customColor py-[2rem] px-[2rem] text-white">
      <span className="flex-1 text-center">Mã ĐH</span>
      <span className="flex-1 text-center">Trạng thái</span>
      <span className="flex-1 text-center">Tổng tiền</span>
      <span className="flex-1 text-center">Thời gian</span>
    </div>

    {/* Order List */}
    {filteredOrders?.map((item) => {
  // Tìm trạng thái mới nhất từ mảng order_statuses
  const latestStatus = item?.order_statuses?.reduce((latest, current) => {
    return new Date(latest.created_at) > new Date(current.created_at) ? latest : current;
  }, item?.order_statuses[0])?.order_status;

  // Tìm màu sắc dựa trên trạng thái mới nhất
  const statusColor =
    colorText.find((color) => color.status === latestStatus)?.color || "#CCCCCC";

  return (
    <div
      key={item.order_id}
      className={`mt-2 text-center text-[1.6rem] px-[2rem] py-[2rem] rounded-lg shadow cursor-pointer ${
        activeOrder === item.order_id
          ? "bg-purple-200 text-purple-700"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }`}
      onClick={() => handleActive(item.order_id)}
    >
      <div className="flex justify-between items-center">
        <span className="flex-1 text-center">#{item.order_id}</span>
        <span className="flex-1 text-center">
          <Tooltip
            title={
              latestStatus
                ? `Trạng thái: ${latestStatus}`
                : "Dữ liệu không tồn tại"
            }
          >
            <div
              className="w-[1.5rem] h-[1.5rem] rounded-[50%]"
              style={{
                backgroundColor: statusColor,
              }}
            />
          </Tooltip>
        </span>
        <span className="flex-1 text-green-500 text-center">3.000.000đ</span>
        <span className="flex-1 text-gray-500 text-center">2 ngày trước</span>
      </div>
    </div>
  );
})}

  </div>

  {/* Button Section */}
  <div className="flex mt-auto gap-[1%] p-3">
    <button className="bg-white w-[33%] h-[5rem]">Tất cả thanh toán</button>
    <button className="bg-white w-[33%]">Thanh toán tại nhà</button>
    <button className="bg-white w-[33%]">Thanh toán Momo</button>
  </div>
</div>
      </div>
     
    </div>
  );

}

export default AdminOrder;
