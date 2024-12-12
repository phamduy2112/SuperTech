import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ reset }) => {
  const [seconds, setSeconds] = useState(180); // Thời gian bắt đầu là 180 giây

  useEffect(() => {
    if (reset) {
      setSeconds(180); // Reset time when reset is triggered
    }
  }, [reset]);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000); // Giảm 1 giây mỗi lần

      return () => clearInterval(interval); // Dọn dẹp interval khi component bị hủy
    }
  }, [seconds]);

  const formatTime = (time) => {
    return String(time).padStart(3, '0').split(''); // Định dạng thời gian thành mảng ký tự
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        {formatTime(seconds).map((digit, index) => (
          <div
            key={index}
            className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center m-1 text-lg font-bold"
          >
            {digit}
          </div>
        ))}
      </div>
      {seconds === 0 && <h3 className="mt-4 text-red-500">Thời gian đã hết!</h3>}
    </div>
  );
};

export default CountdownTimer;
