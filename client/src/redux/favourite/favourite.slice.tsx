import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { createFavouriteProduct, getFavouriteProducts } from "../../service/product/favourite.service";



export const getFavouriteByIdProductThunk = createAsyncThunk(
  "getFavouriteByIdProductThunk",
  async () => {      
=======
import {  getFavouriteProducts } from "../../service/product/favourite.service";

// Thunk for fetching the list of favourite products
export const getFavouriteByIdProductThunk = createAsyncThunk(
  "getFavouriteByIdProductThunk",
  async () => {
>>>>>>> 01617ad6b15d5958759adc6a722f295cc854661a
    try {
      const resp = await getFavouriteProducts();
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);
<<<<<<< HEAD
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

=======

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
>>>>>>> 01617ad6b15d5958759adc6a722f295cc854661a

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
<<<<<<< HEAD
      });
    builder
    .addCase(createfavouriteByIdProductThunk.fulfilled, (state, { payload }) => {
        state.listFavouriteProduct = payload;
      });
    
  },




=======
      })
      // .addCase(createfavouriteByIdProductThunk.fulfilled, (state, { payload }) => {
      //   state.listFavouriteProduct = payload; // Update state after creating a favourite
      // });
  },
>>>>>>> 01617ad6b15d5958759adc6a722f295cc854661a
});

export const { setfavourite } = FavouriteSlice.actions;

export const FavouriteReducer = FavouriteSlice.reducer;
