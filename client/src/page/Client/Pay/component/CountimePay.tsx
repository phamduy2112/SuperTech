import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  // Số giây ban đầu (5 phút = 300 giây)
  const [seconds, setSeconds] = useState(300);

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
      <h1>Đếm ngược: {minutes < 10 ? `0${minutes}` : minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}</h1>
    </div>
  );
}

export default CountdownTimer;