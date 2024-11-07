import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { changeStatusOrder, getDetailOrder, getOrderByIdUser } from "../../service/order/order.service";


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
export const changeStatusOrderThunk = createAsyncThunk(
  "ChangeStatusOrderThunk",
  async (data:any) => {      
    try {
        const updateData=await changeStatusOrder(data.id,data)
      const resp = await getOrderByIdUser();
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);
export const getOrderDetail = createAsyncThunk(
  "getOrderDetail",
  async (id:number) => {      
    try {
      const resp = await getDetailOrder(id);
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);


const initialState = {
  listOrder: [] ,
  detailOrder:[],
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
    builder
      .addCase(changeStatusOrderThunk.fulfilled, (state, { payload }) => {
        state.listOrder = payload;
      });
    builder
      .addCase(getOrderDetail.fulfilled, (state, { payload }) => {
        state.detailOrder = payload;
      });
  
  },




});

export const { setOrder } = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
