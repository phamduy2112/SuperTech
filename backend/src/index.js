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
import cron from 'node-cron';
import cors from 'cors';
import axios from 'axios';
import searchRouter from './routers/searchproductRouter.js';
import uploadRouter from './routers/uploadRoutes.js';
import uploadImgUserRouter from './routers/uploadImageUserRoutes.js';
import { app, server } from './socker/socker.js';
import settingRouter from './routers/settingRouter.js';
import autobankrouter from './routers/bankAutoRouter.js';
import  transactionsrouter from './routers/transactionRouter.js';

app.use(express.json());
app.use(cookieParser());

app.use(urlencoded({extended:true}))
app.use(express.static("."))

const corsOptions = {
  origin: ['http://localhost:5173', 'https://dichvumang86.me', '103.200.23.120', 'https://api.dichvumang86.me', 'https://supertechh.shop'],
  credentials: true
};
// cron này chỉ chạy được trên server thôi, local tạm thời ẩn, tuyệt đối ko tắt để hạn chế tình trạng trùng lập cron giữa local
// và server

// cron.schedule('* * * * *', async () => {
//   console.log('Bắt đầu chạy Check Lịch Sử Giao Dịch Api Từ Phía Ngân Hàng!!!');
//   try {
//     const response = await axios.get('http://localhost:8080/check-transactions');
//     console.log('Kết quả:', response.data);
//   } catch (error) {
//     console.error('Lỗi khi gọi API:', error.message);
//   }
// });

app.use(cors(corsOptions));
app.get('/', (req, res) => {
  res.send("Api Created By Team NinjaDev");
});

app.use(settingRouter);
app.use(transactionsrouter);
app.use(product_colorsRouter);
app.use(autobankrouter);
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