import { FaRegTrashAlt } from "react-icons/fa";
import React from 'react'
import './css/style.css'
import { Container } from "../../../components/Style/Container";
function Cart() {
  return (
    <Container>
        <div className="buttonUpper-voucher">
          Thêm voucher
        </div>
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
                        <div className="cart-productName">Tên: Sản phẩm A</div>
                        <div className="total-price" style={{paddingTop: "0.3rem"}}>100,000 VND</div>
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
                      <FaRegTrashAlt className="icon"/>
                    </td>
                  </tr>
                  <tr>
                    <td className="product">
                      <div className="product-image">
                        <img src="https://th.bing.com/th/id/R.2b8690c98214493b43fd40aedbf5109e?rik=M46%2fJWuDku0bQw&pid=ImgRaw&r=0" alt="Sản phẩm A" />
                      </div>
                      <div className="product-info">
                        <div className="cart-productName">Tên: Sản phẩm A</div>
                        <div className="total-price" style={{paddingTop: "0.3rem"}}>100,000 VND</div>
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
                      <FaRegTrashAlt className="icon"/>
                    </td>
                  </tr>
                  <tr>
                    <td className="product">
                      <div className="product-image">
                        <img src="https://th.bing.com/th/id/R.2b8690c98214493b43fd40aedbf5109e?rik=M46%2fJWuDku0bQw&pid=ImgRaw&r=0" alt="Sản phẩm A" />
                      </div>
                      <div className="product-info">
                        <div className="cart-productName">Tên: Sản phẩm A</div>
                        <div className="total-price" style={{paddingTop: "0.3rem"}}>100,000 VND</div>
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
                      <FaRegTrashAlt className="icon"/>
                    </td>
                  </tr>
                  <tr>
                    <td className="product">
                      <div className="product-image">
                        <img src="https://th.bing.com/th/id/R.2b8690c98214493b43fd40aedbf5109e?rik=M46%2fJWuDku0bQw&pid=ImgRaw&r=0" alt="Sản phẩm A" />
                      </div>
                      <div className="product-info">
                        <div className="cart-productName">Tên: Sản phẩm A</div>
                        <div className="total-price" style={{paddingTop: "0.3rem"}}>100,000 VND</div>
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
                      <FaRegTrashAlt className="icon"/>
                    </td>
                  </tr>
                  <tr className="cart-button-feld" style={{border: '1px solid #7500CF'}}>
                    <td style={{textAlign: 'left'}}>
                      <div className="buttonUnder-voucher">
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
            <div className="saleText">
              Tiêu 1.500.000đ để nhận được MIỄN PHÍ VẬN CHUYỂN !
            </div>
            <div className="saleText" style={{fontWeight:500}}>
              Mã giảm giá
            </div>
            <div className="saleText">
              Mã mua hàng sẽ được áp dụng tại trang thanh toán
            </div>
            <input type="text" placeholder="Mã giảm giá" />
            <button className="buttonThanhtoan">Lưu</button>
            <div className="payText">
              Voucher đã áp dụng 
            </div>
            <hr />
            <div className="payText">
              Tổng số lượng 
              <div className="cartConfirm-quanity">
                5
              </div>
            </div>
            <hr />
            <div className="payText">
              Tổng đơn hàng
              <div className="cartConfirm-total">
                1.500.000đ
              </div>
            </div>
            <hr />
            <div className="VAT">
              Đã bao gồm khuyến mãi, phí vận chuyển và VAT
            </div>
            <button className="buttonThanhtoan">Thanh toán</button>
          </div>
        </div>

    </Container>
  )
}

export default Cart