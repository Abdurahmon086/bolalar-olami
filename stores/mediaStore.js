import axios from 'axios';
import { defineStore } from 'pinia'
const url = 'http://admin.bolalarolami.uz/api/v2'

export const useMediaStore = defineStore('mediaStore', () => {
    const openToggle = ref(false)
    const activeCategory = ref(null);

    async function getMediaData() {
        try {
            const response = await axios.get(`${url}/get-videos`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    const toggleCategory = (category) => {
        activeCategory.value = (activeCategory.value === category) ? null : category;
    };

    const isActive = (category) => {
        return activeCategory.value === category;
    };

    return { openToggle, getMediaData, toggleCategory, isActive }

})