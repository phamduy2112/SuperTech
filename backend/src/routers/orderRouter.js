
import express from 'express';
import isAuthenticated from '../config/auth.js';
import { middleToken } from '../config/jwt.js';
import { getorder, getorderById, createorder, updateorder, deleteorder } from '../controllers/orderController.js';
const orderRouter = express.Router();

orderRouter.get('/order', middleToken, getorder);
orderRouter.get('/order/:id', middleToken, getorderById);
orderRouter.post('/order', middleToken, createorder);
orderRouter.put('/order/:id', middleToken, updateorder);
orderRouter.delete('/order/:id', middleToken, deleteorder);

export default orderRouter;