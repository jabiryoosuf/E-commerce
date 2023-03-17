import { createSlice } from '@reduxjs/toolkit'

 const initialState = {
   
    token: "",
 };
const AuthSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:{  
               
    }
})
export default AuthSlice.reducer;
