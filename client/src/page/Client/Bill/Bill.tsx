import React from 'react'
import "./css/billStyle.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Bill() {
  return (
    <div>
          <div className="order-container">
            <div className="order-content">
              <div className="icon-container">
                <div className="circle">
                  <div className="checkmark">
                      <IoMdCheckmarkCircleOutline />
                  </div>
                </div>
              </div>
              <div className="order-text">
                <div className="order-textConfirm">
                  Đặt hàng thành công
                  <p className='order-textConfirmText'>
                    Đơn hàng đã thiết lập thành công. Chúng tôi sẽ liên lạc trực tiếp với quý khách để xác nhận.
                  </p>
                </div>
              </div>
            </div>
            <button className="continue-shopping-button">Tiếp tục mua sắm</button>
          </div>

          <h3 className="invoice-title">Tóm tắt đơn hàng</h3>
          <div className="invoice-container">
              <div className="invoice-header">
                  <img src="https://1000logos.net/wp-content/uploads/2023/04/Starbucks-logo.png" alt="Company Logo" className="company-logo" />
                  <div className="company-info">
                      <h2 className="company-name">SuperTech</h2>
                      <p className="company-address">Địa chỉ: 123 Đường ABC, Quận 1, TP. HCM</p>
                  </div>
              </div>
              <div className="order-info">
                  <p><strong>Ngày đặt hàng:</strong> 21/09/2024</p>
                  <p><strong>Giờ đặt hàng:</strong> 14:35</p>
              </div>
              <div className="invoice-table">
                  <div className="invoice-row header">
                      <span className="row-title">Tên sản phẩm</span>
                      <span className="row-title">Số lượng</span>
                      <span className="row-title">Ngày mua hàng</span>
                      <span className="row-title">Tổng cộng</span>
                      <span className="row-title">Hình thức thanh toán</span>
                      <span className="row-title">Trạng thái vận chuyển</span>
                  </div>
                  <div className="invoice-row">
                      <span className="row-itemName">iPhone 13 Pro Max</span>
                      <span className="row-itemId">x1</span>
                      <span className="row-itemDate">21/09/2024</span>
                      <span className="row-itemPrice">264.000₫</span>
                      <span className="row-itemPayment">Tiền mặt</span>
                      <span className="row-itemProgrs">Đang xác thực</span>
                  </div>
                  <div className="invoice-row">
                      <span className="row-itemName">iPhone 13 Pro Max</span>
                      <span className="row-itemId">x1</span>
                      <span className="row-itemDate">21/09/2024</span>
                      <span className="row-itemPrice">264.000₫</span>
                      <span className="row-itemPayment">Tiền mặt</span>
                      <span className="row-itemProgrs">Đang xác thực</span>
                  </div>
                  <div className="invoice-row">
                      <span className="row-itemName">iPhone 13 Pro Max</span>
                      <span className="row-itemId">x1</span>
                      <span className="row-itemDate">21/09/2024</span>
                      <span className="row-itemPrice">264.000₫</span>
                      <span className="row-itemPayment">Tiền mặt</span>
                      <span className="row-itemProgrs">Đang xác thực</span>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Bill