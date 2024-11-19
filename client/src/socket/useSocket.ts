import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client'; // Import type Socket nếu cần
import { setSocket } from '../redux/socket/socker.slice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const UseSocket = () => {
  const { user } = useAppSelector((store) => store.user); // Lấy user từ Redux
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user) return; // Không kết nối nếu user chưa đăng nhập

    // Tạo kết nối socket
    const socket: Socket = io('http://localhost:8080', {
      query: { user_id: user.user_id }, // Gửi user_id trong query
      transports: ['websocket'], // Sử dụng websocket làm phương thức truyền tải
    });

    // Lưu socket vào Redux sau khi kết nối thành công
    socket.on('connect', () => {
      console.log(`Connected to Socket.IO server with ID: ${socket.id}`);
      dispatch(setSocket(socket)); // Lưu socket vào Redux
    });

    // Dọn dẹp socket khi component unmount hoặc user thay đổi
    return () => {
      if (socket) {
        socket.disconnect(); // Ngắt kết nối socket
        console.log(`Socket disconnected: ${socket.id}`);
        dispatch(setSocket(null)); // Xóa socket khỏi Redux
      }
    };
  }, [user, dispatch]); // Chạy lại khi user hoặc dispatch thay đổi

  return null; // Không render bất kỳ UI nào
};

export default UseSocket;