import React, {useEffect, useState} from 'react';
import ListProductsView from "./ListProductsView";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchAllProducts, fetchCreateProduct, fetchDeleteProduct} from "../../store/thunks/products-thunk";

const ListProductsProvider = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.products.productsList);

    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('ASC');

    const handleCreateProduct = (body) => {
        return dispatch(fetchCreateProduct(body)).then(() => {
            dispatch(fetchAllProducts({sortBy, sortOrder}));
        });
    }
    const handleDeleteProduct = (id) => {
        return dispatch(fetchDeleteProduct(id)).then(() => {
            dispatch(fetchAllProducts({sortBy, sortOrder}));
        });
    }

    useEffect(() => {
        dispatch(fetchAllProducts({sortBy, sortOrder}));
    }, [dispatch, sortBy, sortOrder]);

    return (
        <>
            <ListProductsView products={products}
                              sortBy={sortBy}
                              setSortBy={setSortBy}
                              sortOrder={sortOrder}
                              setSortOrder={setSortOrder}
                              handleCreateProduct={handleCreateProduct}
                              handleDeleteProduct={handleDeleteProduct}
            />
        </>
    );
};

export default ListProductsProvider;