import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCommentByIdProduct, deleteCommentByIdProduct, getCommentByIdProduct, putCommentByIdProduct } from "../../service/comment/comment.service";
import { createCommentRepliesByIdProduct, deleteCommentRepliesByIdProduct, putCommentRepliesByIdProduct } from "../../service/comment/commentReply.service";



export const getCommentByIdProductThunk = createAsyncThunk(
  "getCommentByIdThunk",
  async (id:number) => {      
    try {
      const resp = await getCommentByIdProduct(id);
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);
export const createCommentByIdProductThunk = createAsyncThunk(
  "createCommentByIdProductThunk",
  async (data) => {      
    try {
      const resp = await createCommentByIdProduct(data);
      const listComment=await getCommentByIdProduct(data.product_id)
      return listComment.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);
export const createCommentRepliesByIdProductThunk = createAsyncThunk(
  "createCommentRepliesByIdProductThunk",
  async (data) => {      
    try {
      const resp = await createCommentRepliesByIdProduct(data);
      const listComment=await getCommentByIdProduct(data.product_id)
      return listComment.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);
export const deleteCommentByIdThunk = createAsyncThunk(
  "deleteCommentByIdThunk",
  async (data:any) => {      
    try {
      const resp = await deleteCommentByIdProduct(data.comment_id);
      const listComment=await getCommentByIdProduct(data.product_id)
      return listComment.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);
export const deleteCommentRepliesByIdThunk = createAsyncThunk(
  "deleteCommentRepliesByIdThunk",
  async (data:any) => {      
    try {
      const resp = await deleteCommentRepliesByIdProduct(data.id);
      const listComment=await getCommentByIdProduct(data.product_id)
      return listComment.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);
export const editCommentByIdThunk = createAsyncThunk(
  "editCommentByIdThunk",
  async (data:any) => {      
    console.log("Data received in thunk:", data); // Kiểm tra dữ liệu nhận được trong thunk
   console.log(data.comment_id);
   
      const resp = await putCommentRepliesByIdProduct(data.comment_id,data);
   
      
      const listComment=await getCommentByIdProduct(data.product_id)
      return listComment.data.content;

    
  },
);
export const editCommentRepliesByIdThunk = createAsyncThunk(
  "editCommentRepliesByIdThunk",
  async (data:any) => {      

      const resp = await putCommentRepliesByIdProduct(data.id,data);
   
      
      const listComment=await getCommentByIdProduct(data.product_id)
      return listComment.data.content;

    
  },
);

const initialState = {
  listComment: [],
};

const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {
    setcomment: (state, { payload }) => {
      state.listComment = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCommentByIdProductThunk.fulfilled, (state, { payload }) => {
        state.listComment = payload;
      });
    builder
    .addCase(createCommentByIdProductThunk.fulfilled, (state, { payload }) => {
        state.listComment = payload;
      });
      builder.addCase(deleteCommentByIdThunk.fulfilled, (state, { payload }) => {
        // Filter out the deleted comment from the list
        state.listComment = payload;
      });
      builder.addCase(editCommentByIdThunk.fulfilled, (state, { payload }) => {
        // Filter out the deleted comment from the list
        state.listComment = payload;
      });
      builder.addCase(createCommentRepliesByIdProductThunk.fulfilled, (state, { payload }) => {
        // Filter out the deleted comment from the list
        state.listComment = payload;
      });
      builder.addCase(deleteCommentRepliesByIdThunk.fulfilled, (state, { payload }) => {
        // Filter out the deleted comment from the list
        state.listComment = payload;
      });
      builder.addCase(editCommentRepliesByIdThunk.fulfilled, (state, { payload }) => {
        // Filter out the deleted comment from the list
        state.listComment = payload;
      });
  },




});

export const { setcomment } = commentSlice.actions;

export const commentReducer = commentSlice.reducer;
