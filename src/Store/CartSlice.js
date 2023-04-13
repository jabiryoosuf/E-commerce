import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  cartItems: [],
  totalPrice: "",
  totalCartItems:""
};

// add to cart

export const cartApi = createAsyncThunk(
  "cart/cartApi",
  async ({ product, quantity, navigate }) => {
    const res = await axiosApi.post("/cart/admin/new",{items:{ product, quantity }});
    console.log(res);
    await navigate("/cart");
    return res.data;
  }
);

// get all  cart Items

export const getcartApi = createAsyncThunk("cart/cartApi", async () => {
  const res = await axiosApi.get(`/cart/user/all`);
  console.log(res);
  return res.data;
});

// Remove form cart

export const RemoveCartApi = createAsyncThunk(
  "wish/addwishListApi",
  async (cartItemId) => {
    const responds = await axiosApi.delete(`/cart/admin/${cartItemId}`);
    return responds.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    totalCartAmount: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
  extraReducers: {
    // add to cart

    [cartApi.pending]: (state) => {
      state.loading = true;
      console.log("add cartItems pending");
    },
    [cartApi.fulfilled]: (state, action) => {
      console.log("add cartItems success");
      toast.success("added to cart success", { autoClose: 1000 })
      state.loading = false;
      state.error = false;
    },
    [cartApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("add cartItems rejected");
    },

    // get all  cart Items

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

    // Remove form cart

    [RemoveCartApi.pending]: (state) => {
      state.loading = true;
      console.log("Remove cartItems pending");
    },
    [RemoveCartApi.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("Remove cartItems success");
      state.error = false;
    },
    [RemoveCartApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("Remove cartItems rejected");
    },
  },
});
export const { totalCart,totalCartAmount } = cartSlice.actions;
export default cartSlice.reducer;
