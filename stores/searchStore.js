const url = 'http://new.bolalarolami.uz/api/v2'
import { defineStore } from 'pinia'
import { useSingleStore } from './singleStore'


export const useSearchStore = defineStore('searchStore', () => {
    const router = useRouter();
    const mainStore = useMainStore();
    
    const rout = useRoute()
    const { locale } = useI18n()

    // state
    const datas = ref([])
    const modal = ref(false)
    const showAll = ref(false);
    const search = ref("");

    // getter

    // action
    const getSearchData = async (value) => {
        try {
            mainStore.loader = true
            const res = await fetch(`${url}/get-search?search=${value.value == '' ? rout.query.q : value.value}`);
            const data = await res.json();
            datas.value = data.data.posts
            mainStore.loader = true
        } catch (err) {
            console.log(err);
        }
    };
    getSearchData(search)
    const submitForm = () => {
        if (!search.value) return;
        const pathPrefix = locale.value == 'uz' ? '' : '/' + locale.value;
        router.push({ path: `${pathPrefix}/search/`, query: { q: search.value } });
        modal.value = false;
        getSearchData(search);
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