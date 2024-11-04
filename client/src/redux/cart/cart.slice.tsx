import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa kiểu cho một sản phẩm trong giỏ hàng
interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
}

// Định nghĩa kiểu cho state của giỏ hàng
interface CartState {
  listCart: CartItem[];
  totalItems: number; // Biến để lưu tổng số lượng sản phẩm trong giỏ hàng
  totalAmount:number
}

const initialState: CartState = {
  listCart: [],  // Phải là một mảng rỗng
  totalItems: 0,
  totalAmount: 0,
};

// Tạo slice cho giỏ hàng
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Thêm sản phẩm vào giỏ hàng
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      if (state.listCart) {
        const existingItem = state.listCart.find(item => item.product_id == action.payload.product_id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.listCart.push({ ...action.payload, quantity: 1 });
        }
      }
      // Cập nhật tổng số lượng và tổng tiền
      // state.totalItems = state.listCart.reduce((total, item) => total + item.quantity, 0);
      // state.totalAmount = state.listCart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    // Xóa sản phẩm khỏi giỏ hàng
    removeItemFromCart: (state, action: PayloadAction<{ product_id: string }>) => {
      state.listCart = state.listCart.filter(item => item.product_id !== action.payload.product_id);
      // Cập nhật tổng số lượng sản phẩm
      state.totalItems = state.listCart.reduce((total, item) => total + item.quantity, 0);
  //    // Cập nhật tổng tiền
  state.totalAmount = state.listCart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    // Giảm số lượng sản phẩm trong giỏ hàng (nếu số lượng > 1)
    decreaseItemQuantity: (state, action: PayloadAction<{ product_id: string }>) => {
      const existingItem = state.listCart.find(item => item.product_id === action.payload.product_id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        // Nếu số lượng <= 1, xóa sản phẩm khỏi giỏ hàng
        state.listCart = state.listCart.filter(item => item.product_id !== action.payload.product_id);
      }
      // Cập nhật tổng số lượng sản phẩm
      state.totalItems = state.listCart.reduce((total, item) => total + item.quantity, 0);
       // Cập nhật tổng tiền
  state.totalAmount = state.listCart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    inCreaseItemQuantity: (state, action: PayloadAction<{ product_id: string }>) => {
      if (state.listCart) {
        const existingItem = state.listCart.find(item => item.product_id === action.payload.product_id);
 
        console.log(existingItem);
        existingItem.quantity += 1;
      }
      state.totalItems = state.listCart.reduce((total, item) => total + item.quantity, 0);
      // Cập nhật tổng tiền
 state.totalAmount = state.listCart.reduce((total, item) => total + (item.price * item.quantity), 0);
   
    },
      


    //Xóa tất cả
    removeAllCart:(state)=>{
        state.listCart=[]
        state.totalItems=0
        state.totalAmount=0
    },
    // Đếm tổng số lượng sản phẩm trong giỏ hàng
    numCart: (state) => {
      state.totalItems = state.listCart.reduce((total, item) => total + item.quantity, 0);
    },
  },
});

// Export các action
export const { addItemToCart, removeItemFromCart,removeAllCart, decreaseItemQuantity,inCreaseItemQuantity, numCart } = cartSlice.actions;

// Export reducer
export const cartReducer = cartSlice.reducer;
