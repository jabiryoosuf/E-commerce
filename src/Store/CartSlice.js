import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  cartItems: [],
};

export const cartApi = createAsyncThunk(
  "cart/cartApi",
  async ({ qty, navigate }) => {
    const res = await axios.post("/cart/admin/new", qty);
    console.log(res);
    navigate("/cart");

    return res.data;
  }
);

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
  },
});

export default cartSlice.reducer;
