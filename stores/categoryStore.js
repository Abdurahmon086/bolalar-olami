import { defineStore } from 'pinia'
import { fetchGetReqData } from '~/api/getReq'

export const useCategoryStore = defineStore('categoryStore', {
    state: () => ({
        categoryData: null
    }),
    actions:
    {
        setCategoryData(id) {
            return new Promise((resolve, reject) => {
                fetchGetReqData('/get-category/', id).then(res => {
                    if (res.data) {
                        this.categoryData = res.data
                        resolve(res)
                    }
                }).catch(error => {
                    console.log('caatchga kelli')
                    reject(error)
                })
            })
        }
    },
    getters: {
        getCategoryData() {
            return this.categoryData
        }
    }
})
