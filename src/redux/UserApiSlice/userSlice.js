import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../services/thunks";

// will fetch data from api:
const userState = {
    users: [],
    posts: [],
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        setPosts : (state, action) => {
            state.posts.push(action.payload)
        }
    }, // user/setUsers
    // user/fetchUsers/pending
    // user/fetchUsers/fulfilled
    // user/fetchUsers/rejected

    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong!'
        })
    }
})

export const {setUsers, setPosts} = userSlice.actions;
export default userSlice.reducer;