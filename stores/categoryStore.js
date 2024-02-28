import axios from 'axios';
import { defineStore } from 'pinia'
const url = 'http://new.bolalarolami.uz/api/v2'


export const useCategoryStore = defineStore('categoryStore', () => {

    // action
    async function getCategoryData(id) {
        try {
            console.log(id);
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