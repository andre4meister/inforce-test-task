import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import ProductView from "./ProductView";
import {useLocation} from "react-router-dom";
import {fetchProductById} from "../../store/thunks/products-thunk";
import {Spin} from "antd";

const ProductViewProvider = () => {
    const dispatch = useAppDispatch();
    const product = useAppSelector(state => state.productItem.product);

    const location = useLocation();
    const id = location.pathname.split('/')[2];

    useEffect(() => {
        dispatch(fetchProductById(id));
    },[id, dispatch])

    if (!product) return <Spin size="large" spinning={true} style={{position:"fixed", top: '50%', left: '50%'}}/>;

    return (
        <>
            <ProductView product={product}/>
        </>
    );
};

export default ProductViewProvider;