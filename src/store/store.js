import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import todoReducer from './slices/todoSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer,


        [apiSlice.reducerPath]: apiSlice.reducer,
    },

    middleware: (getDefaultMiddelware) =>
        getDefaultMiddelware()
            .concat(apiSlice.middleware),
})