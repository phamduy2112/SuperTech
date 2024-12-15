import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col } from 'antd';
function CountdownTimer({reset}) {
  // Số giây ban đầu (5 phút = 300 giây)
  const [seconds, setSeconds] = useState(100);
  useEffect(() => {
    if (reset) {
      setSeconds(180); // Reset time when reset is triggered
    }
  }, [reset]);
  useEffect(() => {
    // Nếu seconds > 0, thì bắt đầu đếm ngược
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000); // 1000ms = 1s

      // Dọn dẹp interval khi component bị hủy
      return () => clearInterval(interval);
    }
  }, [seconds]); // Mỗi khi `seconds` thay đổi thì useEffect sẽ chạy lại

  // Chuyển đổi giây còn lại thành phút và giây
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div>
      <h1 className='text-[20px] text-center'>Thời Gian Còn Lại: {minutes < 10 ? `0${minutes}` : minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}</h1>
      <p  className='text-[16px] text-center text-[#ff4a4a]' >Vui lòng thanh toán trước thời gian chờ, nếu không thanh toán đúng thời gian chờ đơn hàng của bạn sẽ chuyển sang trạng thái hủy đơn hàng !</p>
    </div>
  );
}

export default CountdownTimer;