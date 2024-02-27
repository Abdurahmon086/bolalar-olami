import { defineStore } from 'pinia'
const url = 'http://new.bolalarolami.uz/api/v2'


export const useSingleStore = defineStore('singleStore', () => {
    const mainStore = useMainStore();
    // state
    const datas = ref()
    const loader = ref(false)
    // getter

    // action
    const getSingleData = async (id) => {
        try {
            // loader.value = true
            const res = await fetch(`${url}/get-post/${id}`);
            const data = await res.json();
            datas.value = data.data;
            // loader.value = false
        } catch (err) {
            console.log(err);
        }
    }


    return {
        getSingleData,
        datas,
        loader
    };
})