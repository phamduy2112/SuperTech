
import express from 'express';
import { getdetailorder, getDetailOrderById, createdetailorder, updatedetailorder, deletedetailorder } from '../controllers/detailorderController.js';
const detailorderRouter = express.Router();

detailorderRouter.get('/detailorder', getdetailorder);
detailorderRouter.get('/detail-order/:id', getDetailOrderById);
detailorderRouter.post('/create-detail-order', createdetailorder);
detailorderRouter.put('/detailorder/:id', updatedetailorder);
detailorderRouter.delete('/detailorder/:id', deletedetailorder);

export default detailorderRouter;