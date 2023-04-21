import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductCategoryService from "./productCategoryService";

export const getAllCategory = createAsyncThunk('category/getAllCategory', async (thunkAPI) => {
    try {
        return await ProductCategoryService.getAllCategory()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const initialState = {
    prodcategories: [],
    isError: false,
    isLoding: false,
    isSuccess: false,
    message: ""
}
export const productCategorySlice = createSlice({
    name: "prodcategories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCategory.pending,
            (state) => {
                state.isLoding = true;
            })
            .addCase(getAllCategory.fulfilled,
                (state, action) => {
                    state.isLoding = false;
                    state.isError = false
                    state.isSuccess = true
                    state.prodcategories = action.payload
                })
            .addCase(getAllCategory.rejected,
                (state, action) => {
                    state.isLoding = false;
                    state.isError = true
                    state.isSuccess = false
                    state.message = action.error;
                })
    },


})

export default productCategorySlice.reducer;
