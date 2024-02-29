import axios from 'axios';
import { defineStore } from 'pinia'
const url = 'http://admin.bolalarolami.uz/api/v2'

export const useTageStore = defineStore('tageStore', () => {

    async function getTagsData(id) {
        try {
            const response = await axios.get(`${url}/get-tag/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }


    return {
        getTagsData
    };
})