import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCatelogry } from "../../service/catelogry/catelogry.service";

export const getCatelogryThunk = createAsyncThunk(
  "getCatelogryThunk",
  async () => {
    try {
      const resp = await getCatelogry();
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);



const initialState = {
  catelogry: [],
};

const CatelogrySlice = createSlice({
  name: "CatelogrySlice",
  initialState,
  reducers: {
    setCatelogry: (state, { payload }) => {
      state.catelogry = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCatelogryThunk.fulfilled, (state, { payload }) => {
        state.catelogry = payload;
      })

  },
});

export const { setCatelogry } = CatelogrySlice.actions;

export const categoryReducer = CatelogrySlice.reducer;