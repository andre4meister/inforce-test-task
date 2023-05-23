import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: false,
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (config.headers) {
            config.headers['Content-Type'] = 'application/json';
        }
        return config;
    },
);