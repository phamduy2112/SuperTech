import { Steps } from 'antd';
import React from 'react';

function StepOrderDetail(props: any) {
  const orderData = props.order;

  // Danh sách các bước mặc định (cho trạng thái đơn hàng bình thường)
  const statusMap = [
    { title: "Đơn hàng đã được nhận" },
    { title: "Shipper đã nhận đơn" },
    { title: "Shipper đang đến nhận hàng" },
    { title: "Shipper đã đến nhận hàng" },
    { title: "Shipper đang giao hàng" },
    { title: "Đơn hàng hoàn tất" }
  ];

  // Danh sách các bước khi đơn hàng bị hủy (trạng thái order_status = 3)
  const statusCancelOrderDetail = [
    { title: "Đơn hàng đã được nhận" },
    { title: "Đơn hàng đã được hủy" }
  ];

  // Chọn danh sách các bước dựa trên trạng thái đơn hàng
  const stepsToShow = orderData?.order_status === 3
    ? statusCancelOrderDetail
    : statusMap;

  // Tạo các mục steps với thời gian nếu có, dựa trên order_status hiện tại
  const stepsItems = stepsToShow.map((step, index) => {
    const status = orderData?.order_statuses?.find(s => s?.order_status === index);
    const statusDescription = status?.created_at
      ? new Date(status.created_at).toLocaleString()
      : "Chưa có thời gian";

    // Đặt trạng thái hiện tại và đã hoàn tất cho mỗi bước
    const isCurrent = orderData?.order_status === index;
    const isCompleted = orderData?.order_status > index;

    return {
      title: step.title,
      description: statusDescription,
      status: isCompleted ? "finish" : isCurrent ? "process" : "wait"
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
