
import express from 'express';
import { getfavoriteproduct, getfavoriteproductById, createfavoriteproduct, updatefavoriteproduct, deletefavoriteproduct } from '../controllers/favoriteproductController.js';
const favoriteproductRouter = express.Router();

favoriteproductRouter.get('/favoriteproduct', getfavoriteproduct);
favoriteproductRouter.get('/favoriteproduct/:id', getfavoriteproductById);
favoriteproductRouter.post('/favoriteproduct', createfavoriteproduct);
favoriteproductRouter.put('/favoriteproduct/:id', updatefavoriteproduct);
favoriteproductRouter.delete('/favoriteproduct/:id', deletefavoriteproduct);

export default favoriteproductRouter;