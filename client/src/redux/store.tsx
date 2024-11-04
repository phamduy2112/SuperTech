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

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  category: categoryReducer,
  toggleSidebar: toggleSidebarReducer,
  user: userReducer,
  product: productReducer,
  cart:cartReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Bỏ qua các hành động Redux Persist để tránh cảnh báo không cần thiết
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>; // Định nghĩa RootState
export type AppDispatch = typeof store.dispatch; // Định nghĩa AppDispatch
export default store;