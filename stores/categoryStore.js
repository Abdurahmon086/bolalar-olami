import { defineStore } from 'pinia'
import { fetchCategoryData } from '~/api/category'

export const useCategoryStore = defineStore('categoryStore', {
    state: () => ({
        categoryData: null
    }),
    actions:
    {
        setCategoryData(id) {
            return new Promise((resolve, reject) => {
                fetchCategoryData(id).then(res => {
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
