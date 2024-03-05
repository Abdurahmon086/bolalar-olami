import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { fetchGetReqData } from '~/api/getReq';

export const useSearchStore = defineStore('searchStore', () => {
    const router = useRouter();
    const { locale } = useI18n()

    // state
    const modal = ref(false)
    const showAll = ref(false);
    const search = ref("");
    const searchData = ref(null)

    // getter
    const getSearchData = computed(() => {
        return searchData.value
    })

    // action

    const setSearchData = async (value) => {
        return new Promise((resolve, reject) => {
            fetchGetReqData('/get-search?search=', value).then(res => {
                if (res.data) {
                    searchData.value = res.data.posts;
                    resolve(res);
                }
            }).catch(error => {
                console.log('search error');
                reject(error);
            });
        });
    }

    const submitForm = () => {
        if (!search.value) return;
        const pathPrefix = locale.value == 'uz' ? '' : '/' + locale.value;
        router.push({ path: `${pathPrefix}/search/`, query: { q: search.value } });
        modal.value = false;
        setSearchData(search.value)
        search.value = '';
    };

    return {
        submitForm, setSearchData,
        search,
        showAll,
        modal,
        getSearchData,
    };
})