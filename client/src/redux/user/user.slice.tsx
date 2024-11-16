import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { changePassword, getUserDetail, updateUserDetail, uploadImage, verifyPassword, getAllUser, DeleteStaffSend, createStaff, getUserAdmin, UpdateStaff } from '../../service/user/user.service';
import { DataStaffInterface, UpdateStaffInterface } from "../../page/Admin/User/Component/DataStaff";
import Swal from "sweetalert2";


export const getAllUserThunk = createAsyncThunk(
  "getAllUserThunk",
  async () => {
    try {
      const resp = await getAllUser();
      return resp.data.content;
    } catch (e) {
      console.log(e);

    }
  },
);

export const deleteStaffThunk = createAsyncThunk(
  "deleteStaffThunk",
  async (id: number) => {
    try {
      const resp = await DeleteStaffSend(id);
      return resp.data.content;

    } catch (e) {
      console.log(e);

    }
  },
);


export const createStaffThunk = createAsyncThunk(
  "createStaffThunk",
  async (DataStaff: DataStaffInterface) => {
    try {
      const resp = await createStaff(DataStaff);
      if (resp.data.statusCode === 200) {
        return resp.data.content;
      } else {
        Swal.fire({
          title: `Thất bại lỗi ${resp.data.statusCode}`,
          text: `${resp.data.message}`,
          icon: 'error',
          showCancelButton: true,
          cancelButtonText: `Thử lại`,
          cancelButtonColor: "#d33",
          showConfirmButton: false
        })
        return;
      }
    } catch (e) {
      console.log(e);
    }
  },
);

export const UpdateStaffThunk = createAsyncThunk(
  "UpdateStaffThunk", async (UpdateStaffSend: UpdateStaffInterface) => {  // Destructure đúng cách

    try {
      const resp = await UpdateStaff(UpdateStaffSend);
      if (resp.data.statusCode === 200) {
        return resp.data.content;
      } else {
        Swal.fire({
          title: `Thất bại lỗi ${resp.data.statusCode}`,
          text: `${resp.data.message}`,
          icon: 'error',
          showCancelButton: true,
          cancelButtonText: `Thử lại`,
          cancelButtonColor: "#d33",
          showConfirmButton: false
        })
        return;
      }
    } catch (e) {
      console.log(e);
    }
  },
);


export const getUserAdminThunk = createAsyncThunk(
  "getUserAdminThunk",
  async (id: number) => {
    try {
      const resp = await getUserAdmin(id);
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);



export const getUserThunk = createAsyncThunk(
  "getUserThunk",
  async () => {
    try {
      const resp = await getUserDetail();
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);

export const updateUserDetailThunk = createAsyncThunk(
  "updateUserThunk",
  async (payload) => {
    console.log("dtaa", payload)
    try {
      const resp = await updateUserDetail(payload);
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);
export const verifyPasswordDetail = createAsyncThunk(
  "verifyPasswordThunk",
  async (payload) => {
    try {
      const resp = await verifyPassword(payload);
      return resp.data;
    } catch (e) {
      console.log(e);
    }
  },
);
export const changePasswordDetail = createAsyncThunk(
  "changePasswordDetail",
  async (payload) => {
    try {
      const resp = await changePassword(payload);
      return resp.data;
    } catch (e) {
      console.log(e);
    }
  },
);
export const changeUploadImage = createAsyncThunk(
  "changeUploadImage",
  async (payload) => {
    try {
      const resp = await uploadImage(payload);
      return resp.data.content.user_image;
    } catch (e) {
      console.log(e);
    }
  },
);











const initialState = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Alluser: [] as any[],
  user: {},
  token: null,
  login: false,
  thongBao: "",
  imgUser: ""
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setAllUser: (state, { payload }) => {
      state.Alluser = payload;
    },
    setLogin: (state, { payload }) => {
      state.login = payload;
    },
    setUserDetail: (state, { payload }) => {
      state.user = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUserThunk.fulfilled, (state, { payload }) => {
        state.Alluser = payload;
      })
    builder
      .addCase(deleteStaffThunk.fulfilled, (state, { payload }) => {
        state.Alluser = payload;
      })

    builder
      .addCase(createStaffThunk.fulfilled, (state, { payload }) => {
        state.Alluser = payload;
      })

    builder
      .addCase(getUserAdminThunk.fulfilled, (state, { payload }) => {
        console.log("payload", payload.token)

        state.token = payload;
      })

    builder
      .addCase(UpdateStaffThunk.fulfilled, (state, { payload }) => {
        state.token = payload;
      })
    //Ở trên là khu vực builder của devTri

    builder
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
    builder
      .addCase(updateUserDetailThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
    builder
      .addCase(verifyPasswordDetail.fulfilled, (state, { payload }) => {
        state.thongBao = payload;
      })
    builder
      .addCase(changePasswordDetail.fulfilled, (state, { payload }) => {
        state.thongBao = payload;
      })
    builder
      .addCase(changeUploadImage.fulfilled, (state, { payload }) => {
        state.user.user_image = payload;
      })

  },
});

export const { setAllUser, setUserDetail, setToken, setLogin } = UserSlice.actions;

export const userReducer = UserSlice.reducer;