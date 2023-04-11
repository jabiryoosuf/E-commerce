import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosApi } from "./axios-method";

export const cartApi = createAsyncThunk(
  "cart/cartApi",
  async ({ qty, productId, navigate }) => {
    const res = await axiosApi.post("/cart/admin/new", qty, productId);

    console.log(res);

    navigate("/cart");

    return res.data;
  }
);

export const getCartItemsAPi = createAsyncThunk(
  "cart/getCartItems",
  async () => {
    const response = await axiosApi.get("/cart/admin/all");
    console.log(response.data);
    return response.data
  }
);

export const deleteCartApi=createAsyncThunk('cart/deleteCartApi',async(productId)=>{
  const response=await axiosApi.delete(`/cart/admin/${productId}`)
}
)

const initialState = {
  loading: false,
  error: null,
  cartItems: [],
  getcartitems: [],

};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [cartApi.pending]: (state) => {
      state.loading = true;
      console.log("cartItems pending");
    },
    [cartApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.cartItems = action.payload;
      console.log("cartItems success");
      state.error = false;
    },
    [cartApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("cartItems rejected");
    },
    [getCartItemsAPi.fulfilled]: (state, action) => {
      state.loading = false;
      state.getcartitems = action.payload;
      console.log("items fulfilled");
    },
    [getCartItemsAPi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("cartItems rejected");
    },
  },
});

export default cartSlice.reducer;
