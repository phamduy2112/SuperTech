import { RouterProvider } from 'react-router-dom'

import './App.css'
import { router } from './router/router.config'
import useSocket from './service/ChatApp/Socket.io';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { useEffect } from 'react';
import { setSocket } from './redux/chat/chat.slice';
function App() {

  const TokenstaffsClient: any = useAppSelector((state) => state.user.token);
  const socket = useSocket(TokenstaffsClient);
  const AppDispatch = useAppDispatch();

  useEffect(() => {
    if (TokenstaffsClient) {
      AppDispatch(setSocket(socket))
    } else {
      console.log("Chưa có người dùng đăng nhập");
    }
  }, [AppDispatch, TokenstaffsClient, socket])


  return (

    <RouterProvider router={router} />
  )
}

export default App
