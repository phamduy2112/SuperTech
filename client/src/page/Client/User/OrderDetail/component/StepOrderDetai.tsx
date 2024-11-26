import { Steps } from 'antd';
import React from 'react';

function StepOrderDetail(props: any) {
  const orderData = props.order;

  // Danh sách các bước mặc định (cho trạng thái đơn hàng bình thường)
  const statusMap = [
    { status: 0, color: '#FF0000', text: 'Đang chờ duyệt' },       // Màu đỏ
    { status: 1, color: '#FFA500', text: 'Đang chuẩn bị hàng' },  // Màu cam
    { status: 2, color: '#FFFF00', text: 'Đã chuẩn bị hàng' },  
    { status: 3, color: '#008000', text: 'Đang giao hàng' },      // Màu xanh lá
    { status: 4, color: '#800080', text: 'Giao hàng thành công' },          // Màu tím
  ];

  // Danh sách các bước khi đơn hàng bị hủy (trạng thái order_status = 3)
  const statusCancelOrderDetail = [
    { title: "Đơn hàng đã được nhận" },
    { title: "Đơn hàng đã được hủy" }
  ];

  // Chọn danh sách các bước dựa trên trạng thái đơn hàng
  const stepsToShow = orderData?.order_status === 6
    ? statusCancelOrderDetail
    : statusMap;

  // Tạo các mục steps với thời gian nếu có, dựa trên order_status hiện tại
  const stepsItems = stepsToShow.map((step, index) => {
    // Find the corresponding status for the current step's index
    const status = orderData?.order_statuses?.find(s => s?.order_status === index);
  
    // Get description for the current step
    const statusDescription = status?.created_at
      ? new Date(status.created_at).toLocaleString()
      : "Chưa có thời gian";
  
    // Determine if the current step is active or completed
    const isCurrent = orderData?.order_status === index;
    const isCompleted = orderData?.order_status > index;
  
    // Get the text and color for the current step (optional styling)
    const stepInfo = statusMap.find(item => item.status === index);
  
    return {
      title: stepInfo?.text || step.title, // Use step-specific title or text
      description: statusDescription, // Display timestamp or default message
      status: isCompleted ? "finish" : isCurrent ? "process" : "wait",
      style: { color: stepInfo?.color }, // Optional: Apply step color dynamically
    };
  });
  

  // Đặt bước hiện tại
  const currentStep = orderData?.order_status || 0;

  return (
    <div>
      <Steps
        direction="vertical"
        size="large"
        current={currentStep}
        items={stepsItems}
      />
    </div>
  );
}

export default StepOrderDetail;
