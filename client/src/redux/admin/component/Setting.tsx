import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getsetting, getsettingId } from "../../../service/setting/setting.service";

export const getsettingThunk = createAsyncThunk (
    "getsettingThunk",
    async () => {
        try {
            const resp = await getsetting();
            return resp.data.content
        }catch (e) {
            console.error(e);
        }
    },
);
export const getsettingIdThunk = createAsyncThunk (
  "getsettingIdThunk",
  async (id:number) => {
      try {
          const resp = await getsettingId(id);
          return resp.data.content
      }catch (e) {
          console.error(e);
      }
  },
);
const initialState = {
    getsetting: null,
    getsettingId: null,
  };
  
  const SettingSlice = createSlice({
    name: "SettingSlice",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
      builder
        .addCase( getsettingThunk.fulfilled, (state, { payload }) => {
          state.getsetting = payload;
        }),
        builder
        .addCase( getsettingIdThunk.fulfilled, (state, { payload }) => {
          state.getsettingId = payload;
        })
    },
  });
  export const {} = SettingSlice.actions;
  export const settingReducer = SettingSlice.reducer;