import { createSlice } from "@reduxjs/toolkit";

const themeState = {
    mode: 'light'
}

const themeSlice = createSlice({
    name: 'theme', // used for generating action type => theme/toggle
    initialState: themeState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        }
    }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;