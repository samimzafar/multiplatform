// src/api/axiosInstance.js
import axios from 'axios';
import { BASE_URL } from '../utils/Constants';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
axiosInstance.interceptors.request.use(
    config => {
        // Add any custom request logic here
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // Handle errors
        return Promise.reject(error);
    }
);

export default axiosInstance;
