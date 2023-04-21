import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandService from "./brandService";

export const getBrands = createAsyncThunk('brand/getAllbrand', async (thunkAPI) => {
    try {
        return await brandService.getBrands()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const initialState = {
    brands: [],
    isError: false,
    isLoding: false,
    isSuccess: false,
    message: ""
}
export const brandSlice = createSlice({
    name: "brands",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBrands.pending,
            (state) => {
                state.isLoding = true;
            })
            .addCase(getBrands.fulfilled,
                (state, action) => {
                    state.isLoding = false;
                    state.isError = false
                    state.isSuccess = true
                    state.brands = action.payload
                })
            .addCase(getBrands.rejected,
                (state, action) => {
                    state.isLoding = false;
                    state.isError = true
                    state.isSuccess = false
                    state.message = action.error;
                })
    },


})

export default brandSlice.reducer;