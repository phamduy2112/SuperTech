import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCatelogry, getCatelogryDad } from "../../service/catelogry/catelogry.service";

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
export const getCatelogryDadThunk = createAsyncThunk(
  "getCatelogryDadThunk",
  async () => {
    try {
      const resp = await getCatelogryDad();
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);



const initialState = {
  catelogryDad: [],
};

const CatelogrySlice = createSlice({
  name: "CatelogrySlice",
  initialState,
  reducers: {
    setCatelogry: (state, { payload }) => {
      state.catelogryDad = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCatelogryThunk.fulfilled, (state, { payload }) => {
        state.catelogryDad = payload;
      })
    builder
      .addCase(getCatelogryDadThunk.fulfilled, (state, { payload }) => {
        state.catelogryDad = payload;
      })

  },
});

export const { setCatelogry } = CatelogrySlice.actions;

export const categoryReducer = CatelogrySlice.reducer;