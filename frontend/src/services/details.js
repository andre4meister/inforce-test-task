import {axiosInstance} from './axios';

export class DetailsApi {
    static async getDetailsByProductId(productId) {
        try {
            const response = await axiosInstance.get(`details/${productId}`);
            return response;
        } catch (e) {
            return e;
        }
    }

    static async createDetail(details) {
        try {
            const response = await axiosInstance.post('details', details);
            return response;
        } catch (e) {
            return e;
        }
    }

    static async updateDetail(detailsBody, detailsId) {
        try {
            const response = await axiosInstance.put(`details/${detailsId}`, detailsBody);
            return response;
        } catch (e) {
            return e;
        }
    }

    static async deleteDetail(detailsId) {
        try {
            const response = await axiosInstance.delete(`details/${detailsId}`);
            return response;
        } catch (e) {
            return e;
        }
    }
}