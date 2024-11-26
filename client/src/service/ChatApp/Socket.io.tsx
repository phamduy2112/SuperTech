import { useCallback, useEffect, useState } from 'react';
import io from "socket.io-client";
import { useAppDispatch } from '../../redux/hooks';
import { setlistuserRooms, setuserConnected } from '../../redux/chat/chat.slice';

const useSocket = (TokenstaffsClient: string) => {
  const AppDispatch = useAppDispatch();
  const [socket, setsocket] = useState<any>(null);
  useEffect(() => {
    const Newsocket = io("http://localhost:8080", {
      extraHeaders: {
        token: TokenstaffsClient,
      },
    });

    setsocket(Newsocket)

    Newsocket.on('connect', () => {
      console.log('Connected to server with ID:', Newsocket.id);
    });


    Newsocket.on('ListproducthaveAllComment', (lisrProduct) => {
      console.log('Received message from server:', lisrProduct);

    })

    Newsocket.on('connected_users', (users) => {
      AppDispatch(setuserConnected(users))
    });


    Newsocket.on('room_list_join', (RoomUser) => {
      console.log('yeeee')
      console.log('Tssss:', RoomUser)

      AppDispatch(setlistuserRooms(RoomUser))

    });

    Newsocket.on('Delete_comment', (data) => {
      console.log('Received message from server:', data);
    });

    return () => {
      Newsocket.off('connect');
      Newsocket.off('connected_users');
      Newsocket.off('Delete_comment');
      Newsocket.disconnect(); // Ngắt kết nối socket khi component bị unmount
    };
  }, [AppDispatch, TokenstaffsClient]);
  return socket;

};

export default useSocket;
