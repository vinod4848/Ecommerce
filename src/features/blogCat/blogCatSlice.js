import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import blogCatService from "./blogCatService";

export const getblogCat = createAsyncThunk(
  "blogCat/getAllblogCat",
  async (thunkAPI) => {
    try {
      return await blogCatService.getblogCat();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createBlogCat = createAsyncThunk(
  "blogCat/createblogCat",
  async (BlogCatdata, thunkAPI) => {
    try {
      return await blogCatService.createBlogCat(BlogCatdata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");
const initialState = {
  blogCats: [],
  isError: false,
  isLoding: false,
  isSuccess: false,
  message: "",
};
export const blogCatSlice = createSlice({
  name: "blogCats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getblogCat.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(getblogCat.fulfilled, (state, action) => {
        state.isLoding = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogCats = action.payload;
      })
      .addCase(getblogCat.rejected, (state, action) => {
        state.isLoding = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createBlogCat.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(createBlogCat.fulfilled, (state, action) => {
        state.isLoding = false;
        state.isError = false;
        state.isSuccess = true;
        state.createblogCat = action.payload;
      })
      .addCase(createBlogCat.rejected, (state, action) => {
        state.isLoding = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default blogCatSlice.reducer;
