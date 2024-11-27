import React, { useState } from 'react'
import { Button, Modal } from 'antd';

function ModalPay(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>
           <div onClick={showModal} className="p-4 rounded-lg relative flex items-center bg-white py-5 shadow space-y-1">
               
                  <div className="flex-shrink-0">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      onChange={props.handlePaymentChange}
                      className="w-10 h-6 text-customColor]" // Adjust size if needed
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-[1.8rem] font-semibold">Thanh toán ngân hàng</h4>
                    <p className="text-[1.7rem] text-[#969696] font-medium mt-2">
                      Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi...
                    </p>
                  </div>
                </div>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div>
                <h1>qr</h1>
            </div>
        </Modal>
      </>
    );
}

export default ModalPay