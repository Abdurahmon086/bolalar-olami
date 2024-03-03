import { defineStore } from 'pinia'
import { fetchGetReqData } from '~/api/getReq'

export const useIndexStore = defineStore('indexStore', {
  state: () => ({
    homeData: null
  }),
  actions:
  {
    setHomeData() {
      return new Promise((resolve, reject) => {
        fetchGetReqData('/home/get-news-home').then(res => {
          if (res.data) {
            this.homeData = res.data
            resolve(res)
          }
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
