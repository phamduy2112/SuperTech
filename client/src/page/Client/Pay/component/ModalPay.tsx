import React, { useState } from 'react'
import { Button, Modal } from 'antd';

function ModalPay(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const sotien = 'totalorder';
    const noidung = 'supertech';
    const accountnganhang = 'Fetch api của table của bank xuống rồi show ra'
    const tennganhang = 'tương tự cũng table của bank xuống rồi show ra'
    const stk = 'tương tự cũng table của bank xuống rồi show ra'
  
    return (
      <>
           <div onClick={showModal} className="p-4 rounded-lg relative flex items-center bg-white py-5 shadow space-y-1">
               
                  <div className="flex-shrink-0">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      onChange={props.handlePaymentChange}
                      className="w-10 h-6 text-customColor]"
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-[1.8rem] font-semibold">Thanh toán ngân hàng</h4>
                    <p className="text-[1.7rem] text-[#969696] font-medium mt-2">
                      Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi...
                    </p>
                  </div>
                </div>
        <Modal title="Quét Mã QR Tại Đây" open={isModalOpen}  onCancel={handleCancel} footer="" >
            <div>
               
            <img src={`https://img.vietqr.io/image/${tennganhang}-${stk}-compact2.jpg?amount=${sotien}&addInfo=${noidung}&accountName=${accountnganhang}`} />
            </div>
        </Modal>
      </>
    );
}

export default ModalPay