import {configureStore} from '@reduxjs/toolkit'
import appReducer from "./appReducer";
import productsReducer from "./productsReducer";
import productItemReducer from "./productItemReducer";

export const store = configureStore({
    reducer: {
        app: appReducer,
        products: productsReducer,
        productItem: productItemReducer,
    },
});
