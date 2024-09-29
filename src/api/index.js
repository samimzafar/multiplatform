// src/api/index.js
import apiHandler from './apiHandler';

const getAllProducts = async () => {
    try {
        const data = await apiHandler.get('/');
        return data;
    } catch (error) {
        console.log("🚀 ~ getAllProducts ~ error:", error);
    }
};

export const ApiMethods = {
    getAllProducts,
    // You can add more specific API calls here if needed
};
