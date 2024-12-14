import axios from "axios";
import { axiosWithAuth } from "../axios.config";

export const getBlogAll = () => {
  return axiosWithAuth("/posts", {
    method: "get",
  });
};

export const getBlog = (id: number) => {
  return axiosWithAuth(`/posts/${id}`, {
    method: "get",
  });
};

export const getmedia_postAll = () => {
  return axiosWithAuth("/mediapost", {
    method: "get",
  });
};

export const getmedia_post = (id: number) => {
  return axiosWithAuth(`/mediapost/${id}`, {
    method: "get",
  });
};
// Hàm để xóa bài viết và hình ảnh
export const deleteBlog = async (id: number) => {
  return await axiosWithAuth(`/posts-delete/${id}`, { method: "delete" });
};



// Hàm để thêm bài viết
export const createBlog = async (newBlog: any) => {
  return await axios.post("/mediapost-create", newBlog);
};


