import { defineStore } from 'pinia'
const url = 'http://new.bolalarolami.uz/api/v2'


export const useSingleStore = defineStore('singleStore', () => {
    // state
    const datas = ref()
    const loading = ref(false)
    // getter

    // action
    const getSingleData = async (id) => {
        try {
            loading.value = true
            const res = await fetch(`${url}/get-post/${id}`);
            const data = await res.json();
            datas.value = data.data;
            loading.value = false
        } catch (err) {
            console.log(err);
        }
    }


    return {
        getSingleData,
        datas,
        loading
    };
})