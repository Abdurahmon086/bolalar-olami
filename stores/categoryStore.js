import axios from 'axios';
import { defineStore } from 'pinia'
const url = 'http://admin.bolalarolami.uz/api/v2'


export const useCategoryStore = defineStore('categoryStore', () => {

    // action
    async function getCategoryData(id) {
        try {
            const response = await axios.get(`${url}/get-category/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }


    return {
        getCategoryData,
    };
})