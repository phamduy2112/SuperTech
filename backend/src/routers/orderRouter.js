
import express from 'express';
import { getorder, getorderById, createorder, updateorder, deleteorder } from '../controllers/orderController.js';
const orderRouter = express.Router();

orderRouter.get('/order', getorder);
orderRouter.get('/order/:id', getorderById);
orderRouter.post('/order', createorder);
orderRouter.put('/order/:id', updateorder);
orderRouter.delete('/order/:id', deleteorder);

export default orderRouter;