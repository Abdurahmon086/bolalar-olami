import { defineStore } from 'pinia'
import { fetchSingleData } from '@/api/post'

export const useSingleStore = defineStore('singleStore', {
    state: () => ({
        singleData: null
    }),
    actions:
    {
        setSingleData(id) {
            return new Promise((resolve, reject) => {
                fetchSingleData(id).then(res => {
                    this.singleData = res.data
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    },
    getters: {
        getSingleData() {
            return this.singleData
        }
    }
})
