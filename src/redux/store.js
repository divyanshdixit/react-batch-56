import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/Counter/counterSlice';
import cartReducer from '../redux/Cart/cartSlice';
import themeReducer from '../redux/Theme/themeSlice';
import userReducer from '../redux/UserApiSlice/userSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        theme: themeReducer,
        user: userReducer
    }
})