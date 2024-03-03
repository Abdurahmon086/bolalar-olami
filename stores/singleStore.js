import { defineStore } from 'pinia'
import { fetchSingleData } from '@/api/post'
import { fetchGetReqData } from '~/api/getReq'

export const useSingleStore = defineStore('singleStore', {
    state: () => ({
        singleData: null
    }),
    actions:
    {
        setSingleData(id) {
            return new Promise((resolve, reject) => {
                fetchGetReqData('/get-post/', id).then(res => {
                    if (res.data) {
                        this.singleData = res.data
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
        getSingleData() {
            return this.singleData
        }
    }
})
