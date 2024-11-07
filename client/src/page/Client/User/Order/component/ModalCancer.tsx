import React, { useState } from 'react';
import { Modal, Button, Radio, Input } from 'antd';
import axios from 'axios';

interface CancelOrderModalProps {
  orderId: string;
}

const CancelOrderModal: React.FC<CancelOrderModalProps> = ({ orderId }) => {
  const [visible, setVisible] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [customReason, setCustomReason] = useState<string>('');

  const showCancelModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
    setSelectedReason('');
    setCustomReason('');
  };

  const handleOk = async () => {
    const reason = selectedReason === 'other' ? customReason : selectedReason;

    console.log(reason);
    
  };

  return (
    <>
      <button onClick={showCancelModal}>
        Hủy đơn hàng
      </button>
      <Modal
        title="Hủy đơn hàng"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCloseModal}
        okText="Xác nhận"
        cancelText="Hủy"
      >
        <Radio.Group onChange={(e) => setSelectedReason(e.target.value)} value={selectedReason}>
          <Radio value="Đổi ý, không muốn mua nữa">Đổi ý, không muốn mua nữa</Radio>
          <Radio value="Đặt nhầm sản phẩm">Đặt nhầm sản phẩm</Radio>
          <Radio value="Thời gian giao hàng quá lâu">Thời gian giao hàng quá lâu</Radio>
          <Radio value="other">Khác (nhập lý do)</Radio>
        </Radio.Group>
        {selectedReason === 'other' && (
          <Input
            placeholder="Nhập lý do khác"
            value={customReason}
            onChange={(e) => setCustomReason(e.target.value)}
            style={{ marginTop: 10 }}
          />
        )}
      </Modal>
    </>
  );
};

export default CancelOrderModal;