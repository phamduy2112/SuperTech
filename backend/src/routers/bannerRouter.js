
import express from 'express';
import { getbanner, getbannerById, createbanner, updatebanner, deletebanner } from '../controllers/bannerController.js';
const bannerRouter = express.Router();

bannerRouter.get('/banner', getbanner);
bannerRouter.get('/banner/:id', getbannerById);
bannerRouter.post('/banner', createbanner);
bannerRouter.put('/banner/:id', updatebanner);
bannerRouter.delete('/banner/:id', deletebanner);

export default bannerRouter;