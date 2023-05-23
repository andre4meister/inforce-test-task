import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productsList: [],
    sortedBy: 'name',
    sortedOrder: 'asc',
};

export const app = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsList: (state, action) => {
            state.productsList = action.payload;
        },
        setSortedBy: (state, action) => {
            state.sortedBy = action.payload;
        },
        setSortedOrder: (state, action) => {
            state.sortedOrder = action.payload;
        }
    },
})

export const { setProductsList, setSortedBy, setSortedOrder } = app.actions;

export default app.reducer;