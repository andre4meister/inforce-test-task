import {axiosInstance} from './axios';

export class ProductsApi {
    static async getProductById(id) {
        try {
            const response = await axiosInstance.get(`products/${id}`);
            return response;
        } catch (e) {
            return e;
        }
    }

    static async getProducts(sortBy, sortOrder) {
        try {
            const response = await axiosInstance.get(
                `products?sortBy=${sortBy}&sortOrder=${sortOrder}`,
            );
            return response;
        } catch (e) {
            return e;
        }
    }

    static async createProduct(product) {
        try {
            const response = await axiosInstance.post('products', product);
            return response;
        } catch (e) {
            return e;
        }
    }

        static async updateProduct(productBody, productId) {
        try {
            const response = await axiosInstance.put(`products/${productId}`, productBody);
            return response;
        } catch (e) {
            return e;
        }
    }

    static async deleteProduct(productId) {
        try {
            const response = await axiosInstance.delete(`products/${productId}`);
            return response;
        } catch (e) {
            return e;
        }
    }
}

