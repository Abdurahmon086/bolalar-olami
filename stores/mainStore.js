import { defineStore } from 'pinia'
import { fetchGetReqData } from '~/api/getReq';

export const useMainStore = defineStore('mainStore', {
    state: () => ({
        mainData: [],
        auth: false,
        auths: false,
        authed: false,
        imgModal: false
    }),

    getters: {
        navbarM() {
            const map = {};
            const newArr = [];

            this.mainData.forEach((element) => {
                map[element.id] = element;
                element.child = [];
            });

            this.mainData.forEach((element) => {
                if (element.parent_id !== null) {
                    map[element.parent_id].child.push(element);
                } else {
                    newArr.push(element);
                }
            });

            return newArr;
        }
    },
    actions: {
        setMainData() {
            return new Promise((resolve, reject) => {
                fetchGetReqData('/resources/get-sections').then(res => {
                    if (res.data) {
                        this.mainData = res.data
                        resolve(res)
                    }
                }).catch(error => {
                    console.log('caatchga kelli')
                    reject(error)
                })
            })
        },

        modalTogle(value) {
            if (value) {
                this.auth = false;
                this.auths = false;
            }
        },
    }
});
