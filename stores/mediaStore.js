import { defineStore } from 'pinia'
const url = 'http://new.bolalarolami.uz/api/v2/get-videos '

export const useMediaStore = defineStore('mediaStore', () => {
    const datas = ref();
    const openToggle = ref(false)
    const activeCategory = ref(null);

    const getMediaData = async () => {
        try {
            const res = await fetch(`${url}`);
            const data = await res.json();
            datas.value = data.data
        } catch (err) {
            console.log(err);
        }
    };


    const toggleCategory = (category) => {
        activeCategory.value = (activeCategory.value === category) ? null : category;
    };

    const isActive = (category) => {
        return activeCategory.value === category;
    };

    return { datas, openToggle, getMediaData, toggleCategory, isActive }

})