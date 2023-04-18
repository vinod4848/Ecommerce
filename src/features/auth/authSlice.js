/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authservice";
const userDefaultState = {
    _id: null,
    firstName: null,
    lastName: null,
    email: null,
    mobile: null,
    token: null
}

const initialState = {
    user: userDefaultState,
    isError: false,
    isLoding: false,
    isSuccess: false,
    isMaseage: ""

}
export const login = createAsyncThunk('auth/admin-login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending,
            (state) => {
                state.isLoding = true;
            })
            .addCase(login.fulfilled,
                (state, action) => {
                    state.isLoding = false;
                    state.isSuccess = true
                    state.user = action.payload
                })
            .addCase(login.rejected,
                (state, action) => {
                    state.isLoding = false;
                    state.isError = true
                    state.isSuccess = false
                    state.user = null;
                })
    },


});

export default authSlice.reducer;