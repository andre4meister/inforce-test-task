import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: null,
    productIsLoading: false,
    productHasError: false,
};

export const productItem = createSlice({
    name: 'productItem',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
        setProductHasError: (state, action) => {
            state.productHasError = action.payload;
        },
        setProductIsLoading: (state, action) => {
            state.productIsLoading = action.payload;
        },
    },
})

export const { setProduct, setProductHasError, setProductIsLoading} = productItem.actions;

export default productItem.reducer;