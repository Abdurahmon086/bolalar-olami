import { defineStore } from 'pinia'
const url = 'http://new.bolalarolami.uz/api/v2/get-videos '

export const useMediaStore = defineStore('mediaStore', () => {
    const datas = ref();
    const openToggle = ref(false)
    const activeCategory = ref(null);
    const loader = ref(false)

    const getMediaData = async () => {
        try {
            loader.value = true
            const res = await fetch(`${url}`);
            const data = await res.json();
            datas.value = data.data
            loader.value = false
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

    return { datas, openToggle, loader, getMediaData, toggleCategory, isActive }

})