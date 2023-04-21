import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";

export const getblogs = createAsyncThunk('blog/getAllBlog', async (thunkAPI) => {
    try {
        return await blogService.getblogs()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const initialState = {
    blogs: [],
    isError: false,
    isLoding: false,
    isSuccess: false,
    message: ""
}
export const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getblogs.pending,
            (state) => {
                state.isLoding = true;
            })
            .addCase(getblogs.fulfilled,
                (state, action) => {
                    state.isLoding = false;
                    state.isError = false
                    state.isSuccess = true
                    state.blogs = action.payload
                })
            .addCase(getblogs.rejected,
                (state, action) => {
                    state.isLoding = false;
                    state.isError = true
                    state.isSuccess = false
                    state.message = action.error;
                })
    },


})

export default blogSlice.reducer;