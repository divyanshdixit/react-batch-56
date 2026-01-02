import { createSlice } from "@reduxjs/toolkit";

const cartState = {
    items: []
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
        }
    }
})

export const {addItems, removeItems, clear} = cartSlice.actions;
export default cartSlice.reducer;