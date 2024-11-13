
import express from 'express';
import isAuthenticated from '../config/auth.js';
import { middleToken } from '../config/jwt.js';
import { getfavoriteproduct, getfavoriteproductById, createfavoriteproduct, updatefavoriteproduct, deletefavoriteproduct } from '../controllers/favoriteproductController.js';
const favoriteproductRouter = express.Router();

favoriteproductRouter.get('/favoriteproduct', getfavoriteproduct);
favoriteproductRouter.get('/favoriteproduct/:id', getfavoriteproductById);
favoriteproductRouter.post('/favoriteproduct-create',middleToken, createfavoriteproduct);
favoriteproductRouter.put('/favoriteproduct-edit/:id',middleToken, updatefavoriteproduct);
favoriteproductRouter.delete('/favoriteproduct-delete/:id',middleToken, deletefavoriteproduct);

export default favoriteproductRouter;