
import express from 'express';
import { getdetailorder, getdetailorderById, createdetailorder, updatedetailorder, deletedetailorder } from '../controllers/detailorderController.js';
const detailorderRouter = express.Router();

detailorderRouter.get('/detailorder', getdetailorder);
detailorderRouter.get('/detailorder/:id', getdetailorderById);
detailorderRouter.post('/create-detail-order', createdetailorder);
detailorderRouter.put('/detailorder/:id', updatedetailorder);
detailorderRouter.delete('/detailorder/:id', deletedetailorder);

export default detailorderRouter;