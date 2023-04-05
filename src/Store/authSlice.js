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
    }
    if (result?.data?.role) {
      localStorage.setItem("role", result.data.role);
    }
    if (result.data.role==='admin') {
      navigate("/admin");
    window.location.reload(false)
    } else {
      navigate("/");
    }

    console.log(result);

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
export const forgotpassowrdApi = createAsyncThunk(
  "auth/forgotpassowrdApi",
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
  email: {},
  password: {},
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [loginApi.pending]: (state, action) => {
      console.log("login pending");
    },
    [loginApi.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      console.log("login fullfilled");
      toast.success("login succes", { autoClose: 1000 });
    },
    [loginApi.rejected]: (state, action) => {
      console.log("login rejected");
      toast.error("login failed", { autoClose: 1000 });
    },

    [registerApi.pending]: () => {
      console.log("register pending");
    },
    [registerApi.fulfilled]: (state, action) => {
      state.user = action.payload;

      console.log("register successfull");
      toast.success("register succes", { autoClose: 1000 });
    },
    [registerApi.rejected]: () => {
      console.log("register pending");
    },
    [forgotpassowrdApi.pending]: (state) => {
      console.log("pending");

      //  toast.loading(("Sending email..."), { autoClose: true });
      //  toast.update(0, { render: "Email sent successfully!", type: "success", autoClose: 1000 });
    },
    [forgotpassowrdApi.fulfilled]: (state, action) => {
      console.log("task successfull");
      state.email = action.payload.email;
      toast.success("successfully send email", { autoClose: 1000 });
    },
    [forgotpassowrdApi.rejected]: () => {
      console.log("task rejcted");
    },
    [resetpasswordApi.pending]: () => {
      console.log("task pending");
    },
    [resetpasswordApi.fulfilled]: (state, action) => {
      state.password = action.payload.password;

      toast.success("successfuly reset your paswword", { autoClose: 1000 });
    },
    [resetpasswordApi.rejected]: () => {
      console.log("task rejected");
    },
  },
});

export default AuthSlice.reducer;
