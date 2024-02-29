import axios from 'axios';
import { defineStore } from 'pinia'
const url = 'http://new.bolalarolami.uz/api/v2'


export const useSingleStore = defineStore('singleStore', () => {

    // action
    async function getSingleData(id) {
        try {
            const response = await axios.get(`${url}/get-post/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    return {
        getSingleData,
    };
})