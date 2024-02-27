import { defineStore } from 'pinia'
const url = 'http://new.bolalarolami.uz/api/v2'


export const useCategoryStore = defineStore('categoryStore', () => {
    // state
    const datas = ref()
    const loader = ref(false)
    // getter

    // action
    const getCategoryData = async (id) => {
        try {
            loader.value = true
            const res = await fetch(`${url}/get-category/${id}`);
            const data = await res.json();
            datas.value = data.data;
            loader.value = false
        } catch (err) {
            console.log(err);
        } finally {
            loader.value = false;
        }
    }



    return {
        loader,
        getCategoryData,
        datas
    };
})