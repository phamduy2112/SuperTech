import { Steps } from 'antd';
import React from 'react';
import { formatDate } from '../../../../../utils';

function StepOrderDetail(props: any) {
  const orderData = props.order;

  // Danh sách các bước mặc định
  const statusMap = [
    { status: 0, color: '#FF0000', text: 'Đang chờ duyệt' },       // Màu đỏ
    { status: 1, color: '#FFA500', text: 'Đang chuẩn bị hàng' },  // Màu cam
    { status: 2, color: '#FFFF00', text: 'Đã chuẩn bị hàng' },  
    { status: 3, color: '#008000', text: 'Đang giao hàng' },      // Màu xanh lá
    { status: 4, color: '#800080', text: 'Giao hàng thành công' }, // Màu tím
    { status: 5, color: '#FF4500', text: 'Không nhận hàng' },     // Màu cam đỏ
  ];

  // Danh sách các bước khi đơn hàng bị hủy
  const statusCancelOrderDetail = [
    { title: "Đơn hàng đã được nhận" },
    { title: "Đơn hàng đã được hủy" },
  ];

  // Xây dựng danh sách các bước
  const stepsToShow = orderData?.order_status === 6
    ? statusCancelOrderDetail
    : statusMap;

  // Mảng các bước hiển thị
  let stepsItems = stepsToShow.map((step, index) => {
    const isCancelled = orderData?.order_status === 6;

    if (isCancelled) {
      const cancelTime =
        index === 0
          ? orderData?.order_date
          : orderData?.order_statuses?.find((s) => s?.order_status === 6)?.created_at;

      return {
        title: (
          <div>
            <div>{step.title}</div>
            <div style={{ fontSize: '13px', color: '#888', marginTop: '0' }}>
              {cancelTime ? formatDate(cancelTime) : "Không có thời gian"}
            </div>
          </div>
        ),
        status: index === 0 ? "finish" : "process",
      };
    }

    const status = orderData?.order_statuses?.find((s) => s?.order_status === index);
    const statusTime = status?.created_at;

    const isCurrent = orderData?.order_status === index;
    const isCompleted = orderData?.order_status > index;

    const stepInfo = statusMap.find((item) => item.status === index);

    return {
      title: (
        <div>
          <div>{stepInfo?.text || step.title}</div>
          <div style={{ fontSize: '13px', color: '#888', marginTop: '0' }}>
            {statusTime ? formatDate(statusTime) : "Chưa có thời gian"}
          </div>
        </div>
      ),
      status: isCompleted ? "finish" : isCurrent ? "process" : "wait",
      style: { color: stepInfo?.color },
    };
  });

  // Xử lý trạng thái động khi `Đang giao hàng` và `Không nhận hàng`
  if (orderData?.order_status === 3) {
    const nonAcceptStep = {
      title: (
        <div>
          <div>Không nhận hàng</div>
          <div style={{ fontSize: '13px', color: '#888', marginTop: '0' }}>
            {formatDate(orderData?.non_accept_date)}
          </div>
        </div>
      ),
      status: "wait",
    };

    const successStep = {
      title: (
        <div>
          <div>Giao hàng thành công</div>
          <div style={{ fontSize: '13px', color: '#888', marginTop: '0' }}>
            {formatDate(orderData?.success_date)}
          </div>
        </div>
      ),
      status: "wait",
    };

    // Nếu có "Không nhận hàng" thì không hiển thị "Giao hàng thành công"
    if (orderData?.non_accept_date) {
      stepsItems = stepsItems.filter((item) => item.title && !item.title.includes('Giao hàng thành công'));
      stepsItems.push(nonAcceptStep); // Hiển thị "Không nhận hàng"
    } else if (orderData?.success_date) {
      stepsItems.push(successStep); // Hiển thị "Giao hàng thành công"
    }
  }

  // Đặt bước hiện tại
  const currentStep = orderData?.order_status === 6 ? 1 : orderData?.order_status || 0;

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
