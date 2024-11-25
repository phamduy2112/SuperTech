import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  getFavouriteProducts } from "../../service/product/favourite.service";

// Thunk for fetching the list of favourite products
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

// Thunk for adding a product to favourites
// export const createfavouriteByIdProductThunk = createAsyncThunk(
//   "createfavouriteByIdProductThunk",
//   async (data: any, { dispatch }) => {
//     try {
//       await createFavouriteProduct(data);  // Create favourite product
//       const listFavouriteProduct = await dispatch(getFavouriteByIdProductThunk());  // Fetch updated list
//       return listFavouriteProduct.payload;
//     } catch (e) {
//       console.log(e);
//     }
//   },
// );

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
      })
      // .addCase(createfavouriteByIdProductThunk.fulfilled, (state, { payload }) => {
      //   state.listFavouriteProduct = payload; // Update state after creating a favourite
      // });
  },
});

export const { setfavourite } = FavouriteSlice.actions;

export const FavouriteReducer = FavouriteSlice.reducer;
