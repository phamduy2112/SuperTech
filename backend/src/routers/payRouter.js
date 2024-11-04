
import express from 'express';
import { getpay, getpayById, createpay, updatepay, deletepay } from '../controllers/payController.js';
const payRouter = express.Router();

payRouter.get('/pay', getpay);
payRouter.get('/pay/:id', getpayById);
payRouter.post('/pay', createpay);
payRouter.put('/pay/:id', updatepay);
payRouter.delete('/pay/:id', deletepay);

export default payRouter;