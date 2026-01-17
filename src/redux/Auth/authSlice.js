import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../services/thunks";

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        logout: (state) => {
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true
        })

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user
            state.token = action.payload.token
        })

        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong!'
        })
    }
})

export const {setToken, logout} = authSlice.actions;
export default authSlice.reducer;