import { IconName } from "react-icons/fa";
import React from 'react'
import './css/style.css'
function Cart() {
  return (
    <div>
       <div className="giohang">Giỏ hàng</div>
        <div className="cart-container">
          <div className="cartInfo">
            <div className="cartTable">
              <table>
                <thead>
                  <tr>
                    <th>SẢN PHẨM</th>
                    <th>SỐ LƯỢNG</th>
                    <th>SỐ TIỀN</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="product">
                      <div className="product-image">
                        <img src="https://th.bing.com/th/id/R.2b8690c98214493b43fd40aedbf5109e?rik=M46%2fJWuDku0bQw&pid=ImgRaw&r=0" alt="Sản phẩm A" />
                      </div>
                      <div className="product-info">
                        <div>Tên: Sản phẩm A</div>
                        <div className="total-price" style={{paddingTop: 10}}>100,000 VND</div>
                      </div>
                    </td>
                    <td>
                      <div className="quantity-buttons">
                        <div className="changeQuantity">-</div>
                        <input className="quantity-number" type="number" defaultValue={1} min={1} readOnly />
                        <div className="changeQuantity" >+</div>
                      </div>
                    </td>
                    <td className="total-price">100,000 VND</td>
                    <td>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(117, 0, 207, 1)'}}><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z" /><path d="M9 10h2v8H9zm4 0h2v8h-2z" /></svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="product">
                      <div className="product-image">
                        <img src="https://th.bing.com/th/id/R.2b8690c98214493b43fd40aedbf5109e?rik=M46%2fJWuDku0bQw&pid=ImgRaw&r=0" alt="Sản phẩm A" />
                      </div>
                      <div className="product-info">
                        <div>Tên: Sản phẩm A</div>
                        <div className="total-price" style={{paddingTop: 10}}>100,000 VND</div>
                      </div>
                    </td>
                    <td>
                      <div className="quantity-buttons">
                        <div className="changeQuantity" onClick="changeQuantity(this, -1)">-</div>
                        <input className="quantity-number" type="number" defaultValue={1} min={1} readOnly />
                        <div className="changeQuantity" onClick="changeQuantity(this, 1)">+</div>
                      </div>
                    </td>
                    <td className="total-price">100,000 VND</td>
                    <td>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(117, 0, 207, 1)'}}><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z" /><path d="M9 10h2v8H9zm4 0h2v8h-2z" /></svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="product">
                      <div className="product-image">
                        <img src="https://th.bing.com/th/id/R.2b8690c98214493b43fd40aedbf5109e?rik=M46%2fJWuDku0bQw&pid=ImgRaw&r=0" alt="Sản phẩm A" />
                      </div>
                      <div className="product-info">
                        <div>Tên: Sản phẩm A</div>
                        <div className="total-price" style={{paddingTop: 10}}>100,000 VND</div>
                      </div>
                    </td>
                    <td>
                      <div className="quantity-buttons">
                        <div className="changeQuantity" onClick="changeQuantity(this, -1)">-</div>
                        <input className="quantity-number" type="number" defaultValue={1} min={1} readOnly />
                        <div className="changeQuantity" onClick="changeQuantity(this, 1)">+</div>
                      </div>
                    </td>
                    <td className="total-price">100,000 VND</td>
                    <td>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(117, 0, 207, 1)'}}><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z" /><path d="M9 10h2v8H9zm4 0h2v8h-2z" /></svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="product">
                      <div className="product-image">
                        <img src="https://th.bing.com/th/id/R.2b8690c98214493b43fd40aedbf5109e?rik=M46%2fJWuDku0bQw&pid=ImgRaw&r=0" alt="Sản phẩm A" />
                      </div>
                      <div className="product-info">
                        <div>Tên: Sản phẩm A</div>
                        <div className="total-price">100,000 VND</div>
                      </div>
                    </td>
                    <td>
                      <div className="quantity-buttons">
                        <div className="changeQuantity" onClick="changeQuantity(this, -1)">-</div>
                        <input className="quantity-number" type="number" defaultValue={1} min={1} readOnly />
                        <div className="changeQuantity" onClick="changeQuantity(this, 1)">+</div>
                      </div>
                    </td>
                    <td className="total-price">100,000 VND</td>
                    <td>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(117, 0, 207, 1)'}}><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z" /><path d="M9 10h2v8H9zm4 0h2v8h-2z" /></svg>
                    </td>
                  </tr>
                  <tr style={{border: '1px solid #7500CF'}}>
                    <td style={{textAlign: 'left'}}>
                      <div className="button-voucher">
                        Thêm voucher
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="cartButton" style={{display: 'flex', justifyContent: 'space-between'}}>
                <button className="continueButton">Tiếp tục</button>
                <button className="deleteButton">Xóa giỏ hàng</button>
              </div>
            </div>
          </div>
          <div className="cartConfirm">
            <div className="voucherBar" />
            <h5> Tiêu 1.500.000đ để nhận được MIỄN PHÍ VẬN CHUYỂN</h5>
            <h5>Mã giảm giá <p style={{fontWeight: 400, color: 'grey'}}>&nbsp;(Tùy chọn)</p></h5>
            <p>Mã mua hàng sẽ được áp dụng ở trang thanh toán</p>
            <input type="text" placeholder="Mã giảm giá" />
            <button>Lưu</button>
            <hr />
            <h5>Voucher đã áp dụng</h5>
            <hr />
            <h5>Tổng số lượng <p style={{fontWeight: 700, color: '#7500CF'}}>&nbsp;5</p></h5>
            <h5>Tổng cộng <p style={{fontWeight: 700, color: '#7500CF'}}>&nbsp;1.500.000đ</p></h5>
            <p>Đã bao gồm khuyến mãi, phí vận chuyển và VAT</p>
            <button>Thanh toán</button>
          </div>
        </div>

    </div>
  )
}

export default Cart