import { defineStore } from 'pinia'
import { fetchHomeData } from '~/api/home'

export const useIndexStore = defineStore('indexStore', {
  state: () => ({
    homeData: null
  }),
  actions:
  {
    setHomeData() {
      return new Promise((resolve, reject) => {
        fetchHomeData().then(res => {
          console.log(res);
          this.homeData = res.data
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  getters: {
    getHomeData() {
      return this.homeData
    }
  }
})
// export const useIndexStore = defineStore('indexStore', () => {

//   // action
//   async function getIndexData() {
//     try {
//       const response = await axios.get(`${url}/home/get-news-home`);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }

//   return {
//     getIndexData
//   };
// })