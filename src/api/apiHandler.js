// src/api/apiHandler.js
import axiosInstance from './axiosInstance';

const apiHandler = {
    get: async (url, params) => {
        try {
            const response = await axiosInstance.get(url, { params });
            return response.data;
        } catch (error) {
            console.error("🚀 ~ apiHandler.get ~ error:", error);
            throw error;
        }
    },
    post: async (url, data) => {
        try {
            const response = await axiosInstance.post(url, data);
            return response.data;
        } catch (error) {
            console.error("🚀 ~ apiHandler.post ~ error:", error);
            throw error;
        }
    },
    put: async (url, data) => {
        try {
            const response = await axiosInstance.put(url, data);
            return response.data;
        } catch (error) {
            console.error("🚀 ~ apiHandler.put ~ error:", error);
            throw error;
        }
    },
    delete: async (url) => {
        try {
            const response = await axiosInstance.delete(url);
            return response.data;
        } catch (error) {
            console.error("🚀 ~ apiHandler.delete ~ error:", error);
            throw error;
        }
    },
};

export default apiHandler;
