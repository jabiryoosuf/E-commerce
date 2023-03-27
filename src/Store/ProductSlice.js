import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";
 
  export const addproductApi= createAsyncThunk('products/addproductApi',async(data)=>{
    const response=await axiosApi.post('/admin/admin/new',data)
    console.log(response);
  }

  )


   const initialState={
    products:{},
   }

  const ProductSlice=createSlice({
     name:'products',
     initialState,
     reducers:{},
     extraReducers:{
           
            [addproductApi.pending]:()=>{
               console.log("data submission pending");
            },
            [addproductApi.fulfilled]:(state,action)=>{
               state.products=action.payload
               console.log("submission fulfilled");

            },
            [addproductApi.rejected]:()=>{
               console.log("submission rejected");
            }
         }

  })