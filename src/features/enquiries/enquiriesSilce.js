import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import enquirieService from "./enquiriesService";

export const getAllenqs = createAsyncThunk('enq/getAllenq', async (thunkAPI) => {
    try {
        return await enquirieService.getenquiries()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const initialState = {
    enquiries: [],
    isError: false,
    isLoding: false,
    isSuccess: false,
    message: ""
}
export const enquirieSlice = createSlice({
    name: "enquiries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllenqs.pending,
            (state) => {
                state.isLoding = true;
            })
            .addCase(getAllenqs.fulfilled,
                (state, action) => {
                    state.isLoding = false;
                    state.isError = false
                    state.isSuccess = true
                    state.enquiries = action.payload
                })
            .addCase(getAllenqs.rejected,
                (state, action) => {
                    state.isLoding = false;
                    state.isError = true
                    state.isSuccess = false
                    state.message = action.error;
                })
    },


})

export default enquirieSlice.reducer;