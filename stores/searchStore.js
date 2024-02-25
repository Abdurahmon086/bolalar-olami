const url = 'http://new.bolalarolami.uz/api/v2'
import { defineStore } from 'pinia'
import { useSingleStore } from './singleStore'


export const useSearchStore = defineStore('searchStore', () => {
    const router = useRouter();
    const singleStore = useSingleStore()
    const rout = useRoute()

    // state
    const datas = ref([])
    const modal = ref(false)
    const showAll = ref(false);
    const search = ref("");

    // getter

    // action
    const getSearchData = async (value) => {
        try {
            singleStore.loading = true
            const res = await fetch(`${url}/get-search?search=${value.value == '' ? rout.query.q : value.value}`);
            const data = await res.json();
            datas.value = data.data.posts
            singleStore.loading = false
        } catch (err) {
            console.log(err);
        }
    };
    getSearchData(search)
    const submitForm = () => {
        if (!search.value) return;
        router.push({ path: "/search/", query: { q: search.value } });
        modal.value = false
        getSearchData(search)
        search.value = ''
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