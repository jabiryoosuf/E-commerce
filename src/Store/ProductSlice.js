import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";
 
  export const addproductApi= createAsyncThunk('products/addproductApi',async({data})=>{
    const response=await axiosApi.post('/product/admin/new',data)
    console.log(response);
    
    return response.data
  } 
   
  );
 
  export const productimageApi =createAsyncThunk ("products/productimageApi",async({image,productId,navigate})=>{
   const response=await axiosApi.post(`/productImage/admin/new/${productId}`,image)
   console.log(response);
   navigate('/allproducts')
   return response.data
   
  })
  export const allproductsApi= createAsyncThunk ("products/allproductApi",async(data)=>{
   const response=await axiosApi.get('/product/admin/all',data)
   console.log(response);
   return response.data
 })
  const initialState={
   addproducts:{},
    allproduct:{},
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
               state.addproducts=action.payload
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

