import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';  // Import the Socket type
import { setSocket } from '../redux/socket/socker.slice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import toast from 'react-hot-toast';

const UseSocket = () => {
    const { user } = useAppSelector((store) => store.user);
    const { socket } = useAppSelector((store) => store.socket);
    const dispatch = useAppDispatch();
 
    
    useEffect(() => {
        if (!user) return;  // Nếu không có userId, không kết nối socket
    
        // Nếu đã có socket, không tạo kết nối mới
        const existingSocket = io('http://localhost:8080', {
          query: { user_id: user.user_id },
          transports: ['websocket'],
        });
    
        existingSocket.on('connect', () => {
          console.log(`Connected with Socket ID: ${existingSocket.id}`);
          dispatch(setSocket(existingSocket));  // Lưu socket vào Redux
        });
    
        return () => {
          // Ngắt kết nối socket khi component unmount hoặc userId thay đổi
          existingSocket.disconnect();
          dispatch(setSocket(null));
        };
      }, [user, dispatch]); // Chỉ chạy lại khi userId thay đổi
  
    return null;
  }

export default UseSocket;
