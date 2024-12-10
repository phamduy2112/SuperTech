import toggleSidebarReducer from './admin/component/ToggleSliceBar';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Sử dụng localStorage cho web
import { categoryReducer } from "./catelogry/catelogry.slice";
import { userReducer } from './user/user.slice';
import { productReducer } from './product/product.slice';
import { cartReducer } from './cart/cart.slice';
import { commentReducer } from './comment/comment.slice';
import { orderReducer } from './order/Order.slice';
import { socketReducer } from './socket/socker.slice';
import { cityReducer } from './order/City.slice';
import { nofiReducer } from './admin/component/Nofi';
import { searchReducer } from './search/Search.slice';
import { FavouriteReducer } from './favourite/Favourite.slice';
import { voucherReducer } from './cart/voucher.slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['user','cart','listOrder','socket','nofi'], // Chỉ persist `user` và `cart`
};

const rootReducer = combineReducers({
  category: categoryReducer,
  socket: socketReducer,
  toggleSidebar: toggleSidebarReducer,
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  listComment: commentReducer,
  listOrder:orderReducer,
  city:cityReducer,
  nofi:nofiReducer,
  search:searchReducer,
  vourher:voucherReducer,
  listProductFavorites:FavouriteReducer,

},

)

;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
