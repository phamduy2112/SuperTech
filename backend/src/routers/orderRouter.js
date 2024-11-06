
import express from 'express';
import isAuthenticated from '../config/auth.js';
import { middleToken } from '../config/jwt.js';
import { getorder, getOrderById, createorder, updateorder, deleteorder, changeStatusOrder } from '../controllers/orderController.js';
const orderRouter = express.Router();

orderRouter.get('/order', getorder);
orderRouter.get('/order-by-id-user',middleToken, getOrderById);
orderRouter.put("/change-status-order/:id",middleToken,changeStatusOrder)
orderRouter.post('/create-order', middleToken,createorder);
orderRouter.put('/order/:id', updateorder);
orderRouter.delete('/order/:id', deleteorder);

export default orderRouter;