import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";

const initialState = {
  loading: false,
  error: null,
  cartItems: [],
};
let userId
export const cartApi = createAsyncThunk("cart/cartApi", async ({products,navigate}) => {
  console.log(products);
  const res = await axiosApi.post("/cart/admin/new",products);
  console.log(res);
  userId=res.data.userId
  console.log(userId);
  // await navigate("/cart");
  return res.data;
});


export const getcartApi = createAsyncThunk("cart/cartApi", async () => {
  const res = await axiosApi.get(`/cart/admin/${userId}` );
  console.log(res);
  return res.data;
});

const cartSlice = createSlice({
    
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [cartApi.pending]: (state) => {
      state.loading = true;
      console.log("add cartItems pending");
    },
    [cartApi.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("add cartItems success");
      state.error = false;
    },
    [cartApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("add cartItems rejected");
    },
    [getcartApi.pending]: (state) => {
      state.loading = true;
      console.log("cartItems pending");
    },
    [getcartApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.cartItems = action.payload;
      console.log("cartItems success");
      state.error = false;
    },
    [getcartApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("cartItems rejected");
    },
  },
});

export default cartSlice.reducer;
