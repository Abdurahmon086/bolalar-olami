import { defineStore } from 'pinia'
const url = 'http://new.bolalarolami.uz/api/v2/get-videos '

export const useMediaStore = defineStore('mediaStore', () => {
    const mainStore = useMainStore()
    const datas = ref();
    const openToggle = ref(false)
    const activeCategory = ref(null);

    const getMediaData = async () => {
        try {
            mainStore.loader = true
            const res = await fetch(`${url}`);
            const data = await res.json();
            datas.value = data.data
            mainStore.loader = false
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