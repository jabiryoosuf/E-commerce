import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";

  


  export const  addwishlistApi=createAsyncThunk('wishlist/addwishlistApi',async()=>{
    const response=await axiosApi.post('/wishlist/admin/new')
    console.log(response);
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
         console.log("data pending");
        },
        [addwishlistApi.fulfilled]:(state,action)=>{
            state.wishlist=action.payload
        },
        [addwishlistApi.rejected]:()=>{
            console.log("data rejected");
        }
    }
})
export default wishListSlice.reducer


