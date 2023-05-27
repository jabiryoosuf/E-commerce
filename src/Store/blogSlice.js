import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosApi } from "./axios-method"


const initialState ={
    blogs:[]
}

export const getBlogApi = createAsyncThunk("blog/getBlogApi",async()=>{
    const response = await axiosApi.get("/api/blog")
    console.log('====================================');
    console.log(response);
    console.log('====================================');
    return response.data
})

const blogSlice = createSlice({
    name:"blog",
    initialState,
    reducers:{},
    extraReducers:{
        [getBlogApi.pending]:(state)=>{
            console.log("get blog pending");
        },
        [getBlogApi.fulfilled]:(state,action)=>{
            state.blogs = action.payload
            console.log("get blog success");
        },
        [getBlogApi.rejected]:(state)=>{
            console.log("get blog regected");
        }
    }
})

export default blogSlice.reducer