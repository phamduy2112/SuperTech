import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCommentByIdProduct, deleteCommentByIdProduct, deleteCommentProduct, getAllReplies_comment_product, getCommentAllProduct, getCommentByIdProduct, putCommentByIdProduct } from "../../service/comment/comment.service";


export const getCommentAllProductThunk = createAsyncThunk(
  "getCommentAllProductThunk",
  async () => {
    try {
      const resp = await getCommentAllProduct();
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  }
)
export const deleteCommentProductThunk = createAsyncThunk(
  "deleteCommentProductThunk",
  async (dataThunk) => {
    try {
      const resp = await deleteCommentProduct(dataThunk);
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  }
)



export const getReplies_comment_productThunk = createAsyncThunk(
  "getAllReplies_comment_productThunk",
  async (Id: number) => {
    try {
      const resp = await getAllReplies_comment_product(Id);
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  }
)


export const getCommentByIdProductThunk = createAsyncThunk(
  "getCommentByIdThunk",
  async (id: number) => {
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
      const listComment = await getCommentByIdProduct(data.product_id)
      return listComment.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);
export const deleteCommentByIdThunk = createAsyncThunk(
  "deleteCommentByIdThunk",
  async (data: any) => {
    try {
      const resp = await deleteCommentByIdProduct(data.comment_id);
      const listComment = await getCommentByIdProduct(data.product_id)
      return listComment.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);
export const editCommentByIdThunk = createAsyncThunk(
  "editCommentByIdThunk",
  async (data: any) => {
    console.log("Data received in thunk:", data); // Kiểm tra dữ liệu nhận được trong thunk
    console.log(data.comment_id);

    const resp = await putCommentByIdProduct(data.comment_id, data);


    const listComment = await getCommentByIdProduct(data.product_id)
    return listComment.data.content;


  },
);

const initialState = {
  listAllCommnetAdmin: [],
  listAllReplies_comment_product: [],
  listComment: []
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
      .addCase(getCommentAllProductThunk.fulfilled, (state, { payload }) => {
        state.listAllCommnetAdmin = payload;
      });
    builder
      .addCase(deleteCommentProductThunk.fulfilled, (state, { payload }) => {
        state.listAllCommnetAdmin = payload;
      });
    builder
      .addCase(getReplies_comment_productThunk.fulfilled, (state, { payload }) => {
        state.listAllReplies_comment_product = payload;
      });
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
  },




});

export const { setcomment } = commentSlice.actions;

export const commentReducer = commentSlice.reducer;
