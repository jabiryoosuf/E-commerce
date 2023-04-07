import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";

export const addproductApi = createAsyncThunk(
  "products/addproductApi",
  async ({ data, formData, navigate }) => {
    console.log(formData);
    const response = await axiosApi.post("/product/admin/new", data);
    console.log(response);
    const productId = response.data._id;
    await axiosApi.post(`/productImage/admin/new/${productId}`, formData);
    navigate("/allproducts");
    return response.data;
  }
);

export const allproductsApi = createAsyncThunk(
  "products/allproductApi",
  async () => {
    const response = await axiosApi.get("/product/admin/all");
    console.log(response);
    return response.data;
  }
);
export const DeleteProductApi = createAsyncThunk(
  "products/DeleteProductApi",
  async (productId) => {
    const response = await axiosApi.delete(
      `/product/delete/admin/${productId}`
    );
    console.log(response);
    return response.data;
  }
);

export const SingleProductApi=createAsyncThunk("products/SingleProductApi",async(productId)=>{
   const response = await axiosApi.get(`/product/admin/${productId}`)
   console.log(response);
   return response.data
})

export const UpdateProductApi = createAsyncThunk(
  "products/UpdateProductApi",
  async ({ data,navigate ,productId}) => {
    const response = await axiosApi.put(`/product/update/admin/${productId}`, data);
    console.log(response);
   //  const productId = response.data._id;
   //  await axiosApi.post(`/productImage/admin/new/${productId}`, formData);
    navigate("/allproducts");
    return response.data;
  }
);

const initialState = {
  addproducts: {},
  allproduct: {},
  deleteproduct: {},
  updateproduct:{},
  singleproduct:{}
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [addproductApi.pending]: () => {
      console.log("data submission pending");
    },
    [addproductApi.fulfilled]: (state, action) => {
      state.addproducts = action.payload;
      console.log("submission fulfilled");
    },
    [addproductApi.rejected]: () => {
      console.log("submission rejected");
    },
    [allproductsApi.pending]: () => {
      console.log("data submission pending");
    },
    [allproductsApi.fulfilled]: (state, action) => {
      state.allproduct = action.payload;
      console.log("submission fulfilled");
    },
    [allproductsApi.rejected]: () => {
      console.log("submission rejected");
    },
    [DeleteProductApi.pending]: () => {
      console.log("task pending");
    },
    [DeleteProductApi.fulfilled]: (state, action) => {
      state.deleteproduct = action.payload;
      console.log("deletion succesfull");
    },
    [DeleteProductApi.rejected]: () => {
      console.log("task rejected");
    },
    [UpdateProductApi.pending]: () => {
      console.log("update penidng");
    },
    [UpdateProductApi.fulfilled]: (state,action) => {
      console.log("updation fulfilled");
      state.updateproduct=action.payload
    },
    [UpdateProductApi.rejected]: () => {
      console.log("updation rejected");
    },
    [SingleProductApi.pending]:(state,action)=>{
      console.log("data pending");
    },
    [SingleProductApi.fulfilled]:(state,action)=>{
      state.singleproduct=action.payload
      console.log("data fulfilled");
    },
    [SingleProductApi.rejected]:(state,action)=>{
      console.log("data rejected");
    }
    
  },
});
export default ProductSlice.reducer;
