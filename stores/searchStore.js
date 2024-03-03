import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { fetchGetReqData } from '~/api/getReq';

export const useSearchStore = defineStore('searchStore', {
    state: () => ({
        searchData: null,
        modal: false,
        showAll: false,
        search: "",
    }),
    actions: {
        setSearchData(value) {
            return new Promise((resolve, reject) => {
                fetchGetReqData('/get-search?search=', value).then(res => {
                    if (res.data) {
                        console.log(res.data);
                        this.searchData = res.data;
                        resolve(res);
                    }
                }).catch(error => {
                    console.log('search error');
                    reject(error);
                });
            });
        },
        submitForm() {
            const { locale } = useI18n();
            const router = useRouter();

            if (!this.search) return;
            const pathPrefix = locale.value == 'uz' ? '' : '/' + locale.value;
            router.push({ path: `${pathPrefix}/search/`, query: { q: this.search } });
            this.modal = false;
            this.getSearchData(this.search);
            this.search = '';
        }
    },
    getters: {
        getSearchData() {
            return this.searchData
        }
    }
});