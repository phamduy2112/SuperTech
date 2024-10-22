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
  listCart: [],
  totalItems: 0, // Khởi tạo số lượng sản phẩm ban đầu
  totalAmount: 0, // Khởi tạo tổng tiền ban đầu

};

// Tạo slice cho giỏ hàng
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Thêm sản phẩm vào giỏ hàng
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.listCart.find(item => item.product_id == action.payload.product_id);
      if (existingItem) {
        // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
        existingItem.quantity += 1;
      } else {
        // Nếu chưa có, thêm sản phẩm vào giỏ hàng với quantity = 1
        state.listCart.push({ ...action.payload, quantity: 1 });
      }
      // Cập nhật tổng số lượng sản phẩm
      state.totalItems = state.listCart.reduce((total, item) => total + item.quantity, 0);
       // Cập nhật tổng tiền
  state.totalAmount = state.listCart.reduce((total, item) => total + (item.price * item.quantity), 0);

},
    
    // Xóa sản phẩm khỏi giỏ hàng
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.listCart = state.listCart.filter(item => item.id !== action.payload.id);
      // Cập nhật tổng số lượng sản phẩm
      state.totalItems = state.listCart.reduce((total, item) => total + item.quantity, 0);
     // Cập nhật tổng tiền
  state.totalAmount = state.listCart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    // Giảm số lượng sản phẩm trong giỏ hàng (nếu số lượng > 1)
    decreaseItemQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const existingItem = state.listCart.find(item => item.id === action.payload.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        // Nếu số lượng <= 1, xóa sản phẩm khỏi giỏ hàng
        state.listCart = state.listCart.filter(item => item.id !== action.payload.id);
      }
      // Cập nhật tổng số lượng sản phẩm
      state.totalItems = state.listCart.reduce((total, item) => total + item.quantity, 0);
       // Cập nhật tổng tiền
  state.totalAmount = state.listCart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    inCreaseItemQuantity: (state, action: PayloadAction<{ id: string }>) => {
        const existingItem = state.listCart.find(item => item.id === action.payload.id);
        if (existingItem && existingItem.quantity > 1) {
          existingItem.quantity += 1;
        } else {
        }
        // Cập nhật tổng số lượng sản phẩm
        state.totalItems = state.listCart.reduce((total, item) => total + item.quantity, 0);
     // Cập nhật tổng tiền
  state.totalAmount = state.listCart.reduce((total, item) => total + (item.price * item.quantity), 0); 
    },
      


    //Xóa tất cả
    removeAllCart:(state, action)=>{
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
export const { addItemToCart, removeItemFromCart, decreaseItemQuantity, setCart, numCart } = cartSlice.actions;

// Export reducer
export const cartReducer = cartSlice.reducer;
