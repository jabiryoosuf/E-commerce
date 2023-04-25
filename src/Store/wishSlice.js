import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: false,
  wishlist:[]
};

// add to wishList

export const addwishListApi = createAsyncThunk("wish/addwishListApi",async (productId) => {
    console.log(productId);
    const responds = await axiosApi.post(`/wishlist/admin/new`,{product: productId,});
    return responds.data;
  }
);

// get all wishList

export const getwishListApi = createAsyncThunk(
  "wish/getwishListApi",async () => {
    const res = await axiosApi.get(`/wishlist/user/all`);
    console.log(res.data);
    return res.data;
  }
);

// Remove form wishList

export const RemovewishListApi = createAsyncThunk(
  "wish/addwishListApi",
  async (productId) => {
    const responds = await axiosApi.delete(`/wishlist/user/${productId}`);
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
      console.log("wishList success");
      state.error = false;
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
    [getwishListApi.fulfilled]: (state,action) => {
      state.loading = false;
      state.wishlist = action.payload;
      console.log("wishList success");
      state.error = false;
  
    },
    [getwishListApi.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      console.log("wishList failed");
    },

    // Remove from wishList

    [RemovewishListApi.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
      console.log("remove wishlist pending");
    },
    [RemovewishListApi.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("Wishlist item Removed successfully");
      state.error = false;
    },
    [RemovewishListApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      console.log("Remove wishlist item rejected");
    },
  },
});

export default wishSlice.reducer;
