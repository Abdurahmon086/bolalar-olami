import { defineStore } from 'pinia'
const url = 'http://new.bolalarolami.uz/api/v2'


export const useIndexStore = defineStore('indexStore', () => {
  // state
  const datas = ref()
  // getter

  // action
  const getIndexData = async () => {
    try {
      const res = await fetch(`${url}/home/get-news-home`);
      const data = await res.json();
      datas.value = data.data;
    } catch (err) {
      console.log(err);
    }
  }


  return {
    getIndexData,
    datas
  };
})