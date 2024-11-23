
import express from 'express';
import isAuthenticated from '../config/auth.js';
import { middleToken } from '../config/jwt.js';
import { getorder, getOrderById, createorder, updateorder, deleteorder, changeStatusOrder } from '../controllers/orderController.js';
import { getTop5BestSellingProducts, getUserOrderCounts, getWeeklySales } from '../controllers/detailorderController.js';
const orderRouter = express.Router();

orderRouter.get('/get-order-all', getorder);
orderRouter.get('/order-by-id-user',middleToken, getOrderById);
orderRouter.get('/get-week-order-sales',middleToken, getWeeklySales);
orderRouter.get('/get-user-order-count',middleToken, getUserOrderCounts);
orderRouter.get('/get-product-top-five',middleToken, getTop5BestSellingProducts);
orderRouter.put("/change-status-order/:id",middleToken,changeStatusOrder)
orderRouter.post('/create-order', middleToken,createorder);
orderRouter.put('/order-edit/:id',middleToken, updateorder);
orderRouter.delete('/order-delete/:id',middleToken, deleteorder);
    
export default orderRouter;