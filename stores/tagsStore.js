import { defineStore } from 'pinia'
import { fetchGetReqData } from '~/api/getReq';
import { fetchTagsData } from '~/api/tags';

export const useTageStore = defineStore('tageStore', {
    state: () => ({
        tagData: null
    }),
    actions:
    {
        setTagsData(id) {
            return new Promise((resolve, reject) => {
                fetchGetReqData('/get-tag/', id).then(res => {
                    if (res.data) {
                        this.tagData = res.data
                        resolve(res)
                    }
                }).catch(error => {
                    console.log('tags error')
                    reject(error)
                })
            })
        }
    },
    getters: {
        getTagsData() {
            return this.tagData
        }
    }
})
