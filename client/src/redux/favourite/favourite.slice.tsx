import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createFavouriteProduct, getFavouriteProducts } from "../../service/product/favourite.service";



export const getFavouriteByIdProductThunk = createAsyncThunk(
  "getFavouriteByIdProductThunk",
  async () => {      
    try {
      const resp = await getFavouriteProducts();
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);
export const createfavouriteByIdProductThunk = createAsyncThunk(
  "createfavouriteByIdProductThunk",
  async (data:any) => {      
    try {
      const resp = await createFavouriteProduct(data);
      const listFavouriteProduct = await getFavouriteProducts();
      return listFavouriteProduct.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);


const initialState = {
  listFavouriteProduct: [],
};

const FavouriteSlice = createSlice({
  name: "FavouriteSlice",
  initialState,
  reducers: {
    setfavourite: (state, { payload }) => {
      state.listFavouriteProduct = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavouriteByIdProductThunk.fulfilled, (state, { payload }) => {
        state.listFavouriteProduct = payload;
      });
    builder
    .addCase(createfavouriteByIdProductThunk.fulfilled, (state, { payload }) => {
        state.listFavouriteProduct = payload;
      });
    
  },




});

export const { setfavourite } = FavouriteSlice.actions;

export const FavouriteReducer = FavouriteSlice.reducer;
