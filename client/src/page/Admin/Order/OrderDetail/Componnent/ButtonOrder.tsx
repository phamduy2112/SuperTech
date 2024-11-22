import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../../../../redux/hooks";
import { changeStatusOrderAdminThunk } from "../../../../../redux/order/Order.slice";

interface OrderStatus {
  order_status_id: number;
  order_status: number;
  order_status_text_cancel?: string | null;
  order_id: number;
  created_at: string;
}

interface ButtonOrderProps {
  orderStatuses: OrderStatus[];
  orderId: number;
}

const colorText = [
  { status: 0, color: "#FF0000", text: "Đang chờ duyệt" },
  { status: 1, color: "#FFA500", text: "Đang chuẩn bị hàng" },
  { status: 2, color: "#FFFF00", text: "Đã chuẩn bị hàng" },
  { status: 3, color: "#0000FF", text: "Đã huỷ hàng" },
  { status: 4, color: "#008000", text: "Đang giao hàng" },
  { status: 6, color: "#800080", text: "Thành công" },
  { status: 5, color: "#000000", text: "Không nhận hàng" },
];

function ButtonOrder({ orderStatuses, orderId }: ButtonOrderProps) {
  const dispatch = useAppDispatch();

  const [currentOrderStatus, setCurrentOrderStatus] = useState<OrderStatus | null>(null);

  // Lọc và sắp xếp danh sách trạng thái theo thời gian (lấy trạng thái mới nhất)
  useEffect(() => {
    const latestOrderStatus = orderStatuses
      ?.filter((status) => status.order_id === orderId)
      ?.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )[0];

    // Nếu trạng thái là 0, chuyển thành 1
    if (latestOrderStatus) {
      setCurrentOrderStatus({
        ...latestOrderStatus,
        order_status: latestOrderStatus.order_status === 0 ? 1 : latestOrderStatus.order_status,
      });
    }
  }, [orderStatuses, orderId]);

  // Lấy thông tin từ `colorText` dựa trên trạng thái hiện tại
  const currentColorText = colorText.find(
    (item) => item.status === currentOrderStatus?.order_status
  );

  // Xác định trạng thái tiếp theo
  let nextStatus = 0;
  switch (currentOrderStatus?.order_status) {
    case 0:
      nextStatus = 1; // Chuyển từ "Đang chờ duyệt" sang "Đang chuẩn bị hàng"
      break;
    case 1:
      nextStatus = 2; // Chuyển từ "Đang chuẩn bị hàng" sang "Đã chuẩn bị hàng"
      break;
    case 2:
      nextStatus = 4; // Chuyển từ "Đã chuẩn bị hàng" sang "Đang giao hàng"
      break;
    case 4:
      nextStatus = 6; // Chuyển từ "Đang giao hàng" sang "Thành công"
      break;
    default:
      nextStatus = 0; // Mặc định
  }

  const handleClickChangeOrder = (nextStatus: number, id: number) => {
    const data = {
      order_status: nextStatus,
      order_id: id,
    };

    dispatch(changeStatusOrderAdminThunk(data)).then(() => {
      // Cập nhật lại trạng thái sau khi action thành công
      setCurrentOrderStatus(prevStatus => ({
        ...prevStatus,
        order_status: nextStatus
      }));
    });
  };

  return (
    <div>
      {currentOrderStatus?.order_status === 4 ? (
        // Nếu trạng thái là "Đang giao hàng", hiển thị hai nút
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 text-white rounded"
            style={{ backgroundColor: "#800080" }}
            onClick={() => handleClickChangeOrder(6, orderId)} // Chuyển thành "Thành công"
          >
            Thành công
          </button>
          <button
            className="px-4 py-2 text-white rounded"
            style={{ backgroundColor: "#000000" }}
            onClick={() => handleClickChangeOrder(5, orderId)} // Chuyển thành "Không nhận hàng"
          >
            Không nhận hàng
          </button>
        </div>
      ) : (
        // Nếu không phải "Đang giao hàng", hiển thị nút trạng thái tiếp theo
        <button
          className="px-4 py-2 text-white rounded"
          style={{ backgroundColor: currentColorText?.color || "#808080" }} // Màu mặc định là xám
          disabled={currentOrderStatus?.order_status === 6} // Disable nếu trạng thái là "Thành công"
          onClick={() => handleClickChangeOrder(nextStatus, orderId)}
        >
          {currentColorText?.text || "Trạng thái không xác định"}
        </button>
      )}
    </div>
  );
}

export default ButtonOrder;