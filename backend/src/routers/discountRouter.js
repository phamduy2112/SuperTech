
import express from 'express';
import { getdiscount, getdiscountById, creatediscount, updatediscount, deletediscount } from '../controllers/discountController.js';
const discountRouter = express.Router();

discountRouter.get('/discount', getdiscount);
discountRouter.get('/discount/:id', getdiscountById);
discountRouter.post('/discount', creatediscount);
discountRouter.put('/discount/:id', updatediscount);
discountRouter.delete('/discount/:id', deletediscount);

export default discountRouter;