import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";
import { toast } from "react-toastify";

export const loginApi = createAsyncThunk(
  "auth/loginApi",
  async ({ login, navigate }) => {
    const result = await axiosApi.post("/login/mail", login);
    console.log(result);
    if (result?.data?.token) {
      localStorage.setItem("token", result.data.token);
      navigate("/");
    }
    return result.data;
  }
);
export const registerApi = createAsyncThunk(
  "auth/registerApi",
  async ({ data, navigate }) => {
    const result = await axiosApi.post("/register/mail", data);
    console.log(result);
    navigate("/login");
    return result.data;
  }
);
export const forgotpasswordApi = createAsyncThunk(
  "auth/forgotpasswordApi",
  async (email) => {
    await toast.loading("sending Email...");
    const result = await axiosApi.post("/forgot", email);
    toast.dismiss();
    console.log(result);
    return result.data;
  }
);

export const resetpasswordApi = createAsyncThunk(
  "auth/resetpasswordApi",
  async ({ password, id }) => {
    const result = await axiosApi.post(`password/reset/${id}`, password);
    console.log(result);
  }
);

const initialState = {
  token: "",
  user: {},
  user: {},
  email: {},
  password: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducer: {
    [loginApi.pending]: (state, action) => {
      console.log("login pending");
    },
    [loginApi.fulfilled]: (state, action) => {
      console.log("login fullfilled");
      state.token = action.payload.token;
      toast.success("login succes")
    },
    [loginApi.rejected]: (state, action) => {
      console.log("login rejected");
      toast.error("login failed")
    },
    [registerApi.fulfilled]: (state, action) => {
      state.user = action.payload;

      console.log("register successfull");
      toast.success("register succes", { autoClose: 1000 });
    },
    [registerApi.rejected]: () => {
      console.log("register pending");
    },
    [forgotpasswordApi.pending]: (state) => {
      console.log("pending");

    },
    [forgotpasswordApi.fulfilled]: (state, action) => {
      console.log("task successfull");
      state.email = action.payload.email;
       toast.success("successfully send email", { autoClose: 1000 })
    },
    [forgotpasswordApi.rejected]: () => {
      console.log("task rejcted");
    },
    [resetpasswordApi.pending]: () => {
      console.log("task pending");
    },
    [resetpasswordApi.fulfilled]: (state, action) => {
      state.password = action.payload.password;

      toast.success("successfuly reset your password",{ autoClose: 1000 })
    },
    [resetpasswordApi.rejected]: () => {
      console.log("task rejected");
    },
  },
});

export default authSlice.reducer;
