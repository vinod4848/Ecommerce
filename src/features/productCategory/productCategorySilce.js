import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import ProductCategoryService from "./productCategoryService";

export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async (thunkAPI) => {
    try {
      return await ProductCategoryService.getAllCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createcategory = createAsyncThunk(
  "category/category",
  async (categorydata, thunkAPI) => {
    try {
      return await ProductCategoryService.createCategory(categorydata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetState = createAction("Reset_all");
const initialState = {
  prodcategories: [],
  isError: false,
  isLoding: false,
  isSuccess: false,
  message: "",
};
export const productCategorySlice = createSlice({
  name: "prodcategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.isLoding = false;
        state.isError = false;
        state.isSuccess = true;
        state.prodcategories = action.payload;
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.isLoding = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createcategory.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(createcategory.fulfilled, (state, action) => {
        state.isLoding = false;
        state.isError = false;
        state.isSuccess = true;
        state.createCategory = action.payload;
      })
      .addCase(createcategory.rejected, (state, action) => {
        state.isLoding = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default productCategorySlice.reducer;
