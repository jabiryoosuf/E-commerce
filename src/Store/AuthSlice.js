import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import { axiosApi } from "./axios-method";

export const loginApi =createAsyncThunk  ("auth/loginApi", async (input) => {
  const result = await axiosApi.post("/login/mail",input.login);
  console.log(result);
  if (result?.data?.token) {
    localStorage.setItem("token", result.data.token);
    input.navigate('/')
  }
  return result.data;
});
 
export const registerApi = createAsyncThunk("auth/registerApi",async(data,navigate)=>{
    const result=await axiosApi.post("/register/mail",data);
    console.log(result);
     navigate('/login')
    return result.data

    
})


  const initialState={
    token:"",
  }


  const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducer: {
      [loginApi.pending]: (state, action) => {
        console.log("login pending");
      },
      [loginApi.fulfilled]: (state, action) => {
        console.log("login fullfilled");
        state.token = action.payload.token;
        // toast.success("login succes")
      },
      [loginApi.rejected]: (state, action) => {
        console.log("login rejected");
        // toast.error("login failed")
      },
       [registerApi.fulfilled]:()=>{
        console.log("register successfull");
        
       },
       [registerApi.pending]:()=>{
        console.log("register pending");
       },
       [registerApi.rejected]:()=>{
        console.log("register pending");
       }
    }
  })
    
  

export default authSlice.reducer