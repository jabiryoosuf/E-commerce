import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";
import { toast } from "react-toastify";
const initialState = {
  loading: false,
  error: false,
  wishList:[],
};

// add to wishList

export const addwishListApi = createAsyncThunk(
  "wishlist/addwishListApi",
  async ({product,navigate}) => {
    console.log(product);
    const responds = await axiosApi.post('/wishlist/admin/new',{products:product});
    navigate('/wishlist')
    return responds.data;

  }
);

// get all wishList

export const getwishListApi = createAsyncThunk(
  "wishlist/ getwishListApi",
  async () => {
    const responds = await axiosApi.get('/wishlist/user/all');
    console.log(responds);
    return responds.data;
  }
);

// Remove form wishList

export const RemovewishListApi = createAsyncThunk(
  "wishlist/RemovewishListApi",
  async (wishproductId) => {
    console.log(wishproductId);
    const responds = await axiosApi.put(`/wishlist/user/remove/${wishproductId}`);
    console.log(responds);
    return responds.data;
  }
);

const wishSlice = createSlice({
  name: "wishlist",
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
      state.wishList=action.payload
      toast.success("item added to wishlist")
      
    },
    [addwishListApi.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      console.log("wishList failed");
    },

    // //get all wishList items

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
    [RemovewishListApi.fulfilled]:()=>{
      toast.success("item removed from wishlist")}
  
  }
});

export default wishSlice.reducer;