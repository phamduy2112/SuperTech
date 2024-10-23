import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../redux/cart/cart.slide';

export const store = configureStore({
  reducer: {
    cart: cartReducer, 
  },
});
