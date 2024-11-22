import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createInforProduct, createProduct, deleteProduct, GetImgProduct, getProductCateloriesByDad, getProductDetail, getProducts, getProductsByIdCatelogry } from "../../service/product/product.service";


export const ProductByIdCatelogryThunk = createAsyncThunk(
  "ProductByIdCatelogryThunk",
  async (key: number) => {
    try {
      const resp = await getProductsByIdCatelogry(key)
      return resp.data.content;
    } catch (error) {
      console.log(error);
    }
  }
)


// eslint-disable-next-line react-refresh/only-export-components
export const GetAllImgThunk = createAsyncThunk(
  "GetAllImgThunk",
  async () => {
    try {
      const resp = await GetImgProduct()
      return resp.data.content;
    } catch (error) {
      console.log(error);
    }
  }
)

// Khu vực phía trên của devTri

export const getProductByCateloriesDad = createAsyncThunk(
  "getProductByCateloriesDad",
  async (name: any) => {
    try {
      console.log(name.category);
      const resp = await getProductCateloriesByDad(name.category_dad, name.category);
      return resp.data.content;


    } catch (e) {
      console.log(e);
    }
  },
);

export const getProductsThunk = createAsyncThunk(
  "getProductsThunk",
  async () => {
    try {
      const resp = await getProducts();
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);

export const getProductsAdminThunk = createAsyncThunk(
  "getProductsAdminThunk",
  async (searchKey: string) => {
    try {

      const resp = await getProducts();
      const result = resp.data.content;
      if (searchKey.trim()) {
        const filteredResults = result.filter((item: any) =>
          item.product_name.toLowerCase().includes(searchKey.toLowerCase())
        );
        return filteredResults;
      } else {
        // Return all results if no search key is provided
        return result.reverse();
      }
      // return resp.content.reverse();
    } catch (e) {
      console.log(e);
    }
  },
);

export const createProductAdminThunk = createAsyncThunk(
  "createProductAdminThunk",
  async (dataCreate: any, { dispatch }) => {
    try {
      await createProduct(dataCreate);
      const response = await dispatch(getProductsAdminThunk(''));
      return response.payload;
    } catch (e) {
      console.log(e);
    }
  },
);
export const createInforProductAdminThunk = createAsyncThunk(
  "createInforProductAdminThunk",
  async (dataCreate: any, { dispatch }) => {
    try {
      await createInforProduct(dataCreate);
      const response = await dispatch(getProductsAdminThunk(''));
      return response.payload;
    } catch (e) {
      console.log(e);
    }
  },
);
export const deleteProductAdminThunk = createAsyncThunk(
  "deleteProductAdminThunk",
  async (id: number, { dispatch }) => {
    try {
      await deleteProduct(id);
      const response = await dispatch(getProductsAdminThunk(''));
      return response.payload;
    } catch (e) {
      console.log(e);
    }
  },
);

export const getProductByIdThunk = createAsyncThunk(
  "getProductByIdThunk",
  async (id) => {
    try {
      const resp = await getProductDetail(id);
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);

const initialState = {
  listProductByIdCategory: [],
  listProductImage: [],
  listProduct: [],
  listProducts: [],
  listAdminProducts: [],
  productDetail: {},
  productColors: [],
  listProductStorage: [],

};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    setProduct: (state, { payload }) => {
      state.listProduct = payload;
    },
    setProductColors: (state, { payload }) => {
      state.productColors.push(payload);
    },
    setProductStorage: (state, { payload }) => {
      state.listProductStorage.push(payload);
    },
    setlistProductByIdCategory: (state, { payload }) => {
      state.listProductByIdCategory = payload;
    }
  },
  extraReducers: (builder) => {

    builder
      .addCase(ProductByIdCatelogryThunk.fulfilled, (state, { payload }) => {
        state.listProductByIdCategory = payload;
      })
    builder
      .addCase(GetAllImgThunk.fulfilled, (state, { payload }) => {
        state.listProductImage = payload;
      })
    // Khu vực trên của devTri
    builder
      .addCase(getProductByCateloriesDad.fulfilled, (state, { payload }) => {
        state.listProduct = payload;
      })
    builder
      .addCase(getProductsThunk.fulfilled, (state, { payload }) => {
        state.listProducts = payload;
      })
    builder
      .addCase(getProductsAdminThunk.fulfilled, (state, { payload }) => {
        state.listAdminProducts = payload;
      })
    builder
      .addCase(getProductByIdThunk.fulfilled, (state, { payload }) => {
        state.productDetail = payload;
      })
    builder
      .addCase(createInforProductAdminThunk.fulfilled, (state, { payload }) => {
        state.productDetail = payload;
      })
    builder
      .addCase(deleteProductAdminThunk.fulfilled, (state, { payload }) => {
        state.listAdminProducts = payload;
      });
  },
});

export const { setProduct, setProductColors, setlistProductByIdCategory, setProductStorage } = ProductSlice.actions;

export const productReducer = ProductSlice.reducer;