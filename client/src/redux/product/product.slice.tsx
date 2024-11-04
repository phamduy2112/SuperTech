import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductCateloriesByDad, getProducts } from "../../service/product/product.service";

export const getProductByCateloriesDad = createAsyncThunk(
  "getProductByCateloriesDad",
  async (name:string) => {
    try {
      const resp = await getProductCateloriesByDad(name);
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);
export const getProductsThunk = createAsyncThunk(
  "getProductsThunk",
  async () => {
    try {
      const resp = await getProducts();
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);



const initialState = {
  listProduct: [],
  listProducts:[],
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    setProduct: (state, { payload }) => {
      state.listProduct = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductByCateloriesDad.fulfilled, (state, { payload }) => {
        state.listProduct = payload;
      })
    builder
      .addCase(getProductsThunk.fulfilled, (state, { payload }) => {
        state.listProducts = payload;
      })

  },
});

export const { setProduct } = ProductSlice.actions;

export const productReducer = ProductSlice.reducer;