import { defineStore } from 'pinia'
import { useSingleStore } from './singleStore'
const url = 'http://new.bolalarolami.uz/api/v2'

export const useTageStore = defineStore('tageStore', () => {
    const singleStore = useSingleStore()

    // state
    const datas = ref()

    // getter

    // action
    const getTagsData = async (id) => {
        try {
            singleStore.loading = true
            const res = await fetch(`${url}/get-tag/${id}`);
            const data = await res.json();
            datas.value = data.data
            singleStore.loading = false
        } catch (err) {
            console.log(err);
        }
    };



    return {
        datas,
        getTagsData
    };
})