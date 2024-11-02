import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOrderByIdUser } from "../../service/order/order.service";


export const getOrderByIdProductThunk = createAsyncThunk(
  "getOrderByIdThunk",
  async () => {      
    try {
      const resp = await getOrderByIdUser();
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);


const initialState = {
  listOrder: [] ,
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    setOrder: (state, { payload }) => {
      state.listOrder = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderByIdProductThunk.fulfilled, (state, { payload }) => {
        state.listOrder = payload;
      });
  
  },




});

export const { setOrder } = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
