import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";

const initialState = {
  loading: false,
  error: false,
  wishList: [],
};

// add to wishList

export const addwishListApi = createAsyncThunk(
  "wish/addwishListApi",
  async (productId) => {
    console.log(productId);
    const responds = await axiosApi.post(`/wishlist/admin/new`,{products:productId});
    return responds.data;
  }
);

// get all wishList

export const getwishListApi = createAsyncThunk(
  "wish/addwishListApi",
  async () => {
    const responds = await axiosApi.get(`/wishlist/admin/all`);
    return responds.data;
  }
);

// Remove form wishList

export const RemovewishListApi = createAsyncThunk(
  "wish/addwishListApi",
  async (productId) => {
    const responds = await axiosApi.delete(`/wishlist/admin/${productId}`);
    return responds.data;
  }
);

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {},
  extraReducers: {

    // add to wishList

    [addwishListApi.pending]: (state) => {
      state.loading = true;
      console.log("wishList pending");
    },
    [addwishListApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      console.log("wishList success");
    },
    [addwishListApi.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      console.log("wishList failed");
    },

    //get all wishList items

    [getwishListApi.pending]: (state) => {
      state.loading = true;
      console.log("wishList pending");
    },
    [getwishListApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.wishList = action.payload;
      state.error = false;
      console.log("wishList success");
    },
    [getwishListApi.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      console.log("wishList failed");
    },
  },
});

export default wishSlice.reducer;
