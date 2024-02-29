import { defineStore } from 'pinia'
const url = 'http://admin.bolalarolami.uz/api/v2'


export const useIndexStore = defineStore('indexStore', () => {
  // state
  const datas = ref(null)
  const loader = ref(false)
  // getter

  // action
  const getIndexData = async () => {
    try {
      loader.value = true
      const res = await fetch(`${url}/home/get-news-home`);
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
    getIndexData,
    datas
  };
})