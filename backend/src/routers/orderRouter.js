
import express from 'express';
import isAuthenticated from '../config/auth.js';
import { middleToken } from '../config/jwt.js';
import { getorder, getOrderById, createorder, updateorder, deleteorder,autoUpdateOrderStatus } from '../controllers/orderController.js';
const orderRouter = express.Router();

orderRouter.get('/get-order-all', getorder);
orderRouter.get('/order-by-id-user',middleToken, getOrderById);
orderRouter.post('/create-order', middleToken,createorder);
orderRouter.put('/order-edit/:id',middleToken, updateorder);
orderRouter.delete('/order-delete/:id',middleToken, deleteorder);
orderRouter.post('/auto-update-status', autoUpdateOrderStatus);
export default orderRouter;