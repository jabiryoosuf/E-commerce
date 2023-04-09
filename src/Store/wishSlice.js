import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";

const initialState = {
  loading: false,
  error: false,
  wishList: [],
};

export const addwishListApi = createAsyncThunk("wish/addwishListApi", async (productId) => {
  const responds = await axiosApi.post(`/wishlist/admin/new`,productId);
  return responds.data;
});

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {},
  extraReducers: {
    [addwishListApi.pending]: (state) => {
      state.loading = true;
      console.log("wishList pending");
    },
    [addwishListApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
 
      console.log("wishList success");
    },
    [addwishListApi.rejected]:(state)=>{
        state.loading=false
        state.error = true
        console.log("wishList failed");
    }
  },
});

export default wishSlice.reducer