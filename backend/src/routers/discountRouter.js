
import express from 'express';
import isAuthenticated from '../config/auth.js';
import { middleToken } from '../config/jwt.js';
import { getdiscount, getdiscountById, creatediscount, applyDiscount, deletediscount } from '../controllers/discountController.js';
const discountRouter = express.Router();

discountRouter.get('/discount', getdiscount);
discountRouter.get('/discount/:id', getdiscountById);
discountRouter.post('/discount-create', creatediscount);
discountRouter.put('/apply-discount/:id',middleToken, applyDiscount);
discountRouter.delete('/discount-delete/:id',middleToken, deletediscount);

export default discountRouter;