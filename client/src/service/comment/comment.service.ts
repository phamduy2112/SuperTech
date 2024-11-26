import { axiosWithAuth } from "../axios.config";

export const getCommentAllProduct = () => {
  return axiosWithAuth(`/commentproduct`, {
    method: "get",
  });
};

export const deleteCommentProduct = (dataThunk) => {
  return axiosWithAuth(`/detele-comment/${dataThunk.key}`, {
    method: "delete",
    headers: {
      token: dataThunk.token,
    },
  });
};

export const getAllReplies_comment_product = (Id: number) => {
  return axiosWithAuth(`/get-comment-by-id-product/${Id}`, {
    method: "get",
  });
};

export const getCommentByIdProduct = (id: number) => {
  return axiosWithAuth(`/get-comment-by-id-product/${id}`, {
    method: "get",
  });
};
export const createCommentByIdProduct = (payload: any) => {
  return axiosWithAuth(`/create-comment`, {
    method: "post",
    data: payload,
  });
};
export const deleteCommentByIdProduct = (id: number) => {
  return axiosWithAuth(`/detele-comment/${id}`, {
    method: "delete",
  });
};
export const createLike = (id: number) => {
  return axiosWithAuth(`/create-like/${id}`, {
    method: "post",
  });
};
export const putCommentByIdProduct = (id: number, payload: any) => {
  return axiosWithAuth(`/put-comment/${id}`, {
    method: "put",
    data: payload,
  });
};
