import { createSlice } from "@reduxjs/toolkit";

const initState = {
    count: 0,
    age: 0,
    // ..
}

const CounterSlice = createSlice({
    name: 'counter', // counter/increment
    initialState: initState,
    reducers: {
        increment: (state) => { // action => data sent with dispatch, type, payload
            state.count += 1;
        },

        decrement: (state) => {
            state.count -= 1;
        },

        incrementByAmount: (state, action) => {
            state.count += action.payload.x
        },

        reset: (state) => {
            state.count = 0;
        }

    }
})

export const {increment, decrement, incrementByAmount, reset} = CounterSlice.actions;
export default CounterSlice.reducer;
