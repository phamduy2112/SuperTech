import {Server} from "socket.io";
import express from "express";
import http from "http";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: 'http://localhost:5173',  // URL của frontend (React app)
        credentials: true, // Cho phép gửi cookies nếu cần
              methods:['GET','POST']
    }
})

const userSocketMap = {} ; // this map stores socket id corresponding the user id; userId -> socketId

export const getReceiverSocketId = (receiverId) => userSocketMap[receiverId];

io.on('connection', (socket) => {

    // console.log(socket);
    
    const userId = socket.handshake.query.user_id;  // Lấy user_id từ query params
    console.log(`User connected: ${userId}, Socket ID: ${socket.id}`);  // Log khi có kết nối mới
    
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${userId}, Socket ID: ${socket.id}`);
    });
});

export {app, server, io};

