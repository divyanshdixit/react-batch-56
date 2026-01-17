import { createSlice } from "@reduxjs/toolkit";

const cartState = {
    items: [],
    loading: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartState,
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        removeItems: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        clear: (state) => {
            state.items = [];
        },
        setLoading: (state) => {
            state.loading = true
        }
    }
})

export const {addItems, removeItems, clear, setLoading} = cartSlice.actions;
export default cartSlice.reducer;