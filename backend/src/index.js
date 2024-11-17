import express, { urlencoded } from 'express';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import product_colorsRouter from './routers/product_colorsRouter.js';
import PostsRouter from './routers/postsRouter.js';
import orderRouter from './routers/orderRouter.js';
import mediapostRouter from './routers/mediapostRouter.js';
import discountRouter from './routers/discountRouter.js';
import inforproductRouter from './routers/inforproductRouter.js';
import imageproductRouter from './routers/imageproductRouter.js';
import favoriteproductRouter from './routers/favoriteproductRouter.js';
import detailorderRouter from './routers/detailorderRouter.js';
import commentproductRouter from './routers/commentproductRouter.js';
import commentpostRouter from './routers/commentpostRouter.js';
import chatRouter from './routers/chatRouter.js';
import categoriesRouter from './routers/categoriesRouter.js';
import bannerRouter from './routers/bannerRouter.js';
import payRouter from './routers/payRouter.js';
import cookieParser from 'cookie-parser';
import path from "path"
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import searchRouter from './routers/searchproductRouter.js';
import uploadRouter from './routers/uploadRoutes.js';
import uploadImgUserRouter from './routers/uploadImageUserRoutes.js';

const app = express();
app.use(express.json());
app.use(cookieParser());


const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Địa chỉ frontend (React)
    credentials: true,
    methods: ['GET', 'POST'],
  },
});

const userSocketMap = {}; // Lưu trữ userId -> socketId

io.on('connection', (socket) => {
  const userId = socket.handshake.query.user_id; // Lấy user_id từ query params khi kết nối
  if (userId) {
    userSocketMap[userId] = socket.id; // Gán socket id cho userId
    console.log(`User connected: ${userId}, Socket ID: ${socket.id}`);
  }

  console.log(userSocketMap);
  
  socket.on('disconnect', () => {
    if (userId) {
      delete userSocketMap[userId]; // Xóa khi người dùng ngắt kết nối
    }
    console.log(`User disconnected: ${userId}, Socket ID: ${socket.id}`);
  });
});




app.use(urlencoded({extended:true}))
app.use(express.static("."))

const corsOptions={
    origin:'http://localhost:5173',
    credentials:true,
    

}
app.use(cors(corsOptions));
app.get('/', (req, res) => {
  res.send("Api Created By Team NinjaDev");
});

app.use(userRouter);
app.use(uploadRouter)
app.use(productRouter);
app.use(product_colorsRouter);
app.use(PostsRouter);
app.use(orderRouter);
app.use(mediapostRouter);
app.use(discountRouter);
app.use(inforproductRouter);
app.use(imageproductRouter);
app.use(favoriteproductRouter);
app.use(detailorderRouter);
app.use(commentproductRouter);
app.use(commentproductRouter);
app.use(commentpostRouter);
app.use(chatRouter);
app.use(categoriesRouter);
app.use(bannerRouter);
app.use(payRouter);
app.use(searchRouter);
app.use (uploadImgUserRouter)
server.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});