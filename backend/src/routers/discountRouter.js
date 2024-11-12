
import express from 'express';
import isAuthenticated from '../config/auth.js';
import { middleToken } from '../config/jwt.js';
import { getdiscount, getdiscountById, creatediscount, updatediscount, deletediscount } from '../controllers/discountController.js';
const discountRouter = express.Router();

discountRouter.get('/discount', getdiscount);
discountRouter.get('/discount/:id', getdiscountById);
discountRouter.post('/discount-create',middleToken, creatediscount);
discountRouter.put('/discount-edit/:id',middleToken, updatediscount);
discountRouter.delete('/discount-delete/:id',middleToken, deletediscount);

export default discountRouter;