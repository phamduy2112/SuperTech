import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogAll,
  getmedia_postAll,
} from "../../service/Blog/blog.service";

export const getAllBlogThunk = createAsyncThunk("getAllBlogThunk", async () => {
  try {
    const resp = await getBlogAll();
    return resp.data.content;
  } catch (e) {
    console.log(e);
  }
});

export const getAllBlogmediaThunk = createAsyncThunk(
  "getAllBlogmediaThunk",
  async () => {
    try {
      const resp = await getmedia_postAll();
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  }
);

export const getBlogByIdThunk = createAsyncThunk(
  "getBlogByIdThunk",
  async (id: number) => {
    try {
      const resp = await getBlog(id);
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  }
);
// Thunk để xóa bài viết
export const deleteBlogThunk = createAsyncThunk(
  "blogs/delete",
  async (id: number, { rejectWithValue }) => {
    try {
      await deleteBlog(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Thunk để thêm bài viết
export const createBlogThunk = createAsyncThunk(
  "blogs/create",
  async (newBlog: any, { rejectWithValue }) => {
    try {
      const resp = await createBlog(newBlog);
      return resp.data.content;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initialState = {
  listBlog: [],
  mediaPosts: [],
  loading: false,
  error: null,
};

const BlogSlice = createSlice({
  name: "BlogSlice",
  initialState,
  reducers: {
    setListBlog: (state, { payload }) => {
      state.listBlog = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBlogThunk.fulfilled, (state, { payload }) => {
      state.listBlog = payload;
    });
    builder.addCase(getBlogByIdThunk.fulfilled, (state, { payload }) => {
      state.BlogOne = payload;
    });
    builder.addCase(getAllBlogmediaThunk.fulfilled, (state, { payload }) => {
      state.mediaPosts = payload;
    });
    // builder.addCase(deleteBlogThunk.rejected, (state, action) => {
    //   console.error('Failed to delete blog:', action.payload);
    // });
    builder.addCase(createBlogThunk.rejected, (state, action) => {
      console.error("Failed to create blog:", action.payload);
    });
    builder.addCase(deleteBlogThunk.rejected, (state, action) => {
      console.error("Failed to delete blog:", action.payload);
    });
  },
});
export const { setListBlog } = BlogSlice.actions;

export const blogReducer = BlogSlice.reducer;