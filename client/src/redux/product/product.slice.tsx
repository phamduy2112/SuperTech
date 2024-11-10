import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductCateloriesByDad, getProductDetail, getProducts } from "../../service/product/product.service";

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

export const getProductsAdminThunk = createAsyncThunk(
  "getAdminLocation",
  async (searchKey:string) => {
    try {
      
      const resp = await getProducts();
      const result = resp.data.content;
      if (searchKey.trim()) {
        const filteredResults = result.filter((item:any) =>
          item.product_name.toLowerCase().includes(searchKey.toLowerCase())
        );
        return filteredResults;
      } else {
        // Return all results if no search key is provided
        return result.reverse();
      }
      // return resp.content.reverse();
    } catch (e) {
      console.log(e);
    }
  },
);
export const getProductByIdThunk = createAsyncThunk(
  "getProductByIdThunk",
  async (id) => {
    try {
      const resp = await getProductDetail(id);
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);

const initialState = {
  listProduct: [],
  listProducts:[],
  listAdminProducts:[],
  productDetail:{}
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
    builder
      .addCase(getProductsAdminThunk.fulfilled, (state, { payload }) => {
        state.listAdminProducts = payload;
      })
    builder
      .addCase(getProductByIdThunk.fulfilled, (state, { payload }) => {
        state.productDetail = payload;
      })

  },
});

export const { setProduct } = ProductSlice.actions;

export const productReducer = ProductSlice.reducer;