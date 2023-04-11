import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";

  


  export const  addwishlistApi=createAsyncThunk('wishlist/addwishlistApi',async({productId,navigate})=>{
    const response=await axiosApi.post('/wishlist/admin/new')
    console.log(response);
    navigate('/wishlist')
    return response.data
  })
  
const initialState={
    wishlist:{}
}

  
const wishListSlice=createSlice({
     name:'wishlist',
 initialState,
    reducers:{},
    extraReducers:{
        [addwishlistApi.pending]:()=>{
         console.log("task pending");
        },
        [addwishlistApi.fulfilled]:(state,action)=>{
            state.wishlist=action.payload
            console.log("item addedd to wishlist");
        },
        [addwishlistApi.rejected]:()=>{
            console.log("task rejected");
        }
    }
})
export default wishListSlice.reducer


