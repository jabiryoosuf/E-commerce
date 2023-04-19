import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosApi } from "./axios-method";
import { toast } from "react-toastify";
   

  //add to cart item
export const cartApi = createAsyncThunk(
  "cart/cartApi",
  async ({ quantity, product, navigate }) => {
    console.log("gfhfhfg",quantity, product);
    const res = await axiosApi.post("/cart/admin/new",{items:{ quantity, product}});

    console.log(res);

    navigate("/cart");

    return res.data;
  }
);
  //get all cart items
export const getCartItemsAPi = createAsyncThunk(
  "cart/getCartItems",
  async () => {
    const response = await axiosApi.get("/cart/admin/all");
    console.log(response.data);
    return response.data
  }
);
     //remove cartitem
export const deleteCartApi=createAsyncThunk('cart/deleteCartApi',async(cartproductId)=>{
  const response=await axiosApi.delete(`/cart/admin/${cartproductId}`)
  console.log(response.data);
  return response.data
}
)

const initialState = {
  loading: false,
  error: null,
  cartItems: [],
  getcartitems: [],
  subtotal:''  
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
      
      totalCartAmt:(state,action)=>{
        state.subtotal=action .payload
      }

  },
  extraReducers: {
    [cartApi.pending]: (state) => {
      state.loading = true;
      console.log("cartItems pending");
    },
    [cartApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.cartItems = action.payload;
      console.log("cartItems success");
      toast.success("item added to cart")
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
export const { totalCartAmt } = cartSlice.actions;
export default cartSlice.reducer;
