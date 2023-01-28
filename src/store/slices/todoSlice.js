import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        increment: (state, action) => {

        },
    },
});

export const { increment } = nameSlice.actions;

export default nameSlice.reducer;