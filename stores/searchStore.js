import axios from 'axios';
import { defineStore } from 'pinia'
const url = 'http://admin.bolalarolami.uz/api/v2'


export const useSearchStore = defineStore('searchStore', () => {
    const router = useRouter();
    const { locale } = useI18n()

    // state
    const modal = ref(false)
    const showAll = ref(false);
    const search = ref("");
    const datas = ref(null)

    // getter

    // action
    async function getSearchData(value) {
        try {
            const response = await axios.get(`${url}/get-search?search=${value}`);
            datas.value = response.data.data.posts
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    const submitForm = () => {
        if (!search.value) return;
        const pathPrefix = locale.value == 'uz' ? '' : '/' + locale.value;
        router.push({ path: `${pathPrefix}/search/`, query: { q: search.value } });
        modal.value = false;
        getSearchData(search.value)
        search.value = '';
    };

    return {
        submitForm,
        search,
        showAll,
        modal,
        getSearchData,
        datas
    };
})