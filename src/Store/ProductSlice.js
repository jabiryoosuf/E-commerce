import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";
 
  export const addproductApi= createAsyncThunk('products/addproductApi',async({data,navigate})=>{
    const response=await axiosApi.post('/product/admin/new',data)
    console.log(response);
    navigate('/allproducts')
  }

  );
  export const allproductsApi= createAsyncThunk ("products/allproductApi",async(data)=>{
    const response=await axiosApi.get('/product/admin/all',data)
    console.log(response);
    return response.data
  })
  const initialState={
    products:{},
    allproduct:{}
   
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
            },
            [allproductsApi.pending]:()=>{
                console.log("data submission pending");
             },
             [allproductsApi.fulfilled]:(state,action)=>{
                state.allproduct=action.payload
                console.log("submission fulfilled");
             },
             [allproductsApi.rejected]:()=>{
                console.log("submission rejected");
             }
         }

  })
  export default ProductSlice.reducer;

