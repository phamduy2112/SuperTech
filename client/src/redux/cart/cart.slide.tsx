import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Định nghĩa kiểu cho từng sản phẩm trong giỏ hàng
interface CartItem {
  product_id: number;
  name: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  totalPrice: number;
  image_id: number;
  star: number;
  category_id: number;
}

// Định nghĩa kiểu cho state của giỏ hàng
interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.product_id === newItem.product_id);
      
      const discountedPrice = newItem.price * (1 - newItem.discountedPrice / 100);

      if (existingItem) {
        existingItem.quantity++; // Tăng số lượng sản phẩm hiện có
        existingItem.totalPrice = existingItem.quantity * discountedPrice; // Cập nhật tổng giá sản phẩm
      } else {
        state.items.push({
          product_id: newItem.product_id,
          name: newItem.name,
          price: newItem.price,
          discountedPrice: newItem.discountedPrice, // Lưu phần trăm giảm giá
          quantity: 1,
          totalPrice: discountedPrice, // Tổng giá ban đầu
          image_id: newItem.image_id, 
          star: newItem.star, 
          category_id: newItem.category_id, 
        });
      }

      state.totalQuantity++; // Tăng tổng số lượng sản phẩm trong giỏ
      state.totalPrice += discountedPrice; // Cộng giá vào tổng tiền giỏ hàng
    },

    cartReducer(state, action: PayloadAction<number>) { 
      const product_id = action.payload;
      const existingItem = state.items.find(item => item.product_id === product_id);

      if (existingItem) {
        const discountedPrice = existingItem.price * (1 - existingItem.discountedPrice / 100);
        
        state.totalQuantity--; // Giảm tổng số lượng
        state.totalPrice -= discountedPrice; // Trừ tiền sản phẩm ra khỏi tổng

        if (existingItem.quantity === 1) {
          // Xóa sản phẩm nếu số lượng là 1
          state.items = state.items.filter(item => item.product_id !== product_id);
        } else {
          // Giảm số lượng sản phẩm
          existingItem.quantity--;
          existingItem.totalPrice = existingItem.quantity * discountedPrice; // Cập nhật tổng giá
        }
      }
    },

    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const product_id = action.payload;
      const existingItem = state.items.find(item => item.product_id === product_id);

      if (existingItem && existingItem.quantity > 1) {
        const discountedPrice = existingItem.price * (1 - existingItem.discountedPrice / 100);
        
        existingItem.quantity--; // Giảm số lượng sản phẩm
        existingItem.totalPrice = existingItem.quantity * discountedPrice; // Cập nhật tổng giá
        state.totalQuantity--; // Giảm tổng số lượng sản phẩm trong giỏ
        state.totalPrice -= discountedPrice; // Trừ tổng tiền
      }
    },

    clearCart(state) {
      // Xóa toàn bộ giỏ hàng
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItemToCart, cartReducer, decreaseItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
