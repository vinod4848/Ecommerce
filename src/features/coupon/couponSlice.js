import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import couponService from "./couponService";

export const getCoupans = createAsyncThunk(
  "coupon/getAllcoupon",
  async (thunkAPI) => {
    try {
      return await couponService.getCoupans();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createCoupon = createAsyncThunk(
  "coupon/createcoupon",
  async (coupondata, thunkAPI) => {
    try {
      return await couponService.createCoupon(coupondata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetState = createAction("Reset_all");
const initialState = {
  coupons: [],
  isError: false,
  isLoding: false,
  isSuccess: false,
  message: "",
};
export const couponSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoupans.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(getCoupans.fulfilled, (state, action) => {
        state.isLoding = false;
        state.isError = false;
        state.isSuccess = true;
        state.coupons = action.payload;
      })
      .addCase(getCoupans.rejected, (state, action) => {
        state.isLoding = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createCoupon.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(createCoupon.fulfilled, (state, action) => {
        state.isLoding = false;
        state.isError = false;
        state.isSuccess = true;
        state.createcoupon = action.payload;
      })
      .addCase(createCoupon.rejected, (state, action) => {
        state.isLoding = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default couponSlice.reducer;
