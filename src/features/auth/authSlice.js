/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authservice";

const getUserfromLocalstorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
  
const initialState = {
  user: getUserfromLocalstorage,
  orders: [],
  isError: false,
  isLoding: false,
  isSuccess: false,
  isMessage: "",
};
export const login = createAsyncThunk(
  "auth/admin-login",
  async (user, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOrders = createAsyncThunk(
  "user/getAllOrder",
  async (thunkAPI) => {
    try {
      return await authService.getOrders();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoding = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isMessage = "Success";
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isMessage = action.error;
        state.isLoding = false;
      })
      .addCase(getOrders.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoding = false;
        state.isSuccess = true;
        state.orders = action.payload;
        state.isMessage = "Success";
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isMessage = action.error;
        state.isLoding = false;
      });
  },
});

export default authSlice.reducer;
