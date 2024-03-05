import { defineStore } from 'pinia'
import { fetchGetReqData } from '~/api/getReq';


export const useMediaStore = defineStore('mediaStore', {
    state: () => ({
        videoData: null,
        openToggle: false,
        activeCategory: null
    }),
    actions:
    {
        setMediaData() {
            return new Promise((resolve, reject) => {
                fetchGetReqData('/get-videos').then(res => {
                    if (res.data) {
                        this.videoData = res.data
                        resolve(res)
                    }
                }).catch(error => {
                    console.log('caatchga kelli')
                    reject(error)
                })
            })
        },
        toggleCategory(category) {
            this.activeCategory = (this.activeCategory === category) ? null : category;
        },
        isActive(category) {
            return this.activeCategory === category;
        }
    },
    getters: {
        getMediaData() {
            return this.videoData
        }
    }
})
