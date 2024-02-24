import { defineStore } from 'pinia'
const url = 'http://new.bolalarolami.uz/api/v2/get-videos'

export const useMediaStore = defineStore('counter', () => {
    // const isBool = ref(false);

    // function $boolFunc() {
    //     isBool.value = !isBool.value;
    //     console.log(isBool.value);
        
    // }

    // return { isBool, $boolFunc }

     // state
  const datas = ref()
  // getter

  // action
  const getMediaData = async () => {
    try {
      const res = await fetch(`${url}/home/get-news-home`);
      const data = await res.json();
      datas.value = data.data;
    } catch (err) {
      console.log(err);
    }
  }


  return {
    getMediaData,
    datas
  };
})