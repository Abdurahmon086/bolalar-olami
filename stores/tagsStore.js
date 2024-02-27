import { defineStore } from 'pinia'
const url = 'http://new.bolalarolami.uz/api/v2'

export const useTageStore = defineStore('tageStore', () => {
    const mainStore = useMainStore();

    // state
    const datas = ref()

    // getter

    // action
    const getTagsData = async (id) => {
        try {
            // mainStore.loader = true
            const res = await fetch(`${url}/get-tag/${id}`);
            const data = await res.json();
            datas.value = data.data
            // mainStore.loader = false
        } catch (err) {
            console.log(err);
        }
    };



    return {
        datas,
        getTagsData
    };
})