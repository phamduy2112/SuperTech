
import express from 'express';
import isAuthenticated from '../config/auth.js';
import { middleToken } from '../config/jwt.js';
import { getfavoriteproduct, getfavoriteproductById, createfavoriteproduct, updatefavoriteproduct, deletefavoriteproduct } from '../controllers/favoriteproductController.js';
const favoriteproductRouter = express.Router();

favoriteproductRouter.get('/favorite-product', middleToken,getfavoriteproduct);
favoriteproductRouter.get('/favorite-product/:id',middleToken, getfavoriteproductById);
favoriteproductRouter.post('/favorite-product-create',middleToken, createfavoriteproduct);
favoriteproductRouter.delete('/favoriteproduct-delete/:id',middleToken, deletefavoriteproduct);

export default favoriteproductRouter;