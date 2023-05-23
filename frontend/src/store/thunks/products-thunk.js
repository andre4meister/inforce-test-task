import {createAsyncThunk} from '@reduxjs/toolkit';
import {ProductsApi} from '../../services/products';
import {setProductsList} from '../productsReducer';
import {setProduct, setProductIsLoading} from "../productItemReducer";

const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async (sortOptions, thunkAPI) => {
        const response = await ProductsApi.getProducts(sortOptions.sortBy, sortOptions.sortOrder);
        if (response.status < 400) {
            thunkAPI.dispatch(setProductsList(response.data));
        }
        return response.data;
    }
)

const fetchProductById = createAsyncThunk(
    'products/productById',
    async (id, thunkAPI) => {
        const response = await ProductsApi.getProductById(id);
        if (response.status < 400) {
            thunkAPI.dispatch(setProduct(response.data));
        }
        return response.data;
    }
)

const fetchCreateProduct = createAsyncThunk(
    'products/create',
    async (body, thunkAPI) => {
        const response = await ProductsApi.createProduct(body);
        return response.data;
    }
)

const fetchUpdateProduct = createAsyncThunk(
    'products/update',
    async (updateData, thunkAPI) => {
        const response = await ProductsApi.updateProduct(updateData.productBody, updateData.productId);
        return response.data;
    }
)

const fetchDeleteProduct = createAsyncThunk(
    'products/delete',
    async (id, thunkAPI) => {
        const response = await ProductsApi.deleteProduct(id);
        return response.data;
    }
)

export {
    fetchAllProducts, fetchDeleteProduct, fetchUpdateProduct, fetchProductById, fetchCreateProduct
}