import { createSlice } from "@reduxjs/toolkit";

// will fetch data from api:
const userState = {
    users: []
}

const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        }
    }
})

export const {setUsers} = userSlice.actions;
export default userSlice.reducer;