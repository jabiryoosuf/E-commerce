import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";
 
// add product

  export const addproductApi= createAsyncThunk('products/addproductApi',async({data,formData,navigate})=>{
    const response=await axiosApi.post('/product/admin/new',data)
    console.log(response);
    const productId=response.data._id
    await axiosApi.post(`/productImage/admin/new/${productId}`,formData)
    navigate('/allproducts')
    return response.data
  }  
  );
 
// get all products

  export const allproductsApi= createAsyncThunk ("products/allproductApi",async()=>{
   const response=await axiosApi.get('/product/admin/all')
   console.log(response);
   return response.data
}
)

  const initialState={
   addproducts:{},
    allproduct:{},
    deleteproduct:{}
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
             },
             [DeleteProductApi.pending]:()=>{
               console.log("task pending");
             },
             [DeleteProductApi.fulfilled]:(state,action)=>{
               state.deleteproduct=action.payload
               console.log("deletion succesfull");
             },
             [DeleteProductApi.rejected]:()=>{
               console.log("task rejected");
             }

         }

  })
  export default ProductSlice.reducer;

