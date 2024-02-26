import { defineStore } from 'pinia'
const url = 'http://new.bolalarolami.uz/api/v2'


export const useIndexStore = defineStore('indexStore', () => {
  const mainStore = useMainStore()
  // state
  const datas = ref()
  // getter

  // action
  const getIndexData = async () => {
    try {
      mainStore.loader = true
      const res = await fetch(`${url}/home/get-news-home`);
      const data = await res.json();
      datas.value = data.data;
      mainStore.loader = false
    } catch (err) {
      console.log(err);
    }
  }


  return {
    getIndexData,
    datas
  };
})