import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken } from "../Auth/authSlice";

// first => action name
// second => async function (task)

export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async (_, thunkApi) => {
        try{
            const res = await fetch('/users');
            const users = await res.json();
            return users; // fulfilled
        }catch(err){
            return thunkApi.rejectWithValue('failed to fetch users') // rejected
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async({email, password}, {dispatch, rejectWithValue, signal}) => {
        // task logic
        try{
            const res = await fetch('/api/login', {
                signal,
                method: 'POST',
                body: JSON.stringify({email, password}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(!res.ok){ // false
                return rejectWithValue("Invalid email or password!")
            }

            const data = await res.json();
            /*
                data = {
                        user: {name: '', email: '', role: ''},
                        token: 'sadasdssdsaasdasdsadsa'
                    }
            */
            localStorage.setItem('token', data.token);
            dispatch(setToken());

            // profile:
            const res1 = await fetch('/api/profile', {
                headers: {Authorization: `Bearer ${data.token}`}
            })
            const profileuser = await res1.json();


            return {data, profileuser};

        }catch(err){
            return rejectWithValue('Something went wrong!')
        }
    }
)