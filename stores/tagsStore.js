import { defineStore } from 'pinia'
import { fetchTagsData } from '~/api/tags';

export const useTageStore = defineStore('tageStore', {
    state: () => ({
        tagData: null
    }),
    actions:
    {
        setTagsData(id) {
            return new Promise((resolve, reject) => {
                fetchTagsData(id).then(res => {
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
