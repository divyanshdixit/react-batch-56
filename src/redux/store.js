import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/Counter/counterSlice';
import cartReducer from '../redux/Cart/cartSlice';
import themeReducer from '../redux/Theme/themeSlice';
import userReducer from '../redux/UserApiSlice/userSlice';
import authReducer from '../redux/Auth/authSlice';

import { todoApi } from "./services/todoApi";
import { loggerMiddleware } from "./middlewares/logger";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        theme: themeReducer,
        user: userReducer,
        auth: authReducer,
        [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware, loggerMiddleware) 
})