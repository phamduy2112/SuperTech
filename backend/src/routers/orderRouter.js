
import express from 'express';
import isAuthenticated from '../config/auth.js';
import { middleToken } from '../config/jwt.js';

import { getorder, getOrderById, createorder, updateorder, deleteorder, changeStatusOrder, getOrdersForToday, getSuccessEmailOrder } from '../controllers/orderController.js';
import { getTop5BestSellingProducts, getUserOrderCounts, getWeeklySales } from '../controllers/detailorderController.js';
const orderRouter = express.Router();

orderRouter.get('/get-order-all', getorder);
orderRouter.post('/success-order', getSuccessEmailOrder);
orderRouter.get('/order-by-id-user',middleToken, getOrderById);
orderRouter.post('/get-order-sales', getWeeklySales);
orderRouter.get('/get-user-order-count',middleToken, getUserOrderCounts);
// orderRouter.get('/get-order-today',middleToken, getOrdersForToday);
orderRouter.get('/get-product-top-five',middleToken, getTop5BestSellingProducts);
orderRouter.put("/change-status-order/:id",middleToken,changeStatusOrder)
orderRouter.post('/create-order', middleToken,createorder);
orderRouter.put('/order-edit/:id',middleToken, updateorder);
orderRouter.delete('/order-delete/:id',middleToken, deleteorder);
    
export default orderRouter;