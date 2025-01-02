import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "../../page/Client/DetailProduct/data";
import {
  createBlog,
  deleteBlog,
  editBlog,
  getBlog,
  getBlogAll,
  getmedia_postAll,
} from "../../service/Blog/blog.service";

export const getAllBlogThunk = createAsyncThunk("getAllBlogThunk", async () => {
  try {
    const resp = await getBlogAll();
    return resp.data.content.reverse();
  } catch (e) {
    console.log(e);
  }
});

export const getAllBlogmediaThunk = createAsyncThunk(
  "getAllBlogmediaThunk",
  async () => {
    // try {
    //   const resp = await ();
    //   return resp.data.content.reverse();
    // } catch (e) {
    //   console.log(e);
    // }
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
  async (id: number, {dispatch}) => {
    try {
      await deleteBlog(id);
      const response = await dispatch(getAllBlogThunk());
     
      return response.payload;
  
    } catch (error) {
      return error;
    }
  }
);
// Thunk để thêm bài viết
export const createBlogThunk = createAsyncThunk(
  "createBlogThunk",
  async (newBlog: any,{dispatch}) => {
    try {
      const resp = await createBlog(newBlog);
        const response = await dispatch(getAllBlogThunk());
     
           return response.payload;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createMediaThunk = createAsyncThunk(
  "createBlogThunk",
  async (newBlog: any) => {
    try {
      const resp = await createBlog(newBlog);
      return resp.data.content;
    } catch (error) {
      console.log(error);
    }
  }
);
export const editBlogThunk = createAsyncThunk(
  "editBlogThunk",
  async (updatedBlog: any, { dispatch }) => {
    try {
      await editBlog(updatedBlog);
      console.log(updatedBlog);
      
      const response = await dispatch(getAllBlogThunk());
      return response.payload;
    } catch (error) {
      throw new Error("Failed to edit blog");
    }
  }
);
const initialState = {
  listBlog: [],
  mediaPosts: [],
  detailBlog:{},

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
   
   
  builder
        .addCase(getAllBlogThunk.fulfilled, (state, { payload }) => {
          state.listBlog = payload;
        })
  builder
        .addCase(getBlogByIdThunk.fulfilled, (state, { payload }) => {
          state.detailBlog = payload;
        })
        .addCase(editBlogThunk.fulfilled, (state, { payload }) => {
          state.listBlog = payload;
        })
   
  },
});
export const { setListBlog } = BlogSlice.actions;

export const blogReducer = BlogSlice.reducer;
